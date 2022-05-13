import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
} from "react-native";
import colors from "../config/colors";
import CardMedium from "../components/CardMedium";
import CardBig from "../components/CardBig";
import CardSmall from "../components/CardSmall";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MediumHome from "../components/MediumHome";
import HomeSmall from "../components/HomeSmall";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Image
        style={styles.logo}
        source={require("../assets/Logo/logo_find_blue.png")}
      ></Image>

      <ScrollView style={{}} showsVerticalScrollIndicator="false">
        <Text
          style={{
            top: 10,
            left: 10,
            fontSize: 20,
            fontWeight: "600",
          }}
        >
          Trending in your area
        </Text>

        <MediumHome />

        <Text
          style={{
            top: 40,
            left: 10,
            fontSize: 20,
            fontWeight: "600",
            paddingBottom: 50,
          }}
        >
          Upcoming Event
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Photo")}>
          <CardBig
            title="Photography Workshop"
            date=" Sun, 29 May - 3:00 pm
Wroclaw"
            image={{
              uri: "https://images.unsplash.com/photo-1553249067-9571db365b57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            top: 15,
            left: 10,
            fontSize: 20,
            fontWeight: "600",
          }}
        >
          Recommended for you
        </Text>
        <HomeSmall></HomeSmall>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    paddingTop: 110,
    //padding: 10,
  },
  logo: {
    width: 120,
    height: 40,
    top: 60,
    position: "absolute",
    alignSelf: "center",
  },
  exbuttom: {
    width: 300,
    height: 50,
    backgroundColor: colors.light,
    alignSelf: "center",
    borderRadius: 20,
    justifyContent: "center",
  },
  exText: {
    alignSelf: "center",
    fontSize: 15,
    color: colors.black,
    fontWeight: "500",
  },
});

export default HomeScreen;
