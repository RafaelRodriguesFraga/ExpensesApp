import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import Routes from "./src/routes/index.routes";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Inter_900Black,
  Inter_400Regular,
} from "@expo-google-fonts/inter";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_400Regular,
  });

  const preapreFont = async () => {
    await SplashScreen.preventAutoHideAsync();
  };

  useEffect(() => {
    preapreFont();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return <Routes />;
}
