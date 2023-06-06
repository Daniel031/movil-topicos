import React from "react";
import { Pressable, StyleSheet, View, Image } from "react-native";

const ButtonPlusComponent = props => {

    return (
        <View>
            <Pressable  disabled={props.disabled} onPress={props.onPress} style={onPressStyle}>
                    <View>
                        <Image source={require('./../../assets/icons/splash.png')}/>
                    </View>
            </Pressable>
        </View>
    ); 
};

const onPressStyle = ({ pressed })=>[
    styles.plusStyle,
    pressed?styles.pressStyle:styles.upStyle
];

const styles = new StyleSheet.create({
    plusStyle:{
        backgroundColor:'red',
        width:64,
        height:64,
        borderRadius:15
    },
    pressStyle:{
        backgroundColor:'rgba(204,204,204,0.3)',
    },
    upStyle:{
        backgroundColor:'rgba(204,204,204,1)',
    }
})

export default ButtonPlusComponent;