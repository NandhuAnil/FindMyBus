import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';
import Colors from '@/constants/Colors';

export default function RootLayout() {
  return (
    <>
      <StatusBar backgroundColor={Colors.light.background} barStyle="dark-content" />
      <Stack
        initialRouteName='welcome'
        screenOptions={{ headerShown: false }}
      />
    </>
  );
}