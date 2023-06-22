import * as React from 'react';
import { View, Text, Image, StyleSheet, ToastAndroid} from 'react-native';
import { Button, Dialog } from '@rneui/base';
import { useState } from 'react';
import ReportService from '../../../../services/Report';
export default function ReportShowScreen({route,navigation}){
// const { a, b, c, d } = route.params;
    const [messageDestroy, setMessageDestroyE ] = useState(false);
    const [destroyE, setDestroyE ] = useState(false);
    const [ dialog, setDialogState ] = useState(false);
    const destroyElement = ()=>{
        setDestroyE(true);
    }
    const cancelDestroy = () => {
        setDestroyE(false);
    }
    const confirmDestroy = () => {
        setDestroyE(false);
        setDialogState(true);
        ReportService.destroyReport(route.params.id).then(
            (value) => {
                let bandera = false;
                if (value){
                    if (value.res){
                        bandera = true;
                        ToastAndroid.show('Se elimino de manera satisfactoria',ToastAndroid.SHORT);
                        navigation.goBack();
                    }
                }
                if (!bandera)
                    ToastAndroid.show(`${JSON.stringify(value)}`,ToastAndroid.SHORT);
            }
        ).catch(
            (error) =>{
                ToastAndroid.show(`No se pudo eliminar la denuncia ${error}`,ToastAndroid.SHORT);
            }
        ).finally(
            ()=>{
                setDialogState(false);
            }
        );
    }

    return (
        <View style={styles.screen}>
            <View>
                <Text style={styles.pageTitle}>VER DENUNCIA</Text>
            </View>
            <View style={styles.card}>
              <View style={styles.buttonOptions}>
                <Button icon={{
                    name: 'pencil',
                    type:'font-awesome',
                    size:20,
                    color:'blue'
                }} 
                color={'rgba(0,0,0,0)'}
                onPress={()=>{
                    navigation.navigate('EditReport',{x:''});
                }}
                />
                <Button icon={{
                    name: 'trash',
                    type:'font-awesome',
                    size:20,
                    color:'red'
                }}
                color={'rgba(0,0,0,0)'}
                onPress={destroyElement}
                />
              </View>
              { destroyE && 
              <View>
                <Dialog overlayStyle={{backgroundColor: 'white'}}>
                    <Dialog.Title title={'Eliminar denuncia'}/>
                    <Text>¿Estas seguro que quieres eliminar esta denuncia?</Text>
                    <Dialog.Actions>
                        <Dialog.Button onPress={confirmDestroy} title={'Confirmar'}/>
                        <Dialog.Button onPress={cancelDestroy} title={'Cancelar'}/>
                    </Dialog.Actions>
                </Dialog>
              </View>
              }   
              <View>
                <Text style={styles.title} >{route.params.titulo}</Text>
              </View>
              <View>
                <Text style={styles.titleFields}>Tipo de denuncia</Text>
                <Text style={styles.description}> {typeReport[route.params.tipo_denuncia-1]} </Text>
              </View>
              <View>
                <Text style={styles.titleFields}>Descripcion</Text>
                <Text style={styles.description} >{route.params.descripcion}</Text>
              </View>
              <View>
                <Text style={styles.titleFields}>Fecha de envio</Text>
                <Text style={styles.description} >{route.params.fecha}</Text>
              </View>
              <View>
                <Text style={styles.titleFields}>Estado</Text>
                <Text style={[styles.description,route.params.estado==1?styles.stateProcess:styles.stateAproved]}>{route.params.estado==1?"En proceso":"Aprobado"}</Text>
              </View>
              <View>
                <Image style={[{height:100,width:100}]}/>
              </View>
              { dialog && <Dialog overlayStyle={{backgroundColor:'white'}} isVisible={true} >
                   <Dialog.Loading />
              </Dialog>}
            </View>
        </View>
    );
}

const styles = new StyleSheet.create({
    screen: {
        marginVertical:18,
        marginHorizontal:18,

    },
    pageTitle: {
        color: 'grey',
        fontSize: 25,
        fontWeight:'bold'
    },
    card: {
        backgroundColor: 'lightgray',
        borderRadius: 18,
        paddingVertical: 15,
        paddingHorizontal: 15,
        height: '100%'
    },
    buttonOptions: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    title: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight:'bold'
    },
    titleFields: {
        fontWeight: 'bold',
        fontSize: 20
    },
    description: {
        color: 'grey',
        fontSize: 18
    },
    stateProcess: {
        color: 'darkorange'
    },
    stateAproved: {
        color: 'green'
    }
});

const typeReport = ["aseo urbano", "vias publicas", "alumbrado publico", "alcantarillado", "areas verdes"];