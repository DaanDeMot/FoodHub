import React, { useEffect, useState } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, Button, TouchableOpacityBase, TouchableOpacity, FlatList, ScrollView} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { mealDataProps } from "../Recipes/MealLandingScreen";
import { SingleRecipeButton } from "../../components/Recipies/SingleRecipeButton";
import { Header } from "../../components/Header/Header";



export function FavoriteScreen() {

  const navigation = useNavigation();

  const [mealKeys, setMealKeys]  = useState<readonly string[]>([]);
  const [favorites, setFavorites] = useState<mealDataProps[]>([]);
  const [loading, setLoading] = useState(true);


  const GetFavorites = async() => {
    try{
      const keys = await AsyncStorage.getAllKeys();
      const result = await AsyncStorage.multiGet(keys);

      setFavorites(result.map((ktp, index) => {
        return JSON.parse(ktp[1]!) as mealDataProps
      }));
      setMealKeys(keys);
      setLoading(false);
      
    }catch(error){
      console.log(error);
    }
  
  }

  useFocusEffect(
    React.useCallback(() => {
      console.log("test");
      GetFavorites();
    } , [])
  )

    return (
        <View>
          <Header goBack={navigation.goBack}  title={"Favorites"}></Header>
          {loading ?
          <Text> Loading</Text> :
          <ScrollView>
            <TouchableOpacity>
              <Text>Aantal Favorites: {favorites.length} </Text>
            </TouchableOpacity> 
            {mealKeys.map((meal, index) => (
              <Text key={index}>{meal}</Text>
            ))}

            {favorites.map((favo, index) =>(
              <Text key={index}>{favo.strArea}</Text>
            ) )}

          </ScrollView>
          }
          

          
         
        </View>
      );
}


