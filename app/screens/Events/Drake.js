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

function Drake({ navigation, navigation: { goBack } }) {
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
        title="Drake - CLB Tour"
        date=" Fri, 08 Jul - 9:00 pm
Warsaw"
        price="zł350"
        interest="7,683 people are going"
        image={{
          uri: "https://d31029zd06w0t6.cloudfront.net/wp-content/uploads/sites/54/2020/03/web1_124600307-01b166fa1c6e467ea3704fa18d838605.jpg",
        }}
      />

      <View>
        <Text style={styles.description}>
          Don't miss the chance to jam to all the hits from ChampagnePapi's last
          album Certified Lover Boy, and much more with Special Guests!
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
            latitude: 52.23953922579044,
            longitude: 21.04578017103711,
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

export default Drake;
