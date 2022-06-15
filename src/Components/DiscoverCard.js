import React from "react";
import { View, Text, StyleSheet, Dimensions, StatusBar } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import All from "../Screens/Discover/All";
import AllTab from "../Screens/Discover/AllTab";
import Blog from "../Screens/Discover/Blog";
import Q from "../Screens/Discover/Q";
import Haks from "../Screens/Discover/Haks";
import DailyQ from "../Screens/Discover/DailyQ";
import Entypo from "react-native-vector-icons/Entypo";
import Foundation from "react-native-vector-icons/Foundation";
import BlogLink from "../Screens/Discover/BlogLink";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createMaterialTopTabNavigator();
export default function OrderHeader() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
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
                  borderWidth: 2,
                  height: 45,
                  width: 45,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "#0084D6",
                }}
              >
                <View
                  style={{
                    height: 35,
                    width: 35,
                    backgroundColor: "black",
                    borderRadius: 40,
                    borderWidth: 0,
                    elevation: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Foundation
                    name="compass"
                    color="white"
                    size={30}
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      //   backgroundColor: "#0084D6",
                    }}
                  />
                </View>
              </View>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 9,
                  // fontWeight: "bold",
                }}
              >
                All
              </Text>
            </View>
          ),
        }}
        name="AllTab"
        component={AllTab}
      />
      <Tab.Screen
        options={{
          title: ({ focused }) => (
            <View>
              <View
                style={{
                  borderWidth: 2,
                  height: 45,
                  width: 45,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "#0084D6",
                }}
              >
                <View
                  style={{
                    height: 35,
                    width: 35,
                    backgroundColor: "#F54738",
                    borderRadius: 40,
                    borderWidth: 0,
                    elevation: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Entypo
                    name="text-document"
                    color="white"
                    size={28}
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      //   backgroundColor: "#0084D6",
                    }}
                  />
                </View>
              </View>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 9,
                  // fontWeight: "bold",
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
                  borderWidth: 2,
                  height: 45,
                  width: 45,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "#0084D6",
                }}
              >
                <View
                  style={{
                    height: 35,
                    width: 35,
                    backgroundColor: "#0084D6",
                    borderRadius: 40,
                    borderWidth: 0,
                    elevation: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Entypo
                    name="chat"
                    color="white"
                    size={28}
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      //   backgroundColor: "#0084D6",
                    }}
                  />
                </View>
              </View>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 9,
                  // fontWeight: "bold",
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
                  borderWidth: 2,
                  height: 45,
                  width: 45,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "#0084D6",
                }}
              >
                <View
                  style={{
                    height: 35,
                    width: 35,
                    backgroundColor: "#6EE80E",

                    borderRadius: 40,
                    borderWidth: 0,
                    elevation: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Entypo
                    name="light-bulb"
                    color="white"
                    size={30}
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      //   backgroundColor: "#0084D6",
                    }}
                  />
                </View>
              </View>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 9,
                  // fontWeight: "bold",
                }}
              >
                {" "}
                Hacks{" "}
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
                  borderWidth: 2,
                  height: 45,
                  width: 45,
                  top: 5,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "#0084D6",
                }}
              >
                <View
                  style={{
                    height: 35,
                    width: 35,
                    // top: 5,
                    backgroundColor: "#0084D6",
                    borderRadius: 40,
                    borderWidth: 0,
                    elevation: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="access-point"
                    color="white"
                    size={30}
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      //   backgroundColor: "#0084D6",
                    }}
                  />
                </View>
              </View>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 9,
                  top: 5,
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
                  borderWidth: 2,
                  height: 45,
                  width: 45,
                  // top: 5,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "#0084D6",
                }}
              >
                <View
                  style={{
                    height: 35,
                    width: 35,
                    backgroundColor: "#FBEE24",

                    borderRadius: 40,
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
              </View>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 9,

                  // fontWeight: "bold",
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
    </Tab.Navigator>
  );
}
