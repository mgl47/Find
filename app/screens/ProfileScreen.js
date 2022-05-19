import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "../components/AppButton";

function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Text
        style={{
          fontSize: 20,
          fontWeight: "700",
          alignSelf: "flex-start",
          top: 80,
          position: "absolute",
          padding: 10,
        }}
      >
        Your Profile
      </Text>
      <Text
        style={{
          fontFamily: "System",
          fontSize: 16,
          alignSelf: "flex-start",
          color: colors.description,
          top: 120,
          position: "absolute",
          padding: 10,
        }}
      >
        Log in to start planning your next event
      </Text>
      <View
        style={[
          styles.buttonContainer,
          {
            shadowColor: "black",
            shadowOffset: { height: 1 },
            shadowOpacity: 0.2,
            shadowRadius: 15,
          },
        ]}
      >
        <AppButton
          onPress={() => navigation.navigate("Sign In")}
          title="Log in"
          color="blue"
        />
      </View>
      <TouchableOpacity
        style={{
          position: "absolute",
          width: "100%",
          height: 60,
          top: 295,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "500",
            fontSize: 16,
            alignSelf: "flex-start",
            left: 20,
          }}
        >
          Settings
        </Text>
        <MaterialCommunityIcons
          style={{ position: "absolute", right: 20 }}
          name="chevron-right"
          size={30}
          color="black"
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          position: "absolute",
          width: "100%",
          height: 60,
          top: 365,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "500",
            fontSize: 16,
            alignSelf: "flex-start",
            left: 20,
          }}
        >
          Help
        </Text>
        <MaterialCommunityIcons
          style={{ position: "absolute", right: 20 }}
          name="chevron-right"
          size={30}
          color="black"
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          position: "absolute",
          width: "100%",
          height: 60,
          top: 435,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "500",
            fontSize: 16,
            alignSelf: "flex-start",
            left: 20,
          }}
        >
          About Us
        </Text>
        <MaterialCommunityIcons
          style={{ position: "absolute", right: 20 }}
          name="chevron-right"
          size={30}
          color="black"
        />
      </TouchableOpacity>

      <View style={[styles.separator, { top: 290 }]} />
      <View style={[styles.separator, { top: 360 }]} />
      <View style={[styles.separator, { top: 430 }]} />
      <View style={[styles.separator, { top: 500 }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  Navcontainer: {
    position: "absolute",
    bottom: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },

  buttonContainer: {
    width: 280,
    position: "absolute",
    alignSelf: "center",
    top: 190,
  },
  separator: {
    width: "95%",
    height: 1.1,
    backgroundColor: "#B2BEB5",
    bottom: 80,
    position: "absolute",
    borderRadius: 30,
  },
});
export default ProfileScreen;
