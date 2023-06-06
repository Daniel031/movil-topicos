import { Alert } from "react-native";
import axios from "axios";

const HttpQuery = async (objectInput,url, method ) => {
  const data = JSON.stringify(objectInput);
  let json = null;
    const requestOptions = {
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: data
    };
    try {
      const response = await fetch(url, requestOptions);
      const responseData = await response.json();

      if (response.ok) {
        json = responseData; 
      } else {
        Alert.alert('Error', 'La solicitud no pudo ser completada');
      }
    } catch (error) {
      json = {res: false}
    }finally{
      return json;
    }
};
      
const UploadPhoto = async (formData,url,method) => {
    let json = null;
    const requestOptions = {

      headers: {
        'Content-Type': 'multipart/form-data',
      },
      transformRequest: formData => formData
    };
  try {
   
    const response = await axios.post(url,formData ,requestOptions);
    if ( response.status == 200 ){
      json=response.data;
    }else{
      json = {res:false};
    }
  } catch (error) {
    Alert.alert('Error', `La solicitud no pudo ser completada ${error}`);
  }finally{
    return json;
  }
};

const uploadImage = async (imageUri) => {
  try {
    const formData = new FormData();
    formData.append('image', {
      uri: imageUri,
      type: 'image/jpeg', // Ajusta el tipo de archivo según corresponda
      name: 'image.jpg', // Ajusta el nombre del archivo según corresponda
    });

    const response = await axios.post('http://example.com/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    // Procesar la respuesta del servidor
    console.log(response.data);
  } catch (error) {
    // Manejar errores
    console.error(error);
  }
};


export default  HttClientMethods = {
  HttpQuery,
  UploadPhoto,
  uploadImage
};