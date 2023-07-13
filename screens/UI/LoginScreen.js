import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, ToastAndroid, Alert } from 'react-native';
import { CheckBox, Dialog } from '@rneui/base';
import ButtonComponent from '../components/Button.component';
import FormField from '../components/FormField.component';
import HiperLinkComponent from '../components/Hiperlink.component';
import Authentication from '../../services/Authentication';
import Validations from '../../utils/Validation';
 
export default function LoginScreen({navigation}){
    const [isSelected, setCheck1 ] = useState(false);
    const [inputEmail,setEmail] = useState(''); 
    const [inputPassword,setPassword] = useState(''); 
    const [dialogState,setDialogState] = useState(false);
    const [error,setError] = useState(false);
    const [errorQuery,setErrorQuery] = useState(false);
    const [ userBlock, setUserBlock ] = useState(false);

    const onPress = () => {

        if (!error) {
            let stateError = false;
            setDialogState(true);
            const login = Authentication.login(inputEmail,inputPassword,isSelected).then(
               (response)=>{
                stateError = !response.res;
                if (!stateError){
                    //ToastAndroid.show(`${response.mensaje}`,ToastAndroid.SHORT);
                    navigation.navigate('HomeUser');
                }else{
                    if(response)
                    ToastAndroid.show(`${response.mensaje}`,ToastAndroid.SHORT);
                }
                setErrorQuery(stateError);
               }
            ).catch(
                error => {setErrorQuery(true); ToastAndroid.show(`${error}`,ToastAndroid.SHORT) }
            ).finally(
                () => {
                    setDialogState(false);
                }
            )
        }
    };

    const onPressVerify = () => {
        Authentication.emailNoVerified(inputEmail).then((value) => {
            if (value) {
                if (value.res) {
                    ToastAndroid.show(`${value.mensaje}`,ToastAndroid.SHORT);
                    const datos = { email: inputEmail };
                    navigation.navigate('EmailConfirm',datos);
                }else {
                    onPress();
                }
            } else {
                ToastAndroid.show(`Ocurrio un error intentelo mas tarde`,ToastAndroid.SHORT);
            }
        }).catch((error)=> {
            ToastAndroid.show(`${error}}`,ToastAndroid.SHORT);
        });
    }

    return (
        <View style={styles.mainContainer}>
            <View>
                <Text style={styles.title}>Inicio de Sesión</Text>
            </View>

            <View style={styles.inputContainer} >
              <View style={styles.fieldContainer} >
                <FormField labelText="Correo electronico" placeholderText="Correo electronico" defaultValue={inputEmail} onChangeText={ newEmail=>{setEmail(newEmail); setError(!Validations.validateEmail(newEmail))}} />
              </View>
              <View style={styles.fieldContainer} >
                <FormField labelText="Contraseña" placeholderText="Contraseña" secureTextEntry={true} defaultValue={inputPassword} onChangeText={ newEmail=>setPassword(newEmail)} />
              </View>
              <View style={styles.fieldContainer} >
                <CheckBox center onPress={() => setCheck1(!isSelected)}
                    checked={isSelected}
                    title={"mantener conectado"}
                    checkedColor='black'
                    containerStyle={{backgroundColor:'rgba(, , , 0.0)'}}
                /> 
              </View>
            </View>
            { dialogState &&
            <Dialog overlayStyle={{backgroundColor:'white'}} isVisible={true} >
                   <Dialog.Loading />
            </Dialog>
            }
            <View style={styles.routeContainer}>
                { (error || errorQuery ) &&
                          <View>
                            <Text style={{textAlign:'center', color:'red'}}>Correo o contraseña incorrectos</Text>
                          </View>
                }
                <ButtonComponent onPress={onPressVerify} fontColor="white" text="Iniciar Sesion"/>
                <View style={styles.loginLinkContainer}>
                    <Text style={styles.textContainer} >No tienes una cuenta?,</Text>
                    <HiperLinkComponent onPress={()=>{navigation.navigate("Registrate")}} textLink=" registrate"/>
                </View>
            </View>
        </View>
    );


}




const styles = new StyleSheet.create({
    title:{
        fontSize:30,
        marginBottom:10,
        fontWeight:'bold'
    },
    mainContainer:{
        display:'flex',
        alignItems:'center',
        paddingRight:15,
        paddingLeft:15,
        paddingBottom:60,
        paddingTop:60,
        height:'100%',
    }, 
    inputContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'100%'
    },
    fieldContainer:{
        display:'flex',
        width:'100%',
        marginBottom:5
    },
    text:{
        marginBottom:5,
        marginLeft:5,
    },
    textInput:{
        backgroundColor:'white',
        color:'black',
        marginBottom:12,
        paddingTop:3,
        paddingBottom:2,
        paddingLeft:10,
        borderColor:'grey',
        borderWidth:1,
        borderRadius:8,
    },
    routeContainer:{
        width:'100%',
        display:'flex',
        textAlign:'center'
    },
    buttonContainer:{
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'green',
        borderRadius:15,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,

    },

    textButton: {
        fontSize: 14,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.7,
        color: 'white',
        padding:0,
        margin:0
      },
    textContainer:{
        textAlign:'center',
        display:'flex',
    },

    loginLinkContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        marginTop:10,
    },
    hiperLinkContainer:{
        color:'blue'
    },

});