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
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <LinearGradient
            style={{
              height: 45,
              width: "100%",
              backgroundColor: "white",
              marginVertical: 8,
              // borderWidth: 2,
              borderRadius: 30,
              borderColor: "#0084D6",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              backgroundColor: "#FEF9E7",
              justifyContent: "space-between",
              paddingLeft: 20,
              paddingRight: 20,
              top: 10,

              // width: 320,
            }}
            colors={["#5B86E5", "#36D1DC"]}
          >
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              {item.chapter_name}
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("VideoLink", { paramKey: CourseID })
              }
              style={{}}
            >
              <MaterialIcons size={20} name="keyboard-arrow-right" />
            </TouchableOpacity>
          </LinearGradient>
        </View>
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
            height: 70,
            width: "100%",
            backgroundColor: "white",
            flexDirection: "row",
            padding: 10,
          }}
        >
          <View
            style={{
              borderWidth: 2,
              height: 45,
              width: 45,
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
              borderColor: "#0084D6",
            }}
          >
            <View
              style={{
                height: 35,
                width: 35,
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

        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
          style={{ width: "100%" }}
        >
          <View
            style={{
              paddingBottom: 100,
              backgroundColor: "white",
              width: "100%",
            }}
          >
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
        </ScrollView>
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
