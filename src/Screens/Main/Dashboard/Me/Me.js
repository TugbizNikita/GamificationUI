import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  BackHandler,
  Dimensions,
} from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import MeTab from "../../../../Components/MeCard";
import { useFocusEffect } from "@react-navigation/native";
const { height, width } = Dimensions.get("window");
export default function Me({ navigation }) {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate("DashBoardHeader");
        // Return true to stop default back navigaton
        // Return false to keep default back navigaton
        return true;
      };

      // Add Event Listener for hardwareBackPress
      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () => {
        // Once the Screen gets blur Remove Event Listener
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
      };
    }, [])
  );
  return (
    <View
      style={{
        justifyContent: "flex-start",
        width: "100%",
        height: "100%",
        padding: 10,
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <View
        style={{
          height: 100,
          backgroundColor: "white",
          bottom: 40,
          width: "100%",
          top: 20,
          height: height,
        }}
      >
        <MeTab />
      </View>
    </View>
  );
}
