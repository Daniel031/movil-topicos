import React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";

let pressColor=`#006400`;
let color = 'green';
let fontColor = 'black';

const ButtonSelectComponent = props => {
    pressColor = props.pressColor || pressColor;
    color = props.color || color;
    fontColor = props.fontColor || fontColor; 

    return (
        <View>
            <Pressable disabled={props.disabled} onPress={props.onPress} style={[styles.buttonContainer,props.stateButton?styles.pressed:styles.normal]}>
                    <Text style={[props.stateButton?styles.textButtonSelected:styles.textButton,props.style]}>{props.text}</Text>
            </Pressable>
        </View>
    );
};

const styles = new StyleSheet.create(
    {
        normal: {
            backgroundColor:'rgba(0,0,0,0.03)',
            borderRadius:15,
            shadowRadius: 3, 
            shadowOpacity: 0.2,
            shadowOffset: {width: -2, height: 4},
            shadowColor: '#171717',
        },
        pressed: {
            backgroundColor: 'green',
            shadowColor: '#171717',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3, 
            borderRadius:15, 
            elevation: 3,
        },
        buttonContainer:{
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 4,
            paddingHorizontal: 12,

        },
        textButton: {
            lineHeight: 21,
            fontWeight: 'bold',
            color: 'black',
          },
        textButtonSelected: {
            lineHeight: 21,
            fontWeight: 'bold',
            color: 'white',
        },
    }
);

export default ButtonSelectComponent;
