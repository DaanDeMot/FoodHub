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
import { CategoryDetailScreen } from "./CategoryDetailScreen";
import { ShowAllRecipies } from "../../components/Recipies/ShowAllRecipies";

interface CategoriesProps {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
}

interface MealProps {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}



export function RecipeScreen(){
  
const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Discover"
        component={ShowAllRecipies}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Categorie"
        component={CategoryDetailScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  )
}





