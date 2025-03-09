import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import Colors from "@/constants/Colors";
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <>
      <StatusBar backgroundColor={Colors.background} barStyle="dark-content" />
      <Stack initialRouteName="welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="+not-found" />
      </Stack>
    </>
  );
}
