import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import { Header } from '../../components/Header/Header';
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { photoObjectProps } from '../../components/Camera/GetCamera';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const PictureScreen = () => {
  
  const navigation : any = useNavigation();
  const route: RouteProp<any> = useRoute();

  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);
  const getMyStringValue = async () => {
    try {
      const result =  await AsyncStorage.getItem('@Picture_'+title)
      if(result){
        console.log(result)
        setPhoto(result);
      }
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(()=>{
    setTitle(route.params?.title)
    getMyStringValue();
    console.log(route.params?.title)

  },[])

  return (
    <View style={{alignItems: "stretch", flex: 1}}>
    <Header goBack={navigation.goBack}  title={"Gallery"}></Header>
       <Text>{title}</Text>
       <Text>{photo}</Text>
       <Image source={{ uri:photo }} />
    
  
    </View>
  )
}
