import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import colors from "../config/colors";

function CardBig({ title, date, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <Text style={styles.title}>{title}</Text>
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
    width: "95%",
    alignSelf: "center",
  },

  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    bottom: 180,
    left: 10,
    color: colors.white,
    textShadowColor: colors.black,
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 10,
    shadowOpacity: 10,
  },

  date: {
    fontSize: 14,
    left: 10,
    color: colors.description,
    lineHeight: 15,
    color: colors.white,
    bottom: 90,
    textShadowColor: colors.black,
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 10,
    shadowOpacity: 10,
  },
});

export default CardBig;
