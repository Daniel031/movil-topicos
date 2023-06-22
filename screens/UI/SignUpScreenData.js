import * as React from 'react';
import {  View ,Image , StyleSheet,  ScrollView, Text, ToastAndroid } from 'react-native';
import ButtonComponent from '../components/Button.component';
import FormField from '../components/FormField.component';
import FormFieldDisabled from '../components/FormFieldDisabled.component';
import { useState } from 'react';
import Validations from '../../utils/Validation';
import Authentication from '../../services/Authentication';

export default function SignUpDataScreen({route,navigation}){

    const { ci, nombre, apellidos, sexo, fecha_nacimiento ,foto } = route.params;
    const [inputCi , setInputCi] = useState(`${ci}`);
    const [inputNombre , setInputNombre] = useState(`${nombre}`);
    const [inputFechaNacimiento , setInputFechaNacimiento] = useState(`${apellidos}`);
    const [inputSexo , setInputSexo] = useState(`${fecha_nacimiento}`);
    const [inputDireccion , setInputDireccion] = useState('');
    const [inputUsername , setInputUsername] = useState('');
    const [inputEmail , setInputEmail] = useState('');
    const [inputPassword , setInputPassword] = useState('');
    const [inputPasswordConfirm , setInputPasswordConfirm] = useState('');
    const [passwordEquals , setpasswordEquals] = useState(true);
    const [validatePassword , setValidatePassword] = useState(true);
    const [emailIncorrect , setEmailIncorrect] = useState(false);

    const properties = () => [
        {
            text:'Nombre',
            value:nombre
        },
        {
            text:'Apellidos',
            value:apellidos
        },
        {
            text:'Carnet de Identidad',
            value:ci
        },
        {
            text:'Sexo',
            value:sexo==1?'Masculino':'Femenino'
        },
    ];

    const saveUser = () => {
        if (!filledFields()){
            ToastAndroid.show(`Debe llenar los campos primero`,ToastAndroid.SHORT);
        } else {
            if (emailIncorrect || !validatePassword || !passwordEquals){
                ToastAndroid.show(`Ingrese los datos en formato correcto`,ToastAndroid.SHORT);
            } else {
                Authentication.signUp(inputEmail,inputUsername,inputPassword).then((value) => {
                    if (value) {
                        if (value.res){
                            ToastAndroid.show(`${value.mensaje}`,ToastAndroid.SHORT);
                            const datos = {email: inputEmail}
                            navigation.navigate('EmailConfirm',datos);
                        }else {
                            ToastAndroid.show(`Error ${value.mensaje}`,ToastAndroid.SHORT);
                        }
                    } else {
                        ToastAndroid.show(`Ocurrio un error intentelo mas tarde ${value}`,ToastAndroid.SHORT);
                    }
                }).catch((error) => {
                    ToastAndroid.show(`${error}`,ToastAndroid.SHORT);
                });
            }
        }

    };

    const verifyPassword = (newText) => {
        setpasswordEquals(newText === inputPasswordConfirm);
        setValidatePassword(Validations.validatePassword(inputPassword));
    }

    const filledFields = () => {
        return !(inputUsername === '' || inputPasswordConfirm === '' || inputPassword==='' || inputEmail === '');
    };
    
    return (
        <View style={styles.mainContainer}> 
            <View style={styles.scrollContainer}>
                <ScrollView>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={{uri:foto}} />
                    </View> 
                    <FormFieldDisabled data={properties()}/>
                    <FormField labelText="Nombre de usuario" placeholderText="Nombre de usuario" defaultValue={inputUsername} onChangeText ={ newText => setInputUsername(newText)}/>
                    <FormField labelText="Correo electronico" placeholderText="Correo electronico" defaultValue={inputEmail} onChangeText={newText => {setInputEmail(newText); setEmailIncorrect(!Validations.validateEmail(newText)); }}/>
                    {
                        emailIncorrect && <Text style={{color: 'red'}}>Debe ser un correo valido</Text>
                    }
                    <FormField labelText="Contraseña" placeholderText="Contraseña" secureTextEntry = {true} defaultValue={inputPassword} onChangeText={newText=>{setInputPassword(newText); verifyPassword(newText);} }/>
                    {
                        !validatePassword && <Text style={{color: 'red'}}>Debe tener por lo menos 8 characteres ,mayusculas,minusculas y numeros</Text>
                    }
                    <FormField labelText="Confirmar contraseña" placeholderText="Confirmar contraseña"  secureTextEntry = {true} defaultValue={inputPasswordConfirm} onChangeText={newText => {setInputPasswordConfirm(newText); setpasswordEquals(newText === inputPassword);}} />
                    {
                        !passwordEquals && <Text style={{color: 'red'}}>La contraseña no coincide</Text>
                    }
                </ScrollView>
            </View>
            <View style={styles.buttonContainer}>
               <ButtonComponent onPress={saveUser} fontColor="white" text="Guardar Datos" /> 
            </View>
        </View>
    );
}



const styles = new StyleSheet.create({
    mainContainer:{
        display:'flex',
        alignItems:'center',
        paddingRight:20,
        paddingLeft:20,
        paddingTop:60,
        paddingBottom:20,
        height:'100%',
        justifyContent:'flex-end'
    }, 
    scrollContainer:{
        display:'flex',
        width:'100%',
        marginTop:20,
        marginBottom:10
    }, 
    imageContainer:{
        display:'flex',
        alignItems:'center',
        marginBottom:15
    },
    image:{
        height:120,
        width:120,
        borderRadius:115
    },
});