import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList, 
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

interface CategoriesProps {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
}



export function ShowAllCategories() {
  const navigation: any = useNavigation();
  const [categories, setCategories] = useState<CategoriesProps[]>([]);

  const GetAllCategories = async () => {
    let url = "https://www.themealdb.com/api/json/v1/1/categories.php";
    try {
      const response = await fetch(url);
      const json = await response.json();
      setCategories(json.categories);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    GetAllCategories();
  }, []);

  return (
    <View style={styles.app_container}>
      <View style={styles.app_header}>
        <Text style={styles.title_subheader}>Recipes Categories : {categories.length} </Text>
      </View>
       <FlatList
          contentContainerStyle={styles.category_container}
            data={categories}
            renderItem={({item, index}) => 
              <TouchableOpacity style={styles.categorie}
              key={index}
              onPress={() =>navigation.navigate('Categorie', {recipe : item}, { title: 'Custom profile header' })}>
                <Text style={styles.categorie_title}> {item.strCategory}</Text>
              </TouchableOpacity>}
            numColumns={2}
            key={2}
       />
    </View>
  );
}

const styles = StyleSheet.create({
  app_container:{
    alignItems: "center",
    alignSelf:"center",
    borderWidth:4,
    borderRadius:10,
    borderColor:"rgba(0, 191, 255, 0.8)",
    marginTop:25,
    width:"90%",
    height:250,
    
  },
  app_header:{
    width:"100%",
    height:35,
    borderColor:"rgba(0, 191, 255, 0.5)",
    backgroundColor:"rgba(0, 191, 255, 0.5)",
    alignItems:"center",
  },
  category_container: {

  },
  title_subheader:{
    fontWeight:"bold",
    marginTop:2,
    marginBottom:5,
    fontSize:16,
    color:"white",
  },
  categorie: {
    height:50,
    width:'45%',
    marginLeft:"3%",
    marginTop:10,
    marginBottom:10,
    backgroundColor:"rgba(0, 191, 255, 0.5)",
    borderRadius:5,
    color:"white",
    alignItems:"center",
    justifyContent: 'center',
    
  },
  categorie_title:{
    textTransform:"uppercase",
    color:"white",
    fontWeight:"bold"
  },
  
})



