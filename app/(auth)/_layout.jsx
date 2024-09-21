import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { HeaderShownContext } from '@react-navigation/elements'
import { StatusBar } from 'expo-status-bar'


const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false
          }}
        />
      </Stack>
    
      <StatusBar backgroundColor='brown' style='light'/>
    </>  
  )
}

export default AuthLayout