import React from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import CardMedium from "./CardMedium";
import { useNavigation } from "@react-navigation/native";
function MediumExplore({}) {
  const navigation = useNavigation();
  const events = [
    {
      title: "Long Life3",
      date: " Mon, 6 June - 10:00 am",
      city: "Wroclaw",
      image: {
        uri: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      Category: "Food",
      onPress: "Long",
    },
    {
      title: "Drake - CLB Tour",
      date: " Fri, 08 Jul - 9:00 pm",
      city: "Warsaw",
      image: {
        uri: "https://d31029zd06w0t6.cloudfront.net/wp-content/uploads/sites/54/2020/03/web1_124600307-01b166fa1c6e467ea3704fa18d838605.jpg",
      },
      Category: "Music",
      onPress: "Drake",
    },

    {
      title: "Science Week",
      date: " Mon, 6 June - 10:00 am",
      city: "Wroclaw",
      image: {
        uri: "https://images.unsplash.com/photo-1553714198-c9d2ecdfe675?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      Category: "Education",
      onPress: "Science",
    },
  ];

  return (
    <View style={{ top: 30 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator="false">
        {events.map((event, index) => (
          <View
            key={index}
            style={{
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
              left: 5,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate(event.onPress)}
            >
              <CardMedium
                title={event.title}
                date={event.date}
                city={event.city}
                image={event.image}
                Category={event.Category}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default MediumExplore;
