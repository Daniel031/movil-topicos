import { API_URL } from '@env';
import HttpClient from './HttpClient';
import StorageValue from './Storage';
import { ToastAndroid } from 'react-native';

const login = (email,password,session) => {
    const endPoint ='users-login';
    const url = `${API_URL}/${endPoint}`;
    const objectData = { email, password };
    const response = HttpClient.HttpQuery(objectData,url,'POST');
    if (response){
        if (session){
            response.then(
                (value) => {
                    saveSession(value.token)
                }
            );
        }
    }
    return response;
};

const beforeSignUp = (codeCI, imageBase64) => {
  const endPoint = 'XYW';
  const url = `${API_URL}/${endPoint}`;
  const objectData = { ci: codeCI, img: `data:image/jpg;base64,${imageBase64}` };
  const response = HttpClient.HttpQuery(objectData,url,'POST');
  return response;
}

const beforeSignUpImage = (codeCI, photoUri) => {
    const endPoint = 'users-comprobacion';
    const url = `${API_URL}/${endPoint}`;
    const formData = new FormData();
    formData.append('ci',`${codeCI}`);
    formData.append('imagen', {
      uri: photoUri,
      name: `imagen.jpg`,
      type: 'image/jpeg',
    },'imagen','file');
    const response = HttpClient.UploadPhoto(formData,url,'POST');
    return response;
  }
  

const signUp = () => {

 
};

const logout = () => {


};

const isSigned = () => {

};

const saveSession = (value) =>{
    if (value){
      ToastAndroid.show(`${value}`,ToastAndroid.SHORT);
      StorageValue.save('token',value);
    }
};

const Authentication = {
    login,
    signUp,
    isSigned,
    beforeSignUp,
    beforeSignUpImage
};


export default Authentication;