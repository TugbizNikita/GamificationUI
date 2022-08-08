import React from "react";
import { View, Text, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { DashBoard, Schedule, Profile, Contacts, ELearningUI } from "../Utils";
import ELearningStack from "../Navigations/ELearningStack";
import DashBoardStack from "../Navigations/DashboardStack";
import Ionicons from "react-native-vector-icons/Ionicons";
const Tab = createBottomTabNavigator();

function MyTabs({ props }) {
  // let newmail = route.params.paramKey;
  // console.log("newmail============0000>", newmail);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: "#0084D6",
          height: 58,
          elevation: 20,
          bottom: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingLeft: 20,
          justifyContent: "space-between",
        },
      }}
    >
      <Tab.Screen
        name="DashBoardStack"
        component={DashBoardStack}
        // initialParams={{ mailid: newmail }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItem: "center",
                // left: 10,
                // padding: 10,
                width: "100%",
              }}
            >
              <FontAwesome
                name="home"
                size={30}
                style={{
                  color: focused ? "#66ffff" : "white",
                  justifyContent: "center",
                  paddingLeft: 10,
                  // left: 20,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Helvetica-Bold",
                  color: focused ? "#66ffff" : "white",
                  // width: "100%",
                }}
              >
                Dashboard
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItem: "center",
                width: "100%",
              }}
            >
              <FontAwesome
                name="calendar"
                size={30}
                style={{
                  color: focused ? "#66ffff" : "white",
                  paddingLeft: 10,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Helvetica-Bold",
                  color: focused ? "#66ffff" : "white",
                  // paddingLeft: 5,
                }}
              >
                Schedule
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="ELearningStack"
        component={ELearningStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItem: "center",
                width: "100%",
              }}
            >
              <MaterialCommunityIcons
                name="newspaper-variant-multiple-outline"
                size={30}
                style={{
                  color: focused ? "#66ffff" : "white",
                  paddingLeft: 10,
                }}
              />

              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Helvetica-Bold",
                  color: focused ? "#66ffff" : "white",
                  // paddingLeft: 5,
                }}
              >
                E-Learning
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItem: "center",
                width: "100%",
              }}
            >
              <AntDesign
                name="contacts"
                size={30}
                style={{
                  color: focused ? "#66ffff" : "white",
                  paddingLeft: 10,
                }}
              />

              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Helvetica-Bold",
                  color: focused ? "#66ffff" : "white",
                  paddingLeft: 5,
                }}
              >
                Contacts
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItem: "center",
                width: "100%",
              }}
            >
              <Ionicons
                name="person"
                size={30}
                style={{ color: focused ? "#66ffff" : "white" }}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Helvetica-Bold",
                  color: focused ? "#66ffff" : "white",
                  // paddingLeft: 5,
                }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
