import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

export default function ButtonWithLoader({ text, onPress, isLoading }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.ButtonStyle}>
      {!!isLoading ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <Text style={styles.textStyle}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  ButtonStyle: {
    height: 48,
    backgroundColor: "#0084D6",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  textStyle: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
