import * as React from 'react';
import { View ,Text ,Image,StyleSheet, Button, ToastAndroid, Alert } from 'react-native';
import { Camera ,CameraType} from "expo-camera";
import { useState } from 'react';
import ButtonComponent from '../components/Button.component';
import FormField from '../components/FormField.component';
import Validations from '../../utils/Validation';
import { Dialog } from '@rneui/base';
import Authentication from '../../services/Authentication';

export default function SignUpScreenCamera({navigation}){
    const [cameraRef, setCameraRef] = useState(null);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [photoUri, setPhotoUri] = useState(null);
    const [buttonCapture,setButtonCapture] = useState(false);
    const [codeCI, setCodeCI] = useState('');
    const [dialogState, setDialogState] = useState(false);
    const [base64Photo,setBase64Photo] = useState('');

    const takePhoto = () => {
      handleTakePhoto().then(
        (res) => {

        }
      ).catch(
        error => {}
      ).finally(
        ()=>{
          setButtonCapture(true);
        }
      );
    }
    
    const captureOther = () => {
      setButtonCapture(false);
    };

    const handleTakePhoto = async () => {
      let photo = null;
      if (cameraRef) {
        photo = await cameraRef.takePictureAsync({ base64:true });
        setPhotoUri(photo.uri);
        setBase64Photo(photo.base64);
      }
      return photo;
    };

    const onPressButtonSend = () => {
      if ((Validations.isEmptyText(codeCI) || photoUri == null) && !buttonCapture){
        ToastAndroid.show('Llene los campos primero',ToastAndroid.SHORT);
      } else {
        sendRequest();
      }
    };

    const sendRequest = () => {
      setDialogState(true);
      Authentication.beforeSignUpImage(codeCI,photoUri).then(res => {
        if (res.res){
          navigation.navigate('RegisterData',res.datos);
          //Alert.alert('datos',JSON.stringify(res.datos));
        }else{
          Alert.alert('Usuario no encontrado','No se encontro en la base de datos');
        }
      })
      .catch(error => {
          Alert.alert('Error',`No se pudo hacer el envio ${error}`);
      })
      .finally(() => {
        setDialogState(false);
      });
    }

    if (!permission) {
        // Camera permissions are still loading
        return <View />;
      }
    
      if (!permission.granted) {
        // Camera permissions are not granted yet
        return (
          <View style={styles.container}>
            <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
            <Button onPress={requestPermission} title="grant permission" />
          </View>
        );
      }

    return (
        <View style={styles.mainContainer}>
            {dialogState &&     
            <Dialog  overlayStyle={{ textAlign:'center' ,backgroundColor:'white'}} isVisible={true} >
                   <Dialog.Loading />
                   <Dialog.Title title={'Consultando . . .'}/>
            </Dialog>
            }
            <View style={styles.cameraContainer}>
            <FormField defaultValue={codeCI} onChangeText={ newCode=>setCodeCI(newCode)} labelText="Ingrese su numero de carnet" placeholderText="Nro de carnet" /> 
             {!buttonCapture?
              <Camera style={styles.camera} type={CameraType.front} ref={ ref => setCameraRef(ref)}/> :
             (photoUri && <Image source={{uri: `data:image/jpg;base64,${base64Photo}`}} style={styles.camera} />)
            } 
             <View>
             </View>
             <View style={ styles.optionsContainer }> 
             <View>
               <Button onPress={takePhoto} disabled={buttonCapture} color={'red'} title='Capturar'/>
               </View>
               <View>
               <Button onPress={captureOther} disabled={!buttonCapture} title='Tomar otra'/>
               </View>
             </View> 
            </View>
            <View>
                <ButtonComponent onPress={onPressButtonSend} fontColor="white" color="green" text="Enviar" />
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    camera: {
      height: '70%',
      width: '90%',
      marginBottom: 15
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      margin: 64,
    },
    button: {
      flex: 1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
    mainContainer:{
      display:'flex',
      marginTop:75,
      marginLeft:45,
      marginRight:45,
      marginBottom:100,
    },
    cameraContainer: {
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      marginBottom:50
    },
    optionsContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent:'center',
      alignContent:'space-between',
      marginTop: 1,
      width:'100%'
    },

  });