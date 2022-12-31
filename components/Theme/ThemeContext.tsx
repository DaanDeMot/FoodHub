import React,{useCallback, useContext, useMemo, useState} from "react";
import { View, Button, useColorScheme } from "react-native";
import {
    Provider as PaperProvider,
    MD3DarkTheme as PaperDarkTheme,
    DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper'

import {NavigationContainer, DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme} from '@react-navigation/native'

const lightTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
        ...NavigationDefaultTheme.colors,
        ...PaperDefaultTheme.colors,
        background : '#ffffff',
        text : '#333333'
    },
};

const darkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
        ...NavigationDarkTheme.colors,
        ...PaperDarkTheme.colors,
        background : '#333333',
        text : '#ffffff'
    },
};

export type Theme = typeof lightTheme;

export type ThemeType = 'dark' | 'light';

export interface ThemeContextValue {
    theme: Theme;
    themeType: ThemeType;
    isDarkTheme: boolean;
    toggelThemeType: () => void;
    setThemeType: React.Dispatch<React.SetStateAction<ThemeType>>;
}

export const ThemeContext = React.createContext<ThemeContextValue>({
    theme : lightTheme,
    themeType: 'light',
    isDarkTheme: false,
    setThemeType: () => {},
    toggelThemeType: () => {}
});

export const useTheme = () => useContext(ThemeContext);

export interface ThemeContextProviderProps {
    children: React.ReactNode;
}

export const ThemeContextProvider = ({children}: ThemeContextProviderProps) => {
    const colorScheme = useColorScheme();
    const [themeType, setThemeType] = useState<ThemeType> (colorScheme|| 'light');
    

    const toggelThemeType = useCallback(() => {
        setThemeType(prev => (prev === 'dark' ? 'light' : 'dark'));
        
    }, []);

    const isDarkTheme = useMemo(() => themeType === 'dark', [themeType]);

    const theme = useMemo(
        () => (isDarkTheme ? darkTheme : lightTheme), 
        [isDarkTheme],
    );

    return (
            <PaperProvider theme={theme}>
                <ThemeContext.Provider
                value={{
                    theme,
                    themeType,
                    isDarkTheme,
                    setThemeType,
                    toggelThemeType,
                }}>
                    {children}
                </ThemeContext.Provider>
            </PaperProvider>
        
    )
}
