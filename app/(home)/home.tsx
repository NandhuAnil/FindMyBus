import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import Spacing from "@/constants/Spacing";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

const home = () => {
  const username = "ExampleUser";
  return (
    <SafeAreaView>
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
        <View style={styles.searchHeader}>
          <View style={styles.searchBar}>
            <View style={styles.searchBackground} />
            <AntDesign
              name="search1"
              size={22}
              color={Colors.primary}
              style={styles.icon}
            />
            <TextInput
              placeholder="Search here..."
              style={styles.input}
              cursorColor={Colors.primary}
            />
          </View>
          <TouchableOpacity style={styles.filterIcon}>
            <View style={styles.filterBackground} />
            <MaterialCommunityIcons
              name="filter-menu"
              size={24}
              color={Colors.primary}
              style={styles.Icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height / 4,
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
    right: 40,
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
    width: "85%",
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
    backgroundColor: Colors.lightPrimary,
    opacity: 0.95,
  },
  filterIcon: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    zIndex: 100,
    padding: Spacing,
    left: 5,
  },
  filterBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.lightPrimary,
    opacity: 0.95,
    borderRadius: 5,
  },
});