import React from "react";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";

const HistoryComponent = props => {
    return (
        <Pressable key={props.key} onPress={ props.onPress }>
        <View style={ styles.history }>
            <View>
                <Image style={ styles.image } source={ props.source }/>
            </View>
            <View style={ styles.containReport} >
                <View >
                    <Text style={ styles.title } >{ props.title }</Text>
                </View>
                <View style={ styles.description }>
                    <Text>{ props.description }</Text>
                </View>
                {props.contain}
            </View> 
       </View>
       </Pressable>
    );
};

const styles = new StyleSheet.create({
    history: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between', 
        backgroundColor: 'lightgray',
        borderRadius: 15,
        padding: 9
    },
    image: {
        borderRadius: 15,
        marginRight: 12,
        height: 120,
        width: 120,
    },

    containReport: {
        display: 'flex',
        flex: 1,

    },
    description: {
        display:'flex',

    },
    title: {
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 18
    }
});

export default HistoryComponent;