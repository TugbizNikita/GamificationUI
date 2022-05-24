import React from "react";
import { View, Text, StyleSheet, Dimensions, StatusBar } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import BusinessDetails from "./BusinessDetails";
import KYC from "./KYC";
import SetupPayment from "./SetupPayment";
import Icon from "react-native-vector-icons/FontAwesome5";

const Tab = createMaterialTopTabNavigator();

export default function HeaderTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#253f67",
          height: 80,
        },
      }}
      style={{ paddingTop: StatusBar.currentHeight }}
    >
      <Tab.Screen
        options={{
          title: ({ focused }) => (
            <View
              style={{
                height: 50,
                borderRadius: 20,
                width: 100,
                marginTop: 9,
                left: 7,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: focused ? "#fb5414" : "#253f67",
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontFamily: "Helvetica-Bold",
                  fontSize: 15,
                  // lineHeight: 19,
                }}
              >
                Business Details
              </Text>
            </View>
          ),
        }}
        name="BusinessDetails"
        component={BusinessDetails}
      />
      <Tab.Screen
        options={{
          title: ({ focused }) => (
            <View
              style={{
                height: 50,
                borderRadius: 20,
                width: 90,
                marginTop: 9,
                justifyContent: "center",
                backgroundColor: focused ? "#fb5414" : "#253f67",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontFamily: "Helvetica-Bold",
                  fontSize: 15,
                  // lineHeight: 19,
                }}
              >
                KYC
              </Text>
            </View>
          ),
        }}
        name="KYC"
        component={KYC}
      />
      <Tab.Screen
        options={{
          title: ({ focused }) => (
            <View
              style={{
                height: 50,
                borderRadius: 20,
                width: 100,
                marginTop: 9,
                right: 7,
                backgroundColor: focused ? "#fb5414" : "#253f67",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontFamily: "Helvetica-Bold",
                  fontSize: 15,
                  // lineHeight: 19,
                }}
              >
                Setup Payment
              </Text>
            </View>
          ),
        }}
        name="SetupPayment"
        component={SetupPayment}
      />
    </Tab.Navigator>
  );
}
