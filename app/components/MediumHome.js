import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import CardMedium from "./CardMedium";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";
function MediumCardList({}) {
  const navigation = useNavigation();
  const events = [
    {
      title: "Rolling Loud Portugal",
      date: " Wed, 06-08 Jul - 3:00 pm",
      city: "Portimao",
      image: {
        uri: "https://media.resources.festicket.com/www/photos/RollingLoud-Artwork_VJlP2vC.jpg",
      },
      Category: "Music",
      onPress: "Rolling",
    },
    {
      title: "Rest One Dance",
      date: "Fri, 27 May - 10:00 pm",
      city: "Porto",
      image: {
        uri: "https://images.unsplash.com/photo-1443745029291-d5c27bc0b562?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      Category: "Dance",
    },
    {
      title: "Starladder Major 2022",
      date: "Fri, 27-29 May - 4:00 pm",
      city: "Berlin",
      image: {
        uri: "https://esports-betting-tips.com/wp-content/uploads/2021/07/CSGO-Hall-Of-Fame-Top-5-Teams-Of-All-Time.jpg",
      },
      Category: "E-Sport",
    },

    {
      title: "Color Content",
      date: " Thu, 14 July - 3:00 pm",
      city: "Porto",
      image: {
        uri: "https://images.unsplash.com/photo-1456086272160-b28b0645b729?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      },
      Category: "Art",
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

export default MediumCardList;

/* 
<TouchableOpacity onPress={() => navigation.navigate("Rolling")}>
          <CardMedium
            title="Rolling Loud Portugal"
            date=" Wed, 06-08 Jul - 3:00 pm
Portimao"
            image={require("../assets/Events/Rolling.jpg")}
            Category={"Musical Festival"}
          />
        </TouchableOpacity>
        <CardMedium
          title="Rest One Dance"
          date=" Fri, 27 May - 10:00 pm
Porto"
          image={require("../assets/Events/rest_one_dance.jpg")}
          Category={"Dance"}
        />

        <CardMedium
          title="Science Week"
          date=" Mon, 6 June - 10:00 am
Porto"          image={require("../assets/Events/science_week.jpg")}
          Category={"Education"}
        />
        <CardMedium
          title="Color Content"
          date=" Thu, 14 July - 3:00 pm
Porto"
          image={require("../assets/Events/color_content.jpg")}
          Category={"Art"}
        />
*/
