import React from "react";
import { View, StyleSheet, Image, SafeAreaView } from "react-native";

import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/Logo/logo_find_white.png")}
      ></Image>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    resizeMode: "contain",
    width: 250,
    height: 250,
    position: "absolute",
    top: 210,
  },
});

export default WelcomeScreen;
