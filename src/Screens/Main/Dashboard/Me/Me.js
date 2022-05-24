import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import MeTab from "../../../../Components/MeCard";
export default function Me() {
  return (
    <View
      style={{
        justifyContent: "flex-start",
        width: "100%",
        height: "100%",
        padding: 10,
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <View
        style={{
          height: 100,
          width: "100%",
          backgroundColor: "white",
          top: 30,
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "bold", left: 5 }}>
          Manish Rathi
        </Text>
      </View>
      <View
        style={{
          height: 150,
          width: "100%",
          backgroundColor: "white",
          flexDirection: "row",
          bottom: 30,
        }}
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
            height: 80,
            width: 80,
            borderRadius: 50,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            top: 28,
            left: 10,
          }}
          source={require("../../../../../assets/Images/ProfileImage.png")}
        />
        <View style={{ justifyContent: "flex-start", top: 40, left: 10 }}>
          <Text style={{ textAlign: "center", fontSize: 20 }}>690</Text>
          <Text style={{ textAlign: "center", color: "gray" }}>
            TOTAL POINTS
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            height: 55,
            width: "0%",
            left: 30,
            top: 40,
            backgroundColor: "#F4F6F7",
          }}
        ></View>
        <View style={{ justifyContent: "flex-start", top: 40, left: 50 }}>
          <Text style={{ textAlign: "center", fontSize: 20 }}>690</Text>
          <Text style={{ textAlign: "center", color: "gray" }}>
            DAYS STREAK
          </Text>
        </View>
      </View>
      <View
        style={{
          height: 100,
          backgroundColor: "white",
          bottom: 40,
          width: "100%",
        }}
      >
        <MeTab />
      </View>
    </View>
  );
}
