import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableRipple, useTheme, Switch, Button } from "react-native-paper";
import { AuthContext } from "../../components/Theme/context";


export function SettingScreen (){
    const paperTheme = useTheme();
    const {toggleTheme} = React.useContext(AuthContext);
    //const { colors } = useTheme();
    //const theme = useTheme();
    return (
      <View style={styles.container}>
        
        <TouchableRipple onPress={() => {toggleTheme()}}>
          <View style={styles.preference}>
            <Text>Dark Theme</Text>
            <View pointerEvents="none">
              <Switch value={paperTheme.dark}/>
            </View>
          </View>
        </TouchableRipple>
  
      </View>
    );
  

}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

