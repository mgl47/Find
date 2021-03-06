import "react-native-gesture-handler";

import react from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { auth } from "../Find/firebase";
import React, { useEffect, useState } from "react";

import HomeScreen from "./app/screens/HomeScreen";
import ProfileScreenLogged from "./app/screens/ProfileScreenLogged";
import ProfileScreen from "./app/screens/ProfileScreen";
import ExploreScreen from "./app/screens/ExploreScreen";
import FavoriteScreen from "./app/screens/FavoriteScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import SignIn from "./app/screens/SignIn";
import Rolling from "./app/screens/Events/Rolling";
import Photo from "./app/screens/Events/Photo";
import SignUp from "./app/screens/SignUp";
import Terms from "./app/screens/Terms";
import Priv from "./app/screens/Priv";

import LoggingTst from "./app/screens/LoggingTst";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "./app/config/colors";
import Science from "./app/screens/Events/Science";
import Long from "./app/screens/Events/Long";
import Rest from "./app/screens/Events/Rest";
import Cs from "./app/screens/Events/Cs";
import Drake from "./app/screens/Events/Drake";

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Sign In">
    <Stack.Screen
      name="home"
      component={TabNavigator}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Sign In"
      component={SignIn}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Sign Up"
      component={SignUp}
      options={{ headerTintColor: colors.blue }}
    />
    <Stack.Screen
      name="Photo"
      component={Photo}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Rolling"
      component={Rolling}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Science"
      component={Science}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Long"
      component={Long}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Drake"
      component={Drake}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Rest"
      component={Rest}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Cs" component={Cs} options={{ headerShown: false }} />
    <Stack.Screen
      name="Terms of Use"
      component={Terms}
      options={{ headerTintColor: colors.blue }}
    />
    <Stack.Screen
      name="Privacy Policy"
      component={Priv}
      options={{ headerTintColor: colors.blue }}
    />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: colors.blue,
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="home-outline"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="magnify-expand"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Favorite"
      component={FavoriteScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="heart-outline"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="account-outline"
            size={size}
            color={color}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
