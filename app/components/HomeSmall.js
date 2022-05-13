import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import CardSmall from "./CardSmall";

import { useNavigation } from "@react-navigation/native";

function HomeSmall(props) {
  const navigation = useNavigation();
  const events = [
    {
      title: "Sun7ven",
      date: " Sat, 28 May - 4:00 pm",
      city: "Porto",
      image: {
        uri: "https://images.unsplash.com/photo-1635861496491-4fd2cb740dfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=704&q=80",
      },
      interest: "36 people are going",
      onPress: "Rolling",
    },
    {
      title: "Space X",
      date: " Sun, 5 June - 1:00 pm",
      city: "Porto",
      image: {
        uri: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      interest: "74 people are going",
    },
    {
      title: "Cookies Stap",
      date: " Wed, 25 May - 4:00 pm",
      city: "Porto",
      image: {
        uri: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
      },
      interest: "21 people are going",
    },
  ];

  return (
    <View style={{ top: 30, paddingBottom: 30 }}>
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
                interest={event.interest}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default HomeSmall;
