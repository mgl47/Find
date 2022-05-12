import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import colors from "../config/colors";

function CardMedium({ title, date, image, Category, city }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <Text style={styles.Category}>{Category}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.city}>{city}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 185,
    borderRadius: 20,
    backgroundColor: colors.white,
    overflow: "hidden",
    width: 195,
    marginRight: 8,
    marginLeft: 8,
  },

  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 13,
    fontWeight: "400",
    bottom: 100,
    left: 10,
    color: colors.white,
    textShadowColor: colors.black,
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 10,
    shadowOpacity: 10,
    //backgroundColor: colors.black,
  },

  date: {
    fontSize: 11,
    left: 10,
    color: colors.description,
    lineHeight: 15,
    fontWeight: "500",
    color: colors.white,
    bottom: 90,
    textShadowColor: colors.black,
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 10,
    shadowOpacity: 10,
  },
  city: {
    fontSize: 11,
    left: 10,
    color: colors.description,
    lineHeight: 15,
    fontWeight: "500",
    color: colors.white,
    bottom: 60,
    textShadowColor: colors.black,
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 10,
    shadowOpacity: 10,
  },
  Category: {
    fontSize: 18,
    fontWeight: "500",
    left: 10,
    bottom: 175,
    color: colors.white,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    textShadowColor: colors.black,
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 10,
    shadowOpacity: 10,
  },
});

export default CardMedium;
