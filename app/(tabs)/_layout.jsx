import { View, Text } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
 
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'; 
import Entypo from '@expo/vector-icons/Entypo';

const TabsLayout = () => {
  return (
    <>
        <Tabs
            screenOptions={{ 
                tabBarActiveTintColor: '#b84912',
                tabBarInactiveTintColor: 'black',
                tabBarStyle: {
                    backgroundColor: '#c9c9c9'  
                }
            }}
        >   
            <Tabs.Screen 
                name = "dashboard"
                options={{
                    title: 'Dashboard',
                    headerShown: false,
                    tabBarIcon: ({color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    )
                }}
            />
         
            <Tabs.Screen 
                name = "addClass"
                options={{
                    title: 'Add Class',
                    headerShown: false,
                    tabBarIcon: ({color, size }) => (
                        <Entypo name="book" size={24} color={color} />
                    )
                }}
            />
            <Tabs.Screen 
                name = "profile"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({color, size }) => (
                        <MaterialCommunityIcons name="face-man-profile" size={24} color={color} />
                    )
                }}
            />
        </Tabs>
    </>
  )
}

export default TabsLayout