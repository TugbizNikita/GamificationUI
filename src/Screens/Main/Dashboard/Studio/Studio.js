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
          height: 200,
          width: "90%",
          justifyContent: "center",
          alignItems: "center",

          borderRadius: 20,

          padding: 20,
          elevation: 4,
          backgroundColor: "white",
          borderWidth: 0.5,
          borderColor: "#D6DBDF",
          margin: 10,
          marginLeft: 20,
        }}
      >
        <View
          style={{
            borderWidth: 1,
            width: 60,
            height: 60,
            position: "absolute",
            // borderRadius: 20,
            borderTopLeftRadius: 20,
            borderBottomEndRadius: 20,
            backgroundColor: "#0084D6",
            borderColor: "pink",
            // elevation: 1,
            top: 0,
            left: 0,
          }}
        ></View>
        <View
          style={{
            // flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            // marginTop: 10,
            padding: 10,
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 13,
              // bottom: 10,
              top: 10,
              fontWeight: "bold",
            }}
          >
            {item.name.split(" ")[0]}
          </Text>
          <Text
            style={{
              // marginTop: 40,
              textAlign: "left",
              fontSize: 20,
              color: "#0084D6",
              fontWeight: "bold",
              top: 20,
              // bottom: 10,
              // textDecorationLine: "underline",
            }}
          >
            {item.name.split(" ")[1]} {item.name.split(" ")[2]}
          </Text>

          {/* <FontAwesome5 name="edit" color="#0084D6" size={50} /> */}
        </View>

        <View style={{ width: "70%", justifyContent: "center" }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ElearningLink", {
                paramKey: CourseID,
              })
            }
            style={{
              height: 50,
              backgroundColor: "#0084D6",
              borderRadius: 20,
              padding: 10,
              top: 30,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontSize: 25,
                fontWeight: "bold",
                bottom: 5,
              }}
            >
              Start
            </Text>
          </TouchableOpacity>
        </View>
        {/* <View
          style={{
            borderWidth: 1,
            width: 60,
            height: 60,

            borderBottomRightRadius: 20,
            borderTopLeftRadius: 20,
            backgroundColor: "#0084D6",
            borderColor: "pink",
            position: "absolute",
            bottom: 0,
            right: 0,
            // elevation: 1,

            // borderRadius: 20,
            // borderTopRightRadius: 20,
            // borderBottomEndRadius: 20,
            // backgroundColor: "#0084D6",
            // borderColor: "pink",
          }}
        ></View> */}
      </View>
      // <View
      //   style={{
      //     height: 260,
      //     width: "45%",
      //     backgroundColor: "white",
      //     borderWidth: 0,
      //     borderRadius: 20,

      //     borderWidth: 1,
      //     borderColor: "gray",
      //     marginHorizontal: 10,
      //     marginVertical: 10,

      //     // justifyContent: "space-between",
      //     alignItems: "center",
      //     elevation: 1,

      //     // margin: 20,
      //   }}
      // >
      //   <Image
      //     style={{
      //       resizeMode: "contain",
      //       height: 95,
      //       width: "110%",
      //       borderTopWidth: 1,

      //       borderTopLeftRadius: 20,
      //       borderTopRightRadius: 20,

      //       borderColor: "gray",
      //     }}
      //     source={require("../../../../../assets/Images/elearningImage.jpg")}
      //   />
      //   <View style={{ padding: 10 }}>
      //     <Text style={{ fontSize: 16, color: "#0084D6", fontWeight: "bold" }}>
      //       {" "}
      //       {item.name.split(" ")[0]}
      //     </Text>
      //     <Text style={{ textAlign: "center", fontWeight: "bold" }}>
      //       {item.name.split(" ")[1]} {item.name.split(" ")[2]}
      //     </Text>
      //   </View>
      //   <View
      //     style={{
      //       width: "100%",

      //       justifyContent: "center",
      //       alignItems: "center",
      //       bottom: 8,
      //     }}
      //   >
      //     <TouchableOpacity
      //       onPress={() =>
      //         navigation.navigate("ElearningLink", {
      //           paramKey: CourseID,
      //         })
      //       }
      //       style={{
      //         borderRadius: 20,
      //         backgroundColor: "#0084D6",
      //         height: 40,
      //         // borderWidth: 1,
      //         width: 130,
      //       }}
      //     >
      //       <Image
      //         style={{
      //           height: 30,
      //           width: 30,
      //           position: "absolute",
      //           left: 50,
      //           top: 5,
      //         }}
      //         source={require("../../../../../assets/Images/arrow1.png")}
      //       />
      //     </TouchableOpacity>
      //   </View>
      // </View>

      // <View
      //   style={{
      //     backgroundColor: "pink",
      //     marginVertical: 10,
      //     justifyContent: "center",
      //     alignItems: "center",
      //     width: "100%",
      //   }}
      // >
      //   <View
      //     style={{
      //       height: 300,
      //       width: "50%",
      //       backgroundColor: "red",
      //       borderWidth: 0,
      //       borderRadius: 10,
      //       elevation: 1,
      //       marginHorizontal: 5,
      //     }}
      //   >
      //     <Image
      //       style={{
      //         width: "100%",
      //         resizeMode: "contain",
      //         justifyContent: "center",

      //         borderTopLeftRadius: 10,
      //         borderTopRightRadius: 10,
      //       }}
      //       source={require("../../../../../assets/Images/elearningImage.jpg")}
      //     />
      //     <View style={{ bottom: 50 }}>
      //       <Text
      //         style={{
      //           fontSize: 17,

      //           color: "black",
      //         }}
      //       >
      //         {item.name.split(" ")[0]}
      //       </Text>
      //       <Text
      //         style={{
      //           fontSize: 17,

      //           color: "black",
      //         }}
      //       >
      //         {item.name.split(" ")[1]} {item.name.split(" ")[2]}
      //       </Text>
      //     </View>
      //     <View
      //       style={{
      //         width: "100%",
      //       }}
      //     >
      //       <TouchableOpacity
      //         style={{
      //           height: 50,
      //           backgroundColor: "#0084D6",
      //           bottom: 30,

      //           borderRadius: 20,
      //           right: 20,
      //         }}
      //         onPress={() =>
      //           navigation.navigate("ElearningLink", {
      //             paramKey: CourseID,
      //           })
      //         }
      //       >
      //         <Image
      //           style={{
      //             height: 50,
      //             width: 50,
      //             position: "absolute",
      //             justifyContent: "center",
      //             alignItems: "center",
      //             // bottom: 2,
      //           }}
      //           source={require("../../../../../assets/Images/arrow1.png")}
      //         />
      //       </TouchableOpacity>
      //     </View>
      //   </View>
      // </View>
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
      }}
    >
      <View
        style={{
          height: 65,
          width: "100%",
          backgroundColor: "#0084D6",
          top: 30,

          padding: 10,

          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            left: 10,

            justifyContent: "center",

            color: "white",
            fontWeight: "bold",
          }}
        >
          E-Learning
        </Text>
      </View>
      <View style={{ bottom: 60 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
          style={{ marginTop: 90, backgroundColor: "white" }}
        >
          <FlatList
            data={StudyMaterial}
            renderItem={Item}
            // numColumns={2}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
      </View>
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
