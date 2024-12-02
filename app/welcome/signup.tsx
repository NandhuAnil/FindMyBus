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

export default function SignupPage() {
  const router = useRouter();
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isPasswordShown1, setIsPasswordShown1] = useState(false);
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: Colors.light.tint,
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
          borderColor: Colors.light.tint,
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
              color: Colors.light.tint,
              fontWeight: 700,
              marginVertical: Spacing * 3,
            }}
          >
            Create account
          </Text>
          <Text
            style={{
              fontSize: 16,
              maxWidth: "60%",
              textAlign: "center",
            }}
          >
            Create an account to reduce your Time
          </Text>
        </View>
        <View
          style={{
            marginVertical: Spacing * 3,
          }}
        >
          <AppTextInput placeholder="Email" cursorColor={Colors.light.tint} />
          <View>
            <AppTextInput
              placeholder="Password"
              secureTextEntry={!isPasswordShown}
              cursorColor={Colors.light.tint}
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
                <Ionicons name="eye-off" size={24} color={Colors.light.text} />
              ) : (
                <Ionicons name="eye" size={24} color={Colors.light.text} />
              )}
            </TouchableOpacity>
          </View>
          <View>
            <AppTextInput
              placeholder="Confirm Password"
              secureTextEntry={!isPasswordShown1}
              cursorColor={Colors.light.tint}
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
                <Ionicons name="eye-off" size={24} color={Colors.light.text} />
              ) : (
                <Ionicons name="eye" size={24} color={Colors.light.text} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={{
            padding: Spacing * 2,
            backgroundColor: Colors.light.button,
            marginVertical: Spacing * 3,
            borderRadius: Spacing,
            shadowColor: Colors.light.text,
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.25,
            shadowRadius: 6,
            elevation: 6,
            opacity: 0.9,
            marginTop: -10,
          }}
        >
          <Text
            style={{
              color: Colors.light.background,
              textAlign: "center",
              fontSize: 18,
              fontWeight: 'bold',
              letterSpacing: 1,
            }}
            >
            Sign up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/welcome/login")}
          style={{
            padding: Spacing,
            backgroundColor: Colors.light.gray,
            shadowColor: Colors.light.text,
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
              color: Colors.light.text,
              textAlign: "center",
              fontSize: 14,
              fontWeight: 'bold',
            }}
          >
            Already have an account
          </Text>
        </TouchableOpacity>

        <View
          style={{
            marginVertical: Spacing * 3,
          }}
        >
          <Text
            style={{
              color: Colors.light.tint,
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
              style={{
                padding: Spacing,
                backgroundColor: Colors.light.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing,
                shadowColor: Colors.light.text,
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
                color={Colors.light.text}
                size={Spacing * 2}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: Spacing,
                backgroundColor: Colors.light.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing,
                shadowColor: Colors.light.text,
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
                color={Colors.light.text}
                size={Spacing * 2}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: Spacing,
                backgroundColor: Colors.light.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing,
                shadowColor: Colors.light.text,
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
                color={Colors.light.text}
                size={Spacing * 2}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
