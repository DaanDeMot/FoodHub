import React, { createContext } from 'react';
import { 
    DefaultTheme as NavigationDefaultTheme,
    DarkTheme as NavigationDarkTheme,
    NavigationContainer
  } from '@react-navigation/native';
  import { 
    Provider as PaperProvider, 
    DefaultTheme as PaperDefaultTheme,
    MD3DarkTheme as PaperDarkTheme, 
  } from 'react-native-paper';


export const AuthContext = createContext();


export const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }
  
  export const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  }



