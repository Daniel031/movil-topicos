import * as React from 'react';
import { useState } from 'react';
import { View ,TextInput,Text, StyleSheet, Pressable} from 'react-native';
import { CheckBox } from '@rneui/base';

export default function LoginScreen({navigation}){
    const [isSelected, setCheck1 ] = useState(false);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.inputContainer} >
              <View style={styles.fieldContainer} >
                <Text style={styles.text}>Correo Electronico</Text>
                <TextInput style={styles.textInput} placeholder='Correo Electronico' />
              </View>
              <View style={styles.fieldContainer} >
                <Text style={styles.text}>Contraseña</Text>
                <TextInput  style={styles.textInput}  placeholder='Correo Electronico' />
              </View>
              <View style={styles.fieldContainer} >
                <CheckBox center onPress={() => setCheck1(!isSelected)}
                    checked={isSelected}
                    title={"mantener conectado"} style={styles.inputCheckBox}
                /> 
              </View>
            </View>
            <View style={styles.routeContainer}>
                <Pressable onPress={()=>{navigation.navigate('Login')}} 
    style={({ pressed }) => [
        styles.buttonContainer,
        {
          backgroundColor: pressed
            ? `#006400`
            : 'green'
        },
        
      ]}>
    <Text style={styles.textButton}>Iniciar Sesion</Text>
    </Pressable>
                <View style={styles.loginLinkContainer}>
                    <Text style={styles.textContainer} >No tienes una cuenta?,</Text>
                    <Pressable onPress={()=>{navigation.navigate('SignUp')}} 
                            style={({ pressed }) => [
                                    {
                                        backgroundColor:pressed?'rgba(52, 52, 52, 0.2)':'rgba(52, 52, 52, 0.0)'
                                    },
                    ]}>
                        <Text style={styles.hiperLinkContainer}>
                            Registrate
                        </Text>
                    </Pressable> 

                </View>
            </View>
        </View>
    );
}


const styles = new StyleSheet.create({
    mainContainer:{
        display:'flex',
        alignItems:'center',
        paddingRight:15,
        paddingLeft:15,
        paddingBottom:60,
        paddingTop:60,
        height:'100%'
    }, 
    inputContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'100%'
    },
    fieldContainer:{
        display:'flex',
        width:'100%'
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
    inputCheckBox:{
        backgroundColor:'red'
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