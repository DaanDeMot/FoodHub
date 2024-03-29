import React, { useEffect, useState } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { mealDataProps } from "../../Screens/Recipes/MealLandingScreen";

interface SingleRecipteButtonProps {
  meal: mealDataProps;
}

export const SingleRecipeButton = ({meal}: SingleRecipteButtonProps) => {
  const navigation: any = useNavigation();
  return (
    <TouchableOpacity
      style={styles.meal_card}
      onPress={() => navigation.navigate("Meal", { meal: meal })}>
      <Image style={styles.image} source={{ uri: meal.strMealThumb }} />
      <View style={styles.cardContent}>
        <Text style={styles.name}>{meal.strMeal}</Text>
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: "row",
    flex: 1,
  },
  app_header: {
    height: 105,
    width: "100%",
    backgroundColor: "rgba(0, 191, 255, 0.5)",
    alignItems: "center",
  },
  title_header: {
    fontWeight: "bold",
    marginTop: 55,
    marginBottom: 5,
    fontSize: 25,
    color: "white",
  },
  meal_card: {
    shadowColor: "#00000021",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    backgroundColor: "rgba(0, 191, 255, 0.5)",
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    flexBasis: "46%",
    padding: 10,
    flexDirection: "row",
  },
  cardContent: {
    marginLeft: 20,
    marginTop: 10,
    alignItems: "flex-start",
    width: "70%",
  },
  name: {
    fontSize: 18,
    alignSelf: "flex-start",
    color: "white",
    fontWeight: "bold",
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: "white",
  },
  favo_icon: {
    alignSelf: "flex-end",
  },
});
