import React from "react";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function Categories(props) {
  const items = [
    {
      text: "Photography",
      size: 100,
    },
    {
      text: "Music",
      size: 60,
    },
    {
      text: "Dance",
      size: 60,
    },
    {
      text: "Sports",
      size: 70,
    },
    {
      text: "Art",
      size: 50,
    },
    {
      text: "Food",
      size: 60,
    },
    {
      text: "Education",
      size: 90,
    },
  ];
  return (
    <View style={{ height: 50, top: 15 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <TouchableOpacity>
            <View
              key={index}
              style={{
                backgroundColor: colors.soft,
                height: 30,
                width: item.size,

                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
                marginRight: 10,
                left: 10,
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: "500" }}>
                {item.text}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

export default Categories;
