import {
  SafeAreaView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Spacing from "@/constants/Spacing";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { useRouter } from "expo-router";
import { useAuth } from "@/store/authStore";

const profile = () => {
  const router = useRouter();
  const { logout } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
      ToastAndroid.show("Logged out successfully!", ToastAndroid.SHORT);
      router.replace("/(welcome)");
    } catch (err) {
      ToastAndroid.show("Error logging out", ToastAndroid.SHORT);
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons
              name="arrow-back-circle-outline"
              size={38}
              color={Colors.darkText}
            />
          </TouchableOpacity>
          <Text style={styles.headText}>Profile</Text>
        </View>
          <TouchableOpacity
            onPress={handleLogout}
            style={{
              padding: Spacing * 2,
              backgroundColor: Colors.button,
              marginVertical: Spacing * 3,
              borderRadius: Spacing,
              shadowColor: Colors.text,
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.25,
              shadowRadius: 6,
              elevation: 6,
              opacity: 0.9,
            }}
          >
            <Text
              style={{
                color: Colors.background,
                textAlign: "center",
                fontSize: 18,
                fontWeight: "bold",
                letterSpacing: 1,
              }}
            >
              
              logout
            </Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    padding: Spacing * 2,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  headText: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: "33%",
  },
});
