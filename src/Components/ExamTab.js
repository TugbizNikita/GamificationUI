import React from "react";
import { View, Text, StyleSheet, Dimensions, StatusBar } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import AssignedExam from "../Screens/Assesment/AssignedExam";
import CompletedExam from "../Screens/Assesment/CompletedExam";
const Tab = createMaterialTopTabNavigator();
export default function ExamTab() {
  return (
    <Tab.Navigator
      swipeEnabled={false}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          height: 70,
          padding: 10,
          borderRadius: 20,
          width: "100%",
        },
        tabBarScrollEnabled: false,
      }}
      style={{ paddingTop: StatusBar.currentHeight }}
    >
      <Tab.Screen
        options={{
          title: ({ focused }) => (
            <View
              style={{
                height: 45,
                borderRadius: 40,
                width: 130,
                justifyContent: "center",
                alignItems: "center",
                bottom: 10,

                backgroundColor: focused ? "#1390E0" : "#D6DBDF",
                left: 4,
              }}
            >
              <Text style={{ color: focused ? "white" : "black" }}>
                Assigned Exam
              </Text>
            </View>
          ),
        }}
        name="AssignedExam"
        component={AssignedExam}
      />
      {/* <Tab.Screen
        options={{
          title: ({ focused }) => (
            <View
              style={{
                height: 45,
                borderRadius: 10,
                width: 100,
                justifyContent: "center",
                alignItems: "center",
                bottom: 10,
                backgroundColor: focused ? "white" : "#D6DBDF",
                left: 4,
              }}
            >
              <Text>LeaderBoard</Text>
            </View>
          ),
        }}
        name="Task"
        component={Task}
      /> */}

      <Tab.Screen
        options={{
          title: ({ focused }) => (
            <View
              style={{
                height: 45,
                borderRadius: 40,
                width: 130,
                justifyContent: "center",
                alignItems: "center",
                bottom: 10,
                backgroundColor: focused ? "#1390E0" : "#D6DBDF",
                left: 4,
              }}
            >
              <Text style={{ color: focused ? "white" : "black" }}>
                Completed Exam
              </Text>
            </View>
          ),
        }}
        name="CompletedExam"
        component={CompletedExam}
      />
    </Tab.Navigator>
  );
}
