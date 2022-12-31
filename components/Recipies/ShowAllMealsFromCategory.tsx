import React, { useEffect, useState } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity, 
  Image,
  FlatList
} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { mealDataProps } from "../../Screens/Recipes/MealLandingScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SingleRecipeButton } from "./SingleRecipeButton";


export function ShowAllMealsFromCategory(categorie:string) {

    const [meals, setMeals] = useState<mealDataProps[]>([]);

    const GetAllMeals = async () => {
        let url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + categorie;
        try {
          const response = await fetch(url);
          const json = await response.json();
          setMeals(json.meals);
        } catch (error) {
          console.error(error);
        }
      };


      useEffect(() => {
        GetAllMeals();
      }, []);


      return(
          <FlatList
          data={meals}
          renderItem={({item}) => <SingleRecipeButton meal={item}></SingleRecipeButton>}
          ></FlatList>
      )
}

const styles = StyleSheet.create({
viewContainer:{
    flexDirection:"row",
    flex:1,
    borderWidth:1,
    width:"100%",
},
app_header:{
  height:105,
  width:"100%",
  backgroundColor:"rgba(0, 191, 255, 0.5)",
  alignItems:"center",
},
title_header:{
  fontWeight:"bold",
  marginTop:55,
  marginBottom:5,
  fontSize:25,
  color:"white",
},
meal_card:{
  shadowColor: '#00000021',
  shadowOffset: {
    width: 0,
    height: 6,
  },
  shadowOpacity: 0.37,
  shadowRadius: 7.49,
  elevation: 12,
  backgroundColor:"rgba(0, 191, 255, 0.5)",
  borderRadius:10,
  marginVertical: 10,
  marginHorizontal:20,
  flexBasis: '46%',
  padding: 10,
  flexDirection:'row'
},
cardContent: {
  marginLeft:20,
  marginTop:10,
  alignItems:"flex-start",
  width:"70%",
},
name:{
  fontSize:18,
  alignSelf:'flex-start',
  color:"white",
  fontWeight:'bold',
},
image:{
  width:90,
  height:90,
  borderRadius:45,
  borderWidth:3,
  borderColor:"white",
},
favo_icon:{
  alignSelf:'flex-end',
},
  });