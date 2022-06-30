import React, { useContext, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  Alert,
  BackHandler,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useBackHandler } from "@react-native-community/hooks";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import * as Progress from "react-native-progress";
import Discover from "../../Components/DiscoverCard";
import AppLoading from "expo-app-loading";
// import AuthContext from "../../redux/authStore";

import TransformationCard from "../../Components/TransformationCard";
import WallOfFameCard from "../../Components/WallOfFameCard";
import { TouchableOpacity } from "react-native-gesture-handler";
import { element } from "prop-types";
import { ActivityIndicator } from "react-native-paper";
import AuthContext from "../../store/auth_store";
const { width, height } = Dimensions.get("window");

export function CircleCard({ name, marks, source }) {
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

            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            top: 38,

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

          justifyContent: "center",
          alignItems: "center",
          top: 10,
          left: 50,
        }}
      >
        {marks}
      </Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function DashBoardHeader({ navigation, props }) {
  const [marksobtain, setMarksObtaion] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const navigationRef = useRef(null);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    // this function gets called when user clicks on device back
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to exit from App?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        { text: "YES", onPress: () => BackHandler.exitApp() },
      ]);
      const navigationState = navigationRef.current?.getCurrentRoute();
      const currentRouteName = navigationState?.name;
      // const currentRouteName = navigationState?.routes[navigationState?.index]?.name;
      console.log("CurrentRouteName:", currentRouteName, navigationState);
      if (currentRouteName === "DashBoardHeader") {
      } else {
        navigationRef?.current?.goBack();
      }
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);
  const dashboardData =
    "http://3.215.18.129/dashboard/?login-Id=nikita@tugbiz.com";

  const Logout = () => {
    Alert.alert("Hold on!", "Are you sure you want to logout from App?", [
      {
        text: "No",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => {
          authCtx.logout(), navigation.navigate("Login");
        },
      },
    ]);
  };
  console.log("authCtx.isLoggedIn", authCtx.isLoggedIn);
  console.log("!authCtx.isLoggedIn", !authCtx.isLoggedIn);
  console.log("authCtx.isLoggedIn.token", authCtx.token);

  useEffect(() => {
    fetch(dashboardData)
      .then((response) => response.json())
      .then((json) => {
        setMarksObtaion(json.df);
        console.log("&&", json.df);
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      })

      .catch((error) => {
        console.error(error);
      });
  }, []);

  const array = marksobtain;

  return array.map((element) => {
    // console.log("a22", element.elearning);
    // console.log("0000", Object.keys(element.elearning));

    let SkillDashboard = element.Marks_Obtain.slice(0, 2);
    let colorCodeTechnical = element.Technical.split("%", 1);
    let colorCodeSoft_Skill = element.Soft_Skill.split("%", 1);
    let colorCodeImplementation = element.Implementation.split("%", 1);
    // console.log("colorCodeImplementation", colorCodeImplementation);

    if (isLoading) {
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator
            color={"red"}
            size={60}
            style={{
              position: "absolute",
              top: height / 2,
              left: width / 2.5,
            }}
          />
        </View>
      );
    }

    return (
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          padding: 10,
          height: height,
        }}
      >
        <SafeAreaView
          style={{ backgroundColor: "white", padding: 14, height: "100%" }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Hi Manish!</Text>
            <TouchableOpacity
              onPress={() => Logout(props)}
              style={{ flexDirection: "row" }}
            >
              {/* <AntDesign size={17} color="red" name="logout" /> */}
              <Text style={{ fontSize: 15, color: "red", bottom: 3 }}>
                Log Out
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                height: 300,

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
                  tintColor={
                    SkillDashboard <= 50
                      ? "red"
                      : SkillDashboard <= 99
                      ? "#0084D6"
                      : "green"
                  }
                  onAnimationComplete={() => console.log("onAnimationComplete")}
                  backgroundColor="#A9A9A9"
                  style={{ marginTop: 20 }}
                />
                <Image
                  style={{
                    height: 60,
                    width: 60,

                    position: "absolute",
                    justifyContent: "center",
                    alignItems: "center",
                    top: 38,
                    left: 20,
                  }}
                  source={require("../../../assets/Images/personal-development.png")}
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
                }}
              >
                <View style={{ top: 20, left: 2 }}>
                  <Text style={{ fontSize: 15 }}>
                    Points : {element.Soft_Skill}
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
                  />
                </View>

                <View style={{ top: 20, left: 5 }}>
                  <Text style={{ fontSize: 15 }}>
                    Rank :{element.Technical}
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
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  height: 50,
                }}
              >
                <View style={{}}>
                  <Text style={{ fontSize: 15 }}>
                    Attendance : {element.Implementation}
                  </Text>
                  <View>
                    <Progress.Bar
                      color={
                        colorCodeImplementation <= 60
                          ? "red"
                          : colorCodeImplementation <= 75
                          ? "#F6FC2A"
                          : "green"
                      }
                      borderColor="gray"
                      top={5}
                      progress={`0.${element.Implementation.split("%", 1)}`}
                      style={{ width: 140 }}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View
              style={{
                height: 180,

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
                  Hands-on
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

                    position: "absolute",
                    justifyContent: "center",
                    alignItems: "center",
                    top: 38,
                    left: 25,
                  }}
                  source={require("../../../assets/Images/assessment.png")}
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
                source={require("../../../assets/Images/softskills.png")}
              />
              <CircleCard
                name="Technical"
                marks={element.Technical_Marks}
                source={require("../../../assets/Images/coding.png")}
              />
            </View>

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
                  // justifyContent: "space-between",
                  padding: 5,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>Wall Of Frame</Text>
              </View>
              <ScrollView
                horizontal
                style={{
                  height: "100%",
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: 100,
                }}
                showsHorizontalScrollIndicator={false}
              >
                <WallOfFameCard />
                <WallOfFameCard />
                <WallOfFameCard />

                <WallOfFameCard />
              </ScrollView>
            </View>

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
                {/* <Text style={{ fontWeight: "bold" }}>View All</Text> */}
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
                justifyContent: "flex-start",
                width: "100%",
                height: "100%",
                padding: 10,
                backgroundColor: "white",
                flex: 1,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Discover</Text>
              <View
                style={{
                  height: 100,
                  backgroundColor: "white",
                  bottom: 40,
                  width: "100%",
                  top: 20,
                  height: height,
                }}
              >
                <Discover />
              </View>
            </View>

            {/* <View style={{ height: 100 }}></View> */}
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  });
}
