import React, { useState } from "react";
import { View, StyleSheet, Text, Button,Image, Pressable, Alert } from "react-native";
import { Picker } from '@react-native-picker/picker';
import FormField from "./FormField.component";
import * as ImagePicker from 'expo-image-picker';
import ButtonPlusComponent from "./ButtonPlus.component";
import { Dialog, FAB } from "@rneui/base";
import ButtonComponent from "./Button.component";

const ReportComponent = props => {
  const [photos, setPhotos] = useState([]);
	var payments = [];

  if (props.typeReport)
	for(let i = 0; i < props.typeReport.length; i++){
		payments.push(
            <Picker.Item key={i} label={props.typeReport[i]} value={i+1}/>
		);
	}

    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        aspect: [4, 3],
        quality: 1,
        selectionLimit: 1,
        allowsEditing:true
      });
      if (!result.canceled) {
        setPhotos([...photos,...result.assets]);
        props.onUpdateGallery([...photos,...result.assets]);
      } 
    };

    const removePhotoFromGallery = (index) => {
        const pictures = [];
        photos.map((value,i)=>{
          if (i != index) {
            pictures.push(value);
          }
        });
        setPhotos([...pictures]);
        props.onUpdateGallery([...pictures]);
    };

    return (
        <View style={styles.main} >
            <View style={styles.title}>
                <Text style={styles.titleStyle}>{props.title}</Text>
            </View>
            <View>
              <Text>Tipo de denuncia</Text> 
              <Picker style={styles.typeReportStyle} selectedValue={ props.selectedValue } onValueChange={props.onChangeValueReport } >
                {payments}
              </Picker>  
            </View>
            <View>
                <FormField onChangeText={props.titleOnChangeText} defaultValue={props.titleInput} maxLength={54} labelText="Titulo de denuncia" placeholderText="Ingrese el titulo de la denuncia" />
            </View>
            <View style={styles.DescriptionSpace}>
                <FormField onChangeText={props.descriptionOnChangeText} defaultValue={props.description} labelText="Descripcion" style={styles.inputDescription} placeholderText="Ingrese una descripcion del suceso" numberOfLines={10} multiline={true} maxLength={512}/>
                <View>
                   {props.numberLines}
                </View> 
            </View>
            <View style={styles.gallery}>
                { photos.map((photo,index)=>(
                  <View key={photo.uri} style={styles.imageContainer} >
                     <Image source={{ uri: photo.uri }} style={[{ width: 100, height: 100 }]} />
                     <FAB onPress={()=>{removePhotoFromGallery(index)}} upperCase color="red" style={styles.fab} size={'small'} title={'X'}/>
                  </View>
                ))
                }
                { !(photos.length >= 2)  && <ButtonPlusComponent onPress={pickImage}/>}
            </View>
            <View>
              <ButtonComponent onPress={props.onPress} text={props.buttonTitle} fontColor="white" />
            </View>
        </View>
    );
};

const styles = new StyleSheet.create({
  main:{
    paddingHorizontal:15,
    paddingTop:20
  },
  title:{
    marginBottom: 15
  },
  titleStyle:{
    color: 'grey',
    fontSize: 25,
    fontWeight:'bold'
  },
  typeReportStyle:{
    backgroundColor: 'white',
    marginTop: 7,
    marginBottom: 7
  },
  gallery:{
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent:'center',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth:1 ,
    marginBottom: 35
  },
  imageStyle: {
    marginLeft:5,
    marginHorizontal:9
  },
  imageContainer: {
    display:'flex',
    flexDirection:'row',
    marginRight:10
  },
  inputDescription: {
    paddingRight:15,
    marginBottom:0
  },
  DescriptionSpace: {
    marginBottom: 10
  },
  fab:{
    height:10,
    fontSize:15,
    fontWeight:'bold'
  }
});

export default ReportComponent;
/*<FAB onPress={()=>{removePhotoFromGallery(index)}} upperCase color="red" style={styles.fab} size={'small'} title={'X'}/>*/


/*

                  <View key={photo.uri} style={styles.imageContainer} >
                      <Image source={{ uri: photo.uri }} style={[{ width: 100, height: 100 }]} />
                      <FAB onPress={()=>{removePhotoFromGallery(index)}} upperCase color="red" style={styles.fab} size={'small'} title={'X'}/>
                  </View>

*/