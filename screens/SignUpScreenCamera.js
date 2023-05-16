import * as React from 'react';
import { View ,Text ,ActivityIndicator,StyleSheet, Button} from 'react-native';
import { Camera ,CameraType} from "expo-camera";

export default function SignUpScreenCamera({navigation}){
    const [type,setType] = React.useState(CameraType.front);
    const [permission, requestPermission] = Camera.useCameraPermissions();
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

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
      }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.cameraContainer}>
              <Camera style={{height:'90%',marginBottom:50}} type={type}>
                <View >
                </View>
              </Camera>
              <View style={styles.waitContainer}>
                <Text>Buscando similitudes . . .</Text>
                <ActivityIndicator size="large" color="#00ff00" />
              </View>
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
      flex: 1,
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
      marginBottom:100
    },
    cameraContainer: {
      display:'flex',
      justifyContent:'center',
      marginBottom:50
    },
    waitContainer:{
      marginTop:10,
      display:'flex',
      alignItems:'center',
    }
  });