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
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

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
      <View
        style={{
          backgroundColor: "white",
          padding: 5,
        }}
      >
        <LinearGradient
          style={{
            height: 45,
            width: "100%",
            marginVertical: 8,
            borderRadius: 30,
            // justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            paddingLeft: 20,
            paddingRight: 20,
            justifyContent: "space-between",
          }}
          colors={["#5B86E5", "#36D1DC"]}
        >
          <Text style={{ fontSize: 20, fontStyle: "italic" }}>
            {item.hack_name}
          </Text>
          <TouchableOpacity
            onPress={() => OpenAnything.Pdf(item.hack_discription)}
          >
            <MaterialIcons size={20} name="keyboard-arrow-right" />
          </TouchableOpacity>
        </LinearGradient>
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
                backgroundColor: "#6EE80E",
                borderRadius: 40,
                borderWidth: 0,
                elevation: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Entypo
                name="light-bulb"
                color="white"
                size={30}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  //   backgroundColor: "#0084D6",
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
            Hacks
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
          style={{ width: "100%", top: 20 }}
        >
          <View
            style={{
              paddingBottom: 100,
              backgroundColor: "white",
              width: "100%",
            }}
          >
            {/* <View
        style={{
          width: "100%",
          backgroundColor: "white",
        }}
      > */}
            <FlatList
              data={chapterName}
              renderItem={Item}
              keyExtractor={(item) => item.Chapterurl}
            />
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
