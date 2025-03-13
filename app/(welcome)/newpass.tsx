import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Spacing from "@/constants/Spacing";
import AppTextInput from "@/components/AppTextInput";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
const { height } = Dimensions.get("window");

const newpass = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isPasswordShown1, setIsPasswordShown1] = useState(false);
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: Colors.primary,
          opacity: 0.1,
          width: 350,
          height: 350,
          position: "absolute",
          right: "-20%",
          top: -140,
          borderRadius: 200,
        }}
      ></View>
      <View
        style={{
          opacity: 0.1,
          width: 400,
          height: 400,
          position: "absolute",
          right: "-15%",
          top: -160,
          borderRadius: 200,
          borderColor: Colors.primary,
          borderWidth: 2,
        }}
      ></View>
      <View style={styles.container}>
        <ImageBackground
          style={{
            height: height / 2.5,
            marginTop: 30,
            backgroundColor: "transparent",
          }}
          resizeMode="contain"
          source={require("../../assets/images/newpassword.png")}
        />
        <Text style={styles.heading}>New Password</Text>
        <Text style={styles.description}>
          Your new password must be different from previously used passwords.
        </Text>
        <View>
          <AppTextInput
            placeholder="Password"
            secureTextEntry={!isPasswordShown}
            cursorColor={Colors.primary}
          />
          <TouchableOpacity
            onPress={() => setIsPasswordShown(!isPasswordShown)}
            style={{
              position: "absolute",
              right: 12,
              marginVertical: Spacing * 3,
            }}
          >
            {isPasswordShown ? (
              <Ionicons name="eye-off" size={24} color={Colors.text} />
            ) : (
              <Ionicons name="eye" size={24} color={Colors.text} />
            )}
          </TouchableOpacity>
        </View>
        <View>
          <AppTextInput
            placeholder="Confirm Password"
            secureTextEntry={!isPasswordShown1}
            cursorColor={Colors.primary}
          />
          <TouchableOpacity
            onPress={() => setIsPasswordShown1(!isPasswordShown1)}
            style={{
              position: "absolute",
              right: 12,
              marginVertical: Spacing * 3,
            }}
          >
            {isPasswordShown1 ? (
              <Ionicons name="eye-off" size={24} color={Colors.text} />
            ) : (
              <Ionicons name="eye" size={24} color={Colors.text} />
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity
            style={{
              padding: Spacing * 1.5,
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
                fontSize: 16,
                fontWeight: 'bold',
                letterSpacing: 0.8,
              }}
              >
              Create New Password
            </Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default newpass;

const styles = StyleSheet.create({
  container: {
    padding: Spacing * 2,
    // backgroundColor: Colors.background,
  },
  heading: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 30,
  },
});
