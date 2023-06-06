import { API_URL } from '@env';
import HttpClient from './HttpClient';

const saveReport = async (titulo,descripcion,latitud,longitud,imagenes,tipo_denuncia) => {
    const endPoint = 'users-denunciar';
    const url = `${API_URL}/${endPoint}`;
    const formData = new FormData();
    formData.append('titulo',`${titulo}`);
    formData.append('descripcion',`${descripcion}`);
    formData.append('latitud',`${latitud}`);
    formData.append('longitud',`${longitud}`);
    formData.append('tipo_denuncia',`${tipo_denuncia}`);
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
  
const getReport = async (key) => {

}

const ReportService = {
    saveReport,
    getReport
};
 
export default ReportService;