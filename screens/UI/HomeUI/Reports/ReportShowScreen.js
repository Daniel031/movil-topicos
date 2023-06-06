import * as React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import { Button, Dialog } from '@rneui/base';
import { useState } from 'react';
export default function ReportShowScreen({route,navigation}){
// const { a, b, c, d } = route.params;
    const [messageDestroy, setMessageDestroyE ] = useState(false);
    const [destroyE, setDestroyE ] = useState(false);

    const destroyElement = ()=>{
        setDestroyE(true);
    }
    const cancelDestroy = () => {
        setDestroyE(false);
    }
    const confirmDestroy = () => {
        //Logica para destruir el elemento y redireccionar al menu
        setDestroyE(false);
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
                <Text style={styles.title} >Titulo #1</Text>
              </View>
              <View>
                <Text style={styles.titleFields}>Tipo de denuncia</Text>
                <Text style={styles.description}> XXXXccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc  </Text>
              </View>
              <View>
                <Text style={styles.titleFields}>Descripcion</Text>
                <Text style={styles.description} >YYYYwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</Text>
              </View>
              <View>
                <Text style={styles.titleFields}>Fecha de envio</Text>
                <Text style={styles.description} >ZZZZZwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</Text>
              </View>
              <View>
                <Text style={styles.titleFields}>Estado</Text>
                <Text style={styles.state}>WWWW</Text>
              </View>
              <View>
                <Image style={[{height:100,width:100}]}/>
              </View>
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
        fontWeight: 'bold'
    },
    description: {
        color: 'grey'
    },
    state: {
        color: 'green'
    },
    photos: {

    }
});