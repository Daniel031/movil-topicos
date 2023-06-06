import React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";



const HiperLinkComponent = props => {
    let textStyle = props.textStyle || styles.hiperLinkText;
    let textLink = props.textLink || '';
    return (
        <View>
                <Pressable onPress={props.onPress} style={onPressLink}>
                        <Text style ={textStyle} >
                            {textLink}
                        </Text>
                </Pressable> 

        </View>
    );
};

const onPressLink = ({ pressed }) => [ 
      {
      backgroundColor: pressed?
      'rgba(52, 52, 52, 0.2)':
      'rgba(52, 52, 52, 0.0)'
      },
    ];

const styles = new StyleSheet.create(
    {
        hiperLinkText:{
            color:'blue'
        },
    }
);


export default HiperLinkComponent;
