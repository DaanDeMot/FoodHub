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
import { CategoryLandingScreen } from "./CategoryLandingScreen";
import { ShowAllCategories } from "../../components/Recipies/ShowAllCategories";
import { MealDetailScreen } from "./MealLandingScreen";
import { ShowIngredients } from "../../components/Recipies/ShowIngredients";

export function RecipeLandingScreen() {
  return(
    <View>
        <View style={styles.app_header}>
        <Text style={styles.title_header}>Discover recipes </Text>
        </View>
      <ShowAllCategories></ShowAllCategories>
      
    </View>
  )

}

const styles = StyleSheet.create({
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
  title_subheader:{
    fontWeight:"bold",
    marginTop:2,
    marginBottom:5,
    fontSize:13,
    color:"white",
  }
})





