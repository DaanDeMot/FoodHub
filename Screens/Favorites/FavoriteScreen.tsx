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
      console.log('keys');
      console.log(keys);
      const mealKeys = keys.filter((key, i) => {
        if (key.includes("@Recipe_")) {
          return key;
        }
      });
      const result = await AsyncStorage.multiGet(mealKeys);
        setFavorites(result.map((favo, index) => {
        return JSON.parse(favo[1]!) as mealDataProps
      }));
      setMealKeys(mealKeys);
       }catch(error){
      console.log(error);
    }
    setLoading(false);
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
      console.log('---------FavoriteScreen----.')
      GetFavorites();
    } , [])
  )

    return (
        <View>
          <Header goBack={navigation.goBack}  title={favorites.length+ " Favorites."}></Header>
          <TouchableOpacity onPress={clearAll}>
              <Text>Clear Favorites </Text>
            </TouchableOpacity> 
          {loading?
          <Text> Loading</Text> :
          <ScrollView>
     
            {favorites.map((favo, index) =>(
              <SingleRecipeButton key={index} meal={favo}></SingleRecipeButton>
            ) )}

          </ScrollView>
          }         
        </View>
      );
}


