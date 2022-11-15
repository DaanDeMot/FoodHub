import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity, 
} from "react-native";
interface CategoriesProps {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
}

interface MealProps {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}




export function ShowAllRecipies() {
  const navigation: any = useNavigation();
  const [recipes, setRecipes] = useState<CategoriesProps[]>([]);

  const GetAllCategories = async () => {
    let url = "https://www.themealdb.com/api/json/v1/1/categories.php";
    try {
      const response = await fetch(url);
      const json = await response.json();
      setRecipes(json.categories);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    GetAllCategories();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Recipes Categories : {recipes.length} </Text>
      <View style={{ height: "5%" }}>
        <ScrollView style={styles.CategorieScrollView} horizontal={true}>
          {recipes &&
            recipes.map((recipe, index) => (
              <TouchableOpacity
                style={styles.CategorieView}
                key={index}
                onPress={() =>navigation.navigate('Categorie', {recipe : recipe})}
              >
                <Text key={index}> {recipe.strCategory}</Text>
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    </View>
  );
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



