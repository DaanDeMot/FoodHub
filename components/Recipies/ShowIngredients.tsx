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
import { Header } from "../Header/Header";

export function ShowIngredients(){
    const route: RouteProp<any> = useRoute();
    const navigation: any = useNavigation();

    const ShowIngredients = () => {
        for (let i = 1; i < 20; i++){
            let newString:string = "route.params?.item.strIngredient"+ i;
            console.log(newString)
            return (
            route.params?.item.strIngredient + i != null ? 
            <Text>{route.params?.item.strIngredient+i} - {route.params?.item.strMeasure+i}</Text>
            :<Text></Text>
            );
        }
    }

    return(
        <ScrollView>
            <Header goBack={navigation.goBack} title={"Ingredients"}></Header>
            <View style={styles.container}>
            {ShowIngredients()}
            {route.params?.item.strIngredient1 != null ? 
            <Text>{route.params?.item.strIngredient1} - {route.params?.item.strMeasure1}</Text>
            :<Text></Text>}
            <Text>{route.params?.item.strIngredient1} - {route.params?.item.strMeasure1}</Text>
            <Text>{route.params?.item.strIngredient2} - {route.params?.item.strMeasure2}</Text>
            <Text>{route.params?.item.strIngredient3} - {route.params?.item.strMeasure3}</Text>
            <Text>{route.params?.item.strIngredient4} - {route.params?.item.strMeasure4}</Text>
            <Text>{route.params?.item.strIngredient5} - {route.params?.item.strMeasure5}</Text>
            <Text>{route.params?.item.strIngredient6} - {route.params?.item.strMeasure6}</Text>
            <Text>{route.params?.item.strIngredient7} - {route.params?.item.strMeasure}</Text>
            <Text>{route.params?.item.strIngredient8} - {route.params?.item.strMeasure8}</Text>
            <Text>{route.params?.item.strIngredient9} - {route.params?.item.strMeasure9}</Text>
            <Text>{route.params?.item.strIngredient10} - {route.params?.item.strMeasure10}</Text>
            <Text>{route.params?.item.strIngredient11} - {route.params?.item.strMeasure11}</Text>
            <Text>{route.params?.item.strIngredient12} - {route.params?.item.strMeasure12}</Text>
            <Text>{route.params?.item.strIngredient13} - {route.params?.item.strMeasure13}</Text>
            <Text>{route.params?.item.strIngredient14} - {route.params?.item.strMeasure14}</Text>
            <Text>{route.params?.item.strIngredient15} - {route.params?.item.strMeasure15}</Text>
            <Text>{route.params?.item.strIngredient16} - {route.params?.item.strMeasure16}</Text>
            <Text>{route.params?.item.strIngredient17} - {route.params?.item.strMeasure17}</Text>
            <Text>{route.params?.item.strIngredient18} - {route.params?.item.strMeasure18}</Text>
            <Text>{route.params?.item.strIngredient19} - {route.params?.item.strMeasure19}</Text>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        width:"95%",
        alignItems:"center"
    }

  });
  