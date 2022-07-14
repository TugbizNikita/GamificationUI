import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Alert,
  BackHandler,
} from "react-native";
import { Octicons } from "react-native-vector-icons";
import Action from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/FontAwesome";
const { height, width } = Dimensions.get("window");
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DashBoardHeader from "./Main/DashBoardHeader";

import Register from "./Register/Register";
import Login from "./Login/Login";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Discussion from "./Main/Dashboard/Discussion/Discussion";
import Me from "./Main/Dashboard/Me/Me";
import Studio from "./Main/Dashboard/Studio/Studio";
import More from "./Main/Dashboard/More/More";
import AppPageStack from "../Navigations/AppPageStack";
import StudioStack from "../Navigations/StudioStack";
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#FFFF",
          height: 58,
          elevation: 20,
          bottom: 0,
        },
      }}
    >
      <Tab.Screen
        name="AppPageStack"
        component={AppPageStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItem: "center",
                left: 10,
              }}
            >
              <FontAwesome
                name="home"
                size={30}
                style={{
                  color: focused ? "#fb5414" : "gray",
                  justifyContent: "center",
                  left: 20,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Helvetica-Bold",
                  color: focused ? "#fb5414" : "gray",
                }}
              >
                Dashboard
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Discussion"
        component={Discussion}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center", alignItem: "center" }}>
              <AntDesign
                name="wechat"
                size={30}
                style={{ color: focused ? "#fb5414" : "gray", left: 25 }}
              />

              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Helvetica-Bold",
                  color: focused ? "#fb5414" : "gray",

                  left: 20,
                }}
              >
                Coach
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Me"
        component={Me}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center", alignItem: "center" }}>
              <FontAwesome
                name="user"
                size={30}
                style={{ color: focused ? "#fb5414" : "gray", left: 15 }}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Helvetica-Bold",
                  color: focused ? "#fb5414" : "gray",
                  left: 18,
                }}
              >
                Me
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="StudioStack"
        component={StudioStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center", alignItem: "center" }}>
              <MaterialCommunityIcons
                name="newspaper-variant-multiple-outline"
                size={30}
                style={{ color: focused ? "#fb5414" : "gray", left: 20 }}
              />

              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Helvetica-Bold",
                  color: focused ? "#fb5414" : "gray",
                  left: 8,
                }}
              >
                Skills Test
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center", alignItem: "center" }}>
              <Feather
                name="more-horizontal"
                size={30}
                style={{ color: focused ? "#fb5414" : "gray" }}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Helvetica-Bold",
                  color: focused ? "#fb5414" : "gray",
                }}
              >
                More
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
