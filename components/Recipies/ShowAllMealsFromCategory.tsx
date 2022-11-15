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
            <View style={styles.mealContainer} key={index}>
                <TouchableOpacity key={index} onPress={() => navigation.navigate("Meal", {meal : meal})}>
                    <Text key={index}>{meal.strMeal}</Text>
                </TouchableOpacity>
            </View>
        ))}
      </View>
      )
}

const styles = StyleSheet.create({
viewContainer:{
    flexDirection:"row",
    flex:1,
},

   mealContainer: {
    backgroundColor:"rgba(127, 183, 250, 0.2)",
      borderColor:"black",
      borderWidth:1,
      width:"95%",
      height:100,
      alignSelf: "center"
    }
  });