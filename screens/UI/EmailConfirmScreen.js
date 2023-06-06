import * as React from 'react';
import { useState } from 'react';
import { View ,StyleSheet, Text, TextInput } from 'react-native';
import CellComponent from '../components/Cell.Component';
import ButtonComponent from '../components/Button.component';

export default function EmailConfirmScreen({navigation}){
    const [cell1,setCell1] = useState('');
    const [cell2,setCell2] = useState('');
    const [cell3,setCell3] = useState('');
    const [cell4,setCell4] = useState('');
    const [cell5,setCell5] = useState('');
    const [cell6,setCell6] = useState('');
    
    const verifyEmail = () => {
        const code = `${cell1}${cell2}${cell3}${cell4}${cell5}${cell6}`
    };

    return (
        <View style={styles.mainContainer}>
            <View>
                <Text style={styles.message}>Se envio un codigo a tu correo electronico, revisalo</Text>
            </View>
            <View style={styles.codeContainer}>
                 <CellComponent 
                   placeholder='X'
                   defaultValue={cell1}
                   onChangeText={newText=>{setCell1(newText)}}
                   style={styles.cellContainer}
                  />
                 <CellComponent 
                   placeholder='X'
                   defaultValue={cell2}
                   onChangeText={newText=>{setCell2(newText)}}
                   style={styles.cellContainer}
                  />
                 <CellComponent 
                   placeholder='X'
                   defaultValue={cell3}
                   onChangeText={newText=>{setCell3(newText)}}
                   style={styles.cellContainer}
                  />
                 <CellComponent 
                   placeholder='X'
                   defaultValue={cell4}
                   onChangeText={newText=>{setCell4(newText)}}
                   style={styles.cellContainer}
                  />
                 <CellComponent 
                   placeholder='X'
                   defaultValue={cell5}
                   onChangeText={newText=>{setCell5(newText)}}
                   style={styles.cellContainer}
                  />
                 <CellComponent 
                   placeholder='X'
                   defaultValue={cell6}
                   onChangeText={newText=>{setCell6(newText)}}
                   style={styles.cellContainer}
                  />
            </View>
            <View>
               <ButtonComponent onPress={verifyEmail()} style={{width:'100%'}} fontColor="white" text="Confirmar codigo de verificacion"/>
            </View>
        </View>
    );
}




const styles = new StyleSheet.create({
    mainContainer:{
        display:'flex',
        alignItems:'center',
        paddingRight:15,
        paddingLeft:15,
        paddingBottom:60,
        justifyContent:'space-around',
        height:'100%',
    },
    codeContainer:{
        display: 'flex',
        flexDirection: 'row',
        width:'100%',
        justifyContent:'space-evenly'
    },
    cellContainer: {
        display: 'flex',
        fontSize: 50 ,
        borderRadius:5,
        borderColor:'black',
        borderWidth:1,
        padding: 10,
        backgroundColor: 'beige'

    },
    message:{
        textAlign: 'center',
        fontSize: 18
    }

});