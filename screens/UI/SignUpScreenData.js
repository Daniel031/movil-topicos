import * as React from 'react';
import {  View ,Image , StyleSheet,  ScrollView } from 'react-native';
import ButtonComponent from '../components/Button.component';
import FormField from '../components/FormField.component';
import FormFieldDisabled from '../components/FormFieldDisabled.component';
import { useState } from 'react';

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
    
    return (
        <View style={styles.mainContainer}> 
            <View style={styles.scrollContainer}>
                <ScrollView>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={{uri:foto}} />
                    </View> 
                    <FormFieldDisabled data={properties()}/>
                    <FormField labelText="Nombre de usuario" placeholderText="Nombre de usuario"/>
                    <FormField labelText="Correo electronico" placeholderText="Correo electronico"/>
                    <FormField labelText="Contraseña" placeholderText="Contraseña"/>
                    <FormField labelText="Confirmar contraseña" placeholderText="Confirmar contraseña"/>
                    <FormField labelText="Direccion actual" placeholderText="Direccion actual"/>
                </ScrollView>
            </View>
            <View style={styles.buttonContainer}>
               <ButtonComponent fontColor="white" text="Guardar Datos" /> 
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