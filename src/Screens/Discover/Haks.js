import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import Fontisto from "react-native-vector-icons/Fontisto";
import YoutubePlayer from "react-native-youtube-iframe";
import Entypo from "react-native-vector-icons/Entypo";
import * as OpenAnything from "react-native-openanything";
import AntDesign from "react-native-vector-icons/AntDesign";
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
      <View style={{ height: 120 }}>
        <TouchableOpacity
          onPress={() => OpenAnything.Pdf(item.hack_discription)}
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
            backgroundColor: "#FEF9E7",
            top: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <AntDesign color="#0084D6" size={40} name="pdffile1" />
            <Text style={{ fontSize: 30 }}>{item.hack_name}</Text>
          </View>
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
          height: "100%",
          width: "100%",
          // marginLeft: 11,
          bottom: 22,

          backgroundColor: "white",
        }}
      >
        {/* <View
          style={{
            backgroundColor: "white",
            top: 30,
            flexDirection: "row",
            // justifyContent: "space-between",
            padding: 10,
          }}
        >
          <View
            style={{
              height: 40,
              width: 40,
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
              }}
            />
          </View>
          <Text style={{ left: 10, top: 10, fontSize: 15 }}>Hacks</Text>
          <Text style={{ left: 200, top: 10, fontSize: 15 }}>Today</Text>
        </View> */}

        <View
          style={{
            marginVertical: 18,
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
