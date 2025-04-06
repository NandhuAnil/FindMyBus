import { useLocalSearchParams } from 'expo-router';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export interface SubStop {
    stop: string;
    time: string;
}
  
export interface Bus {
    "Start Location": string;
    "End Location": string;
    "Start Time": string;
    "End Time": string;
    sub_stops: SubStop[];
    [key: string]: any;
}
  
export default function BusDetails() {
  const { bus } = useLocalSearchParams();
  const parsedBus: Bus = JSON.parse(bus as string);
  const subStops = parsedBus.sub_stops || [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{parsedBus["Start Location"]} → {parsedBus["End Location"]}</Text>
      <Text style={styles.time}>{parsedBus["Start Time"]} → {parsedBus["End Time"]}</Text>

      <Text style={styles.subHeader}>Sub Stops:</Text>
      <FlatList
        data={subStops}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.stop}>
            <Text style={styles.stopText}>• {item.stop}</Text>
            <Text style={styles.stopTime}>{item.time}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>No intermediate stops</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold' },
  time: { fontSize: 14, color: 'gray', marginBottom: 12 },
  subHeader: { fontSize: 16, marginBottom: 8 },
  stop: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, borderBottomWidth: 0.5, borderColor: '#ddd' },
  stopText: { fontSize: 16 },
  stopTime: { fontSize: 14, color: 'gray' },
});
