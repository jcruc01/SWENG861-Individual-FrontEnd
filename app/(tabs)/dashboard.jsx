import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Dashboard = () => {
  return (
    <>
    <View style={styles.welcome}>
      <Text style={styles.welcomeText}>Welcome</Text>
    </View>
    <View style={styles.dashboard}>
      <Text>Classes</Text>
    </View>
    </>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    backgroundColor: 'brown',
   
  },
  welcomeText: {
    marginTop: 50
  },
  dashboard: {
    flex: 1,
    backgroundColor: 'tan',
     
  }


})