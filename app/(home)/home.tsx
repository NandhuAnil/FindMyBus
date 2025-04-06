import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/Colors";
import Spacing from "@/constants/Spacing";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppTextInput from "@/components/AppTextInput";
import { useRouter } from "expo-router";

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

const home = () => {
  const username = "ExampleUser";
  const router = useRouter();
  const [start, setStart] = useState<string>("");
  const [end, setEnd] = useState<string>("");

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            borderColor: Colors.background,
            opacity: 0.1,
            width: 200,
            height: 200,
            position: "absolute",
            right: "-10%",
            top: -100,
            borderRadius: 200,
            borderWidth: 5,
            zIndex: 200,
          }}
        ></View>
        <View
          style={{
            borderColor: Colors.background,
            opacity: 0.1,
            width: 350,
            height: 350,
            position: "absolute",
            right: "-30%",
            top: -180,
            borderRadius: 200,
            borderWidth: 10,
            zIndex: 200,
          }}
        ></View>
        <View
          style={{
            opacity: 0.1,
            width: 400,
            height: 400,
            position: "absolute",
            right: "-25%",
            top: -200,
            borderRadius: 200,
            borderColor: Colors.background,
            borderWidth: 2,
            zIndex: 200,
          }}
        ></View>
        <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
        <View style={styles.container}>
          <View style={styles.header}>
            <View>
              <Text style={styles.introText}>Welcome</Text>
              <Text style={styles.userText}>{username}</Text>
            </View>
            <TouchableOpacity style={styles.notificationIcon}>
              <View style={styles.iconBackground} />
              <MaterialCommunityIcons
                name="bell"
                size={24}
                color={Colors.lightText}
                style={styles.Icon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ padding: Spacing, top: 50, height: height }}>
          <AppTextInput
            placeholder="Start destination"
            cursorColor={Colors.primary}
            onChangeText={setStart}
            />
          <AppTextInput
            placeholder="End destination"
            cursorColor={Colors.primary}
            onChangeText={setEnd}
          />
          <TouchableOpacity
            onPress={() => router.push({ pathname: '/(buses)', params: { start: start, end: end } })}
            style={{
              padding: Spacing,
              backgroundColor: Colors.button,
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
              Find My Bus
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height / 6.5,
    backgroundColor: Colors.primary,
    padding: Spacing * 2,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  introText: {
    fontSize: 16,
    color: Colors.lightText,
  },
  userText: {
    fontSize: 20,
    color: Colors.lightText,
  },
  notificationIcon: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    zIndex: 100,
    padding: Spacing,
  },
  iconBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.lightPrimary,
    opacity: 0.2,
    borderRadius: 5,
  },
  Icon: {
    zIndex: 200,
    opacity: 1,
  },
  searchHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 45,
    width: "83%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginVertical: 40,
  },
  icon: {
    marginRight: 10,
    zIndex: 200,
    opacity: 1,
  },
  input: {
    zIndex: 200,
    flex: 1,
    fontSize: 16,
    color: Colors.text,
    opacity: 1,
  },
  searchBackground: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 5,
    backgroundColor: Colors.background,
    opacity: 0.95,
  },
  filterIcon: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    zIndex: 100,
    padding: Spacing,
  },
  filterBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.background,
    opacity: 0.95,
    borderRadius: 5,
  },
  smallHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    padding: Spacing * 1.2,
    marginTop: 10,
  },
});
