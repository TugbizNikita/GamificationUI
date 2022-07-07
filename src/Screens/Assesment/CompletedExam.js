import React, { useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Table, Row, Rows } from "react-native-table-component";

import { View, BackHandler, ScrollView } from "react-native";

const header = [
  "ExternalExam",
  "Percentage",
  "PointsScored",
  "Percentage",
  "PointsAvailable",
];

export default function CompletedExam({ navigation }) {
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

  const [completed_exam_data, setCompleted_exam_data] = useState([]);

  const Exam =
    "http://3.215.18.129/getAssessmentData/?login-Id=gupta.sanket007@gmail.com";

  const ExamData = () => {
    fetch(Exam)
      .then((response) => response.json())

      .then((json) => {
        setCompleted_exam_data(json.completed_exam_data);
        console.log("completed_exam_data====>", json.completed_exam_data);
      })

      .catch((error) => {
        console.error(error);

        // if (response.status === 500) {
        //   alert("NetWork error");
        // }
        // console.log("=========>>>>>", response.status === 500);
      });
  };

  useEffect(() => {
    ExamData();
  }, []);

  const arraydata = [];

  completed_exam_data.map((item) => {
    arraydata.push([
      item.externalExamName,
      item.passingPercentage,
      item.points_scored,
      item.percentage,
      item.points_available,
    ]);
  });
  console.log("arraydata===>", arraydata);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, backgroundColor: "white", padding: 10 }}
    >
      <View
        style={{
          marginTop: 120,
          // padding: 20,
          backgroundColor: "white",
          justifyContent: "center",
          bottom: 10,
          // alignItems: "center",
          bottom: 100,
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
            textStyle={{ textAlign: "center", fontSize: 9, fontWeight: "bold" }}
            data={header}
          />

          <Rows
            textStyle={{ textAlign: "center", fontSize: 10 }}
            data={arraydata}
          />
        </Table>
      </View>
    </ScrollView>
  );
}
