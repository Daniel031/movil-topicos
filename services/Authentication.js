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
      saveEmailSession( session,response, email);
    }
    return response;
};

const saveEmailSession = (session, res, email) => {
  res.then(
    (value) => {
      if (session){
        saveSession(value.token);
      } 
        saveEmail(email);
    }
 );
};

const saveEmailSessionSignUp = (res, email) => {
  const session = false;
  saveEmailSession(session,res, email);
}

const beforeSignUpImage = (codeCI, photoUri) => {
  ToastAndroid.show(` esta es la uri ${photoUri}`,ToastAndroid.SHORT);
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
  

const signUp = (email, name, password) => {
  const endPoint = 'users';
  const url = `${API_URL}/${endPoint}`;
  const objectData = { name ,email, password };
  const response = HttpClient.HttpQuery(objectData,url,'POST');
  saveEmailSessionSignUp(response, email);
  return response;
};

const emailNoVerified = (email) => {
  const endPoint = 'users-emailNoRegistrado';
  const url = `${API_URL}/${endPoint}`;
  const objectData = { email };
  const response = HttpClient.HttpQuery(objectData,url,'POST');
  return response;
};

const verifyEmail = (email) => {
  const endPoint = 'users-emailVerify';
  const url = `${API_URL}/${endPoint}`;
  const objectData = { email };
  const response = HttpClient.HttpQuery(objectData,url,'POST');
  return response;
}

const logout = () => {


};

const verifyCodeEmail = (email,codigo_verificacion) => {
  const endPoint = 'users-codigoVerificacionEmail';
  const url = `${API_URL}/${endPoint}`;
  const objectData = { email, codigo_verificacion };
  const response = HttpClient.HttpQuery(objectData,url,'POST');
  return response;
}

const isSigned = () => {

};
const saveEmail = (value) => {
    if (value){
      StorageValue.save('email',value);
    }
};

const saveSession = (value) =>{
    if (value){
      StorageValue.save('token',value);
    }
};

const Authentication = {
    login,
    signUp,
    isSigned,
    beforeSignUpImage,
    emailNoVerified,
    verifyEmail,
    verifyCodeEmail
};


export default Authentication;