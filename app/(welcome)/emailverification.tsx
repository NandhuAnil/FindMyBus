import CustomOtpInput from "@/components/CustomOtpInput";
import Colors from "@/constants/Colors";
import Spacing from "@/constants/Spacing";
import { useAuth } from "@/store/authStore";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
const { height } = Dimensions.get("window");

export default function emailverification() {
  const { verifyEmail } = useAuth();
  const router = useRouter();
  const { email } = useLocalSearchParams<{ email?: string }>();
//   const [emailState, setEmailState] = useState(email || "example@gmail.com");
  
  const handleCodeFilled = async (code: string) => {
    try {
      if (!code) {
        ToastAndroid.show("Please enter the code", ToastAndroid.SHORT);
        return;
      }

      await verifyEmail(code);
      ToastAndroid.show("OTP Verified Successfully", ToastAndroid.SHORT);
      router.push('/(welcome)/login');
    } catch (error: any) {
      ToastAndroid.show(
        error.response?.data?.message || "Invalid OTP",
        ToastAndroid.SHORT
      );
    }
  };

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
            marginTop: 100,
            backgroundColor: "transparent",
          }}
          resizeMode="contain"
          source={require("../../assets/images/otpverify.png")}
        />
        <Text style={styles.heading}>Enter Verification Code</Text>
        <Text style={styles.description}>
          Please enter the code we just send to email
        </Text>
        <Text style={styles.email}>{email}</Text>
        <CustomOtpInput length={6} onCodeFilled={handleCodeFilled} />
        <View style={styles.Btn}>
          <Text style={[styles.description, { paddingHorizontal: 0 }]}>
            Don't receive the code?{" "}
          </Text>
          <TouchableOpacity>
            <Text style={styles.resendBtn}>Resend Code</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Spacing,
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
  email: {
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 30,
    color: Colors.primary,
  },
  resendBtn: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
    color: Colors.primary,
  },
  Btn: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
