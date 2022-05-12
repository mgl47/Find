import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoggingScreen from "../screens/LoggingScreen";
import EventScreen2 from "../screens/EventScreen2";
import ProfileScreen2 from "../screens/ProfileScreen2";
import HomeScreen from "../screens/HomeScreen";

const stack = createStackNavigator();

const AuthNavigator = () => (
  <stack.Navigator>
    <stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <stack.Screen
      name="Profile"
      component={ProfileScreen2}
      options={{ headerShown: false }}
    />
    <stack.Screen
      name="Logging"
      component={LoggingScreen}
      options={{ headerShown: false }}
    />
    <stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <stack.Screen
      name="Event"
      component={EventScreen2}
      options={{ headerShown: false }}
    />
  </stack.Navigator>
);

export default AuthNavigator;
