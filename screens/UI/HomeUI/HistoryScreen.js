import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import ButtonSelectComponent from '../../components/ButtonSelect.component';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native';
import HistoryStateComponent from '../../components/HistoryState.component';

export default function HistoryScreen({navigation}){


    const [ isAll, setIsAll ] = useState(true);
    const [ isRecived, setRecived ] = useState(false);
    const [ isDiscarted, setDescarted ] = useState(false);
    const [ isInWait, setInWait ] = useState(false);
    const [ selectDate, setSelectDate ] = useState(0);
    const [ selectType, setSelectType ] = useState(0);

    const offAll = () => {
        setIsAll(false);
        setDescarted(false);
        setInWait(false);
        setRecived(false);
    };

    const reports = [];
    if (histories){
        for (let i = 0; i < histories.length; i++) {
            reports.push(
                <HistoryStateComponent key={i} keyVal={`${i}`} onPress={()=>{navigation.navigate('ShowReport',histories[i])}} style={styles.history} title={histories[i].title} description = {histories[i].description} source={require('./../../../assets/images/park.png')} state={histories[i].state} date={histories[i].fecha} />
            )
        }
    }

    return (
        <View style={ styles.screenComplete }>
          <View style={styles.filterOptionsButton}>
            <ButtonSelectComponent onPress={()=>{ offAll(); setIsAll(true);}} stateButton={isAll} text="Todas" />
            <ButtonSelectComponent onPress={()=>{ offAll(); setRecived(true);}} stateButton={isRecived} text="Aceptadas" />
            <ButtonSelectComponent onPress={()=>{ offAll(); setInWait(true);}} stateButton={isInWait} text="En proceso" />
            <ButtonSelectComponent onPress={()=>{ offAll(); setDescarted(true);}} stateButton={isDiscarted} text="Rechazadas" />
          </View>
          <View style={styles.picker}>
            <View style={styles.pickerBoxes}>
            <Picker style={styles.pickerStyle} selectedValue={selectDate}   onValueChange={(itemValue, itemIndex) =>setSelectDate(itemValue)}>
                <Picker.Item style={styles.pickerItem} label='Hoy' value={0}/>
                <Picker.Item style={styles.pickerItem} label='Ultima semana' value={1} />
            </Picker> 
            </View>
            <View style={styles.pickerBoxes} >
            <Picker style={styles.pickerStyle} selectedValue={selectType}   onValueChange={(itemValue, itemIndex) =>setSelectType(itemValue)}>
                <Picker.Item style={styles.pickerItem} label='Alcantarillado' value={0}/>
                <Picker.Item style={styles.pickerItem} label='Iluminacion' value={1} />
            </Picker> 
            </View>
          </View>
          <View style={styles.historyTab} >
            <ScrollView>
                {reports}
            </ScrollView>
          </View>
        </View>
    );
}
const description = "Las sillas del parke ...";

const states = ["Aprobado", "En proceso", "Rechazadas"];

const histories = [
    {
        title:"historias sin sentido",
        description:"La nocion de la perdida es aquella que no se pier..",
        fecha:"05/04/2023",
        state:states[0]
    },
    {
        title:"historias sin sentido",
        description:"La nocion de la perdida es aquella que no se pier..",
        fecha:"05/04/2023",
        state:states[1]
    },
    {
        title:"historias sin sentido",
        description:"La nocion de la perdida es aquella que no se pier..",
        fecha:"05/05/2023",
        state:states[1]
    },
    {
        title:"historias sin sentido",
        description:"La nocion de la perdida es aquella que no se pier..",
        fecha:"05/03/2023",
        state:states[2]
    },
    {
        title:"historias sin sentido",
        description:"La nocion de la perdida es aquella que no se pier..",
        fecha:"05/02/2023",
        state:states[1]
    },
    {
        title:"historias sin sentido",
        description:"La nocion de la perdida es aquella que no se pier..",
        fecha:"05/02/2023",
        state:states[0]
    }
];

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