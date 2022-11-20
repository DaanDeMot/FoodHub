import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../../Screens/Home/HomeScreen";
import { FavoriteScreen } from "../../Screens/Favorites/FavoriteScreen";
import { RecipeNavigation } from "./RecipeNavigation";

const Tab = createBottomTabNavigator();

export const NavigationMenu = () => {
    return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Favorites" component={FavoriteScreen} options={{ headerShown: false }}  />
        <Tab.Screen name="Recipes" component={RecipeNavigation}  options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}