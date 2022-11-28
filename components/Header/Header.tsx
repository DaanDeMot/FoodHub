import React, { useEffect, useState } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface HeaderProps {
  goBack: any;
  title: string;
}

export const Header = ({ goBack, title }: HeaderProps) => {
  return (
    <View style={styles.app_header}>
      <View style={styles.header_content}>
        <Ionicons
          name="arrow-back-circle-sharp"
          size={36}
          color="white"
          style={styles.back_icon}
          onPress={goBack}
        />
        <Text style={styles.title_header}>{title} </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  app_header: {
    height: 125,
    width: "100%",
    backgroundColor: "rgba(0, 191, 255, 0.5)",
    justifyContent: "flex-end",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  
  header_content: {
    height: 70,
    flexDirection: "row",

  },
  title_header: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    height:100,
    textAlign:"center",
    width:"80%",
    paddingBottom:"5%",
  },
  back_icon: {
    alignSelf: "flex-start",
    paddingLeft: 10,
  },
});
