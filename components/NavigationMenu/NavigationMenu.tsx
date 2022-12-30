import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GalleryScreen } from "../../Screens/Gallery/GalleryScreen";
import { FavoriteScreen } from "../../Screens/Favorites/FavoriteScreen";
import { RecipeNavigation } from "./RecipeNavigation";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export const NavigationMenu = () => {
    return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Gallery" component={GalleryScreen}   options={{
          headerShown: false,
          tabBarLabel: 'Gallery',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="camera" size={30} color="rgba(0, 191, 255, 0.5)" />
            )}
          } />
        <Tab.Screen name="Favorites" component={FavoriteScreen} options={{
          headerShown: false,
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="star" size={30} color="rgba(0, 191, 255, 0.5)"  />
            )}
          }   />
        <Tab.Screen name="Recipes" component={RecipeNavigation}  options={{
          headerShown: false,
          tabBarLabel: 'Recipes',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="food" size={30} color="rgba(0, 191, 255, 0.5)" />
            )}
          }  />
      </Tab.Navigator>
    </NavigationContainer>
  );
}