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
} from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import Fontisto from "react-native-vector-icons/Fontisto";
import Entypo from "react-native-vector-icons/Entypo";
import WebView from "react-native-webview";
const { width, height } = Dimensions.get("window");
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import VideoLink from "./VideoLink";
import YoutubePlayer from "react-native-youtube-iframe";
import { ScrollView } from "react-native-gesture-handler";
import BlogLink from "../Discover/BlogLink";
// import VideoLink from "./VideoLink";
import Videos from "./VideoLinkImage";

export default function Blog({ navigation }) {
  const [videolink, setVideolink] = useState([]);
  const dashboardData =
    "http://3.215.18.129/dashboard/?login-Id=asmitamargaje1996@gmail.com";

  useEffect(() => {
    fetch(dashboardData)
      .then((response) => response.json())
      .then((json) => {
        setVideolink(json.df);
        console.log("video11", json.df);
      })

      .catch((error) => alert(error));
  }, []);

  const array = videolink;

  const Item = ({ item }) => {
    let CourseID = item.chapter_url;
    return (
      <View style={{ backgroundColor: "white", marginVertical: 10 }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("VideoLink", { paramKey: CourseID })
          }
          style={{
            height: 100,
            width: "100%",
            backgroundColor: "white",
            marginVertical: 8,
            borderWidth: 2,
            borderRadius: 20,
            borderColor: "#0084D6",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F4F6F7",
            top: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{ height: 70, width: 70, borderRadius: 40 }}
              source={require("../../../assets/Images/video.webp")}
            />
            <Text
              style={{ fontSize: 30, left: 10, textAlign: "center", top: 10 }}
            >
              {item.chapter_name}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return array.map((element) => {
    let chapterName = element.elearning;
    console.log("chapterNamelink", element.chapterName);
    let Chapternames = chapterName.map((user) => user.chapter_name);
    console.log("chapterName", Chapternames);
    let Chapterurl = chapterName.map((user) => user.chapter_url);
    console.log("chapterUrl", Chapterurl);

    return (
      <View style={{ backgroundColor: "white", width: "100%" }}>
        <View
          style={{
            backgroundColor: "white",
            top: 10,
            flexDirection: "row",
            // justifyContent: "space-between",
            padding: 10,
          }}
        >
          <View
            style={{
              height: 40,
              width: 40,
              backgroundColor: "#0084D6",
              borderRadius: 40,
              borderWidth: 0,
              elevation: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="access-point"
              color="white"
              size={30}
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          </View>
          <Text
            style={{
              left: 10,
              fontSize: 14,
              justifyContent: "flex-start",
              top: 10,
            }}
          >
            E-learning
          </Text>
          <Text
            style={{
              left: 165,
              top: 10,
              fontSize: 15,
              justifyContent: "flex-end",
            }}
          >
            Today
          </Text>
        </View>

        <View
          style={{
            marginVertical: 18,
            backgroundColor: "white",
          }}
        >
          <FlatList
            data={chapterName}
            renderItem={Item}
            keyExtractor={(item) => item.Chapterurl}
          />
        </View>
      </View>
    );
  });
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
