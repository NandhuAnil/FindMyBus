import { Stack, useRouter } from "expo-router";
import { StatusBar } from "react-native";
import Colors from "@/constants/Colors";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useAuth } from "@/store/authStore";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const init = async () => {
      await SplashScreen.hideAsync();
    };

    init();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/(home)/home");
    } else {
      router.replace("/(welcome)");
    }
  }, [isAuthenticated]);

  return (
    <>
      <StatusBar backgroundColor={Colors.background} barStyle="dark-content" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(home)" options={{ headerShown: false }} />
        <Stack.Screen name="(welcome)" options={{ headerShown: false }} />
        <Stack.Screen name="(buses)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </>
  );
}
