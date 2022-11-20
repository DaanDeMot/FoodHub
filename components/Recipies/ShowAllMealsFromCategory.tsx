import React, { useEffect, useState } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity, 
  Image
} from "react-native";



interface MealProps {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strInstructions:string,
    strArea:string;
  }
  
  

export function ShowAllMealsFromCategory(categorie:string) {
    const navigation: any = useNavigation();
    const [meals, setMeals] = useState<MealProps[]>([]);


    const GetAllMeals = async () => {
        let url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + categorie;
        try {
          const response = await fetch(url);
          const json = await response.json();
          setMeals(json.meals)
        } catch (error) {
          console.error(error);
        }
      };
      useEffect(() => {
        GetAllMeals();
      }, []);

      return(
        <View style={{flexDirection: "column", flex: 1, justifyContent: "flex-start", alignItems: "stretch"}}>
        {meals && 
        meals.map((meal, index) => (
                <TouchableOpacity  style={styles.meal_card} key={index} onPress={() => navigation.navigate("Meal", {meal : meal})}>
                   <Image style={styles.image} source={{uri: meal.strMealThumb}}/>
                   <View style={styles.cardContent}>
                    <Text style={styles.name}>{meal.strMeal}</Text>
                    </View>
                </TouchableOpacity>
        ))}
      </View>
      )
}

const styles = StyleSheet.create({
viewContainer:{
    flexDirection:"row",
    flex:1,
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
},
name:{
  fontSize:18,
  flex:1,
  alignSelf:'center',
  color:"white",
  fontWeight:'bold'
},
image:{
  width:90,
  height:90,
  borderRadius:45,
  borderWidth:3,
  borderColor:"white",
},
  });