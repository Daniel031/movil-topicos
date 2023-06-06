import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import ButtonComponent from '../../components/Button.component';
import HistoryComponent from '../../components/History.component';

export default function InitScreen({navigation}){
    return (
        <View style={ styles.options }>
            <View style={styles.profile}>
                <Image style={styles.image} source={ require('./../../../assets/images/user.jpeg') } />
                <Text>Pedro ramirez</Text>
            </View>
            <View style={ styles.newReport }>
                <ButtonComponent onPress={()=>{navigation.navigate('CreateReport')}} fontColor="white" text="+ Nueva denuncia" />
            </View>
            <View style={styles.reports}>
                <ScrollView>
                    <View style={ styles.history }>
                      <HistoryComponent description={description} source={ require('./../../../assets/images/park.png') } title="Iluminacion defectuosa" />
                    </View>
                    <View style={ styles.history }>
                      <HistoryComponent description={description} source={ require('./../../../assets/images/park.png') } title="Iluminacion defectuosa" />
                    </View>
                    <View style={ styles.history }>
                      <HistoryComponent description={description} source={ require('./../../../assets/images/park.png') } title="Iluminacion defectuosa" />
                    </View>   
                    <View style={ styles.history }>
                      <HistoryComponent description={description} source={ require('./../../../assets/images/park.png') } title="Iluminacion defectuosa" />
                    </View>
                    <View style={ styles.history }>
                      <HistoryComponent description={description} source={ require('./../../../assets/images/park.png') } title="Iluminacion defectuosa" />
                    </View>               
                </ScrollView>
            </View>
        </View>
    );
}

const styles = new StyleSheet.create({
    options: {
        display: 'flex',
        height: '100%',
        padding: 15
    },
    image:{
        height: 120,
        width: 120,
        borderRadius: 115,
        marginBottom: 5
    },
    profile: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        marginBottom: 15
    },
    reports: {
        flex: 1
    },
    newReport: {
        marginBottom: 15
    },
    report: {

    },
    history: {
        marginBottom: 7
    }
});

const description = 'Ocurrio un accidente en la zona urbari , lo cual proboco que la iluminacion se perdiera , hasta ahora han pasado 56 dias y un no se hace responsable nadie';