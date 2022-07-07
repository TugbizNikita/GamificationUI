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
  ScrollView,
  BackHandler,
} from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import Fontisto from "react-native-vector-icons/Fontisto";
import Entypo from "react-native-vector-icons/Entypo";
import WebView from "react-native-webview";

// import { ScrollView } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");

export default function All({ navigation }) {
  // const [videolink, setVideolink] = useState([]);
  // const dashboardData =
  //   "http://3.215.18.129/dashboard/?login-Id=asmitamargaje1996@gmail.com";

  // useEffect(() => {
  //   fetch(dashboardData)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setVideolink(json.df);
  //       console.log("video11", json.df);
  //     })

  //     .catch((error) => alert(error));
  // }, []);

  // const array = videolink;

  // const Item = ({ item, source, img_url }) => {
  //   let CourseID = item.blog_url;
  //   return (
  //     <View
  //       style={{
  //         width: "100%",
  //         // height: height,
  //         backgroundColor: "white",
  //         // borderWidth: 1,
  //         // flex: 1,
  //       }}
  //     >
  //       <TouchableOpacity
  //         onPress={() =>
  //           navigation.navigate("BlogLink", { paramKey: CourseID })
  //         }
  //         style={{
  //           width: "100%",
  //           top: 10,
  //           // flex: 1,
  //           // height: 180,

  //           backgroundColor: "white",
  //           marginVertical: 10,
  //         }}
  //       >
  //         <Image
  //           style={{
  //             height: 200,
  //             width: "100%",
  //             borderRadius: 20,
  //             backgroundColor: "white",
  //           }}
  //           source={{
  //             uri: item.img_url,
  //           }}
  //         />
  //       </TouchableOpacity>
  //     </View>
  //   );
  // };

  // return array.map((element) => {
  //   let chapterName = element.blogs;
  //   console.log("chapterNamelink", chapterName);
  //   let Imageurl = chapterName.map((user) => user.img_url);
  //   console.log("Imageurl", Imageurl);
  //   let blogurl = chapterName.map((user) => user.blog_url);
  //   console.log("blogurl", blogurl);

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
              backgroundColor: "#F54738",

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
              size={28}
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
          Blog
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
          {/* <View
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
            flexDirection: "row",
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
            }}
          />
          <Text style={{ left: 35, top: 5, fontSize: 15 }}>Blog</Text>
        </View>
        <Text style={{ top: 10 }}>Today</Text> */}

          <View
            style={{
              width: "100%",
              marginVertical: 18,
              height: height,
            }}
          >
            {/* <FlatList
                data={chapterName}
                renderItem={Item}
                keyExtractor={(item) => item.blogurl}
              /> */}
          </View>
        </View>
      </ScrollView>
    </View>
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
