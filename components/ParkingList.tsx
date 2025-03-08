import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";
import { useParkingData } from "@/Hooks/useParkingData";
import Colors from "@/constants/Colors";
import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";

interface ParkingData {
  parkingSlotName: string;
  amountPerHour: number;
  city: string;
  availableSlots: number;
  rating: number;
  image: string;
}

interface ScrollProps {
  scrollType: "horizontal" | "vertical";
}

const ParkingList: React.FC<ScrollProps> = ({ scrollType }) => {
  const { parkingData, loading, error } = useParkingData();

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4CAF50" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  //   const defaultImage = require("item.image ? { uri: item.image } : ");

  const renderCard = ({ item }: { item: ParkingData }) => (
    <View style={[styles.card, {flexDirection: scrollType === 'horizontal' ? "column" : "row", justifyContent: "space-evenly"}]}>
      <Image
        source={require("@/assets/images/example.jpg")}
        style={[styles.image, {width: scrollType === 'horizontal' ? "100%" : "35%", height: scrollType === 'horizontal' ? 150 : 130}]}
      />
      <View style={[styles.rating, {left: scrollType === 'horizontal' ? 20 : 285 }]}>
        <Text style={{ fontSize: 14, fontWeight: "700" }}>
          ⭐ {item.rating}
        </Text>
      </View>
      <View style={[styles.Fav, { right: scrollType === 'horizontal' ? 20 : 230}]}>
        <MaterialIcons name="favorite" size={24} color="red" />
      </View>
      <View style={styles.infoContainer}>
        <View style={[styles.titleTag, {marginLeft: scrollType === 'horizontal' ? 0 : 10, marginTop: scrollType === 'horizontal' ? 0 : 10}]}>
          <Text style={styles.Tag}>Car Parking</Text>
        </View>
        <View style={[styles.Amount, {top: scrollType === 'horizontal' ? 0 : 100, right: scrollType === 'horizontal' ? 5 : 195}]}>
          <Text style={styles.amtContent}>₹{item.amountPerHour}.00</Text>
          <Text> /hr</Text>
        </View>
        <Text style={[styles.title, {marginLeft: scrollType === 'horizontal' ? 0 : 10}]}>{item.parkingSlotName}</Text>
        {scrollType !== 'horizontal' && <Text style={{marginLeft: 10}}>{item.city}</Text>}
        {scrollType === 'horizontal' && 
          <>
            <View
              style={{
                borderBottomColor: Colors.darkText,
                borderBottomWidth: 0.3,
                opacity: 0.5,
              }}
            ></View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 10,
              }}
            >
              <View style={styles.menu}>
                <AntDesign name="clockcircle" size={22} color={Colors.primary} />
                <Text style={{ fontSize: 18 }}>5 Mins</Text>
              </View>
              <View style={styles.menu}>
                <FontAwesome name="car" size={22} color={Colors.primary} />
                <Text style={{ fontSize: 18 }}>{item.availableSlots} Spots</Text>
              </View>
            </View>
          </>
        }
      </View>
    </View>
  );

  return (
    <FlatList
      data={parkingData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderCard}
      contentContainerStyle={styles.list}
      horizontal={scrollType === "horizontal"}
      showsHorizontalScrollIndicator={false}
      scrollEnabled={scrollType === "horizontal"}
    />
  );
};

export default ParkingList;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 8,
    elevation: 2,
    marginVertical: 8,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  infoContainer: {
    flexDirection: "column",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  details: {
    fontSize: 14,
    color: "#444",
  },
  list: {
    paddingBottom: 16,
  },
  rating: {
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: Colors.background,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 5,
  },
  Fav: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: Colors.background,
    padding: 8,
    borderRadius: 50,
  },
  titleTag: {
    backgroundColor: Colors.gray,
    borderRadius: 5,
    marginRight: 220,
    marginBottom: 5,
  },
  Tag: {
    color: Colors.primary,
    padding: 3,
    borderRadius: 5,
    fontSize: 12,
    alignSelf: "center",
    fontWeight: "bold",
  },
  Amount: {
    position: "absolute",
    top: -20,
    right: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  amtContent: {
    fontSize: 26,
    fontWeight: "600",
    color: Colors.primary,
  },
  menu: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 5,
  },
});