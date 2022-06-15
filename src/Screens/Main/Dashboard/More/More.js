import React, { useCallback } from "react";
import { Alert, View, BackHandler } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useBackHandler } from "@react-native-community/hooks/lib/useBackHandler";
import { useFocusEffect } from "@react-navigation/native";
export default function More({ navigation }) {
  // useBackHandler(
  //   useCallback(() => {
  //     Alert.alert("", "Want to do something", [
  //       {
  //         text: "No",
  //         onPress: () => null,
  //         style: "cancel",
  //       },
  //       {
  //         text: "Yes",
  //         onPress: () => {
  //           goBack();
  //         },
  //       },
  //     ]);
  //     return true;
  //   }, [])
  // );

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

  return <View></View>;
}
