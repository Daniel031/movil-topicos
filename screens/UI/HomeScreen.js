import * as React from 'react';
import { View ,Image,Text, Button, StyleSheet, Pressable} from 'react-native';
import ButtonComponent from '../components/Button.component'
import HiperLinkComponent from '../components/Hiperlink.component';

export default function HomeScreen({navigation}){
    return (
        <View style={styles.mainContainer}>
            <View style={styles.imageContainer} >
                <Image source={require('./../../assets/images/park.png')} />
            </View>
            <View style={styles.routeContainer}>
               <ButtonComponent onPress={()=>{navigation.navigate("Iniciar Sesion")}} fontColor="white" text="Iniciar Sesion"/>
                <View style={styles.loginLinkContainer}>
                    <Text style={styles.textContainer} >No tienes una cuenta?,</Text>
                     <HiperLinkComponent onPress={()=>{navigation.navigate("Registrate")}} textLink=" registrate"/>
                </View>
            </View>
        </View>
    );
}


const styles = new StyleSheet.create({
    mainContainer:{
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-end',
        paddingRight:15,
        paddingLeft:15,
        paddingBottom:60,
        height:'100%'
    }, 
    imageContainer:{
        display:'flex',
        justifyContent:'flex-start',
        height:'75%'
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