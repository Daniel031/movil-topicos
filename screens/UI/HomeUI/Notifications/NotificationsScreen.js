import * as React from 'react';
import { View, Text, StyleSheet, Alert, ToastAndroid} from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';

export default function NotificationsScreen({navigation}){

    const [notifications, setNotifications] = useState([]);
    const [listNotifications, setListNotifications] = useState([]);
    useEffect(() => {
        charginReports();
    },[]);

    const charginReports = () => {
        const reports = [];
     
            for (let i = notifications.length-1; i>=0; i--) {    
                reports.push(
                    <HistoryStateComponent key={i} keyVal={`${i}`} onPress={()=>{navigation.navigate('ShowReport',histories[i])}} style={styles.history} title={histories[i].titulo} description = {histories[i].descripcion} source={{uri:histories[i].imagen1}} state={states.at(histories[i].estado)} date={histories[i].fecha} />
                );
            }
       
        setListNotifications([...reports]);
    };

    return (
        <View style={ styles.screenComplete }>
            <View>
                <Text>NOTIFICACIONES</Text>
            </View>
            <View>
                {listNotifications}
            </View>
        </View>
    );
}

const styles = new StyleSheet.create({
    screenComplete: {
        display: 'flex',
        height: '100%',
        padding: 15
    },
    filterOptionsButton: {
        display: 'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent: 'center',
        width:'100%',
        marginBottom: 20
    },
    pickerBoxes:{
        backgroundColor: 'green',
        borderRadius: 30,
        paddingLeft: 23,
        paddingRight: 25,
        marginBottom: 5
    },
    pickerStyle: {
        backgroundColor: 'green',
    },
    pickerItem: {
        fontSize: 12,
    },
    picker: {
        display:'flex',
        justifyContent: 'center',
        marginBottom: 20
    },
    history: {
        marginBottom: 7
    },
    historyTab: {
        flex: 1
    }
});