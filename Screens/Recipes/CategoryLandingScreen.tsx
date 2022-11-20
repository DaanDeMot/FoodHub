
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
import { Header } from "../../components/Header/Header";




export function CategoryLandingScreen(){
    const navigation: any = useNavigation();
    const route: RouteProp<any> = useRoute();
    let imageUrl :string = route.params?.recipe.strCategoryThumb ;
    
    return (
      <View> 

        <Header goBack={navigation.goBack} title={route.params?.recipe.strCategory + " recipes"}></Header>
        <View style={styles.header}>
        <Image  
                  style={styles.image}
                  source={{
                  uri: imageUrl
              }}
              />
        </View>
        <ScrollView>
          <View style={styles.description_container}>
            <Text style={styles.description_text}>{route.params?.recipe.strCategoryDescription}</Text>
        </View>
           {ShowAllMealsFromCategory(route.params?.recipe.strCategory)}
        </ScrollView>
     
      </View>
    )
  }
  
  
const styles = StyleSheet.create({
  header: {
    backgroundColor: "rgba(0, 191, 255, 0.5)",
    height: 50,
    marginBottom: 100,
  },
    image: { 
    width: 130,
    height: 130,
    borderWidth: 4,
    marginLeft: -15,
    borderColor: "white",
    alignSelf: "center",
    backgroundColor:"white",
    },
    app_header:{
      height:105,
      width:"100%",
      backgroundColor:"rgba(0, 191, 255, 0.5)",
      alignItems:"center",
    },
    title_header:{
      fontWeight:"bold",
      marginBottom:5,
      borderWidth:1,
      fontSize:25,
      color:"white",
    },
    back_icon:{
      alignSelf:"flex-start",
      borderWidth:1,
      marginTop:10,
    },
    description_container:{
      backgroundColor:"rgba(0, 191, 255, 0.5)",
      width:"90%",
      alignSelf:"center",
      borderRadius:15,
      padding: 3,
      paddingBottom:10,
    },
    description_text:{
      color:"white",
    },
  });
  
  
  
  