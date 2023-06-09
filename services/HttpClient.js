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
       // Alert.alert('Error', 'La solicitud no pudo ser completada');
      }
    } catch (error) {
      json = {res: false, mess:JSON.stringify(error)}
    //  Alert.alert('Error', `error : ${error}`);
    }finally{
      return json;
    }
};

const HttpQueryToken = async (objectInput,token,url, method ) => {
  const data = JSON.stringify(objectInput);
  let json = null;
    const requestOptions = {
      method: method,
      headers: {
        'Authorization': `Bearer ${token}`,
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
    //    Alert.alert('Error', `La solicitud no pudo ser completada ${data}`);
      }
    } catch (error) {
      json = {res: false, mess:JSON.stringify(error)}
  //    Alert.alert('Error', `error : ${error}`);
    }finally{
      return json;
    }
};

const HttpQueryGet = async (objectInput,url, method ) => {
  const data = new URLSearchParams(objectInput).toString();
  const newUrl = `${url}?${data}`;
  let json = null;
    const requestOptions = {
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };
    try {
      const response = await fetch(newUrl, requestOptions);
      const responseData = await response.json();

      if (response.ok) {
        json = responseData; 
      } else {
//        Alert.alert('Error', `La solicitud no pudo ser completada ${JSON.stringify(objectInput)}`);
      }
    } catch (error) {
      json = {res: false, mess:JSON.stringify(error)}
 //     Alert.alert('Error', `error : ${error}`);
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
    };
  try {
    const response = await axios.post(url,formData ,requestOptions);
    if ( response.status == 200 ){ 
      json=response.data;
    }else{
      json = {res:false,mess:response.status};
    }
  } catch (error) {
 //   Alert.alert('Error', `La solicitud no pudo ser completada ${error}`);
  }finally{
    return json;
  }
};

const UploadPhotoHttp = async (formData,url,method) => {
  let json = null;
  const requestOptions = {
    method: method,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body:formData
  };
  try {
    const response = await fetch(url,requestOptions);
    const jsonRes = await response.json();
    if (response.ok){
      json = jsonRes;
    }else{
 //     Alert.alert('Error', `La solicitud no pudo ser completada ${response.status}`);
    }
  }catch(error){
    json = {res:false,mess:url};
  }finally{
    return json;
  }

};

export default  HttClientMethods = {
  HttpQuery,
  UploadPhoto,
  UploadPhotoHttp,
  HttpQueryGet,
  HttpQueryToken
};