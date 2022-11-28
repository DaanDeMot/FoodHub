import React, { useEffect, useState } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { Header } from "../../components/Header/Header";
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface mealDataProps {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags?: string;
  strYoutube?: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
  strIngredient8?: string;
  strIngredient9?: string;
  strIngredient10?: string;
  strIngredient11?: string;
  strIngredient12?: string;
  strIngredient13?: string;
  strIngredient14?: string;
  strIngredient15?: string;
  strIngredient16?: string;
  strIngredient17?: string;
  strIngredient18?: string;
  strIngredient19?: null;
  strIngredient20?: null;
  strMeasure1?: string;
  strMeasure2?: string;
  strMeasure3?: string;
  strMeasure4?: string;
  strMeasure5?: string;
  strMeasure6?: string;
  strMeasure7?: string;
  strMeasure8?: string;
  strMeasure9?: string;
  strMeasure10?: string;
  strMeasure11?: string;
  strMeasure12?: string;
  strMeasure13?: string;
  strMeasure14?: string;
  strMeasure15?: string;
  strMeasure16?: null;
  strMeasure17?: null;
  strMeasure18?: null;
  strMeasure19?: null;
  strMeasure20?: null;
  strSource?: null;
  strImageSource?: null;
  strCreativeCommonsConfirmed?: null;
  dateModified?: null;
  favoriteIconColor?:string,
}

export function MealDetailScreen() {

  const [mealData, setMealData] = useState<mealDataProps[]>([]);
  const [favoColor, setFavoColor] = useState("white");

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

  const ToggleMealFavorite = async (meal : mealDataProps) => {
    if( await AsyncStorage.getItem(meal.strMeal) == null){
      await AsyncStorage.setItem( meal.strMeal, JSON.stringify(meal), 
      () =>  setFavoColor('yellow'));
    }
    else{
      await AsyncStorage.removeItem( meal.strMeal, 
      ()=> (
        setFavoColor('white')
      ));
    }
  }

  const SetColorFavoriteIcon = async(meal : mealDataProps) => {
    var MealAlreadySavedInLocalStorage = await AsyncStorage.getItem(meal.strMeal); 
    if( MealAlreadySavedInLocalStorage == null){
          setFavoColor('white');
    } else{
          setFavoColor('yellow');
    }
  }


  useEffect(() => {
    GetAllMeals();
  }, []);

  return (
    <View>
      {mealData &&
        mealData.map((item, index) => (
          SetColorFavoriteIcon(item),
          <ScrollView key={index}>
            <Header goBack={navigation.goBack} title={item.strMeal}></Header>
              <View style={styles.meal_header}>
                <Text style={styles.meal_area}>{item.strArea}</Text>
                <Image
                  style={styles.image}
                  source={{
                    uri: item.strMealThumb,
                  }}
                />

                <AntDesign style={styles.meal_favo} name="staro" size={30} color={favoColor} onPress={() => ( ToggleMealFavorite(item))} />

                <Text style={styles.meal_category}>{item.strCategory}</Text>
              </View>

              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  navigation.navigate("Ingredients", { item: item })}>
                <Text style={styles.button_label}>Ingredients</Text>
              </TouchableOpacity>
            <View style={styles.meal_content}>
              <Text style={styles.meal_instructions}>Instructions</Text>
              <Text>{item.strInstructions}</Text>
            </View>
          </ScrollView>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  meal_header: {
    backgroundColor: "rgba(0, 191, 255, 0.5)",
    height: 50,
    marginBottom: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.18,
shadowRadius: 1.00,

elevation: 1,
  },
  meal_content:{
    width:"90%",
    alignSelf:"center",
    marginTop:20,
  },
  meal_area: {
    color: "white",
    width: "20%",
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 5,
    alignSelf: "flex-end",
  },
  meal_category: {
    color: "white",
    width: "20%",
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 5,
    alignSelf: "flex-end",
  },
  meal_favo:{
    position:"absolute",
    bottom:65,
    right:15,
  },
  image: {
    width: 130,
    height: 130,
    borderWidth: 4,
    marginTop: 100,
    marginLeft: -15,
    borderColor: "white",
    alignSelf: "center",
  },
  meal_instructions:{
    fontSize:20,
    fontWeight:"bold",
    marginBottom:5,
    color:"rgba(0, 191, 255, 0.5)",
  },
  button: {
    backgroundColor: "rgba(0, 191, 255, 0.5)",
    borderRadius: 50,
    height: 50,
    width: "30%",
    justifyContent: "center",
    alignSelf: "center",
  },
  button_label: {
    color: "white",
    alignSelf: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
