import * as React from 'react';
import { View, Text, StyleSheet, Alert, ToastAndroid} from 'react-native';
import ButtonSelectComponent from '../../components/ButtonSelect.component';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native';
import HistoryStateComponent from '../../components/HistoryState.component';
import { Dialog } from '@rneui/base';
import { useEffect } from 'react';
import ReportService from '../../../services/Report';
import { useIsFocused } from '@react-navigation/native';

export default function HistoryScreen({navigation}){

    const isFocused = useIsFocused();
    const [ isAll, setIsAll ] = useState(true);
    const [ isRecived, setRecived ] = useState(true);
    const [ isDiscarted, setDescarted ] = useState(false);
    const [ isInWait, setInWait ] = useState(false);
    const [ selectDate, setSelectDate ] = useState(0);
    const [ selectType, setSelectType ] = useState(0);
    const [ dialogState, setDialogState ] = useState(false);
    const [ messageNotReport, setmessageNotReport ] = useState(false);  
    const [ reportse , setReports] = useState([]);
    const [ histories, setHistories ] = useState([]);

    useEffect(() =>{
        if (isFocused){
            setDialogState(false);
            setmessageNotReport(false);
            obtainReports();
        }

    },[isFocused]);


    const obtainReports = ()=>{
        setDialogState(false);
        ReportService.getReports().then((value) => {
            if (value){
                if (value.res) {
                    setHistories(value.data);
                    charginReports();
                } else {
                    setmessageNotReport(true);
                }
                
            }
        }).catch(() => {
            setmessageNotReport(true);
        }).finally(() => {
            setDialogState(true);
        });
    };
 
    const offAll = () => {
        setIsAll(false);
        setDescarted(false);
        setInWait(false);
        setRecived(false);
    };

    const charginReports = () => {
        const reports = [];
        if (histories){
            for (let i = histories.length-1; i>=0; i--) { 
                if ((histories[i].tipo_denuncia == selectType) || selectType == 0)
                reports.push(
                    <HistoryStateComponent key={i} keyVal={`${i}`} onPress={()=>{navigation.navigate('ShowReport',histories[i])}} style={styles.history} title={histories[i].titulo} description = {histories[i].descripcion} source={{uri:histories[i].imagen1}} state={states.at(histories[i].estado)} date={histories[i].fecha} />
                )
            }
        }
        setReports([...reports]);
    };
    
    const charginReportsFilter = () => {
        const reports = [];
        if (histories){
            for (let i = 0; i < histories.length; i++) { 
                if (histories[i].tipo_denuncia == selectType+1 || selectType == 0)
                reports.push(
                    <HistoryStateComponent key={i} keyVal={`${i}`} onPress={()=>{navigation.navigate('ShowReport',histories[i])}} style={styles.history} title={histories[i].titulo} description = {histories[i].descripcion} source={{uri:histories[i].imagen1}} state={states.at(histories[i].estado)} date={histories[i].fecha} />
                )
            }
        }
        setReports([...reports]);
    };

    let items = [];
    items.push(<Picker.Item key={0} style={styles.pickerItem} label={"todos"} value={0}/>);
    for (let i = 0; i < typeReport.length; i++) {
        items.push(
          <Picker.Item key={typeReport[i]} style={styles.pickerItem} label={typeReport[i]} value={i+1}/>
        );
        
    }

    const aplyingFilters = () => {
        
    }
    
    return (
        <View style={ styles.screenComplete }>
          <View style={styles.filterOptionsButton}>
            <ButtonSelectComponent onPress={()=>{ obtainReports() }} stateButton={isRecived} text="Actualizar" />
          </View>
          <View style={styles.picker}>
            <View style={styles.pickerBoxes}>
            <Picker style={styles.pickerStyle} selectedValue={selectDate}   onValueChange={(itemValue, itemIndex) =>{setSelectDate(itemValue); }}>
                <Picker.Item style={styles.pickerItem} label='Hoy' value={0}/>
                <Picker.Item style={styles.pickerItem} label='Ultima semana' value={1} />
            </Picker> 
            </View>
            <View style={styles.pickerBoxes} >
            <Picker style={styles.pickerStyle} selectedValue={selectType}   onValueChange={(itemValue, itemIndex) =>{setSelectType(itemValue); obtainReports();}}>
                {items}
            </Picker> 
            </View>
          </View>
          <View style={styles.historyTab} >
            <ScrollView>
                {dialogState && !messageNotReport && reportse}
                {!dialogState && <Dialog.Loading/>}
                {dialogState && messageNotReport && <Text>No se encontraron reportes</Text>}
            </ScrollView>
          </View>
        </View>
    );
}
const description = "Las sillas del parke ...";

const states = ["Eliminado", "En proceso", "Aprobado"];
const typeReport = ["aseo urbano", "vias publicas", "alumbrado publico", "alcantarillado", "areas verdes"];
/*
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
];*/

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