import React from 'react'
import { View, Text, Button} from 'react-native'
import { useNavigation } from "@react-navigation/native";

export function FavoriteScreen() {

  const navigation : any = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Favorites!</Text>
        </View>
      );
}