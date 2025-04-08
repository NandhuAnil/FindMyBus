import Colors from '@/constants/Colors';
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
    sub: SubStop[];
    [key: string]: any;
}
  
export default function BusDetails() {
  const { bus } = useLocalSearchParams();
  const parsedBus: Bus = JSON.parse(bus as string);
  const subStops = parsedBus.sub || [];

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <Text style={styles.title}>
          {parsedBus["Start Location"]} → {parsedBus["End Location"]}
        </Text>
        <Text style={styles.time}>
          {parsedBus["Start Time"]} → {parsedBus["End Time"]}
        </Text>
      </View>

      {/* <Text style={styles.subHeader}>Sub Stops:</Text> */}

      {subStops.length === 0 ? (
        <Text>No intermediate stops</Text>
      ) : (
        subStops.map((item, index) => (
          <View key={index} style={styles.timelineRow}>
            {/* Timeline section */}
            <View style={styles.timelineContainer}>
              <View style={styles.circle} />
              {index !== subStops.length - 1 && <View style={styles.verticalLine} />}
            </View>

            {/* Stop detail section */}
            <View style={styles.stopContent}>
              <Text style={styles.stopText}>{item.stop}</Text>
              <Text style={styles.stopTime}>{item.time}</Text>
            </View>
          </View>
        ))
      )}
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: Colors.background,
    flex: 1
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary
  },
  time: {
    fontSize: 14,
    color: 'gray',
  },
  subHeader: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: '600',
  },
  timelineRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  timelineContainer: {
    width: 20,
    alignItems: 'center',
    position: 'relative',
    top: 4
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#007AFF',
    zIndex: 1,
  },
  verticalLine: {
    position: 'absolute',
    top: 10,
    width: 2,
    height: '100%',
    backgroundColor: '#007AFF',
  },
  stopContent: {
    paddingLeft: 10,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 40
  },
  stopText: {
    fontSize: 15,
    fontWeight: '500',
  },
  stopTime: {
    fontSize: 13,
    color: 'gray',
  },
});

