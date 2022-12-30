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

        setFavorites(result.map((favo, index) => {
        return JSON.parse(favo[1]!) as mealDataProps
      }));
      setMealKeys(keys);
      setLoading(false);
       }catch(error){
      console.log(error);
    }
  
  }

  const clearAll = async () => {
    try {
      await AsyncStorage.clear()
    } catch(e) {
    console.log(e)
    }
    console.log('Done.')
  }

  useFocusEffect(
    React.useCallback(() => {
      GetFavorites();
      console.log(favorites);
    } , [])
  )

    return (
        <View>
          <Header goBack={navigation.goBack}  title={favorites.length+ " Favorites."}></Header>
          {loading ?
          <Text> Loading</Text> :
          <ScrollView>
            <TouchableOpacity onPress={clearAll}>
              <Text>Clear Favorites </Text>
            </TouchableOpacity> 
            {favorites.map((favo, index) =>(
              <SingleRecipeButton key={index} meal={favo}></SingleRecipeButton>
            ) )}

          </ScrollView>
          }         
        </View>
      );
}


