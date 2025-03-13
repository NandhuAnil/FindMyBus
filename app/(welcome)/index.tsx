import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "@/constants/Colors";
import Spacing from "@/constants/Spacing";
import { useRouter } from "expo-router";

const { height } = Dimensions.get("window");

export default function WelcomeScreen() {

  const router = useRouter();
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
      <View>
        <ImageBackground
          style={{
            height: height / 2.5,
            marginTop: 100,
            backgroundColor: "transparent",
          }}
          resizeMode="contain"
          source={require("../../assets/images/main.png")}
        />
        <View
          style={{
            paddingHorizontal: Spacing * 4,
            paddingTop: Spacing * 4,
          }}
        >
          <Text
            style={{
              fontSize: 30,
              color: Colors.primary,
              textAlign: "center",
              fontWeight: "900",
            }}
          >
            Find your Bus
          </Text>

          <Text
            style={{
              fontSize: 14,
              color: Colors.text,
              textAlign: "center",
              marginTop: Spacing * 2,
            }}
          >
            Parking karooo makes parking effortless. Find, book, and secure your
            spot anytime, anywhere. Say goodbye to parking hassles and hello to
            convenience!
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: Spacing * 2,
            paddingTop: Spacing * 6,
            flexDirection: "row",
            gap: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => router.push("/(welcome)/login")}
            style={{
              backgroundColor: Colors.primary,
              paddingVertical: Spacing * 1.5,
              paddingHorizontal: Spacing * 2,
              width: "48%",
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
                fontSize: 16,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/(welcome)/signup")}
            style={{
              backgroundColor: Colors.gray,
              paddingVertical: Spacing * 1.5,
              paddingHorizontal: Spacing * 2,
              width: "48%",
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
                color: Colors.text,
                fontSize: 16,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
