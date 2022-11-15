
import React from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity, 
  Image
} from "react-native";

export function CategoryDetailScreen(){
    const route: RouteProp<any> = useRoute();
    let imageUrl :string = route.params?.recipe.strCategoryThumb ;
    console.log(imageUrl);
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
        </ScrollView>
      </View>
    )
  }
  
  
const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      backgroundColor: "#6804CD",
      width: "100%",
      height: 30,
    },
    text: {
      color: "#ffffff",
      fontWeight: "bold",
    },
    CategorieScrollView: {},
    CategorieView: {
      height: 25,
      borderWidth: 1,
      width: 85,
      textAlign: "center",
      borderColor: "black",
    },
    image: { 
      height: 100, 
      resizeMode: 'contain',
      borderColor:"black",
      borderWidth:1,
    }
  });
  
  
  
  