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
import MeTab from "../../../../Components/MeCard";
import { useFocusEffect } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const { height, width } = Dimensions.get("window");
export default function Me({ navigation }) {
  const [batchSchedule, setBatchSchedule] = useState([]);

  const dashboardData =
    "http://3.215.18.129/dashboard/?login-Id=gupta.sanket007@gmail.com";

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

  // array = batchSchedule;
  // console.log("array=>", array);

  const Item = ({ item }) => {
    return (
      <LinearGradient
        style={{
          width: "90%",
          height: 200,

          elevation: 1,

          alignItems: "center",
          padding: 20,
          // top: 30,
          margin: 20,
          justifyContent: "space-between",

          marginVertical: 8,

          // borderBottomLeftRadius: 65,

          // borderTopRightRadius: 65,
          borderRadius: 20,
        }}
        colors={["#1390E0", "#66ffff", "white"]}
      >
        <View
          style={{
            width: "100%",
            justifyContent: "space-between",

            flexDirection: "row",
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "bold", color: "white" }}>
            Start Date : {item.startDate.split(" ")[0]}
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "bold", color: "white" }}>
            End Date : {item.endDate.split(" ")[0]}
          </Text>
        </View>

        <View
          style={{
            // flexDirection: "column",
            // justifyContent: "flex-start",
            // right: 100,
            justifyContent: "center",
            alignItems: "flex-start",
            width: "100%",
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
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>
            Day(s) : {item.days}
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>
            Trainer Name : {item.trainerName}
          </Text>
        </View>
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
  return (
    <View
      style={{
        // justifyContent: "flex-start",
        width: "100%",

        backgroundColor: "white",
        flex: 1,
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
          Your Training Journey
        </Text>
      </View>
      <View style={{ bottom: 70 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
          style={{ marginTop: 100, backgroundColor: "white" }}
        >
          <FlatList
            data={batchSchedule}
            renderItem={Item}
            // numColumns={2}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
      </View>

      {/* <View
        style={{
          marginTop: 50,
          flex: 1,
          // padding: 20,
          backgroundColor: "white",
          justifyContent: "center",
          bottom: 2,
          // alignItems: "center",
          // bottom: 10,
        }}
      >
        <Table
          borderStyle={{
            borderWidth: 2,
            backgroundColor: "white",
            borderColor: "#c8e1ff",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Row
            style={{ backgroundColor: "#0084D6" }}
            textStyle={{
              textAlign: "center",
              fontSize: 12,
              fontWeight: "bold",
              color: "white",
              padding: 5,
              height: 40,
            }}
            data={header}
          />
        </Table>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: "white", borderColor: "#c8e1ff" }}
        >
          <Table
            borderStyle={{
              borderWidth: 2,
              backgroundColor: "white",
              borderColor: "#c8e1ff",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Rows
              style={{ backgroundColor: "#AED6F1" }}
              textStyle={{
                textAlign: "center",
                fontSize: 10,
                borderColor: "#c8e1ff",
              }}
              data={arraydata}
            />
          </Table>
        </ScrollView>
      </View> */}
    </View>
  );
}
