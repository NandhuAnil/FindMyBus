import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function BookingLayout() {
  return (
    <>
      <Stack 
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.background,
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: true, headerTitle: "Search result" }} />
        <Stack.Screen name="busDetails" options={{ headerShown: true, headerTitle: "Route Info" }} />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}