import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import colors from "../config/colors";

function CardSmall({ title, date, image, interest, city }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.city}>{city}</Text>
      <Text style={styles.interest}>{interest}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 104,
    borderRadius: 20,
    backgroundColor: colors.white,
    overflow: "hidden",
    width: "95%",
    alignSelf: "center",
    marginBottom: 15,
  },

  image: {
    width: 175,
    height: 104,
    borderRadius: 20,
  },
  title: {
    //alignSelf: "flex-end",
    fontSize: 17,
    fontWeight: "700",
    bottom: 95,
    color: colors.black,
    left: 190,
  },

  date: {
    fontSize: 13,
    alignSelf: "flex-end",
    color: colors.description,
    lineHeight: 15,
    color: colors.description,
    bottom: 78,
    right: 20,
  },
  city: {
    fontSize: 13,
    alignSelf: "center",
    color: colors.description,
    lineHeight: 25,
    color: colors.description,
    bottom: 100,
    left: 40,
  },
  interest: {
    alignSelf: "flex-end",
    fontSize: 13,
    right: 40,
    bottom: 100,
    color: colors.description,
  },
});

export default CardSmall;
