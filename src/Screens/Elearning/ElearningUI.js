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

const { width, height } = Dimensions.get("window");
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { ScrollView } from "react-native-gesture-handler";
import ElearningLink from "./ElearningLink";

export default function ElearningUI({ navigation }) {
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
          backgroundColor: "white",
          marginVertical: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <View
          style={{
            flexDirection: "row",
            // justifyContent: "space-between",
          }}
        > */}
        <View
          style={{
            height: 130,
            width: "100%",
            backgroundColor: "#36D1DC",
            marginVertical: 8,
            // borderWidth: 2,
            // borderRadius: 30,
            borderBottomLeftRadius: 40,

            borderTopRightRadius: 40,
            borderColor: "gray",
            borderWidth: 1,
            justifyContent: "flex-start",
            // alignItems: "center",
            // flexDirection: "row",
            // backgroundColor: "#FEF9E7",
            // justifyContent: "center",
            paddingLeft: 20,
            paddingRight: 20,
            // top: 10,

            // width: 320,
          }}
          // colors={["#5B86E5", "#36D1DC"]}
        >
          <View style={{ flexDirection: "row", padding: 10 }}>
            <Text
              style={{
                fontSize: 17,

                color: "black",
              }}
            >
              {item.name.split(" ")[0]}
            </Text>
            {/* <Text>{item.sequenceId}</Text> */}
          </View>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              top: 10,
              // width: "70%",
              // backgroundColor: "red",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 20,
                  textAlign: "center",
                  // fontStyle: "italic",
                  color: "white",
                  left: 3,
                }}
              >
                {item.name.split(" ")[1]}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  textAlign: "center",
                  // fontStyle: "italic",
                  color: "white",
                  left: 3,
                }}
              >
                {item.name.split(" ")[2]}
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  bottom: 10,
                  height: 50,
                  width: 50,
                  borderRadius: 50,

                  // right: 20,
                  backgroundColor: "red",
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
                    // bottom: 2,
                  }}
                  source={require("../../../assets/Images/arrow1.png")}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* <TouchableOpacity
              onPress={() =>
                navigation.navigate("VideoLink", { paramKey: CourseID })
              }
              style={{}}
            > */}
          {/* <MaterialIcons size={20} name="keyboard-arrow-right" /> */}
          {/* </TouchableOpacity> */}
        </View>
        {/* </View> */}
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
              data={StudyMaterial}
              renderItem={Item}
              keyExtractor={(item) => item.sequenceIdNo}
            />
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
