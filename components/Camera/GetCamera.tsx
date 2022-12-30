import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet, Image} from 'react-native'
import { Camera, CameraType } from "expo-camera";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface photoObjectProps{
  title:string,
  uri:string,
}

export const GetCamera = () => {


    const [permission, requestPermission] = Camera.useCameraPermissions();
    const cameraRef = React.useRef<Camera>(null);
    
    const navigation : any = useNavigation();
    const route: RouteProp<any> = useRoute();
      
      const [photoObject, setPhotoObject] = useState<photoObjectProps>();
      const [photo, setPhoto] = useState<string | null>(null);
  
      const takePicture = async() => {
        var title = route.params?.title;
        console.log(title)
          if (cameraRef.current) {
              cameraRef.current.takePictureAsync().then(async (photo) => {
                  setPhoto(photo.uri);
                  setPhotoObject({title:title, uri:photo.uri});
                  await AsyncStorage.setItem('@Picture_'+title, photo.uri);
              });
          }
          navigation.navigate('Picture', {title: title});
      }
  
    if (!permission) {
      // De permissies zijn nog aan het laden
      return <View/>
  }
  
  if (!permission.granted) {
      return (
          <View style={styles.container}>
              <Text>You don't have permission to use the camera</Text>
              <Button title="Toestemming vragen" onPress={requestPermission} />
          </View>
      );
  }


  
  return (
    <View style={{alignItems: "stretch", flex: 1}}>
    <Camera ref={cameraRef} style={{flex: 1}} type={CameraType.back}/>
    <Button title="Take picture" onPress={takePicture} />
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
  