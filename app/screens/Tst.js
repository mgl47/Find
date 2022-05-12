import React from "react";

import { SafeAreaView, Text, StyleSheet, View } from "react-native";

import colors from "../config/colors";

function Tst({ Navigarion }) {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Tst;
