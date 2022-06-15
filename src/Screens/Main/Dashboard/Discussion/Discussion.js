import React from "react";
import { View, Text, Image, BackHandler } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
import { useFocusEffect } from "@react-navigation/native";

const Coach = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        width: "100%",

        top: 30,
        padding: 10,
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          width: "100%",
          height: 80,
          backgroundColor: "white",
          padding: 10,
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Image
          style={{
            height: 50,
            width: 50,
            borderRadius: 50,
            resizeMode: "contain",
          }}
          source={require("../../../../../assets/Images/people.png")}
        />
        <View style={{ justifyContent: "center", left: 10 }}>
          <Text style={{ fontWeight: "bold" }}>Shrinidhi Bhangdiya</Text>
          <Text style={{ color: "gray" }}>Diet Coach</Text>
        </View>
      </View>
    </View>
  );
};

const Track = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        width: "100%",
        borderTopWidth: 20,
        borderBottomWidth: 20,
        borderBottomColor: "#F4F6F7",
        borderTopColor: "#F4F6F7",

        padding: 10,
        top: 20,
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          width: "100%",
          height: 100,
          backgroundColor: "white",
          padding: 20,
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            borderWidth: 0,
            borderRadius: 100,
            height: 65,
            width: 65,

            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F4F6F7",
          }}
        >
          <Fontisto
            name="blogger"
            size={30}
            style={{
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,

              // backgroundColor: "#0084D6",
            }}
          />
        </View>
        <View style={{ justifyContent: "center", left: 10 }}>
          <Text style={{ fontWeight: "bold" }}>HealthifyMe Smart Scale</Text>
          <Text style={{ color: "gray" }}>Track delivery status</Text>
        </View>
      </View>
    </View>
  );
};

export default function Discussion({ navigation }) {
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
        // justifyContent: "center",
        height: "100%",
        // width: "100%",
        flex: 1,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          padding: 10,
          alignItems: "center",
          height: 220,
          backgroundColor: "white",
          top: 20,
        }}
      >
        <Image
          style={{
            height: "90%",
            width: "100%",
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,

            // borderBottomLeftRadius: 20,
          }}
          source={require("../../../../../assets/Images/PreAssesment.webp")}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          height: 200,
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <Coach />
        <Coach />
      </View>

      <View
        style={{
          width: "100%",
          height: 150,
          backgroundColor: "white",
          justifyContent: "center",
          top: 20,
        }}
      >
        <Track />
      </View>
    </View>
  );
}
