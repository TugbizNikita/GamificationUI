import React from "react";
import { View, Text, TouchableOpacity, Image, Dimensions, ScrollView } from "react-native";

const { height, width } = Dimensions.get("window");

export default function Confirm({ navigation }) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          height: height,
          width: width,
          alignItems: "center",
          justifyContent: "flex-end",
          backgroundColor: "#253f67",
          flex: 1,
          paddingBottom: 0,
        }}
      >
        <View
          style={{
            flex: 0.7,
            backgroundColor: "white",
            width: width,
            borderTopStartRadius: 100,
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Image
            source={require("../../../assets/Images/confirm.png")}
            style={{
              height: 140,
              width: 140,
              marginTop: 0,
              tintColor: "#fb5414",
            }}
          />
          <View style={{ width: "81%", alignItems: "center", marginTop: 0 }}>
            <Text
              style={{
                color: "#253f67",
                fontFamily: "Helvetica",
                fontSize: 18,
              }}
            >
              Thank you for submiting your details
            </Text>
            <Text
              style={{
                color: "#253f67",
                fontFamily: "Helvetica",
                fontSize: 18,
              }}
            >
              we will get back to you shortly
            </Text>
            <Text
              style={{
                color: "#253f67",
                fontFamily: "Helvetica",
                fontSize: 18,
              }}
            >
              with your on boarding details
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={{
              height: 40,
              width: width - 190,
              backgroundColor: "#fb5414",
              borderRadius: 39,
              justifyContent: "center",
              marginTop: 0,
            }}
          >
            <Text
              style={{
                color: "white",
                fontFamily: "Helvetica-Bold",
                textAlign: "center",
                fontSize: 17,
              }}
            >
              Go to Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
