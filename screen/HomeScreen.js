import * as React from 'react';
import { View ,Image,Text, Button, StyleSheet, Pressable} from 'react-native';

export default function HomeScreen({navigation}){
    return (
        <View style={styles.mainContainer}>
            <View style={styles.imageContainer} >
                <Image source={require('./../assets/images/park.png')} />
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
                    <Text style={styles.textContainer} >No tienes una cuenta?</Text>
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