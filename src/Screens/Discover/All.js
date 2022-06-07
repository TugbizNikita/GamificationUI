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

import YoutubePlayer from "react-native-youtube-iframe";
import { ScrollView } from "react-native-gesture-handler";
import BlogLink from "../Discover/BlogLink";
import BlogLinkImage from "../Discover/BlogLinkImage";
import Courses from "../Discover/BlogLinkImage";
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

let blog = DATA[0].id;
let URI = DATA[1].uri;

// console.log("uriiiii", DATA[uri]);
// console.log("blogid", D);

export default function All({ navigation, onPress, route, img, props }) {
  // const selectedCourse = Courses.find((element) => {
  //   return id === element.id;
  // });

  // const id = route.params.courseID;
  // const selectedCourse = Courses.find((element) => {
  //   return id === element.id;
  // });
  const renderItem = ({ item }) => (
    <Item onPress={() => navigation.navigate("BlogLink")} />
  );

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const [preassessment, setPreassessment] = useState();
  const [marksobtain, setMarksObtaion] = useState("");
  const [videolink, setVideolink] = useState([]);
  const dashboardData = "http://3.215.18.129/dashboard/?file-name=S1";

  useEffect(() => {
    fetch(dashboardData)
      .then((response) => response.json())
      .then((json) => {
        setMarksObtaion(json.Skill_Dashboard.sheet_json);
        setVideolink(json.Skill_Dashboard.blog_json);
        console.log("video11", json.Skill_Dashboard.blog_json);
        console.log("datamarkss", json.Skill_Dashboard.sheet_json);
      })

      .catch((error) => alert(error));
  }, []);

  const Item = ({ onPress, source, item, img }) => {
    let CourseID = item.uri;
    let BlogLink = videolink;
    console.log("99", BlogLink);

    return (
      <View style={{ justifyContent: "space-between" }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("BlogLink", { paramKey: CourseID })
          }
          style={{
            width: "100%",
            top: 10,

            marginVertical: 8,
          }}
        >
          <View>
            <Image
              style={{ height: 160, width: "100%" }}
              // source={require("../../../assets/Images/blog.jpg")}
              source={item.img}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  let array = [];
  videolink.map((data, idx) => (
    <>
      {array.push({
        img: require("../../../assets/Images/blog.jpg"),
        id: idx,
        uri: data.Blog_Link,
      })}
    </>
  ));
  console.log("Asmita=========", array);
  const [selectedValue, setSelectedValue] = useState("Today");

  // return array.map((element) => {
  //   console.log("link", element.Blog_Link);
  //   console.log("element", element.Post_Assessment);

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
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <View
            style={{
              height: 40,
              width: 40,
              backgroundColor: "red",
              borderRadius: 40,
              borderWidth: 0,
              elevation: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Entypo
              name="text-document"
              color="white"
              size={25}
              style={{
                justifyContent: "center",
                alignItems: "center",
                left: 16,
                //   backgroundColor: "#0084D6",
              }}
            />
            <Text style={{ left: 35, top: 5, fontSize: 15 }}>Blog</Text>
          </View>
          <Text style={{ top: 10 }}>Today</Text>
        </View>
        <View
          style={{
            // backgroundColor: "#f9c2ff",
            // padding: 20,
            // top: 10,
            marginVertical: 18,
            // marginBottom: 200,
            // marginHorizontal: 16,
          }}
        >
          <FlatList
            data={array}
            renderItem={Item}
            keyExtractor={(item) => item.id}
          />
        </View>
        {/* <TouchableOpacity
            onPress={() => navigation.navigate("BlogLink")}
            style={{
              // height: "70%",
              width: "100%",
              top: 10,
            }}
          >
            <View>
              <Image
                style={{ height: 200, width: "100%" }}
                source={require("../../../assets/Images/blog.jpg")}
              />
            </View>
          </TouchableOpacity> */}
        {/* <Button
              style={{ color: "blue", top: 80 }}
              title="NovelVista"
              onPress={navigation.navigate("BlogLink")}
              // onPress={() =>
              //   Linking.openURL(
              //     "https://www.novelvista.com/blogs/it-service-management/itil4-update-rolling-out"
              //   )
              // }
            /> */}

        {/* <WebView
            source={{
              uri: "https://www.novelvista.com/blogs/it-service-management/itil4-update-rolling-out",
            }}
            style={{ marginTop: 20, backgroundColor: "red" }}
          /> */}
      </View>

      {/* {/* <View
          style={{
            height: "100%",
            width: "100%",
            // marginLeft: 11,
            bottom: 22,
            flex: 1,
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
                backgroundColor: "#F54738",
                borderRadius: 10,
                borderWidth: 0,
                elevation: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Entypo
                name="text-document"
                color="white"
                size={30}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  // top: 2,
                  left: 17,
                  //   backgroundColor: "#0084D6",
                }}
              />
              <Text style={{ left: 25, fontSize: 15 }}>Blog</Text>
            </View>
            <Text style={{ top: 15, fontSize: 15 }}>Today</Text>
          </View>
          <View style={{ margin: 50, backgroundColor: "red", flex: 1 }}>
            <Text>hii</Text>
            <WebView
              source={{
                uri: "https://www.novelvista.com/blogs/it-service-management/itil4-update-rolling-out",
              }}
              style={{ marginTop: 20, backgroundColor: "red" }}
            />
          </View>
          <View
            style={{
              height: "70%",
              width: "100%",
              top: 50,
            }}
          >
            <Button
              style={{ color: "blue", top: 80 }}
              title="NovelVista"
              onPress={() =>
                Linking.openURL(
                  "https://www.novelvista.com/blogs/it-service-management/itil4-update-rolling-out"
                )
              }
            />

            <>
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
            </Text>
          </View>
        </View> */}
    </>
  );
  // });
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
