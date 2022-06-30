import React from "react";
import { View, Text, Button, ScrollView } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
// import { Button } from "react-native-paper";
export default function Scheduled() {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        style={{ width: "100%" }}
      >
        <View
          style={{
            paddingBottom: 100,
            backgroundColor: "white",
            width: "100%",
          }}
        >
          <Text>hellloo</Text>
        </View>
      </ScrollView>
    </View>
  );
}
