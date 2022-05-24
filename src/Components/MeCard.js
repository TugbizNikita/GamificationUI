import React from "react";
import { View, Text, StyleSheet, Dimensions, StatusBar } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import All from "../Screens/Discover/All";
import Blog from "../Screens/Discover/Blog";
import Q from "../Screens/Discover/Q";
import Haks from "../Screens/Discover/Haks";
import Gorups from "../Screens/MeTab/Groups";
import LeaderBoard from "../Screens/MeTab/LeaderBoard";
import Task from "../Screens/MeTab/Task";
import Fontisto from "react-native-vector-icons/Fontisto";
// import NewRequest from "./NewRequest";
// import CompletedOrders from "./CompletedOrders";
// import DeliveryPending from "./DeliveryPending";
// import WaitingOrders from "./WaitingOrders";
const Tab = createMaterialTopTabNavigator();
export default function MeCard() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#F4F6F7",
          height: 70,
          padding: 10,
          borderRadius: 20,
          width: "100%",
        },
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

                backgroundColor: focused ? "white" : "#D6DBDF",
                left: 4,
              }}
            >
              <Text>Task</Text>
            </View>
          ),
        }}
        name="LeaderBoard"
        component={LeaderBoard}
      />
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
      />

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
                backgroundColor: focused ? "white" : "#D6DBDF",
                left: 4,
              }}
            >
              <Text>Groups</Text>
            </View>
          ),
        }}
        name="Gorups"
        component={Gorups}
      />

      {/* <Tab.Screen
        options={{
          title: ({ focused }) => (
            <View
              style={{
                height: 71,
                borderRadius: 20,
                width: 80,
                marginTop: 1,
                padding: 3,
                backgroundColor: focused ? "#FB5414" : "#253F67",
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontFamily: "Helvetica-Bold",
                  lineHeight: 20,
                  fontSize: 15,
                  marginTop: 7,
                }}
              >
                Delivery Pending (2)
              </Text>
            </View>
          ),
        }}
        name="DeliveryPending"
        component={DeliveryPending}
      />
      <Tab.Screen
        options={{
          title: ({ focused }) => (
            <View
              style={{
                height: 71,
                borderRadius: 20,
                width: 80,
                marginTop: 1,
                backgroundColor: focused ? "#FB5414" : "#253F67",
                padding: 3,
                right: 7,
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontFamily: "Helvetica-Bold",
                  lineHeight: 20,
                  fontSize: 14,
                  marginTop: 7,
                }}
              >
                Completed Orders (15)
              </Text>
            </View>
          ),
        }}
        name="CompletedOrders"
        component={CompletedOrders}
      /> */}
    </Tab.Navigator>
  );
}
