import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

interface PhotoProps {
  title: string;
  uri: string;
}

export function GalleryScreen() {
  const navigation: any = useNavigation();

  const [keys, setKeys] = useState<readonly string[]>([]);
  const [pictures, setPictures] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const GetFavorites = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      console.log(keys);
      const photoKeys = keys.filter((key, i) => {
        if (key.includes("@Picture_")) {
          return key;
        }
      });
      setKeys(photoKeys);
      const result = await AsyncStorage.multiGet(photoKeys);
      console.log(result);
      setPictures(
        result.map((res, i) => {
          return res[1] as string;
        })
      );
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useFocusEffect(
    React.useCallback(() => {
      console.log("---------GalleryScreen---------");
      GetFavorites();
    }, [])
  );

  return (
    <View>
      <View style={styles.app_header}>
        <Text style={styles.title_header}>Gallery</Text>
      </View>
      <Text>Here you can see all of your taken photos of made recipes!</Text>
      {loading == false ? (
        <ScrollView>
          {pictures?.map((pic, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate("Picture", { title: keys[index] })
              }
            >
              <Image
                style={{ height: 200, resizeMode: "cover" }}
                source={{
                  uri: pic,
                }}
              />
              <Text>{keys[index]}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <View>
          <Text>Loading</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "50%",
    borderWidth: 1,
    width: "95%",
    alignItems: "center",
  },
  app_header: {
    height: 105,
    width: "100%",
    backgroundColor: "rgba(0, 191, 255, 0.5)",
    alignItems: "center",
  },
  title_header: {
    fontWeight: "bold",
    marginTop: 55,
    marginBottom: 5,
    fontSize: 25,
    color: "white",
  },
});
