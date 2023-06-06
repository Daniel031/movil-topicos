import React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";

let pressColor=`#006400`;
let color = 'green';
let fontColor = 'black';

const ButtonComponent = props => {
    pressColor = props.pressColor || pressColor;
    color = props.color || color;
    fontColor = props.fontColor || fontColor; 

    return (
        <View>
            <Pressable disabled={props.disabled} onPress={props.onPress} style={onPressEvent}>
                    <Text style={[styles.textButton,{color:fontColor},props.style]}>{props.text}</Text>
            </Pressable>
        </View>
    );
};

const styles = new StyleSheet.create(
    {
        buttonContainer:{
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 8,
            paddingHorizontal: 32,
            elevation: 3,
            backgroundColor: color,
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
    }
);

const onPressEvent = ({ pressed }) => [
    styles.buttonContainer,
    {
      backgroundColor: pressed
        ? pressColor
        : color
    },
  ];

export default ButtonComponent;
