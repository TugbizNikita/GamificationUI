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
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const [preassessment, setPreassessment] = useState();
  const [marksobtain, setMarksObtaion] = useState("");
  const [videolink, setVideolink] = useState("");
  const dashboardData = "http://3.215.18.129/dashboard/?file-name=S1";

  useEffect(() => {
    fetch(dashboardData)
      .then((response) => response.json())
      .then((json) => {
        setMarksObtaion(json.Skill_Dashboard.sheet_json);
        setVideolink(json.Skill_Dashboard.blog_json);
        console.log("video1", json.Skill_Dashboard.blog_json);
        console.log("datamarkss", json.Skill_Dashboard.sheet_json);
      })

      .catch((error) => alert(error));
  }, []);

  const array = [{ videolink }];
  console.log("arr", array.Video_Link);
  const [selectedValue, setSelectedValue] = useState("Today");

  return array.map((element) => {
    console.log("link", element.Blog_Link);
    console.log("element", element.Post_Assessment);

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
        >
          {/* <Button
            style={{ color: "blue", top: 80 }}
            title="NovelVista"
            onPress={
              () => navigation.navigate("All")
              // Linking.openURL(
              //   "https://www.novelvista.com/blogs/it-service-management/itil4-update-rolling-out"
              // )
            }
          /> */}

          {/* <>
            <Video
              ref={video}
              style={styles.video}
              source={{
                // element.Video_Link
                uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
              }}
              useNativeControls
              resizeMode="contain"
              isLooping
              onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            />
            <View style={styles.buttons}></View>
          </>
        </View>
        <View
          style={{
            height: "30%",
            width: "100%",
            backgroundColor: "#0084D6",
            borderBottomEndRadius: 20,
            borderBottomStartRadius: 20,
            padding: 10,
          }}
        >
          <Text
            style={{
              top: 5,
              textAlign: "center",
              color: "white",
              fontSize: 16,
            }}
          >
            Tap to watch Deepak's incredible story of recovery and his journey
            to fitness!
          </Text> */}
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
