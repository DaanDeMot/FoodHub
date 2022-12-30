
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
import { Entypo } from '@expo/vector-icons'; 
import { ModalPopUp } from "../../components/ModalPopUp/ModalPopUp";




export function CategoryLandingScreen(){
    const navigation: any = useNavigation();
    const route: RouteProp<any> = useRoute();
    let imageUrl :string = route.params?.recipe.strCategoryThumb;

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
    
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
              <Entypo  onPress={()=>(toggleModal())} style={styles.info_icon} name="info-with-circle" size={40} color="rgba(0, 191, 255, 1)" />
        </View>

        <ModalPopUp isModalVisible={isModalVisible} 
      title={"Information"} 
      message={route.params?.recipe.strCategoryDescription} 
      toggleModal={toggleModal}></ModalPopUp> 
              
        <View>
           {ShowAllMealsFromCategory(route.params?.recipe.strCategory)}
        </View>
     
      </View>
    )
  }
  
  
const styles = StyleSheet.create({
  header: {
    backgroundColor: "rgba(0, 191, 255, 0.5)",
    height: 50,
    marginBottom: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1,
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
    description_container:{
      backgroundColor:"rgba(0, 191, 255, 0.5)",
      width:"90%",
      alignSelf:"center",
      borderRadius:15,
      padding: 3,
      paddingBottom:10,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.00,
      elevation: 1,
    },
    description_text:{
      color:"white",
      paddingTop:"2%",paddingBottom:"2%",
      paddingLeft:"5%",paddingRight:"5%"
    },
    info_icon:{
      position:"absolute",
      top:"200%",
      right:"33%",
    }
  });
  
  
  
  