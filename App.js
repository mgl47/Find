import 'react-native-gesture-handler';

import react from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { auth } from '../Find/firebase';
import React, { useEffect, useState } from 'react';

import HomeScreen from './app/screens/HomeScreen';
import ProfileScreenLogged from './app/screens/ProfileScreenLogged';
import ProfileScreen from './app/screens/ProfileScreen';
import ExploreScreen from './app/screens/ExploreScreen';
import FavoriteScreen from './app/screens/FavoriteScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoggingScreen from './app/screens/LoggingScreen';
import Rolling from './app/screens/Events/Rolling';
import Photo from './app/screens/Events/Photo';

import LoggingTst from './app/screens/LoggingTst';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import Terms from './app/screens/Terms';
import Priv from './app/screens/Priv';

import colors from './app/config/colors';
import Registration from './app/screens/Registration';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName='Logging'>
    <Stack.Screen
      name='home'
      component={TabNavigator}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name='Profile'
      component={ProfileScreenLogged}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name='Logging'
      component={LoggingTst}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name='Welcome'
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name='Registration' component={Registration} />
    <Stack.Screen
      name='Photo'
      component={Photo}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name='Rolling'
      component={Rolling}
      options={{ headerShown: false }}
    />
    <Stack.Screen name='Terms of Use' component={Terms} />
    <Stack.Screen name='Privacy Policy' component={Priv} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: colors.blue,
    }}>
    <Tab.Screen
      name='Home'
      component={HomeScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name='home-outline'
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name='Explore'
      component={ExploreScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name='magnify-expand'
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name='Favorite'
      component={FavoriteScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name='heart-outline'
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name='Profile1'
      component={ProfileScreenLogged}
      options={{
        headerShown: false,
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name='account-outline'
            size={size}
            color={color}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default function App() {
  //I'd wrap Navigator by context provider, to keep some data from api in context (like user profile data, events data or firebase ones), but to keep user logged in, fetch its token, save in localStorage and then check while opening the app
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
