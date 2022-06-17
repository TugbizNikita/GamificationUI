import React, { useState, useEffect } from "react";
import { View, Text, Image, Button, StyleSheet, Linking } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import Fontisto from "react-native-vector-icons/Fontisto";
import Entypo from "react-native-vector-icons/Entypo";
import Foundation from "react-native-vector-icons/Foundation";
import All from "../Discover/All";
import Blog from "./Blog";

import YoutubePlayer from "react-native-youtube-iframe";
import AppPageStack from "../../Navigations/AppPageStack";
export default function AllTab({ navigation, props, onPress, route }) {
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        // marginLeft: 11,
        bottom: 22,

        backgroundColor: "white",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          top: 30,
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <View
          style={{
            height: 40,
            width: 40,
            backgroundColor: "black",
            borderRadius: 40,
            borderWidth: 0,
            elevation: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Foundation
            name="compass"
            color="white"
            size={30}
            style={{
              justifyContent: "center",
              alignItems: "center",
              left: 10,
              //   backgroundColor: "#0084D6",
            }}
          />
          <Text style={{ left: 25, fontSize: 15 }}>All</Text>
        </View>
        <Text style={{ top: 15, fontSize: 15 }}>Today</Text>
      </View>
      <View>{/* <Blog /> */}</View>
      <View
        style={{
          height: "70%",
          width: "100%",
          top: 50,
        }}
      ></View>
    </View>
  );
  // });
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
