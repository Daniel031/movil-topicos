import * as React from 'react';
import { View ,Text, ToastAndroid, Alert} from 'react-native';
import ReportComponent from '../../../components/Report.component';
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import ReportService from '../../../../services/Report';

export default function ReportCreateScreen({route,navigation}){
    const [codeTypeReport,setCodeTypeReport] = useState(0);
    const [titleInput,setTitleInput] = useState('');
    const [descripcionText,setDescriptionText] = useState('');
    const [photosGallery,setPhotosGallery] = useState([]);
    const [ longitude, setLongitude ] = useState(0);
    const [ latitude, setLatitude ] = useState(0);

    useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLongitude(location.coords.longitude);
          setLatitude(location.coords.latitude);
        })();
      }, []);

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

    const sendReport = () => {
        if(isDisabled()){
            ToastAndroid.show('Llene los campos primero', ToastAndroid.SHORT);
        } else {
        let imagenes = [];
        photosGallery.map((photo)=>{
            imagenes.push(photo);
        })
        ReportService.saveReport(titleInput,descripcionText,latitude,longitude,imagenes,typeReport)
        .then((value) => {
            Alert.alert('s',`${value}`);
        })
        .catch(
            (error) => {
                Alert.alert('s',`${error}`);
            }
        );
        navigation.navigate('Historial');
        }
    }
    const isDisabled = () => {
        return !(photosGallery.length>0 && descripcionText.length >64 && titleInput.length>0);
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
                            isDisabled={isDisabled}
                            updateLongitude={updateLongitude}
                            />
        </View>
    );
}

const typeReport = ["aseo urbano", "vias publicas", "alumbrado publico", "alcantarillado", "areas verdes"];