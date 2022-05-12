import "react-native-gesture-handler";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen2 from "../screens/ProfileScreen2";
import ExploreScreen from "../screens/ExploreScreen";
import FavoriteScreen2 from "../screens/FavoriteScreen2";
import HomeScreen from "../screens/HomeScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";
import colors from "../config/colors";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
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
          <MaterialCommunityIcons name="magnify" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Favorite"
      component={FavoriteScreen2}
      options={{
        headerShown: false,
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
      component={ProfileScreen2}
      options={{
        headerShown: false,
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
export default AppNavigator;
