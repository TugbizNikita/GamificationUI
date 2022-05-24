import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export default function CompletedOrders() {
  return (
    <View style={styles.Container}>
      <Text>CompletedOrders</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: height,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
