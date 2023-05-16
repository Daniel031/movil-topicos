import * as React from 'react';
import {  View ,Image , StyleSheet, Pressable, ScrollView ,Text, TextInput } from 'react-native';

export default function SignUpDataScreen({navigation}){
    return (
        <View style={styles.mainContainer}> 
            <View style={styles.scrollContainer}>
                <ScrollView>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={require('./../assets/images/user.jpeg')} />
                    </View> 
                    <View>
                        <Text style={styles.text}>Nombre</Text>
                        <TextInput style={[styles.textInput,styles.textInputDisable]} value="Juan Carlos" editable={false} selectTextOnFocus={false} underlineColorAndroid='transparent'/>
                    </View>
                    <View>
                        <Text style={styles.text}>Apellido</Text>
                        <TextInput style={[styles.textInput,styles.textInputDisable]} value="Cruz Pereira" editable={false} selectTextOnFocus={false} underlineColorAndroid='transparent'/>
                    </View>
                    <View>
                        <Text style={styles.text} >Carnet de Identidad</Text>
                        <TextInput style={[styles.textInput,styles.textInputDisable]} value="8255***1" editable={false} selectTextOnFocus={false} underlineColorAndroid='transparent'/>
                    </View>
                    <View>
                        <Text style={styles.text}>Telefono</Text>
                        <TextInput style={[styles.textInput,styles.textInputDisable]} value="60045581" editable={false} selectTextOnFocus={false} underlineColorAndroid='transparent'/>
                    </View>
                    <View>
                        <Text style={styles.text}>Direccion</Text>
                        <TextInput style={[styles.textInput,styles.textInputDisable]} value="Calle los olmos #32" editable={false} selectTextOnFocus={false} underlineColorAndroid='transparent'/>
                    </View>
                    <View>
                        <Text style={styles.text} >Nombre de usuario</Text>
                        <TextInput style={styles.textInput} placeholder='Nombre de usuario'/>
                    </View>
                    <View>
                        <Text style={styles.text} >Correo electronico</Text>
                        <TextInput style={styles.textInput} placeholder='Correo electronico'/>
                    </View>
                    <View>
                        <Text style={styles.text} >Contraseña</Text>
                        <TextInput style={styles.textInput} placeholder='Contraseña'/>
                    </View>
                    <View>
                        <Text style={styles.text} >Confirmar contraseña</Text>
                        <TextInput style={styles.textInput} placeholder='Confirmar contraseña'/>
                    </View>
                    <View>
                        <Text style={styles.text} >Direccion actual</Text>
                        <TextInput style={styles.textInput} placeholder='Direccion actual'/>
                    </View>
                    <View>
                        <Text style={styles.text} >Longitud</Text>
                        <TextInput style={styles.textInput} placeholder='Longitud'/>
                    </View>
                    <View>
                        <Text style={styles.text} >Latitud</Text>
                        <TextInput style={styles.textInput} placeholder='latitud'/>
                    </View>

                </ScrollView>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable 
                    style={({pressed})=>[
                        styles.saveContainer,
                        {
                            backgroundColor: pressed? `#006400`:'green'
                        },
                    ]}
                >
                    <Text style={styles.saveTextButton}>Guardar datos</Text>
                </Pressable>
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
    buttonContainer:{
        display:'flex',
        width:'100%',
        alignItems:'center',
        marginTop:20
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
        borderRadius:8
    },
    textInputDisable:{
        color:'grey',
        backgroundColor:`#ffebcd`
    },
    saveTextButton:{
        fontSize: 14,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.7,
        color: 'white',
        padding:0,
        margin:0
    },
    saveContainer:{
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
        width:'100%'

    },

});