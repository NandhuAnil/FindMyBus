import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function BookingLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: true }} />
        <Stack.Screen name="busDetails" options={{ headerShown: true }} />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}