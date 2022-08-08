import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { AssignedExam, CompletedExam } from "../Utils";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Icon } from "react-native-elements";

const { width, height } = Dimensions.get("window");

const Tab = createMaterialTopTabNavigator();

export default function TopTab({ navigation }) {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View
        style={{
          width: "100%",
          flex: 0.1,
          backgroundColor: "white",
          // marginVertical: 10,
          padding: 10,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("DashBoard");
          }}
        >
          <AntDesign name="arrowleft" size={25} />
        </TouchableOpacity>
        <Text
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 10,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Assessment
        </Text>
      </View>
      <View style={{ bottom: 40, flex: 0.9 }}>
        <Tab.Navigator
          swipeEnabled={false}
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: "white",
              // height: 70,
              padding: 10,

              borderRadius: 20,

              flex: 0.1,
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
                    height: 30,
                    borderRadius: 40,
                    width: "100%",
                    // padding: 10,
                    bottom: 10,
                    // width: "100%",
                    // height: 100,
                    // // padding: 20,
                    // // position: "absolute",
                    // top: 0,
                    // bottom: 20,
                    // borderRadius: 40,
                    // // padding: 10,
                    // // width: 130,
                    // // justifyContent: "center",
                    // // alignItems: "center",
                    // // bottom: 13,
                    // backgroundColor: "white",
                    // padding: 10,

                    backgroundColor: focused ? "#1390E0" : "#D6DBDF",
                    left: 4,
                  }}
                >
                  <Text
                    style={{
                      color: focused ? "white" : "black",
                      textAlign: "center",
                      padding: 5,
                    }}
                  >
                    Assigned Exam
                  </Text>
                </View>
              ),
            }}
            name="AssignedExam"
            component={AssignedExam}
          />

          <Tab.Screen
            options={{
              title: ({ focused }) => (
                <View
                  style={{
                    height: 30,
                    borderRadius: 40,
                    width: "100%",
                    // padding: 10,
                    bottom: 10,
                    // height: 40,
                    // borderRadius: 40,
                    // width: 130,
                    // justifyContent: "center",
                    // alignItems: "center",
                    // // bottom: 10,
                    backgroundColor: focused ? "#1390E0" : "#D6DBDF",
                    left: 4,
                  }}
                >
                  <Text
                    style={{
                      color: focused ? "white" : "black",
                      textAlign: "center",
                      padding: 5,
                    }}
                  >
                    Completed Exam
                  </Text>
                </View>
              ),
            }}
            name="CompletedExam"
            component={CompletedExam}
          />
        </Tab.Navigator>
      </View>
    </View>
  );
}
