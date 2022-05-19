import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  StatusBar,
  Image,
} from "react-native";

import AppButton from "../../components/AppButton";
import colors from "../../config/colors";
import Card from "../../components/Card";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

function Science({ navigation, navigation: { goBack } }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
        padding: 10,
        paddingTop: 90,
      }}
    >
      <Image
        style={styles.logo}
        source={require("../../assets/Logo/logo_find_blue.png")}
      ></Image>
      <StatusBar barStyle="dark-content" />
      <Card
        title="Science Week"
        date=" Mon, 6-12 June - 10:00 am
Wroclaw"
        price="zł35"
        interest="54 people are going"
        image={{
          uri: "https://images.unsplash.com/photo-1553714198-c9d2ecdfe675?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        }}
      />

      <View>
        <Text style={styles.description}>
          A whole week of special exhibitions, scientific classes and final
          event competition. Everything starts with a drop of water, we'll show
          you how!
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
            alignSelf: "flex-start",
            bottom: 10,
            position: "absolute",
          }}
        >
          Description
        </Text>
        <TouchableOpacity style={styles.return} onPress={() => goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.favorite}
          onPress={() => navigation.navigate("Favorite")}
        >
          <MaterialCommunityIcons
            name="heart-plus-outline"
            size={28}
            color="black"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.share}
          onPress={() =>
            Alert.alert(
              "No internet connection",
              "Make sure your device is connected to the internet"
            )
          }
        >
          <MaterialCommunityIcons
            name="share-variant"
            size={28}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <MapView
        style={{
          position: "absolute",
          width: "100%",
          height: 250,
          bottom: 100,
          alignSelf: "center",
          borderRadius: 15,
        }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={{
          latitude: 51.1067131,

          longitude: 17.0354804,

          latitudeDelta: 0.0922,

          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: 51.10422820566327,
            longitude: 17.056638657096403,
          }}
        />
      </MapView>

      <View
        style={[
          styles.buttonContainer,
          {
            shadowColor: "black",
            shadowOffset: { height: 1 },
            shadowOpacity: 0.2,
            shadowRadius: 15,
            bottom: 30,
          },
        ]}
      >
        <AppButton
          onPress={() =>
            Alert.alert(
              "No internet connection",
              "Make sure your device is connected to the internet"
            )
          }
          title="Book now"
          color="blue"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  description: {
    fontFamily: "System",
    fontSize: 16,
    color: colors.description,
    top: -10,
    position: "absolute",
  },

  buttonContainer: {
    width: 280,
    position: "absolute",
    alignSelf: "center",
    bottom: 30,
  },
  return: {
    backgroundColor: colors.white,
    width: 60,
    height: 40,
    bottom: 320,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  favorite: {
    backgroundColor: colors.white,
    width: 60,
    height: 40,
    bottom: 320,
    right: 60,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  share: {
    backgroundColor: colors.white,
    width: 60,
    height: 40,
    bottom: 320,
    right: 5,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  logo: {
    width: 100,
    height: 30,
    position: "absolute",
    alignSelf: "center",
    top: 50,
  },
});

export default Science;
