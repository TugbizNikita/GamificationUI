import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  Picker,
  Image,
  ScrollView,
  Alert,
  BackHandler,
} from "react-native";

import { useBackHandler } from "@react-native-community/hooks";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import Feather from "react-native-vector-icons/Feather";
import Historical from "./Historical";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import * as Progress from "react-native-progress";
import Discover from "../../../Components/DiscoverCard";
import AntDesign from "react-native-vector-icons/AntDesign";
import TransformationCard from "../../../Components/TransformationCard";
const { width, height } = Dimensions.get("window");
import AppPageStack from "../../../Navigations/AppPageStack";
import { slice } from "lodash";

export function CircleCard({ name, marks, source }) {
  // const [progressColor, setProgessColor] = useState(Colors.red400);
  const [status, setStatus] = useState();

  // let marksobtainlist = data.Skill_Dashboard.sheet_json.map(
  //   (item) => item.Technical
  // );

  // console.log("marksobtainlist", marksobtainlist);
  // const getDataUsingGet = () => {
  //   //GET request
  //   fetch("http://3.215.18.129/dashboard/?file-name=S1", {
  //     method: "GET",
  //     //Request Type
  //   })
  //     .then((response) => response.json())
  //     // ,setMarksObtaion(response)
  //     //If response is in json then in success
  //     .then((responseJson) => {
  //       //Success
  //       alert(JSON.stringify(responseJson));
  //       console.log(responseJson);
  //     })
  //     //If response is not in json then in error
  //     .catch((error) => {
  //       //Error
  //       alert(JSON.stringify(error));
  //       console.error(error);
  //     });
  // };
  return (
    <View
      style={{
        height: 170,
        width: "48%",
        borderRadius: 20,
        top: 30,
        padding: 10,
        elevation: 4,
        backgroundColor: "white",
        borderWidth: 0.5,
        borderColor: "#D6DBDF",
      }}
    >
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{name}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {/* <AntDesign
          size={25}
          color="#0084D6"
          style={{ marginTop: 50 }}
          name="minuscircle"
        /> */}
        <AnimatedCircularProgress
          size={80}
          width={5}
          fill={60}
          tintColor="#A9A9A9"
          onAnimationComplete={() => console.log("onAnimationComplete")}
          backgroundColor="#0084D6"
          style={{ marginTop: 20, left: 15 }}
        />
        <Image
          style={{
            height: 40,
            width: 40,
            // borderRadius: 50,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            top: 38,
            // right: 20,
            left: 35,
          }}
          source={source}
        />
        <Entypo
          size={28}
          color="#0084D6"
          style={{ marginTop: 50, right: 10 }}
          name="circle-with-plus"
        />
      </View>
      <Text
        style={{
          fontWeight: "bold",
          // textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          top: 10,
          left: 50,
          // textAlign: "center",
        }}
      >
        {marks}
      </Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function DashBoardHeader({ navigation }) {
  const [preassessment, setPreassessment] = useState();
  const [marksobtain, setMarksObtaion] = useState([]);
  const [video, setVideo] = useState("");
  const dashboardData = "http://3.215.18.129/dashboard/?file-name=S1";

  function backActionHandler() {
    Alert.alert("", "Are you sure to exit the App?", [
      {
        text: "No",
        onPress: () => null,
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => BackHandler.exitApp(),
      },
    ]);

    return true;
  }

  useBackHandler(backActionHandler);

  // const getDashboardData = () => {
  //   fetch(dashboardData)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setMarksObtaion(json.Skill_Dashboard.sheet_json);
  //       setVideo(json.Skill_Dashboard.blog_json);
  //       console.log("video", json.Skill_Dashboard.blog_json);
  //       console.log("datamarkss", json.Skill_Dashboard.sheet_json);
  //     })

  //     .catch((error) => alert(error));
  // };
  // getDashboardData();
  useEffect(() => {
    fetch(dashboardData)
      .then((response) => response.json())
      .then((json) => {
        setMarksObtaion(json.Skill_Dashboard.sheet_json);
        setVideo(json.Skill_Dashboard.blog_json);
        console.log("video", json.Skill_Dashboard.blog_json);
        console.log("datamarkss", json.Skill_Dashboard.sheet_json);
      })

      .catch((error) => alert(error));
  }, []);

  // console.log("ar", array.Post_Assessment);
  const [selectedValue, setSelectedValue] = useState("Today");
  const array = marksobtain;
  console.log("arraay", array);

  return array.map((element) => {
    console.log("element", element.Implementation);

    // setPreassessment(element.Pre_Assessment);
    // let Preassessment = element.Post_Assessment;
    // console.log("=====", Preassessment);
    // console.log("element", element.Post_Assessment);
    let progress = 0.9;
    // console.log("progress", `0.${element.Technical.split("%", 1)}`);
    // console.log("3", `${element.Marks_Obtain.split(0, 0)}`);
    console.log("angular", element.Marks_Obtain.slice(0, 2));

    let SkillDashboard = element.Marks_Obtain.slice(0, 2);

    let colorCodeTechnical = element.Technical.split("%", 1);
    let colorCodeSoft_Skill = element.Soft_Skill.split("%", 1);

    let colorCodeImplementation = element.Implementation.split("%", 1);

    return (
      <View style={{ backgroundColor: "white", flex: 1, padding: 10 }}>
        <SafeAreaView
          style={{ backgroundColor: "white", padding: 14, height: "100%" }}
        >
          {/* <View style={{ alignItems: "center" }}>
            <Picker
              selectedValue={selectedValue}
              style={{ height: 50, width: 160 }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <Picker.Item label="Today" value="Today" />
              <Picker.Item label="Yesterday" value="Yesterday" />
              <Picker.Item label="This Month" value="This Month" />
            </Picker>
          </View> */}
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Hi Manish!</Text>

          <ScrollView
            // style={{ backgroundColor: "white", flex: 1 }}
            showsVerticalScrollIndicator={false}
          >
            <View
              style={{
                height: 300,
                // width: "100%",
                borderRadius: 20,
                top: 10,
                padding: 10,
                elevation: 4,
                backgroundColor: "white",
                borderWidth: 0.5,
                borderColor: "#D6DBDF",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  Skill(s) Dashboard
                </Text>
                <MaterialIcons size={20} name="error-outline" />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <AnimatedCircularProgress
                  size={100}
                  width={5}
                  fill={element.Marks_Obtain.slice(0, 2)}
                  // tintColor="red"
                  tintColor={
                    SkillDashboard <= 50
                      ? "red"
                      : SkillDashboard <= 99
                      ? "#0084D6"
                      : "green"
                  }
                  // tintColor="#A9A9A9"
                  onAnimationComplete={() => console.log("onAnimationComplete")}
                  backgroundColor="#A9A9A9"
                  style={{ marginTop: 20 }}
                />
                <Image
                  style={{
                    height: 60,
                    width: 60,
                    // borderRadius: 50,
                    // backgroundColor: "pink",
                    position: "absolute",
                    justifyContent: "center",
                    alignItems: "center",
                    top: 38,
                    left: 20,
                  }}
                  source={require("../../../../assets/Images/personal-development.png")}
                />
                <Text style={{ marginTop: 60, marginLeft: 10, fontSize: 20 }}>
                  {element.Marks_Obtain} of {element.Marks_Outof}
                </Text>
                <View
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 50,

                    elevation: 1,
                    marginTop: 60,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Feather size={20} name="bar-chart-2" />
                </View>

                <Entypo
                  size={28}
                  color="#0084D6"
                  style={{ marginTop: 60 }}
                  name="circle-with-plus"
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  height: 80,
                  // backgroundColor: "red",
                }}
              >
                <View style={{ top: 20, left: 2 }}>
                  <Text style={{ fontSize: 15 }}>
                    Soft Skill(s) : {element.Soft_Skill}
                  </Text>
                  <Progress.Bar
                    color={
                      colorCodeSoft_Skill <= 60
                        ? "red"
                        : colorCodeSoft_Skill <= 75
                        ? "Yellow"
                        : "green"
                    }
                    borderColor="gray"
                    top={5}
                    progress={`0.${element.Soft_Skill.split("%", 1)}`}
                    style={{ width: 140 }}
                    // width={120}
                  />
                </View>

                <View style={{ top: 20, left: 5 }}>
                  <Text style={{ fontSize: 15 }}>
                    Technical :{element.Technical}
                  </Text>
                  <Progress.Bar
                    color={
                      colorCodeTechnical <= 60
                        ? "red"
                        : colorCodeTechnical <= 75
                        ? "Yellow"
                        : "green"
                    }
                    borderColor="gray"
                    top={5}
                    progress={`0.${element.Technical.split("%", 1)}`}
                    style={{ width: 140 }}
                    // width={160}
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  height: 50,
                  // backgroundColor: "red",
                }}
              >
                <View style={{}}>
                  <Text style={{ fontSize: 15 }}>
                    Implementation : {element.Implementation}
                  </Text>
                  <View>
                    <Progress.Bar
                      color={
                        colorCodeImplementation <= 60
                          ? "red"
                          : colorCodeImplementation <= 75
                          ? "Yellow"
                          : "green"
                      }
                      borderColor="gray"
                      top={5}
                      progress={`0.${element.Implementation.split("%", 1)}`}
                      style={{ width: 140 }}
                      // width={160}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View
              style={{
                height: 180,
                // width: "100%",
                borderRadius: 20,
                top: 20,
                padding: 10,
                elevation: 4,
                backgroundColor: "white",
                borderWidth: 0.5,
                borderColor: "#D6DBDF",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  Implementation
                </Text>
                <MaterialIcons size={20} name="error-outline" />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <AnimatedCircularProgress
                  size={100}
                  width={5}
                  fill={60}
                  tintColor="#A9A9A9"
                  onAnimationComplete={() => console.log("onAnimationComplete")}
                  backgroundColor="#0084D6"
                  style={{ marginTop: 20 }}
                />
                <Image
                  style={{
                    height: 60,
                    width: 60,
                    // borderRadius: 50,
                    position: "absolute",
                    justifyContent: "center",
                    alignItems: "center",
                    top: 38,
                    left: 25,
                  }}
                  source={require("../../../../assets/Images/assessment.png")}
                />

                <View style={{ flexDirection: "column" }}>
                  <Text
                    style={{ marginTop: 40, textAlign: "left", fontSize: 20 }}
                  >
                    {element.Implementation_Marks}
                  </Text>
                </View>

                <View
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 50,

                    elevation: 1,
                    marginTop: 40,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Feather size={20} name="bar-chart-2" />
                </View>

                {/* <Entypo
              size={28}
              color="#0084D6"
              style={{ marginTop: 50 }}
              name="circle-with-plus"
            /> */}
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <CircleCard
                name="Soft Skill(s)"
                marks={element.Soft_Skill_Marks}
                source={require("../../../../assets/Images/softskills.png")}
              />
              <CircleCard
                name="Technical"
                marks={element.Technical_Marks}
                source={require("../../../../assets/Images/coding.png")}
              />
            </View>
            {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            top: 10,
          }}
        >
          <CircleCard />
          <CircleCard />
        </View> */}

            <View
              style={{
                height: 300,
                width: "100%",
                marginTop: 55,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                  padding: 5,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>Transformation</Text>
                <Text style={{ fontWeight: "bold" }}>View All</Text>
              </View>
              <ScrollView
                horizontal
                style={{
                  height: "100%",
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: 100,
                  top: 10,
                }}
                showsHorizontalScrollIndicator={false}
              >
                <TransformationCard
                  name="Pre assesment"
                  marks={element.Pre_Assessment}
                  name1="Post assesment"
                  marks1={element.Post_Assessment}
                />
                <TransformationCard />
                <TransformationCard />
                <TransformationCard />
                <TransformationCard />
              </ScrollView>
            </View>
            <View
              style={{
                justifyContent: "center",
                width: "100%",
                marginTop: 10,
                padding: 10,
                // backgroundColor: "white",
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Discover</Text>
              <View style={{ backgroundColor: "white", height: 1300 }}>
                <Discover />
              </View>
            </View>

            <View style={{ height: 100 }}></View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  });
}
