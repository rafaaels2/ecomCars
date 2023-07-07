import React from 'react'
import { View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import HomeScreen from '../Screens/HomeScreen/HomeScreen'
import ComparativeScreen from '../Screens/ComparativeScreen/ComparativeScreen'
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen'
import LoginScreen from '../Screens/LoginScreen/LoginScreen'
import RegisterScreen from '../Screens/RegisterScreen/RegisterScreen'
import SelectCarScreen from '../Screens/SelectCarScreen/SelectCarScreen'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function Screens(){
    return (
        <Tab.Navigator screenOptions={ ({ route }: { route: { name: string }}) => ({
            tabBarStyle: {
                position: 'absolute',
                backgroundColor: '#FFFFFF',
                borderTopRightRadius: 30,
                borderTopLeftRadius: 30,

            },
            tabBarIcon: ({ color, focused }: { color: string, focused: boolean }) => {
                if (route.name === 'Home') {
                    color = focused ? '#A07A28' : '#8A8A8A'
                    return (
                        <View style={{ justifyContent: 'center', flex: 1}}>
                            <MaterialCommunityIcons
                                name="home"
                                size={40}
                                color={color}
                            />
                        </View>
                    )
                }

                else if (route.name === 'Comparative') {
                    color = focused ? '#A07A28' : '#8A8A8A'
                    return (
                        <View style={{ justifyContent: 'center', flex: 1}}>
                            <MaterialCommunityIcons
                                name="car"
                                size={40}
                                color={color}
                            />
                        </View>
                    )
                }

                else if (route.name === 'Profile') {
                    color = focused ? '#A07A28' : '#8A8A8A'
                    return (
                        <View style={{ justifyContent: 'center', flex: 1}}>
                            <MaterialCommunityIcons
                                name="account"
                                size={40}
                                color={color}
                            />
                        </View>
                    )
                }
            },
            headerShown: false,
            tabBarShowLabel: false,
        })}>            
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Comparative" component={ComparativeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} /> 
        </Tab.Navigator>
    )
}

export default function AppNavigator(){
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Screens" component={Screens} />
                <Stack.Screen name="SelectCar" component={SelectCarScreen} />
            </Stack.Navigator>
        </NavigationContainer>      
    )
}
