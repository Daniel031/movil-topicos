import React from "react";
import { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";



const FormField = props => {

    let labelText = props.labelText || "title";
    let placeholderText = props.placeholderText || "";
    let secureTextEntry = props.secureTextEntry || false;
    const [numberChar,setNumberChar] = useState(0);

    return (
        <View style={styles.fieldContainer} >
          <Text style={styles.text}>{labelText}</Text>
          <TextInput style={[styles.textInput,props.style]} textAlignVertical="top" numberOfLines={props.numberOfLines} multiline={props.multiline} editable={props.editable} selectTextOnFocus={props.selectTextOnFocus} underlineColorAndroid={props.underlineColorAndroid} placeholder={placeholderText} onChangeText={props.onChangeText} secureTextEntry={secureTextEntry} value={props.value} defaultValue={props.defaultValue} maxLength={props.maxLength}/>
         
        </View>
    );
};


const styles = new StyleSheet.create({

    fieldContainer: {
        display:'flex',
        width:'100%',
        marginBottom:5
    },
    text: {
        marginBottom:5,
        marginLeft:5,
    },
    textInput: {
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


});

export default FormField;