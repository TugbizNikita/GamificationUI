import React, { useContext, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  Alert,
  StyleSheet,
  BackHandler,
  Modal,
  Pressable,
  FlatList,
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
import ExamTab from "../../Components/ExamTab";
import Assesment from "../../Components/ExamTab";
import ElearningUI from "../Elearning/ElearningUI";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// import AuthContext from "../../redux/authStore";
// import Dummy from "../Dummy";

import TransformationCard from "../../Components/TransformationCard";
import WallOfFameCard from "../../Components/WallOfFameCard";
import { TouchableOpacity } from "react-native-gesture-handler";
import { element } from "prop-types";
import { ActivityIndicator } from "react-native-paper";
import AuthContext from "../../store/auth_store";
// import Elearning from
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

export default function DashBoardHeader({ navigation, props, route }) {
  const [studyMaterial, setStudyMaterial] = useState([]);

  const [allData, setAllData] = useState([]);
  const [userName, setUserName] = useState("");
  const [attendance, setAttendance] = useState([]);
  const [leadershipPoints, setLeadershipPoints] = useState([]);
  const [recordingVisited, setrecordingVisited] = useState([]);
  const [rank, setrank] = useState([]);
  const [allscores, setAllScores] = useState([]);
  const [noofcompletedexam, setNoofcompletedexam] = useState([]);
  const [no_of_assigned_exam, setNo_of_assigned_exam] = useState([]);

  no_of_assigned_exam;

  const [isLoading, setIsLoading] = useState(true);
  const navigationRef = useRef(null);
  const authCtx = useContext(AuthContext);

  const [modalVisible, setModalVisible] = useState(false);

  // const mailid = route.params.mailid;

  // console.log("latestdashboardmail============>", mailid);

  const Item = ({ item }) => {
    // let CourseID = item.chapter_url;
    return (
      <View style={{ backgroundColor: "white", marginVertical: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            // backgroundColor: "red",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              textAlign: "center",
              // fontStyle: "italic",
            }}
          >
            {item.key}
          </Text>

          <Text>{item.value}</Text>
        </View>
        <View
          style={{
            width: "120%",
            borderWidth: 0.5,
            top: 10,
            right: 20,
            borderColor: "#E5E4E2",
            elevation: 1,
          }}
        ></View>
      </View>
    );
  };

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
    "http://3.215.18.129/dashboard/?login-Id=gupta.sanket007@gmail.com";

  // `http://3.215.18.129/dashboard/?login-Id=${mailid}`;

  const Exam =
    "http://3.215.18.129/getAssessmentData/?login-Id=gupta.sanket007@gmail.com";

  // const Logout = () => {
  //   let logouttoken = authCtx.logout();
  //   console.log("logouttoken==============>", logouttoken);
  //   Alert.alert("Hold on!", "Are you sure you want to logout from App?", [
  //     {
  //       text: "No",
  //       onPress: () => console.log("Cancel Pressed"),
  //       style: "cancel",
  //     },
  //     {
  //       text: "Yes",
  //       onPress: () => {
  //         authCtx.logout(), navigation.navigate("Login");
  //       },
  //     },
  //   ]);
  // };
  // console.log("authCtx.isLoggedIn", authCtx.isLoggedIn);
  // console.log("!authCtx.isLoggedIn", !authCtx.isLoggedIn);
  // console.log("authCtx.isLoggedIn.token", authCtx.token);

  const logoutHandler = () => {
    authCtx.logout();
    console.log("authCtx.logout", authCtx);
    // optional: redirect the user
    navigation.navigate("LoginWithPassword");
  };

  const Dashboard = () => {
    fetch(dashboardData)
      .then((response) => response.json())

      .then((json) => {
        setAllData(json.all_data);
        console.log("newdata110=====>", json.all_data[0]["rank"]);
        setUserName(json.all_data[0]["userName"]);
        console.log("userName", json.all_data[0]["userName"]);
        setAttendance(json.all_data[0]["attendance"]);
        setrank(json.all_data[0]["rank"]);
        setLeadershipPoints(json.all_data[0]["leadershipPoints"]);
        setrecordingVisited(json.all_data[0]["recordingVisited"]);
        setAllScores(json.all_scores[0]);
        console.log("all_scores===", json.all_scores[0]);

        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      })

      .catch((error) => {
        console.error(error);

        // if (response.status === 500) {
        //   alert("NetWork error");
        // }
        // console.log("=========>>>>>", response.status === 500);
      });
  };

  const ExamData = () => {
    try {
      console.log("examdatacalling");
      fetch(Exam)
        .then((response) => response.json())

        .then((json) => {
          setNoofcompletedexam(json.no_of_completed_exam);
          console.log("no_of_completed_exam", json.no_of_completed_exam);
          setNo_of_assigned_exam(json.no_of_assigned_exam);
          console.log("no_of_assigned_exam", json.no_of_assigned_exam);
        })

        .catch((error) => {
          console.error("thencatcherrormsg", error);
          Alert.alert("then block");

          // if (response.status === 500) {
          //   alert("NetWork error");
          // }
          // console.log("=========>>>>>", response.status === 500);
        });
    } catch (error) {
      console.log("catcherrormsg", error);
      Alert.alert("catch block");
    }
  };

  useEffect(() => {
    Dashboard();
    ExamData();
  }, []);

  const name = userName;
  const username = userName.split(" ")[0];
  console.log("name", username);

  // const array = marksobtain;

  // return array.map((element) => {
  // console.log("a22", element.elearning);
  // console.log("0000", Object.keys(element.elearning));

  // let SkillDashboard = element.Marks_Obtain.slice(0, 2);
  // let colorCodeTechnical = element.Technical.split("%", 1);
  // let colorCodeSoft_Skill = element.Soft_Skill.split("%", 1);
  // let colorCodeImplementation = element.Implementation.split("%", 1);
  // console.log("colorCodeImplementation", colorCodeImplementation);

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
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
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Hi {username}
          </Text>
          {/* <Text>{route.params.paramKey}</Text> */}
          <TouchableOpacity
            onPress={logoutHandler}
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
              height: 280,

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
                justifyContent: "center",
                alignItems: "center",
                top: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {leadershipPoints}
              </Text>
              <Text>Your Points</Text>
            </View>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
                top: 20,
              }}
            >
              <View style={{ top: 20 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {recordingVisited}
                </Text>
                <Text>Recording Visited</Text>
              </View>

              <View style={{ top: 20 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {attendance}
                </Text>
                <Text>Session Attended(%)</Text>
              </View>
            </View>

            <View
              style={{
                width: "100%",
                top: 70,
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={{
                  height: 50,
                  backgroundColor: "#0084D6",
                  borderRadius: 20,
                  padding: 10,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  Check Your Performance
                </Text>
              </TouchableOpacity>
            </View>
            {/* <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            > */}
            {/* <AnimatedCircularProgress
                size={100}
                width={5}
                // fill={element.Marks_Obtain.slice(0, 2)}
                // tintColor={
                //   SkillDashboard <= 50
                //     ? "red"
                //     : SkillDashboard <= 99
                //     ? "#0084D6"
                //     : "green"
                // }
                onAnimationComplete={() => console.log("onAnimationComplete")}
                backgroundColor="#A9A9A9"
                style={{ marginTop: 20 }}
              /> */}
            {/* <Image
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
              <Text style={{ marginTop: 60, marginLeft: 10, fontSize: 20 }}> */}
            {/* {element.Marks_Obtain} of {element.Marks_Outof} */}
            {/* </Text> */}
            {/* <View
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
              </View> */}

            {/* <Entypo
                size={28}
                color="#0084D6"
                style={{ marginTop: 60 }}
                name="circle-with-plus"
              /> */}
            {/* </View> */}
            {/* <View
              style={{
                flexDirection: "row",
                // justifyContent: "space-between",
                height: 80,
                padding: 5,
              }}
            > */}
            {/* <View style={{ top: 20, left: 2 }}>
                <Text>{leadershipPoints}</Text>
                <Text style={{ fontSize: 13 }}>LeadershipPoints :</Text> */}
            {/* <Progress.Bar
                  // color={
                  //   colorCodeSoft_Skill <= 60
                  //     ? "red"
                  //     : colorCodeSoft_Skill <= 75
                  //     ? "Yellow"
                  //     : "green"
                  // }
                  borderColor="gray"
                  top={5}
                  // progress={`0.${element.Soft_Skill.split("%", 1)}`}
                  style={{ width: 140 }}
                /> */}
            {/* </View> */}

            {/* <View style={{ top: 20, left: 5 }}>
                <Text style={{ fontSize: 13 }}>
                  RecordingVisited : {recordingVisited}
                </Text> */}
            {/* <Progress.Bar
                  // color={
                  //   colorCodeTechnical <= 60
                  //     ? "red"
                  //     : colorCodeTechnical <= 75
                  //     ? "Yellow"
                  //     : "green"
                  // }
                  borderColor="gray"
                  top={5}
                  // progress={`0.${element.Technical.split("%", 1)}`}
                  style={{ width: 140 }}
                /> */}
            {/* </View> */}
          </View>

          {/* <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                height: 80,
                padding: 5,
              }}
            > */}
          {/* <View style={{ left: 2 }}>
                <Text style={{ fontSize: 13 }}>
                  Session Attended(%) : {attendance}
                </Text> */}
          {/* <Progress.Bar
                  // color={
                  //   colorCodeSoft_Skill <= 60
                  //     ? "red"
                  //     : colorCodeSoft_Skill <= 75
                  //     ? "Yellow"
                  //     : "green"
                  // }
                  borderColor="gray"
                  top={5}
                  // progress={`0.${element.Soft_Skill.split("%", 1)}`}
                  style={{ width: 140 }}
                /> */}
          {/* </View> */}

          {/* <View style={{ left: 5 }}>
                <Pressable onPress={() => setModalVisible(true)}>
                  <Text
                    style={{
                      fontSize: 13,
                      color: "#0084D6",
                      textDecorationLine: "underline",
                    }}
                  >
                    Rank : {rank}
                  </Text>
                </Pressable> */}
          {/* <Progress.Bar
                  // color={
                  //   colorCodeTechnical <= 60
                  //     ? "red"
                  //     : colorCodeTechnical <= 75
                  //     ? "Yellow"
                  //     : "green"
                  // }
                  borderColor="gray"
                  top={5}
                  // progress={`0.${element.Technical.split("%", 1)}`}
                  style={{ width: 140 }}
                /> */}
          {/* </View>
            </View> */}
          {/* </View> */}

          <View
            style={{
              height: 185,

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
                // marginTop: 10,
                padding: 10,
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                Assesment
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

              <View
                style={{
                  flexDirection: "column",

                  backgroundColor: "white",
                  height: 40,
                  top: 50,
                  width: "20%",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                  elevation: 1,
                  borderWidth: 2,
                  borderColor: "#0084D6",
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("Assesment")}
                >
                  <Text
                    style={{
                      // marginTop: 40,
                      textAlign: "left",
                      fontSize: 20,
                      color: "#0084D6",
                      // textDecorationLine: "underline",
                    }}
                  >
                    {noofcompletedexam} / {no_of_assigned_exam}
                  </Text>
                </TouchableOpacity>
              </View>

              {/* <View
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
              </View> */}
            </View>
          </View>
          {/* <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <CircleCard
              name="Soft Skill(s)"
              // marks={element.Soft_Skill_Marks}
              source={require("../../../assets/Images/softskills.png")}
            />
            <CircleCard
              name="Technical"
              // marks={element.Technical_Marks}
              source={require("../../../assets/Images/coding.png")}
            />
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
                // marks={element.Pre_Assessment}
                name1="Post assesment"
                // marks1={element.Post_Assessment}
              />
              <TransformationCard />
              <TransformationCard />
              <TransformationCard />
              <TransformationCard />
            </ScrollView>
          </View>

          <View style={{}}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                // Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View>
                <View style={styles.modalView}>
                  <View
                    style={{
                      height: 60,
                      width: "124%",
                      backgroundColor: "#0084D6",
                      bottom: 35,
                      right: 36,
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                    }}
                  >
                    <Text
                      style={{
                        top: 20,
                        left: 20,
                        fontSize: 16,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      Consolidated Marks
                    </Text>
                  </View>
                  <View style={{ backgroundColor: "white", bottom: 20 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#0084D6",
                      }}
                    >
                      Rank : {rank}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      elevation: 1,
                    }}
                  >
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                      Exams
                    </Text>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                      Marks
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "114%",
                      borderWidth: 0.5,
                      top: 10,
                      right: 20,
                      borderColor: "#E5E4E2",
                      elevation: 1,
                    }}
                  ></View>

                  <View
                    style={{
                      marginVertical: 18,
                      backgroundColor: "white",
                    }}
                  ></View>
                  <ScrollView
                    showsVerticalScrollIndicator={false}
                    nestedScrollEnabled={true}
                    style={{ width: "100%" }}
                  >
                    <View style={{}}>
                      <FlatList
                        data={allscores}
                        renderItem={Item}
                        keyExtractor={(item) => item.id}
                      />
                    </View>
                  </ScrollView>

                  {/* <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Hide Modal</Text>
                  </Pressable> */}
                </View>
              </View>
            </Modal>
          </View>
          {/* <View style={{ height: 100 }}></View> */}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
  // });
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    height: "90%",
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    // bottom: 70,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    justifyContent: "flex-start",
    // textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    justifyContent: "flex-start",
  },
});
