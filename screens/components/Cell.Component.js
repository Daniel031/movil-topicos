import React from "react";
import { View, TextInput } from "react-native";

const CellComponent = props => {
    return (
        <View>
        <TextInput 
          style={props.style}
          keyboardType='numeric'
          maxLength={1}
          placeholder={props.placeholder}
          defaultValue={props.defaultValue}
          onChangeText={props.onChangeText}
         />
       </View>
    );
};


export default CellComponent;
