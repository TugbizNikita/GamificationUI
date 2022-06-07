import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
// import Iframe from "react-iframe";
import WebView from "react-native-webview";
import { Linking } from "react-native";

const VideoLink = ({ item, uri, route }) => {
  const id = route.params.paramKey;
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <WebView
        // source={{ uri: item }}

        source={{
          uri: id,
        }}
        style={{ marginTop: 20 }}
      />
    </View>
  );
};

export default VideoLink;
