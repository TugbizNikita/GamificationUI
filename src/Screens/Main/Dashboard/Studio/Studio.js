import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  Linking,
  Dimensions,
  TouchableOpacity,
  FlatList,
  BackHandler,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";

export default function Studio({ navigation }) {
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
        backgroundColor: "white",
        width: "100%",
        flex: 1,

        // justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LinearGradient
        style={{
          height: 75,
          width: "90%",
          // backgroundColor: "red",
          top: 40,
          borderBottomLeftRadius: 30,

          borderTopRightRadius: 30,
          justifyContent: "space-between",
          flexDirection: "row",
          borderWidth: 1,
          elevation: 1,
          borderColor: "skyblue",
        }}
        colors={["white", "#66ffff"]}
      >
        <Text style={{ textAlign: "center", padding: 20, fontSize: 19 }}>
          Paper First I
        </Text>
        <View style={{ width: "35%", height: 90, padding: 20 }}>
          <Button
            style={{ padding: 11 }}
            // height={200}
            title="Press me"
            color="#1390E0"
          />
        </View>
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  video: {
    alignSelf: "center",
    width: "100%",
    // top: 10,
    height: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
