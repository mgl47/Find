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
      image: require("../assets/Events/Rolling.jpg"),
      Category: "Musical Festival",
      onPress: "Rolling",
    },
    {
      title: "Rest One Dance",
      date: "Fri, 27 May - 10:00 pm",
      city: "Porto",
      image: require("../assets/Events/rest_one_dance.jpg"),
      Category: "Dance",
    },
    {
      title: "Science Week",
      date: " Mon, 6 June - 10:00 am",
      city: "Porto",
      image: require("../assets/Events/science_week.jpg"),
      Category: "Education",
    },
    {
      title: "Color Content",
      date: " Thu, 14 July - 3:00 pm",
      city: "Porto",
      image: require("../assets/Events/color_content.jpg"),
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
