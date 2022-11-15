
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
import { ShowAllMealsFromCategory } from "../../components/Recipies/ShowAllMealsFromCategory";



export function CategoryDetailScreen(){
    const route: RouteProp<any> = useRoute();
    let imageUrl :string = route.params?.recipe.strCategoryThumb ;
    
    return (
      <View> 
        <ScrollView>
        <Text> {route.params?.recipe.strCategory}</Text>
        <Image  
                  style={styles.image}
                  source={{
                  uri: imageUrl
              }}
              />
        <Text> {route.params?.recipe.strCategoryDescription}</Text>
           {ShowAllMealsFromCategory(route.params?.recipe.strCategory)}
        </ScrollView>
     
      </View>
    )
  }
  
  
const styles = StyleSheet.create({
    image: { 
      height: 100, 
      resizeMode: 'contain',
      borderColor:"black",
      borderWidth:1,
    }
  });
  
  
  
  