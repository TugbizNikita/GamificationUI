import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
// import Iframe from "react-iframe";
import WebView from "react-native-webview";
import { Linking } from "react-native";
import Courses from "./BlogLinkImage";
import { element } from "prop-types";
import BlogUri from "./BlogUri";

const DATA = [
  {
    uri: "https://www.novelvista.com/blogs/it-service-management/itil4-update-rolling-out",
    id: "1",
  },
  {
    uri: "https://www.novelvista.com/blogs/covid-19/covid-19-mythbusters",
    id: "2",
  },
  {
    uri: "https://www.novelvista.com/blogs/news/microsoft-releases-azure-hybrid-cloud",
    id: "3",
  },
];

const BlogLink = ({ route, item, navigation, source, renderItem }) => {
  const id = route.params.paramKey;

  const link = ({ onPress, source, item, img }) => {
    return (
      <View>
        <Text>hii</Text>
        <WebView
          // source={renderItem}
          source={{ uri: "" }}
          // source={source}
          style={{ marginTop: 20 }}
        />
      </View>
    );
  };
  // const link = route.params.paramKey;
  // console.log("++++++++", link);

  return (
    <>
      <View style={{ flex: 1, width: "100%" }}>
        {/* <FlatList
          data={Courses}
          renderItem={link}
          keyExtractor={(item) => item.id}
        /> */}
        <WebView
          // source={renderItem}
          source={{
            uri: id,
          }}
          // source={source}
          style={{ marginTop: 20 }}
        />
      </View>
    </>
  );
};

export default BlogLink;
