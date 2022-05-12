import React, { useState } from "react";
//import Video from "react-native-video";
import { Video } from "expo-av";

import {
  View,
  StyleSheet,
  TextInput,
  Text,
  StatusBar,
  Button,
  ScrollView,
} from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Search from "../components/Search";
import Categories from "../components/Categories";
import MediumCardList from "../components/MediumCardList";
import SmallCardList from "../components/SmallCardList";

function ExploreScreen({ navigation }) {
  const [search, setSearch] = useState("");
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.Search}>
        <TextInput
          style={styles.TextImput}
          onChangeText={(text) => setSearch(text)}
          placeholder="Search"
          placeholderTextColor="#7F7F7F"
          clearButtonMode="while-editing"
        ></TextInput>
      </View>
      <ScrollView style={{ top: 80 }} showsVerticalScrollIndicator="false">
        <Text
          style={{
            alignSelf: "flex-start",
            paddingLeft: 10,
            top: 0,
            fontSize: 18,
            fontWeight: "700",
          }}
        >
          By Categories
        </Text>

        <Categories />
        <Text
          style={{
            alignSelf: "flex-start",
            paddingLeft: 10,
            top: 10,
            fontSize: 18,
            fontWeight: "700",
          }}
        >
          Nearby
        </Text>

        <MediumCardList />

        <Video
          style={{
            width: "100%",
            height: 250,
            alignSelf: "stretch",
            resizeMode: "contain",
            alignSelf: "center",
            top: 40,
          }}
          ref={video}
          //source={{ uri: "https://www.youtube.com/watch?v=bP15cjXxLLQ" }}
          source={require("../assets/rolling_trailer.mp4")}
          isMuted
          resizeMode="contain"
          shouldPlay
          isLooping
          volume={1.0}
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
        <View
          style={{
            width: 200,
            backgroundColor: colors.blue,
            borderRadius: 30,
            top: 30,
            alignSelf: "center",
          }}
        >
          <Button
            onPress={() => navigation.navigate("Rolling")}
            title="Tune in"
            color={"white"}
            fontWeight={"500"}
          ></Button>
        </View>
        <Text
          style={{
            alignSelf: "flex-start",
            paddingLeft: 10,
            top: 40,
            fontSize: 18,
            fontWeight: "700",
          }}
        >
          Free Events
        </Text>

        <SmallCardList />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.ligh,
  },
  Search: {
    backgroundColor: colors.soft,

    width: "95%",
    height: 40,
    top: 70,
    alignSelf: "center",

    borderRadius: 5,
    justifyContent: "center",
  },
  TextImput: {
    fontSize: 18,
    color: colors.description,
    padding: 10,
  },
});

export default ExploreScreen;
