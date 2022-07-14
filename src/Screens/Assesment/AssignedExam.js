import React, { useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";

import { View, BackHandler, ScrollView, Text, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function AssignedExam({ navigation }) {
  const [assigned_exam_data, setAssigned_exam_data] = useState([]);

  const Exam =
    "http://3.215.18.129/getAssessmentData/?login-Id=gupta.sanket007@gmail.com";

  const ExamData = () => {
    fetch(Exam)
      .then((response) => response.json())

      .then((json) => {
        setAssigned_exam_data(json.assigned_exam_data);
        console.log("assigned_exam_data", json.assigned_exam_data);
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

  const Item = ({ item }) => {
    const FinalExamUrl = item.finalExamUrl;
    console.log("finalExamUrl", FinalExamUrl);
    // let CourseID = item.chapter_url;
    return (
      <View
        style={{
          backgroundColor: "white",
          marginVertical: 5,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "white",
            width: "90%",
            padding: 10,
          }}
        >
          <View
            style={{
              alignItems: "center",
              backgroundColor: "white",
              width: "70%",
            }}
          >
            <Text style={{ fontSize: 13 }}>{item.externalExamName}</Text>
          </View>
          <View
            style={{
              width: "20%",
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("FinalExamUrl", { paramKey: FinalExamUrl })
              }
              style={{
                height: 50,
                width: 100,
                borderWidth: 1,
                borderRadius: 40,
                backgroundColor: "#0084D6",
                justifyContent: "center",
                borderColor: "gray",
                elevation: 1,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Start Exam
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            width: "100%",
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
      {/* <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        style={{ width: "100%" }}
      > */}
      <View style={{ justifyContent: "space-between" }}>
        <FlatList
          data={assigned_exam_data}
          renderItem={Item}
          keyExtractor={(item) => item.id}
        />
      </View>
      {/* </ScrollView> */}
    </View>
  );
}
