import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import colors from "../config/colors";

function Card({ title, date, price, interest, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>

        <Text style={styles.price}>{price}</Text>
        <Text style={styles.interest}>{interest}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 5,
    overflow: "hidden",
  },

  detailsContainer: {
    paddingVertical: 10,
  },

  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  price: {
    fontSize: 20,
    fontWeight: "700",
    alignSelf: "flex-end",
    bottom: 50,
    right: 5,
  },
  date: {
    fontSize: 14,
    color: colors.description,
    lineHeight: 15,
    top: 10,
  },
  interest: {
    fontSize: 14,
    color: colors.description,
    lineHeight: 15,
    alignSelf: "flex-end",
    bottom: 30,
  },
});

export default Card;

/*<View 
 style={{
   backgroundColor:'white',
   padding:10,
   paddingTop: 100,

 }}>
   <Card 
   title="Photography Workshop"
   date=" Sun, 11 March - 7:00 pm
Porto"
   price="20$"
   interest="234 people are going"
   image={require("./app/assets/Events/tst.jpg")}/>

</View>;
*/
