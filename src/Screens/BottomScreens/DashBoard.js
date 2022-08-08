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
  FlatList,
  TouchableOpacity,
} from "react-native";

import { AnimatedCircularProgress } from "react-native-circular-progress";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from "react-native-vector-icons/Entypo";

import TransformationCard from "../../Components/TransformationCard";
import { ActivityIndicator } from "react-native-paper";
import { AuthContext } from "../../Context/context";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Logout } from "../../store/actions";
// import { useDispatch } from "react-redux";
const { width, height } = Dimensions.get("window");
import { useSelector, useDispatch } from "react-redux";
import LottieView from "lottie-react-native";
// import { setLoginiD } from "../redux/actions";
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

export default function DashBoard({ navigation, props, route }) {
  const [allData, setAllData] = useState([]);
  const [userName, setUserName] = useState("");
  const [attendance, setAttendance] = useState([]);
  const [leadershipPoints, setLeadershipPoints] = useState([]);
  const [recordingVisited, setrecordingVisited] = useState([]);
  const [rank, setrank] = useState([]);
  const [allscores, setAllScores] = useState([]);
  const [noofcompletedexam, setNoofcompletedexam] = useState([]);
  const [no_of_assigned_exam, setNo_of_assigned_exam] = useState([]);

  const [batchRank, setBatchRank] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const navigationRef = useRef(null);
  // const { signOut } = React.useContext(AuthContext);
  // const { signIn } = React.useContext(AuthContext);

  const [modalVisible, setModalVisible] = useState(false);

  // const mailid = route.params.paramKey;
  // console.log("======>>>>>>>>>", mailid);

  let userToken;
  userToken = null;
  const getToken = async () => {
    try {
      userToken = await AsyncStorage.getItem("userToken");
    } catch (e) {
      console.log(e);
    }
    console.log("On Dashboard.....========", userToken);
  };

  useEffect(() => {
    getToken();
  }, []);

  const Item = ({ item }) => {
    return (
      <View style={{ marginVertical: 10, bottom: 20, top: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              textAlign: "center",
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

  const animation = useRef(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, []);

  const Items = ({ item }) => {
    var str = item.userName;
    var index = str.lastIndexOf(" ");

    str = str.substring(0, index);
    console.log("str", str);

    return (
      <LinearGradient
        style={{
          backgroundColor: "blue",
          width: width - 80,
          margin: 10,
          // height: 200,
          borderRadius: 10,
        }}
        colors={["white", "#66ffff"]}
      >
        <View
          style={{
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <View style={{ height: 90, width: "100%" }}> */}
          <LottieView
            autoPlay
            ref={animation}
            style={{
              width: "100%",
              // height: 150,
              backgroundColor: "#66ffff",
            }}
            source={require("../../../assets/Images/congratulations.json")}
          />
          {/* </View> */}

          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#2E6930",
              textAlign: "center",
              position: "absolute",
              bottom: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {str}
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: "#F56C31",
              position: "absolute",
              width: "100%",
              alignItems: "center",
              textAlign: "center",
              marginVertical: 0,
              bottom: 0,
            }}
          >
            Rank : {item.rank}
          </Text>
        </View>
      </LinearGradient>
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
      if (currentRouteName === "DashBoard") {
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

  const authToken = useSelector((state) => state.Reducers.authToken);
  const userNamee = useSelector((state) => state.Reducers.userName);
  console.log("authTokendash=====>", authToken);
  console.log("userName=====0000>", userNamee);

  const dashboardData = `http://3.215.18.129/dashboard/?login-Id=${userNamee}`;
  // "http://3.215.18.129/dashboard/?login-Id=asmitamargaje1996@gmail.com";

  const Exam = `http://3.215.18.129/getAssessmentData/?login-Id=${userNamee}`;
  // "http://3.215.18.129/getAssessmentData/?login-Id=asmitamargaje1996@gmail.com";

  const BatchData = `http://3.215.18.129/batchRank/?login-Id=${userNamee}`;

  const dispatch = useDispatch();
  const LogoutHandler = () => {
    Alert.alert("Hold on!", "Are you sure you want to logout from App?", [
      {
        text: "No",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => {
          // signOut();
          // Logout();

          dispatch(Logout());
        },
      },
    ]);
  };

  const Dashboard = () => {
    fetch(dashboardData)
      .then((response) => response.json())

      .then((json) => {
        setAllData(json.all_data);
        // console.log("newdata110=====>", json.all_data[0]["rank"]);
        setUserName(json.all_data[0]["userName"]);
        // console.log("userName", json.all_data[0]["userName"]);
        setAttendance(json.all_data[0]["attendance"]);
        setrank(json.all_data[0]["rank"]);
        setLeadershipPoints(json.all_data[0]["leadershipPoints"]);
        setrecordingVisited(json.all_data[0]["recordingVisited"]);
        setAllScores(json.all_scores[0]);
        // console.log("all_scores===", json.all_scores[0]);

        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      })

      .catch((error) => {
        console.error(error);
      });
  };

  const BatchWiseRank = () => {
    fetch(BatchData)
      .then((response) => response.json())

      .then((json) => {
        setBatchRank(json.batchWiseRank);

        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      })

      .catch((error) => {
        console.error(error);
      });
  };

  let FirstfiveRank = batchRank.sort((a, b) => a.rank - b.rank);

  const size = 5;
  const items = FirstfiveRank.slice(0, size);
  console.log("Size", items);

  const ExamData = () => {
    try {
      console.log("examdatacalling");
      fetch(Exam)
        .then((response) => response.json())

        .then((json) => {
          setNoofcompletedexam(json.no_of_completed_exam);
          console.log(
            "no_of_completed_exam=================>",
            json.no_of_completed_exam
          );
          setNo_of_assigned_exam(json.no_of_assigned_exam);
          console.log("no_of_assigned_exam", json.no_of_assigned_exam);
        })

        .catch((error) => {
          console.error("thencatcherrormsg", error);
          Alert.alert("then block");
        });
    } catch (error) {
      console.log("catcherrormsg", error);
      Alert.alert("catch block");
    }
  };

  useEffect(() => {
    Dashboard();
    ExamData();
    BatchWiseRank();
  }, []);

  const name = userName;
  const username = userName.split(" ")[0];
  console.log("name", username);

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
    <LinearGradient
      style={{
        flex: 1,
        padding: 10,
        height: height,
      }}
      colors={["#5899E2", "#FFFFFF"]}
    >
      <SafeAreaView style={{ padding: 10, height: "100%" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flex: 0.1,
            // backgroundColor: "red",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
            Hi {username}
          </Text>

          <TouchableOpacity
            onPress={LogoutHandler}
            style={{ flexDirection: "row" }}
          >
            <Text
              style={{
                fontSize: 17,
                color: "red",
                bottom: 3,
                fontWeight: "bold",
              }}
            >
              Log Out
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 0.9 }}>
          <View
            style={{
              justifyContent: "center",

              width: "100%",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Skill(s) Dashboard
            </Text>
          </View>
          <LinearGradient
            style={{
              width: "100%",

              borderRadius: 20,

              top: 10,
              padding: 10,
              elevation: 4,
            }}
            colors={["white", "#66ffff"]}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
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
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {recordingVisited}
                </Text>
                <Text>Recording Visited</Text>
              </View>

              <View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {attendance}
                </Text>
                <Text>Session Attended(%)</Text>
              </View>
            </View>

            <LinearGradient
              style={{
                width: "100%",

                justifyContent: "center",
                elevation: 1,
                marginVertical: 10,

                borderRadius: 20,
              }}
              colors={["#5899E2", "#29E7CD"]}
            >
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={{
                  height: 50,

                  padding: 10,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  Check Your Performance
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </LinearGradient>

          <LinearGradient
            style={{
              width: "100%",
              marginVertical: 10,

              borderRadius: 20,
              top: 20,
              padding: 10,
              elevation: 1,
            }}
            colors={["white", "#66ffff"]}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginVertical: 10,

                padding: 10,
              }}
            >
              <Text
                style={{
                  textAlign: "left",
                  fontSize: 50,
                  color: "#0084D6",
                  fontWeight: "bold",
                }}
              >
                {rank}
              </Text>

              <FontAwesome5 name="edit" color="#0084D6" size={50} />
            </View>

            <LinearGradient
              style={{
                width: "100%",
                justifyContent: "center",

                borderRadius: 20,
              }}
              colors={["#5899E2", "#29E7CD"]}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("TopTab")}
                style={{
                  height: 50,

                  padding: 10,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  Assessment Completed
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </LinearGradient>

          <View
            style={{
              // height: 300,
              width: "100%",
              marginVertical: 20,
              // marginTop: 55,
            }}
          >
            {/* <View
              style={{
                flexDirection: "row",
                width: "100%",
                // backgroundColor: "red",

                // padding: 5,
              }}
            > */}
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                color: "black",
                fontWeight: "bold",
              }}
            >
              Wall Of Frame
            </Text>
            {/* </View> */}
            <View
              style={{
                width: "100%",
                // backgroundColor: "red",
                justifyContent: "center",
                alignItems: "center",

                // borderRadius: 100,
              }}
            >
              <FlatList
                data={items}
                renderItem={Items}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>

          {/* <View
            style={{
              height: 300,
              width: "100%",
              marginTop: 55,
            }}
          > */}
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              padding: 5,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Transformation
            </Text>
          </View>

          <ScrollView
            horizontal
            style={{
              borderRadius: 100,
              // top: 10,
              flex: 1,
            }}
            showsHorizontalScrollIndicator={false}
          >
            <TransformationCard name="Santosh Annarapu" pre="37.5" post="68" />
            <TransformationCard name="Shravya Vasam" pre="40.18" post="72.5" />
            <TransformationCard
              name="Lakshmi Narayana Sidda"
              pre="55.36"
              post=" 85"
            />
            <TransformationCard
              name="Peeyush Sharma"
              pre="43.75"
              post="66.96"
            />
            <TransformationCard name="Manisha Dangi" pre="51.34" post="70" />
          </ScrollView>
          {/* </View> */}

          <View style={{ backgroundColor: "red" }}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.modalView}>
                <View
                  style={{
                    // height: 60,
                    // width: "124%",

                    backgroundColor: "#0084D6",
                    // bottom: 35,
                    // right: 36,
                    width: "100%",
                    top: 0,
                    bottom: 0,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      // top: 20,
                      // left: 20,
                      fontSize: 16,
                      color: "white",
                      fontWeight: "bold",
                      padding: 10,
                    }}
                  >
                    Consolidated Marks
                  </Text>
                  <TouchableOpacity
                    onPress={() => setModalVisible(false)}
                    style={{ padding: 10 }}
                  >
                    <Entypo name="cross" size={30} />
                  </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: "white", padding: 20 }}>
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
                    padding: 10,
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
                    borderWidth: 0.5,

                    borderColor: "#E5E4E2",
                    elevation: 1,
                  }}
                ></View>

                <ScrollView
                  showsVerticalScrollIndicator={false}
                  nestedScrollEnabled={true}
                  style={{ width: "100%", padding: 10 }}
                >
                  <FlatList
                    data={allscores}
                    renderItem={Item}
                    keyExtractor={(item) => item.id}
                  />
                </ScrollView>
              </View>
            </Modal>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
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

    // padding: 20,

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
  },
  modalText: {
    marginBottom: 15,
    justifyContent: "flex-start",
  },
});
