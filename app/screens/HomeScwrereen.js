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
            top: 8,
            left: 10,
            fontSize: 20,
            fontWeight: "600",
            paddingBottom: 15,
          }}
        >
          Trending in your area
        </Text>

        <ScrollView
          style={{}}
          horizontal
          showsHorizontalScrollIndicator="false"
        >
          <TouchableOpacity onPress={() => navigation.navigate("Rolling")}>
            <CardMedium
              title="Rolling Loud Portugal"
              date=" Wed, 06-08 Jul - 3:00 pm"
              city="Portimao"
              image={{
                uri: "https://media.resources.festicket.com/www/photos/RollingLoud-Artwork_VJlP2vC.jpg",
              }}
              Category={"Musical Festival"}
            />
          </TouchableOpacity>
          <CardMedium
            title="Rest One Dance"
            date=" Fri, 27 May - 10:00 pm"
            city="Porto"
            image={{
              uri: "https://images.unsplash.com/photo-1443745029291-d5c27bc0b562?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            }}
            Category={"Dance"}
          />

          <CardMedium
            title="Science Week"
            date=" Mon, 6 June - 10:00 am"
            city="Porto"
            image={{
              uri: "https://images.unsplash.com/photo-1553714198-c9d2ecdfe675?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            }}
            Category={"Education"}
          />
          <CardMedium
            title="Color Content"
            date=" Thu, 14 July - 3:00 pm"
            city="Porto"
            image={{
              uri: "https://images.unsplash.com/photo-1456086272160-b28b0645b729?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
            }}
            Category={"Art"}
          />
        </ScrollView>

        <Text
          style={{
            top: 15,
            left: 10,
            fontSize: 20,
            fontWeight: "600",
            paddingBottom: 25,
          }}
        >
          Upcoming Events
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
            paddingBottom: 25,
          }}
        >
          Recommended for you
        </Text>
        <TouchableOpacity>
          <CardSmall
            title="Sun7ven"
            date=" Sat, 28 May - 4:00 pm
"
            city="Porto"
            image={{
              uri: "https://images.unsplash.com/photo-1635861496491-4fd2cb740dfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=704&q=80",
            }}
            interest="36 people are going"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <CardSmall
            title="Space X"
            date=" Sun, 5 June - 1:00 pm
"
            city="Porto"
            image={{
              uri: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            }}
            interest="74 people are going"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <CardSmall
            title="Cookies Stap"
            date=" Wed, 25 May - 4:00 pm
"
            city="Porto"
            image={{
              uri: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
            }}
            interest="21 people are going"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Explore")}
          style={styles.exbuttom}
        >
          <Text style={styles.exText}> Go to Explore</Text>
          <MaterialCommunityIcons
            style={{ alignSelf: "flex-end", position: "absolute", right: 10 }}
            name="arrow-right"
            size={24}
            color="black"
          />
        </TouchableOpacity>
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
    paddingTop: 115,
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
