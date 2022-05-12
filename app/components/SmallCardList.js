import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import CardSmall from "./CardSmall";

import { useNavigation } from "@react-navigation/native";

function SmallCardList(props) {
  const navigation = useNavigation();
  const events = [
    {
      title: "Rolling Loud Portugal",
      date: " Wed, 06-08 Jul - 3:00 pm",
      city: "Portimao",
      image: require("../assets/Events/Rolling.jpg"),

      onPress: "Rolling",
    },
    {
      title: "Rest One Dance",
      date: "Fri, 27 May - 10:00 pm",
      city: "Porto",
      image: require("../assets/Events/rest_one_dance.jpg"),
    },
    {
      title: "Science Week",
      date: " Mon, 6 June - 10:00 am",
      city: "Porto",
      image: require("../assets/Events/science_week.jpg"),
    },
    {
      title: "Color Content",
      date: " Thu, 14 July - 3:00 pm",
      city: "Porto",
      image: require("../assets/Events/color_content.jpg"),
    },
  ];

  return (
    <View style={{ top: 60, paddingBottom: 150 }}>
      <ScrollView showsVerticalScrollIndicator="false">
        {events.map((event, index) => (
          <View key={index}>
            <TouchableOpacity
              onPress={() => navigation.navigate(event.onPress)}
            >
              <CardSmall
                title={event.title}
                date={event.date}
                city={event.city}
                image={event.image}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default SmallCardList;
