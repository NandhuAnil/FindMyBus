import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import MapView from "react-native-maps";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import Spacing from "@/constants/Spacing";
import ParkingList from "@/components/ParkingList";

const explore = () => {
  return (
    <View style={styles.container}>
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
            name="sort-variant"
            size={24}
            color={Colors.background}
            style={styles.Icon}
          />
        </TouchableOpacity>
      </View>
      <MapView style={styles.map} />
      <View style={styles.list}>
        <ParkingList scrollType={"horizontal"} />
      </View>
    </View>
  );
};

export default explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  searchHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    position: 'absolute'
  },
  searchBar: {
    position: 'relative',
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 45,
    width: "75%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginVertical: 40,
    zIndex: 100,
    left: 20,
  },
  icon: {
    marginRight: 10,
    opacity: 1,
  },
  input: {
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
    right: 20,
  },
  filterBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.primary,
    opacity: 0.95,
    borderRadius: 5,
  },
  Icon: {
    opacity: 1,
  },
  list: {
    position: 'absolute',
    bottom: 100,
    left: 20
  }
});
