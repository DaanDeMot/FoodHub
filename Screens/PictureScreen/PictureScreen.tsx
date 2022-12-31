import React, { useEffect, useState } from 'react'
import { View, Text, Image, Button } from 'react-native'
import { Header } from '../../components/Header/Header';
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { photoObjectProps } from '../../components/Camera/GetCamera';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from "@react-navigation/native";

export const PictureScreen = () => {
  
  const navigation : any = useNavigation();
  const route: RouteProp<any> = useRoute();

  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);
  
  const getMyStringValue = async () => {
    setLoading(true)
    setTitle(route.params?.title)
    const tmp : string[] = route.params?.title;
    let tit = route.params?.title
    const prefix : string ="@Recipe_" 
   if(!tmp.includes("@Recipe_")){
      tit = prefix+tit;
   }
    console.log(tit)
    try {
      const result =  await AsyncStorage.getItem(tit);
      console.log(result)
      setPhoto(result);
    } catch(e) {
      console.log(e);
    }
    setLoading(false);
  }

  useFocusEffect(
    React.useCallback(() => {
      console.log("---------PictureScreen---------");
      getMyStringValue();
    }, [])
  );


  return (
    <View style={{alignItems: "stretch", flex: 1}}>
    <Header goBack={navigation.goBack}  title={"Your picture"}></Header>
       {loading ? 
        <View>
         <Text>Loading</Text>
        </View> 
        :
        <View>
          <Text>{title}</Text>
          {photo != null ? 
          <Image
          style={{ height: 600, resizeMode: "cover" }}
          source={{
            uri: photo,
          }}
        />
        : <Text>Loading</Text>}
        </View> }

       <Button 
        title='Gallery'
        onPress={() => { navigation.navigate('Gallery')}}
        ></Button>
    </View>
  )
}
