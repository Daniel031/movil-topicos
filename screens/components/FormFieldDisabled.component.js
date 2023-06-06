import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import FormField from "./FormField.component";



const FormFieldDisabled = props => {

    let data = props.data || [];
    
    return (
        <View style={styles.fieldContainer} >
            {dataToForm(data)}
        </View>
    );
};

const dataToForm = (data)=>{
    let result = [];

    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        result.push(
            <FormField key={i} style={styles.textInputDisable} editable={false} selectTextOnFocus={false} underlineColorAndroid='transparent' labelText={element.text} value={element.value} />
        );
    }
    return result;
}

const styles = new StyleSheet.create({

    fieldContainer: {
        display:'flex',
        width:'100%',
        marginBottom:5
    },
    textInputDisable:{
        color:'grey',
        backgroundColor:`#ffebcd`
    },

});

export default FormFieldDisabled;