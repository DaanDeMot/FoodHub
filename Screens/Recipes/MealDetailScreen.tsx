
import React, { useEffect, useState } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity, 
  Image,
  Button
} from "react-native";

interface mealDataProps {
    idMeal: string,
    strMeal: string,
    strCategory: string,
    strArea: string,
    strInstructions:string,
    strMealThumb: string,
    strTags?: string,
    strYoutube?: string,
    strIngredient1?: string,
    strIngredient2?: string,
    strIngredient3?: string,
    strIngredient4?: string,
    strIngredient5?:string,
    strIngredient6?: string,
    strIngredient7?:string,
    strIngredient8?:string,
    strIngredient9?:string,
    strIngredient10?:string,
    strIngredient11?:string,
    strIngredient12?:string,
    strIngredient13?:string,
    strIngredient14?:string,
    strIngredient15?:string,
    strIngredient16?:string,
    strIngredient17?:string,
    strIngredient18?:string,
    strIngredient19?: null,
    strIngredient20?: null,
    strMeasure1?:string,
    strMeasure2?:string,
    strMeasure3?:string,
    strMeasure4?:string,
    strMeasure5?:string,
    strMeasure6?:string,
    strMeasure7?:string,
    strMeasure8?:string,
    strMeasure9?:string,
    strMeasure10?:string,
    strMeasure11?:string,
    strMeasure12?:string,
    strMeasure13?:string,
    strMeasure14?:string,
    strMeasure15?:string,
    strMeasure16?: null,
    strMeasure17?: null,
    strMeasure18?: null,
    strMeasure19?: null,
    strMeasure20?: null,
    strSource?: null,
    strImageSource?: null,
    strCreativeCommonsConfirmed?: null,
    dateModified?: null
}


export function MealDetailScreen() {

    const [mealData, setMealData] = useState<mealDataProps[]>([]);

    const navigation: any = useNavigation();
    const route: RouteProp<any> = useRoute();
    let mealId = route.params?.meal.idMeal;
    
    

    const GetAllMeals = async () => {
        let url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealId;
        try {
          const response = await fetch(url);
          const json = await response.json();
          setMealData(json.meals);
        } catch (error) {
          console.error(error);
        }
      };
      useEffect(() => {
        GetAllMeals();
      }, []);

    
    return(

        <View>
          
    {mealData &&
    mealData.map((item,index) => (
      <ScrollView key={index}>
        <View>
          <Text>{item.strMeal}</Text>
          <Image  
                  style={styles.image}
                  source={{
                  uri: item.strMealThumb
              }}
              />
          <Text>Area   : {item.strArea}</Text>
          <Text>Category  :  { item.strCategory}</Text>
          <Button title="Ingredients" onPress={() => navigation.navigate('Ingredients', {item: item})}></Button>
          </View>
          <View>
          <Text>Instructions</Text>
            <Text>{item.strInstructions}</Text>
            </View>
      </ScrollView>
    ))
    }
        </View>
    );

}


const styles = StyleSheet.create({
  image: { 
    height: 100, 
    resizeMode: 'contain',
    borderColor:"black",
    borderWidth:1,
  }
});



