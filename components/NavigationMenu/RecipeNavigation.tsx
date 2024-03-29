import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity, 
} from "react-native";
import { ShowIngredients } from "../Recipies/ShowIngredients";
import { RecipeLandingScreen } from "../../Screens/Recipes/RecipeScreen";
import { CategoryLandingScreen } from "../../Screens/Recipes/CategoryLandingScreen";
import { MealDetailScreen } from "../../Screens/Recipes/MealLandingScreen";
import { CameraScreen } from "../../Screens/CameraScreen/CameraScreen";
import { NavigationMenu } from "./NavigationMenu";
import { PictureScreen } from "../../Screens/PictureScreen/PictureScreen";

export function RecipeNavigation(){
  
const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Discover"
        component={RecipeLandingScreen}
        options={{ headerShown: false}}
        
      />
      <Stack.Screen
        name="Categorie"
        component={CategoryLandingScreen}
        options={{ headerShown: false }}
        
      />
      <Stack.Screen
        name="Meal"
        component={MealDetailScreen}
        options={{ headerShown: false }}
      />
    <Stack.Screen
        name="Ingredients"
        component={ShowIngredients}
        options={{ headerShown: false }}
      />

     <Stack.Screen
        name="Camera"
        component={CameraScreen}
        options={{ headerShown: false }}
      /> 

    <Stack.Screen
        name="Picture"
        component={PictureScreen}
        options={{ headerShown: false }}
      /> 
    </Stack.Navigator>
  )
}





