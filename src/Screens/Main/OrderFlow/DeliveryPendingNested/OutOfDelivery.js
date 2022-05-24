import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export default function OutOfDelivery() {
  return <View style={styles.Container}></View>;
}

const styles = StyleSheet.create({
  Container: {
    height: height,
    width: width,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "white",
  },
});
