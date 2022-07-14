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
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { ScrollView } from "react-native-gesture-handler";
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

  const [studyMaterial, setStudyMaterial] = useState([]);
  const dashboardData =
    "http://3.215.18.129/getStudyMaterial/?login-Id=gupta.sanket007@gmail.com";

  useEffect(() => {
    fetch(dashboardData)
      .then((response) => response.json())
      .then((json) => {
        setStudyMaterial(json.studyMaterial);
        console.log("studyMaterial", json.studyMaterial);
      })

      .catch((error) => alert(error));
  }, []);

  // const array = videolink;

  const Item = ({ item }) => {
    let CourseID = item.recordedlink;
    // let sequenceId = [item.sequenceId];

    // let sequenceIdNo = sequenceId.sort(function (a, b) {
    //   return a - b;
    // });
    // console.log("sequenceId11===>", sequenceIdNo);

    // console.log("datedata===>", datedata);
    return (
      <View
        style={{
          backgroundColor: "red",
          marginVertical: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: 300,
            width: "80%",
            backgroundColor: "white",
            borderWidth: 0,
            borderRadius: 10,
            elevation: 1,
          }}
        >
          {/* <Image
            style={{
              width: "100%",
              resizeMode: "contain",
              justifyContent: "center",
              bottom: 25,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            source={require("../../../../../assets/Images/elearningImage.jpg")}
          /> */}
          <View style={{ bottom: 50 }}>
            <Text
              style={{
                fontSize: 17,

                color: "black",
              }}
            >
              {item.name.split(" ")[0]}
            </Text>
            <Text
              style={{
                fontSize: 17,

                color: "black",
              }}
            >
              {item.name.split(" ")[1]} {item.name.split(" ")[2]}
            </Text>
          </View>
          <View
            style={{
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                height: 50,
                backgroundColor: "#0084D6",
                bottom: 30,

                borderRadius: 20,
                right: 20,
              }}
              onPress={() =>
                navigation.navigate("ElearningLink", {
                  paramKey: CourseID,
                })
              }
            >
              <Image
                style={{
                  height: 50,
                  width: 50,
                  position: "absolute",
                  justifyContent: "center",
                  alignItems: "center",
                  // bottom: 2,
                }}
                source={require("../../../../../assets/Images/arrow1.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const StudyMaterial = studyMaterial.reverse();
  console.log("StudyMaterial===========>", StudyMaterial);

  // return array.map((element) => {
  //   let chapterName = element.elearning;
  //   console.log("chapterNamelink", element.chapterName);
  //   let Chapternames = chapterName.map((user) => user.chapter_name);
  //   console.log("chapterName", Chapternames);
  //   let Chapterurl = chapterName.map((user) => user.chapter_url);
  //   console.log("chapterUrl", Chapterurl);

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
          height: 85,
          width: "100%",
          backgroundColor: "#0084D6",
          flexDirection: "row",
          padding: 10,
          top: 20,
          borderRadius: 20,
        }}
      >
        <View
          style={{
            borderWidth: 2,
            height: 45,
            width: 46,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
            borderColor: "#0084D6",
            backgroundColor: "white",
            right: 2,
            bottom: 1,
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
            fontSize: 18,
            justifyContent: "flex-start",
            top: 10,
            color: "white",
          }}
        >
          E-learning
        </Text>
        <Text
          style={{
            left: 200,

            top: 10,
            fontSize: 15,
            justifyContent: "flex-end",
            color: "white",
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
            backgroundColor: "white",
          }}
        >
          {/* <FlatList
            data={StudyMaterial}
            renderItem={Item}
            numColumns={2}
            key={(item) => item.id}
            keyExtractor={(item, index) => item.sequenceIdNo}
          /> */}
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
