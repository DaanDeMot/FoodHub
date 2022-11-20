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
import Ionicons from '@expo/vector-icons/Ionicons';

interface HeaderProps{
goBack:any,
title:string,
}

export const Header = ({goBack, title}:HeaderProps) => {
  return (
    <View style={styles.app_header}>
        <View style={styles.header_content}>
         <Ionicons name="arrow-back-circle-sharp" size={36} color="white" style={styles.back_icon} onPress={goBack}/>
        <Text style={styles.title_header}>{title} </Text><Text style={styles.title_header}>     </Text>
        </View>
        </View>
  )
}
const styles = StyleSheet.create({
    app_header:{
      height:75,
      width:"100%",
      backgroundColor:"rgba(0, 191, 255, 0.5)",
      justifyContent:"flex-end",
    },
    header_content:{
        height:50,
        flexDirection: "row", 
        justifyContent:"space-between",
    },
    title_header:{
      fontWeight:"bold",
      marginBottom:5,
      fontSize:25,
      color:"white",
    },
    back_icon:{
      alignSelf:"flex-start",
    },
    

  });
  