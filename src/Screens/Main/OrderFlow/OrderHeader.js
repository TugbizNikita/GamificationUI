import React from "react";
import { View, Text, StyleSheet, Dimensions, StatusBar } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import NewRequest from "./NewRequest";
import CompletedOrders from "./CompletedOrders";
import DeliveryPending from "./DeliveryPending";
import WaitingOrders from "./WaitingOrders";

const Tab = createMaterialTopTabNavigator();

export default function OrderHeader() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#253f67",
          height: 90,
        },
      }}
      style={{ paddingTop: StatusBar.currentHeight }}
    >
      <Tab.Screen
        options={{
          title: ({ focused }) => (
            <View
              style={{
                padding: 3,
                height: 71,
                borderRadius: 20,
                width: 80,
                left: 5,
                marginTop: 1,
                backgroundColor: focused ? "#fb5414" : "#253f67",
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
                New Request (4)
              </Text>
            </View>
          ),
        }}
        name="NewRequest"
        component={NewRequest}
      />
      <Tab.Screen
        options={{
          title: ({ focused }) => (
            <View
              style={{
                height: 71,
                padding: 3,
                borderRadius: 20,
                width: 80,
                marginTop: 1,
                backgroundColor: focused ? "#fb5414" : "#253f67",
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontFamily: "Helvetica-Bold",
                  lineHeight: 20,
                  fontSize: 15.7,
                  marginTop: 7,
                }}
              >
                Waiting Orders (3)
              </Text>
            </View>
          ),
        }}
        name="WaitingOrders"
        component={WaitingOrders}
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
                padding: 3,
                backgroundColor: focused ? "#fb5414" : "#253f67",
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
                backgroundColor: focused ? "#fb5414" : "#253f67",
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
      />
    </Tab.Navigator>
  );
}
