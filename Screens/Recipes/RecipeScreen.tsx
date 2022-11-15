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
import { MealDetailScreen } from "./MealDetailScreen";
import { ShowIngredients } from "../../components/Recipies/ShowIngredients";

interface CategoriesProps {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
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
      <Stack.Screen
        name="Meal"
        component={MealDetailScreen}
        options={{ headerShown: true }}
      />

<Stack.Screen
        name="Ingredients"
        component={ShowIngredients}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  )
}





