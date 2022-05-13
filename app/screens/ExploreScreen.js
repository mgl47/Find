import React, { useState } from "react";
//import Video from "react-native-video";
import { Video } from "expo-av";

import {
  View,
  StyleSheet,
  TextInput,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Search from "../components/Search";
import Categories from "../components/Categories";
import ExploreSmall from "../components/ExploreSmall";
import MediumExplore from "../components/MediumExplore";

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

        <MediumExplore />

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
          /* source={{
            uri: "https://situla.bitbit.net/filebin/c2cff88656b53e1acf462a637975eb917245bedca579517df2c3e4de340fad5d/ae1378d39b36366183bb9d7cd8307b993a40c2c79600999ea32032bf588601e6?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=HZXB1J7T0UN34UN512IW%2F20220513%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220513T110009Z&X-Amz-Expires=30&X-Amz-SignedHeaders=host&response-cache-control=max-age%3D30&response-content-disposition=filename%3D%22rolling_trailer.mp4%22&response-content-type=video%2Fmp4&X-Amz-Signature=047c3f1d1c0b9bd544c2ce066c69121af0f5e50b39b5da4b419ca6bb6e2b725f2",
          }}*/
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
          <TouchableOpacity
            style={[styles.button, styles.buttonOutline]}
            onPress={() => navigation.navigate("Rolling")}
          >
            <Text
              style={{ fontWeight: "600", fontSize: 18, color: colors.blue }}
            >
              Tune in
            </Text>
          </TouchableOpacity>
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

        <ExploreSmall />
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
  },
  Search: {
    backgroundColor: colors.light,

    width: "95%",
    height: 40,
    top: 70,
    alignSelf: "center",

    borderRadius: 5,
    justifyContent: "center",
  },
  TextImput: {
    fontSize: 18,
    color: colors.light,
    padding: 10,
  },
  button: {
    backgroundColor: colors.blue,
    width: 200,
    height: 52,
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: colors.blue,
    borderWidth: 2,
  },
});

export default ExploreScreen;
