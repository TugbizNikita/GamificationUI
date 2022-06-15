import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  BackHandler,
} from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
// import Iframe from "react-iframe";
import WebView from "react-native-webview";
import { useFocusEffect } from "@react-navigation/native";

import { Linking } from "react-native";

const VideoLink = ({ item, uri, route, navigation }) => {
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

  const chapterurl = route.params.paramKey;
  console.log("Blogurl", chapterurl);
  const [visible, setVisible] = useState(false);
  const height = Dimensions.get("screen").height;
  const width = Dimensions.get("screen").width;
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <WebView
        source={{
          uri: chapterurl,
        }}
        onLoadStart={() => setVisible(true)}
        onLoadEnd={() => setVisible(false)}
        style={{ marginTop: 10 }}
      />
      {visible && (
        <ActivityIndicator
          color={"red"}
          style={{
            position: "absolute",
            top: height / 2,
            left: width / 2.2,
          }}
          size={"large"}
        />
      )}
    </View>
  );
};

export default VideoLink;
