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
    height: 120,
    borderRadius: 20,
    backgroundColor: colors.soft,
    overflow: "hidden",
    width: "95%",
    alignSelf: "center",
    marginBottom: 15,
  },

  image: {
    width: 175,
    height: 120,
    borderRadius: 20,
  },
  title: {
    fontSize: 17,
    fontWeight: "700",
    bottom: 105,
    color: colors.black,
    left: 185,
  },

  date: {
    fontSize: 13,
    alignSelf: "flex-end",
    color: colors.description,
    lineHeight: 15,

    bottom: 85,
    right: 30,
  },
  city: {
    fontSize: 13,
    alignSelf: "center",
    color: colors.description,
    lineHeight: 25,

    bottom: 90,
    left: 40,
  },
  interest: {
    fontSize: 13,
    alignSelf: "center",
    color: colors.description,
    lineHeight: 25,

    bottom: 90,
    left: 70,
  },
});

export default CardSmall;
