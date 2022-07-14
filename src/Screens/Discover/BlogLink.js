import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  ActivityIndicator,
  BackHandler,
  ScrollView,
} from "react-native";
import WebView from "react-native-webview";
import { useFocusEffect } from "@react-navigation/native";

// import { ActivityIndicator, Dimensions } from "react-native";
const BlogLink = ({ route, navigation }) => {
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

  const Blogurl = route.params.paramKey;
  console.log("Blogurl", Blogurl);
  const [visible, setVisible] = useState(false);
  const height = Dimensions.get("screen").height;
  const width = Dimensions.get("screen").width;
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          paddingBottom: 100,
          backgroundColor: "white",
          width: "100%",
          paddingBottom: 100,
        }}
      >
        <WebView
          source={{
            uri: Blogurl,
          }}
          onLoadStart={() => setVisible(true)}
          onLoadEnd={() => setVisible(false)}
          style={{ marginTop: 10 }}
        />
      </View>

      {visible && (
        <ActivityIndicator
          color={"red"}
          style={{
            position: "absolute",
            top: height / 2,
            left: width / 2.5,
          }}
          size={60}
        />
      )}
    </View>
  );
};

export default BlogLink;
