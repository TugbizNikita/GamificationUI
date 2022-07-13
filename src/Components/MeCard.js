import React from "react";
import { View, Text, StyleSheet, Dimensions, StatusBar } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import All from "../Screens/Discover/All";
import Elearning from "../Screens/Discover/Elearning";
import Q from "../Screens/Discover/Q";
import Haks from "../Screens/Discover/Haks";
import Gorups from "../Screens/MeTab/Groups";
import LeaderBoard from "../Screens/MeTab/LeaderBoard";
import Scheduled from "../Screens/MeTab/Scheduled";
import Fontisto from "react-native-vector-icons/Fontisto";
import ElearningUI from "../Screens/Elearning/ElearningUI";

// import NewRequest from "./NewRequest";
// import CompletedOrders from "./CompletedOrders";
// import DeliveryPending from "./DeliveryPending";
// import WaitingOrders from "./WaitingOrders";
const Tab = createMaterialTopTabNavigator();
export default function MeCard() {
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
                borderRadius: 10,
                width: 100,
                justifyContent: "center",
                alignItems: "center",
                bottom: 10,

                backgroundColor: focused ? "#1390E0" : "#D6DBDF",
                left: 4,
              }}
            >
              <Text style={{ color: focused ? "white" : "black" }}>
                Schedule
              </Text>
            </View>
          ),
        }}
        name="Scheduled"
        component={Scheduled}
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
                backgroundColor: focused ? "#1390E0" : "#D6DBDF",
                left: 4,
              }}
            >
              <Text style={{ color: focused ? "white" : "black" }}>
                Elearning
              </Text>
            </View>
          ),
        }}
        name="ElearningUI"
        component={ElearningUI}
      /> */}

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
                backgroundColor: focused ? "#1390E0" : "#D6DBDF",
                left: 4,
              }}
            >
              <Text style={{ color: focused ? "white" : "black" }}>Groups</Text>
            </View>
          ),
        }}
        name="Gorups"
        component={Gorups}
      /> */}
    </Tab.Navigator>
  );
}
