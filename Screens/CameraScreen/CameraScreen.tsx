import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, Image} from 'react-native'
import { Camera, CameraType } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import { Header } from '../../components/Header/Header';
import { GetCamera } from '../../components/Camera/GetCamera';


export function CameraScreen() {
    
  const navigation : any = useNavigation();
  const [permission, requestPermission] = useState(false);


return (
  <View style={{alignItems: "stretch", flex: 1}}>
   <Header goBack={navigation.goBack}  title={" Take a Picture"}></Header>
  <GetCamera></GetCamera>
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
