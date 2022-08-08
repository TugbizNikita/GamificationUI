import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  BackHandler,
  Dimensions,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

const header = ["DAYS", "START DATE", "END DATE", "TRAINER NAME", "ACTIVITY"];
import { AnimatedCircularProgress } from "react-native-circular-progress";
// import MeTab from "../../Components/MeCard";
import { useFocusEffect } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector, useDispatch } from "react-redux";

const { height, width } = Dimensions.get("window");
export default function Schedule({ navigation }) {
  const [batchSchedule, setBatchSchedule] = useState([]);

  const authToken = useSelector((state) => state.Reducers.authToken);
  const userNamee = useSelector((state) => state.Reducers.userName);
  console.log("authToken=====>", authToken);

  const dashboardData = `http://3.215.18.129/dashboard/?login-Id=${userNamee}`;

  useEffect(() => {
    fetch(dashboardData)
      .then((response) => response.json())

      .then((json) => {
        setBatchSchedule(json.batchSchedule[0]["schedule"]);
        console.log("batchSchedule===>", json.batchSchedule[0]["schedule"]);
      })

      .catch((error) => {
        console.error(error);
      });
  }, []);

  const Item = ({ item }) => {
    return (
      <LinearGradient
        style={{
          // width: "100%",
          width: width - 30,
          // height: 200,

          elevation: 1,

          alignItems: "center",
          padding: 10,

          // margin: 20,
          justifyContent: "space-between",

          marginVertical: 10,

          borderRadius: 20,
        }}
        colors={["white", "#66ffff"]}
      >
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            paddingLeft: 10,

            // backgroundColor: "red",

            // flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "black",
              marginVertical: 5,
            }}
          >
            Start Date : {item.startDate.split(" ")[0]}
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "black",
              marginVertical: 5,
            }}
          >
            End Date : {item.endDate.split(" ")[0]}
          </Text>

          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              color: "#0084D6",
              marginVertical: 5,
            }}
          >
            Activity : {item.activity}{" "}
          </Text>

          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "black",
              marginVertical: 5,
            }}
          >
            Day(s) : {item.days}
          </Text>

          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "black",
              marginVertical: 5,
            }}
          >
            Trainer Name : {item.trainerName}
          </Text>
        </View>

        {/* <View
          style={{
            justifyContent: "center",
            alignItems: "flex-start",
            width: "100%",
            // backgroundColor: "red",
            marginVertical: 20,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "#0084D6" }}>
            Activity : {item.activity}{" "}
          </Text>
        </View>
        <View
          style={{
            justifyContent: "space-between",
            width: "100%",
            flexDirection: "row",
            marginVertical: 10,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>
            Day(s) : {item.days}
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>
            Trainer Name : {item.trainerName}
          </Text>
        </View> */}
      </LinearGradient>
    );
  };

  const arraydata = [];

  batchSchedule.map((item) => {
    arraydata.push([
      item.days,
      item.startDate.split(" ")[0],
      item.endDate.split(" ")[0],
      item.trainerName,
      item.activity,
    ]);
  });
  console.log("arraydata", arraydata);
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate("DashBoard");
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
  return (
    <LinearGradient
      style={{
        width: "100%",

        flex: 1,
        justifyContent: "center",
      }}
      colors={["#5899E2", "#FFFFFF"]}
    >
      <View
        style={{
          width: "100%",
          backgroundColor: "#0084D6",
          flex: 0.1,
          padding: 10,

          borderBottomStartRadius: 40,
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
          Your Training Journey
        </Text>
      </View>
      <View
        style={{
          bottom: 0,
          flex: 0.9,
          // padding: 20,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
          style={{ marginTop: 0 }}
        >
          <FlatList
            data={batchSchedule}
            renderItem={Item}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
      </View>
    </LinearGradient>
  );
}
