import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Spacing from '@/constants/Spacing'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'

const profile = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="arrow-back-circle-outline" size={38} color={Colors.darkText} />
          </TouchableOpacity>
          <Text style={styles.headText}>Profile</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default profile

const styles = StyleSheet.create({
  container: {
    padding: Spacing * 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headText: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: "33%",
  },

})