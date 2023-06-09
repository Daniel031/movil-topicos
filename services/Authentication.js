import { API_URL } from '@env';
import HttpClient from './HttpClient';
import StorageValue from './Storage';

const login = (email,password,session) => {
    const endPoint ='users-login';
    const url = `${API_URL}/${endPoint}`;
    const objectData = { email, password };
    const response = HttpClient.HttpQuery(objectData,url,'POST');
    if (response){
            response.then(
                (value) => {
                  if (session){
                    saveSession(value.token);
                  } 
                    saveEmail(email);
                }
            );
    }
    return response;
};


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
    beforeSignUpImage
};


export default Authentication;