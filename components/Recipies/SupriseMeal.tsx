import React, { useEffect, useState } from "react";
import { View,Text, FlatList } from "react-native";
import { mealDataProps } from "../../Screens/Recipes/MealLandingScreen";
import { SingleRecipeButton } from "./SingleRecipeButton";


interface SingleRecipteButtonProps 
{
  meal:mealDataProps
}
export function SupriseMeal()
{
    const [RandomMeal,setRandomMeal] = useState<SingleRecipteButtonProps[]>([])

    const GetRandomMeal = async() => 
    {
        
        let url = "https://www.themealdb.com/api/json/v1/1/random.php"
        try
        {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.meals)
        setRandomMeal(json.meals)
        }
        catch (error) {
            console.error(error);
          }
        
          
        
    }

    useEffect(() => {
        GetRandomMeal()
      }, []);

 
       
   
    



    return(

       <View>


          
        {RandomMeal[0].meal.strMealThumb}
           
        </View>
               
        


    );
}