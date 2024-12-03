import { Stack } from 'expo-router';

export default function WelcomeLayout() {
  return (
    <Stack
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="login" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="otpverify" options={{ headerShown: false, headerTitle: "Verifying you"}}/>
      <Stack.Screen name="newpass" options={{ headerShown: false, headerTitle: '' }} />
    </Stack>
  );
}
