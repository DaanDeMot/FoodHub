import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, Image} from 'react-native'
import { Camera, CameraType } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import { Header } from '../../components/Header/Header';
import { GetCamera } from '../../components/Camera/GetCamera';


export function GalleryScreen() {
  const navigation : any = useNavigation();
  const [permission, requestPermission] = useState(false);
return (
  <View style={{alignItems: "stretch", flex: 1}}>
   <Header goBack={navigation.goBack}  title={"Gallery"}></Header>
   
  {permission ? 
  <GetCamera></GetCamera>:
  <View>
    <Button title="Take picture" onPress={()=>requestPermission(true)} /></View>}
  <Button
    title='Make a picture'
    onPress={()=> navigation.navigate('Categorie', )}></Button>
</View>
)
}

const styles = StyleSheet.create({
  container:{
    marginTop:"50%",
      borderWidth:1,
      width:"95%",
      alignItems:"center"
  }

});
