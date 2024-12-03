import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import Spacing from "@/constants/Spacing";
import AppTextInput from "@/components/AppTextInput";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();
  const [isPasswordShown, setIsPasswordShown] = useState(false);
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
      <View
        style={{
          padding: Spacing * 2,
          marginTop: 20,
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              color: Colors.primary,
              fontWeight: 900,
              marginVertical: Spacing * 3,
            }}
          >
            Login here
          </Text>
          <Text
            style={{
              fontSize: 16,
              maxWidth: "60%",
              textAlign: "center",
            }}
          >
            Welcome back you've been missed!
          </Text>
        </View>
        <View
          style={{
            marginVertical: Spacing * 3,
          }}
        >
          <AppTextInput placeholder="Email" cursorColor={Colors.primary} />
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
        </View>

        <TouchableOpacity
          onPress={() => router.push("/welcome/otpverify")}
        >
          <Text
            style={{
              fontSize: 14,
              color: Colors.primary,
              alignSelf: "flex-end",
              textDecorationLine: 'underline'
            }}
          >
            Forgot your password ?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
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
              fontWeight: 'bold',
              letterSpacing: 1,
            }}
            >
            Sign in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/welcome/signup")}
          style={{
            padding: Spacing,
            backgroundColor: Colors.gray,
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
              color: Colors.text,
              textAlign: "center",
              fontSize: 14,
              fontWeight: 'bold',
            }}
          >
            Create new account
          </Text>
        </TouchableOpacity>

        <View
          style={{
            marginVertical: Spacing * 3,
          }}
        >
          <Text
            style={{
              color: Colors.primary,
              textAlign: "center",
              fontSize: 14,
            }}
          >
            Or continue with
          </Text>

          <View
            style={{
              marginTop: Spacing,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => router.push("/(home)/home")}
              style={{
                padding: Spacing,
                backgroundColor: Colors.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing,
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
              <Ionicons
                name="logo-google"
                color={Colors.text}
                size={Spacing * 2}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: Spacing,
                backgroundColor: Colors.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing,
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
              <Ionicons
                name="logo-apple"
                color={Colors.text}
                size={Spacing * 2}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: Spacing,
                backgroundColor: Colors.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing,
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
              <Ionicons
                name="logo-facebook"
                color={Colors.text}
                size={Spacing * 2}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
