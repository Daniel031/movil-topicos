import * as React from 'react';
import { View ,Text, ToastAndroid, Alert} from 'react-native';
import ReportComponent from '../../../components/Report.component';
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import ReportService from '../../../../services/Report';
import { Dialog } from '@rneui/base';
import { useIsFocused } from '@react-navigation/native';

export default function ReportCreateScreen({route,navigation}){
    const [codeTypeReport,setCodeTypeReport] = useState(0);
    const [titleInput,setTitleInput] = useState('');
    const [descripcionText,setDescriptionText] = useState('');
    const [photosGallery,setPhotosGallery] = useState([]);
    const [ longitude, setLongitude ] = useState(0);
    const [ latitude, setLatitude ] = useState(0);
    const [ dialogState, setDialogState ] = useState(false);
    const [typeReport, setTypeReport] = useState([]); 
    const isFocused = useIsFocused();

    useEffect(() => {
        ReportService.getTypeReports().then((value) => {
            if (value) {
                if (value.res) {
                    setTypeReport(value.datos?[...value.datos]:[]);
                }
            }
        });
        
        obtainUbication().then(()=>{
        }).catch( (error)=>{
            console.log(error)
        }).finally(()=>{
            ToastAndroid.show(`${longitude} , ${latitude}`,ToastAndroid.SHORT);
        })
      }, [isFocused,photosGallery]);

    const onChageValueReport = (newValue) => {
        setCodeTypeReport(newValue);
    };
    const titleOnChangeText = (newText) => {
        setTitleInput(newText);
    };
    const descripcionOnChangeText = (newText) => {
        setDescriptionText(newText);
    };
    const updatePhotoGallery = (gallery) => {
        setPhotosGallery(gallery);
    }
    const updateLongitude = (alongitude,alatitude) =>{
        setLongitude(alongitude);
        setLatitude(alatitude);
    }

    const obtainUbication = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setLongitude(location.coords.longitude);
        setLatitude(location.coords.latitude);
        ToastAndroid.show(`${latitude} ${longitude}`,ToastAndroid.SHORT);
    }

    const sendReport = () => {
        if(isDisabled()){
            ToastAndroid.show('Llene los campos primero', ToastAndroid.SHORT);
        } else {
        let imagenes = [];
        photosGallery.map((photo)=>{
            imagenes.push(photo.uri);
        })
        setDialogState(true);
        ReportService.saveReport(titleInput,descripcionText,latitude,longitude,imagenes,codeTypeReport)
        .then((value) => {
            if (value){
                if (value.res){
                    ToastAndroid.show('Se creo satisfactoriamente la denuncia',ToastAndroid.SHORT);
                    navigation.navigate('Historial');
                }else{
                    ToastAndroid.show(`${value.mensaje}`,ToastAndroid.SHORT);
                }
            }else{
                ToastAndroid.show(`${JSON.stringify(value)}`,ToastAndroid.SHORT);
            }
            
            
        })
        .catch(
            (error) => {
                ToastAndroid.show('Hubo un error con la transaccion',ToastAndroid.SHORT);
            }
        ).finally(
            () => {
                setDialogState(false);
            }
        );

        }
    }
    const isDisabled = () => {
        return !(descripcionText.length >64 && titleInput.length>0 && photosGallery.length>0);
    }

    const numberLines = (<Text style={{textAlign:'right'}} >{`${descripcionText.length}/512`}</Text>);
    return (
        <View>
            <ReportComponent onChangeValueReport={onChageValueReport} 
                            selectedValue={codeTypeReport}
                            buttonTitle={"Registrar Denuncia"}
                            typeReport={typeReport}
                            title={`REGISTRAR DENUNCIA`}
                            titleInput={titleInput}
                            titleOnChangeText={titleOnChangeText}
                            description = {descripcionText}
                            descriptionOnChangeText = {descripcionOnChangeText}
                            onUpdateGallery={updatePhotoGallery}
                            numberLines={numberLines}
                            onPress={sendReport}
                            updateLongitude={updateLongitude}
                            />
            { dialogState &&
            <Dialog overlayStyle={{backgroundColor:'white'}} isVisible={true} >
                   <Dialog.Loading />
            </Dialog>
            }
        </View>
    );
}
