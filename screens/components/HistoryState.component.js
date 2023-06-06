import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HistoryComponent from "./History.component";

const HistoryStateComponent = props => {
    const contain = (
        <View style={styles.descriptions} >
        <View style={props.styleState} >
            <Text>{props.state}</Text>
        </View>
        <View>
            <Text>{props.date}</Text>
        </View>
        </View>
    );
    return (
        <View key={props.keyVal}>
          <View style = {props.style}>
            <HistoryComponent onPress={props.onPress} source={props.source} title={props.title} description={props.description} contain={contain} />
          </View>
        </View>
    );
};

const styles = new StyleSheet.create({
    descriptions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    accepted: {

    },
    discarded: {

    },
    inProgress: {

    }
});

export default HistoryStateComponent;
