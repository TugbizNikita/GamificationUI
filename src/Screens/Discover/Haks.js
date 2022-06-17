import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Pressable,
  Dimensions,
  ScrollView,
} from "react-native";

import { Video, AVPlaybackStatus } from "expo-av";
import Fontisto from "react-native-vector-icons/Fontisto";
import YoutubePlayer from "react-native-youtube-iframe";
import Entypo from "react-native-vector-icons/Entypo";
import * as OpenAnything from "react-native-openanything";
import AntDesign from "react-native-vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";
const { width, height } = Dimensions.get("window");

export default function Haks({ navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

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
    let Hack = item.hack_discription;
    return (
      <View style={{ backgroundColor: "white", padding: 5 }}>
        <TouchableOpacity
          onPress={() => OpenAnything.Pdf(item.hack_discription)}
        >
          <LinearGradient
            style={{
              height: 80,
              width: "100%",
              marginVertical: 8,
              borderRadius: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
            colors={["#5B86E5", "#36D1DC"]}
          >
            <Text style={{ fontSize: 30, fontStyle: "italic" }}>
              {item.hack_name}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  };

  return array.map((element) => {
    let chapterName = element.Hacks;
    console.log("chapterName", element.chapterName);
    let hackname = chapterName.map((user) => user.hack_name);
    console.log("hackname", hackname);
    let hackdiscription = chapterName.map((user) => user.hack_discription);
    console.log("hackdiscription", hackdiscription);

    return (
      <View
        style={{
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <FlatList
          data={chapterName}
          renderItem={Item}
          keyExtractor={(item) => item.Chapterurl}
        />
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
