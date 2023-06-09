import { API_URL } from '@env';
import HttpClient from './HttpClient';
import StorageValue from './Storage';

const saveReport = async (titulo,descripcion,latitud,longitud,imagenes,tipo_denuncia) => {
    const endPoint = 'users-denunciar';
    const url = `${API_URL}/${endPoint}`;
    const email =await StorageValue.getValueFor('email');
    const formData = new FormData();
    formData.append('titulo',`${titulo}`);
    formData.append('descripcion',`${descripcion}`);
    formData.append('latitud',`${latitud}`);
    formData.append('longitud',`${longitud}`);
    formData.append('tipo_denuncia',`${tipo_denuncia}`);
    formData.append('email',email);
    formData.append('imagen1', {
      uri: imagenes[0],
      name: `imagen1.jpg`,
      type: 'image/jpeg',
    },'imagen1','file');
    if (imagenes.length>1){
        formData.append('imagen2', {
            uri: imagenes[1],
            name: `imagen2.jpg`,
            type: 'image/jpeg',
          },'imagen2','file');
    }
    const response = HttpClient.UploadPhoto(formData,url,'POST');
    return response;
}

const reportUpdate = async (report_id,titulo,descripcion,latitud,longitud,imagenes,tipo_denuncia) =>{
  const endPoint = 'users-denunciar';
  const url = `${API_URL}/${endPoint}`;
  const email =await StorageValue.getValueFor('email');
  const formData = new FormData();
  formData.append('report_id',`${report_id}`);
  formData.append('titulo',`${titulo}`);
  formData.append('descripcion',`${descripcion}`);
  formData.append('latitud',`${latitud}`);
  formData.append('longitud',`${longitud}`);
  formData.append('tipo_denuncia',`${tipo_denuncia}`);
  formData.append('email',email);
  formData.append('imagen1', {
    uri: imagenes[0],
    name: `imagen1.jpg`,
    type: 'image/jpeg',
  },'imagen1','file');
  if (imagenes.length>1){
      formData.append('imagen2', {
          uri: imagenes[1],
          name: `imagen2.jpg`,
          type: 'image/jpeg',
        },'imagen2','file');
  }
  const response = HttpClient.UploadPhoto(formData,url,'POST');
  return response;
};
  
const getReports = async () => {
  const url = `${API_URL}/users-denuncias`;
  const email =await StorageValue.getValueFor('email');
  const objectInput = {
    email:email
  };
  const response = HttpClient.HttpQueryGet(objectInput,url,'GET');
  return response;
} 

const destroyReport = async (denuncia_id) => {
  const url = `${API_URL}/users-eliminar`;
  const token =await StorageValue.getValueFor('token');
  const objectInput = {
    denuncia_id
  };
  const response = HttpClient.HttpQueryToken(objectInput,token,url,'POST');
  return response;
}

const getReportsFilter = async (tiempo,tipo_denuncia,estado) => {
  const url = `${API_URL}/users-filtros`;
  const email =await StorageValue.getValueFor('email');
  const objectInput = {
    email:email,
    tiempo:tiempo,
    tipo_denuncia:tipo_denuncia,
    estado:estado
  };
  const response = HttpClient.HttpQueryGet(objectInput,url,'GET');
  return response;
} 

const ReportService = {
    saveReport,
    getReports,
    getReportsFilter,
    destroyReport
};
 
export default ReportService;