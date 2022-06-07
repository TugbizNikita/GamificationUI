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

const DATA = [
  {
    uri: "https://novelvista-my.sharepoint.com/:v:/p/utfbatch04jan/ET8Ts6uc-E9DknFHUT9WobgBi7aDbzGXYq5nzGiEf3fBWA?e=809zlk",
    id: "1",
  },
  {
    uri: "https://novelvista-my.sharepoint.com/:v:/p/utfbatch04jan/ET8Ts6uc-E9DknFHUT9WobgBi7aDbzGXYq5nzGiEf3fBWA?e=809zlk",
    id: "2",
  },
];

const Item = ({ onPress }) => (
  <View style={{ justifyContent: "space-between" }}>
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: "100%",
        top: 10,

        marginVertical: 8,
      }}
    >
      <View>
        <Image
          style={{ height: 190, width: "100%" }}
          source={require("../../../assets/Images/video.webp")}
        />
      </View>
    </TouchableOpacity>
  </View>
);
export default function Blog({ navigation }) {
  const Item = ({ onPress, source, item, img }) => {
    let CourseID = item.uri;
    console.log("====", CourseID);

    return (
      <View style={{ justifyContent: "space-between" }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("VideoLink", { paramKey: CourseID })
          }
          style={{
            width: "100%",
            top: 10,

            marginVertical: 8,
          }}
        >
          <View>
            <Image
              style={{ height: 190, width: "100%" }}
              // source={require("../../../assets/Images/blog.jpg")}
              source={item.img}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  const renderItem = ({ item }) => (
    <Item onPress={() => navigation.navigate("VideoLink")} />
  );

  const [videolink, setVideolink] = useState([]);
  const dashboardData = "http://3.215.18.129/dashboard/?file-name=S1";

  useEffect(() => {
    fetch(dashboardData)
      .then((response) => response.json())
      .then((json) => {
        // setMarksObtaion(json.Skill_Dashboard.sheet_json);
        setVideolink(json.Skill_Dashboard.video_json);
        console.log("video11", json.Skill_Dashboard.video_json);
        console.log("datamarkss", json.Skill_Dashboard.sheet_json);
      })

      .catch((error) => alert(error));
  }, []);
  let BlogLink = videolink;
  console.log("video", BlogLink);

  let array = [];
  videolink.map((data, idx) => (
    <>
      {array.push({
        img: require("../../../assets/Images/video.webp"),
        id: idx,
        uri: data.Video_Link,
      })}
    </>
  ));
  return (
    <>
      <View
        style={{
          // marginTop: 50,
          // backgroundColor: "red",
          // flex: 1,
          width: "100%",
        }}
      >
        <View
          style={{
            // backgroundColor: "white",
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
      </View>
      <View
        style={{
          marginVertical: 18,
        }}
      >
        <FlatList
          data={array}
          renderItem={Item}
          keyExtractor={(item) => item.id}
          // data={Videos}
          // renderItem={Item}
          // keyExtractor={(item) => item.uri}
        />
      </View>
    </>
  );
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
