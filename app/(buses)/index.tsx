import { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

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

export default function index() {
    const router = useRouter();
    const [buses, setBuses] = useState<Bus[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
  
    const { start, end } = useLocalSearchParams();
    const normalizedStart = (typeof start === 'string' ? start : '').toLowerCase().trim();
    const normalizedEnd = (typeof end === 'string' ? end : '').toLowerCase().trim();
  
    useEffect(() => {
      const fetchBuses = async () => {
        try {
          const response = await fetch(`https://appsail-50025377992.development.catalystappsail.in/api/buses/search?start=${normalizedStart}&end=${normalizedEnd}`);
          const data = await response.json();
          setBuses(data);
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchBuses();
    }, []);
  
    if (loading) {
      return (
        <View style={styles.center}>
          <ActivityIndicator size="large" />
          <Text>Loading buses...</Text>
        </View>
      );
    }
  
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{normalizedStart.toUpperCase()} → {normalizedEnd.toUpperCase()}</Text>
        <Text style={styles.subHeader}>Available Buses: {buses.length}</Text>
  
        <FlatList
          data={buses}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => router.push({ pathname: '/busDetails', params: { bus: JSON.stringify(item) } })}
            >
              <Text style={styles.title}>{item["Start Location"]} → {item["End Location"]}</Text>
              <Text style={styles.time}>{item["Start Time"]} → {item["End Time"]}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    header: { fontSize: 20, fontWeight: 'bold' },
    subHeader: { fontSize: 16, color: 'gray', marginBottom: 16 },
    card: { backgroundColor: '#f1f1f1', padding: 12, borderRadius: 8, marginBottom: 10 },
    title: { fontSize: 16, fontWeight: '600' },
    time: { fontSize: 14, color: 'gray' },
    center: { flex: 1, justifyContent: 'center', alignItems: 'center' }
  });