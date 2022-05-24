import React from "react";
import { View, Text, StyleSheet, Dimensions, StatusBar } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import All from "../Screens/Discover/All";
import Blog from "../Screens/Discover/Blog";
import Q from "../Screens/Discover/Q";
import Haks from "../Screens/Discover/Haks";
import DailyQ from "../Screens/Discover/DailyQ";
import Entypo from "react-native-vector-icons/Entypo";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import NewRequest from "./NewRequest";
// import CompletedOrders from "./CompletedOrders";
// import DeliveryPending from "./DeliveryPending";
// import WaitingOrders from "./WaitingOrders";
const Tab = createMaterialTopTabNavigator();
export default function OrderHeader() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          //   backgroundColor: "#253F67",
          height: 100,
        },
      }}
      style={{ paddingTop: StatusBar.currentHeight }}
    >
      <Tab.Screen
        options={{
          title: ({ focused }) => (
            <View>
              <View
                style={{
                  height: 55,
                  width: 55,
                  backgroundColor: "#F54738",
                  borderRadius: 10,
                  borderWidth: 0,
                  elevation: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Entypo
                  name="text-document"
                  color="white"
                  size={40}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    //   backgroundColor: "#0084D6",
                  }}
                />
              </View>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 11,
                  fontWeight: "bold",
                  fontSize: 11,
                  fontWeight: "bold",
                }}
              >
                Blog
              </Text>
            </View>
          ),
        }}
        name="All"
        component={All}
      />

      <Tab.Screen
        options={{
          title: ({ focused }) => (
            <View>
              <View
                style={{
                  height: 55,
                  width: 55,
                  backgroundColor: "#0084D6",
                  borderRadius: 10,
                  borderWidth: 0,
                  elevation: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Entypo
                  name="chat"
                  color="white"
                  size={40}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    //   backgroundColor: "#0084D6",
                  }}
                />
              </View>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 11,
                  fontWeight: "bold",
                }}
              >
                {" "}
                Q & A{" "}
              </Text>
            </View>
          ),
        }}
        name="Q"
        component={Q}
      />

      <Tab.Screen
        options={{
          title: ({ focused }) => (
            <View>
              <View
                style={{
                  height: 55,
                  width: 55,
                  backgroundColor: "#6EE80E",

                  borderRadius: 10,
                  borderWidth: 0,
                  elevation: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Entypo
                  name="light-bulb"
                  color="white"
                  size={40}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    //   backgroundColor: "#0084D6",
                  }}
                />
              </View>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 11,
                  fontWeight: "bold",
                }}
              >
                {" "}
                Haks{" "}
              </Text>
            </View>
          ),
        }}
        name="Haks"
        component={Haks}
      />

      <Tab.Screen
        options={{
          title: ({ focused }) => (
            <View>
              <View
                style={{
                  height: 55,
                  width: 55,
                  top: 3,
                  backgroundColor: "#0084D6",
                  borderRadius: 10,
                  borderWidth: 0,
                  elevation: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="access-point"
                  color="white"
                  size={40}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    //   backgroundColor: "#0084D6",
                  }}
                />
              </View>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 10,
                  top: 4,
                  fontWeight: "bold",
                }}
              >
                E-learning
              </Text>
            </View>
          ),
        }}
        name="Blog"
        component={Blog}
      />
      <Tab.Screen
        options={{
          title: ({ focused }) => (
            <View>
              <View
                style={{
                  height: 55,
                  width: 55,
                  backgroundColor: "#FBEE24",

                  borderRadius: 10,
                  borderWidth: 0,
                  elevation: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* <Entypo
                  name="light-bulb"
                  color="white"
                  size={40}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    //   backgroundColor: "#0084D6",
                  }}
                /> */}

                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Q</Text>
              </View>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 11,
                  fontWeight: "bold",
                }}
              >
                {" "}
                DailyQ{" "}
              </Text>
            </View>
          ),
        }}
        name="DailyQ"
        component={DailyQ}
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
