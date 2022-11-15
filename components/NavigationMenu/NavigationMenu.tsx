import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../../Screens/Home/HomeScreen";
import { FavoriteScreen } from "../../Screens/Favorites/FavoriteScreen";
import { RecipeLandingScreen, RecipeScreen } from "../../Screens/Recipes/RecipeScreen";

const Tab = createBottomTabNavigator();

export const NavigationMenu = () => {
    return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Favorites" component={FavoriteScreen} />
        <Tab.Screen name="Recipes" component={RecipeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}