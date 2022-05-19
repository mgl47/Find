import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import LottieView from "lottie-react-native";
import like from "../assets/like.json";

import colors from "../config/colors";

function FavoriteScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: 300,
        }}
      >
        <Text
          style={{
            fontSize: 22.1,
            fontWeight: "500",
            textAlign: "center",
            color: colors.description,
          }}
        >
          Create an account or log in to save your favorite events
        </Text>
      </View>

      <View style={{ height: 400, width: 400, bottom: 150 }}>
        <LottieView source={like} loop autoPlay />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Sign In")}
        style={{
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: 250,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "500",
            textAlign: "center",
            color: colors.blue,
            top: 40,
          }}
        >
          Log in
        </Text>
      </TouchableOpacity>
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
});

export default FavoriteScreen;
