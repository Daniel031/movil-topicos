import * as React from 'react';
import { View ,Text} from 'react-native';
import ReportComponent from '../../../components/Report.component';
import { useState } from 'react';

export default function ReportEditScreen({route,navigation}){
    const [codeTypeReport,setCodeTypeReport] = useState(0);
    const [titleInput,setTitleInput] = useState('');
    const [descripcionText,setDescriptionText] = useState('');
    const [photosGallery,setPhotosGallery] = useState([]);

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
    const sendReport = () => {
        navigation.navigate('Historial');
    }
    const isDisabled = () => {
        return !(photosGallery.length>0 && descripcionText.length >64 && titleInput.length>0);
    }

    const numberLines = (<Text style={{textAlign:'right'}} >{`${descripcionText.length}/512`}</Text>);
    return (
        <View>
            <ReportComponent onChangeValueReport={onChageValueReport} 
                            selectedValue={codeTypeReport}
                            buttonTitle={"Guardar cambios"}
                            typeReport={typeReport}
                            title={`EDITAR DENUNCIA`}
                            titleInput={titleInput}
                            titleOnChangeText={titleOnChangeText}
                            description = {descripcionText}
                            descriptionOnChangeText = {descripcionOnChangeText}
                            onUpdateGallery={updatePhotoGallery}
                            numberLines={numberLines}
                            isDisabled={isDisabled}
                            onPress={sendReport}
                            />
        </View>
    );
}
 
const typeReport = ["Alcantarillado","Alumbrado publico"];