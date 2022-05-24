import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  Picker,
  Image,
  ScrollView,
} from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import Feather from "react-native-vector-icons/Feather";
import Historical from "./Historical";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import * as Progress from "react-native-progress";
import Discover from "../../../Components/DiscoverCard";
import AntDesign from "react-native-vector-icons/AntDesign";
import TransformationCard from "../../../Components/TransformationCard";
const { width, height } = Dimensions.get("window");

export function CircleCard({ name }) {
  return (
    <View
      style={{
        height: 170,
        width: "48%",
        borderRadius: 20,
        top: 30,
        padding: 10,
        elevation: 4,
        backgroundColor: "white",
      }}
    >
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{name}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <AntDesign
          size={25}
          color="#0084D6"
          style={{ marginTop: 50 }}
          name="minuscircle"
        />
        <AnimatedCircularProgress
          size={80}
          width={5}
          fill={60}
          tintColor="#A9A9A9"
          onAnimationComplete={() => console.log("onAnimationComplete")}
          backgroundColor="#0084D6"
          style={{ marginTop: 20 }}
        />
        <Image
          style={{
            height: 40,
            width: 40,
            // borderRadius: 50,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            top: 38,
            right: 60,
            // left: 25,
          }}
          source={require("../../../../assets/Images/assessment.png")}
        />
        <Entypo
          size={28}
          color="#0084D6"
          style={{ marginTop: 50 }}
          name="circle-with-plus"
        />
      </View>
      <Text
        style={{
          fontWeight: "bold",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          top: 10,
        }}
      >
        {" "}
        5 of 11{" "}
      </Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function DashBoardHeader({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("Today");
  return (
    <ScrollView
      style={{ backgroundColor: "white", flex: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <SafeAreaView
        style={{ backgroundColor: "white", padding: 14, height: "100%" }}
      >
        <View style={{ alignItems: "center" }}>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 160 }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Today" value="Today" />
            <Picker.Item label="Yesteraday" value="Yesterday" />
            <Picker.Item label="This Month" value="This Month" />
          </Picker>
        </View>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Hi Manish!</Text>
        <View
          style={{
            height: 300,
            // width: "100%",
            borderRadius: 20,
            top: 10,
            padding: 10,
            elevation: 4,
            backgroundColor: "white",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Skill Dashboard
            </Text>
            <MaterialIcons size={20} name="error-outline" />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <AnimatedCircularProgress
              size={100}
              width={5}
              fill={60}
              tintColor="#A9A9A9"
              onAnimationComplete={() => console.log("onAnimationComplete")}
              backgroundColor="#0084D6"
              style={{ marginTop: 20 }}
            />
            <Image
              style={{
                height: 60,
                width: 60,
                // borderRadius: 50,
                // backgroundColor: "pink",
                position: "absolute",
                justifyContent: "center",
                alignItems: "center",
                top: 38,
                left: 20,
              }}
              source={require("../../../../assets/Images/personal-development.png")}
            />
            <Text style={{ marginTop: 60, marginLeft: 10, fontSize: 20 }}>
              758 of 1400
            </Text>
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 50,

                elevation: 1,
                marginTop: 60,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather size={20} name="bar-chart-2" />
            </View>

            <Entypo
              size={28}
              color="#0084D6"
              style={{ marginTop: 60 }}
              name="circle-with-plus"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              height: 80,
              // backgroundColor: "red",
            }}
          >
            <View style={{ top: 20, left: 2 }}>
              <Text style={{ fontSize: 15 }}>Soft Skills : 50%</Text>
              <Progress.Bar
                color="#0084D6"
                borderColor="gray"
                top={5}
                progress={0.5}
                style={{ width: 150 }}
                // width={120}
              />
            </View>

            <View style={{ top: 20, right: 31 }}>
              <Text style={{ fontSize: 15 }}>Technical : 50%</Text>
              <Progress.Bar
                color="#f0a120"
                borderColor="gray"
                top={5}
                progress={0.5}
                style={{ width: 150 }}
                // width={160}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              height: 50,
              // backgroundColor: "red",
            }}
          >
            <View style={{}}>
              <Text style={{ fontSize: 15 }}>Implementation : 50%</Text>
              <View>
                <Progress.Bar
                  color="#f0a120"
                  borderColor="gray"
                  top={5}
                  progress={0.9}
                  style={{ width: 150 }}
                  // width={160}
                />
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            height: 180,
            // width: "100%",
            borderRadius: 20,
            top: 20,
            padding: 10,
            elevation: 4,
            backgroundColor: "white",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Assesment</Text>
            <MaterialIcons size={20} name="error-outline" />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <AnimatedCircularProgress
              size={100}
              width={5}
              fill={60}
              tintColor="#A9A9A9"
              onAnimationComplete={() => console.log("onAnimationComplete")}
              backgroundColor="#0084D6"
              style={{ marginTop: 20 }}
            />
            <Image
              style={{
                height: 60,
                width: 60,
                // borderRadius: 50,
                position: "absolute",
                justifyContent: "center",
                alignItems: "center",
                top: 38,
                left: 25,
              }}
              source={require("../../../../assets/Images/assessment.png")}
            />
            <View style={{ flexDirection: "column" }}>
              <Text style={{ marginTop: 40, textAlign: "left", fontSize: 20 }}>
                758 of 1400
              </Text>
              <Text style={{ textAlign: "left" }}>Cal Burnt</Text>
            </View>
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 50,

                elevation: 1,
                marginTop: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather size={20} name="bar-chart-2" />
            </View>

            {/* <Entypo
              size={28}
              color="#0084D6"
              style={{ marginTop: 50 }}
              name="circle-with-plus"
            /> */}
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <CircleCard name="Assesment" />
          <CircleCard name="Soft Skill" />
        </View>
        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            top: 10,
          }}
        >
          <CircleCard />
          <CircleCard />
        </View> */}

        <View
          style={{
            height: 300,
            width: "100%",
            marginTop: 55,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              padding: 5,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Transformation</Text>
            <Text style={{ fontWeight: "bold" }}>View All</Text>
          </View>
          <ScrollView
            horizontal
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "white",
              borderRadius: 100,
              top: 10,
            }}
            showsHorizontalScrollIndicator={false}
          >
            <TransformationCard />
            <TransformationCard />
            <TransformationCard />
            <TransformationCard />
            <TransformationCard />
          </ScrollView>
        </View>
        <View
          style={{
            justifyContent: "center",
            width: "100%",
            marginTop: 10,
            padding: 10,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Discover</Text>
          <View style={{ height: 500 }}>
            <Discover />
          </View>
        </View>

        <View style={{ height: 100 }}></View>
      </SafeAreaView>
    </ScrollView>
  );
}
