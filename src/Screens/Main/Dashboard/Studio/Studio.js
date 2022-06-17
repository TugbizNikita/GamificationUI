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
  BackHandler,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";

export default function Studio({ navigation }) {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate("DashBoardHeader");
        // Return true to stop default back navigaton
        // Return false to keep default back navigaton
        return true;
      };

      // Add Event Listener for hardwareBackPress
      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () => {
        // Once the Screen gets blur Remove Event Listener
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
      };
    }, [])
  );

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
            navigation.navigate("StudioLink", { paramKey: CourseID })
          }
          style={{}}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              flex: 1,
            }}
          >
            <LinearGradient
              style={{
                height: 80,
                width: "100%",
                backgroundColor: "white",
                marginVertical: 8,
                // borderWidth: 2,
                borderRadius: 30,
                borderColor: "#0084D6",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FEF9E7",
                top: 10,

                // width: 320,
              }}
              colors={["#5B86E5", "#36D1DC"]}
            >
              {/* <Image
              style={{ height: 70, width: 70, borderRadius: 40 }}
              source={require("../../../assets/Images/video.webp")}
            /> */}
              <Text
                style={{
                  fontSize: 30,
                  textAlign: "center",
                  fontStyle: "italic",
                }}
              >
                {item.chapter_name}
              </Text>
            </LinearGradient>
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
      <View style={{ backgroundColor: "white", width: "100%", flex: 1 }}>
        {/* <View
          style={{
            backgroundColor: "white",
            top: 10,
            flexDirection: "row",
            // justifyContent: "space-between",
            padding: 10,
            // flex: 0.2,
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
        </View> */}

        <View
          style={{
            marginVertical: 18,
            backgroundColor: "white",
            flex: 1,
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
