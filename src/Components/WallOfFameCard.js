import { element } from "prop-types";
import react from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function WallOfFameCard({ name, marks, name1, marks1 }) {
  return (
    <View
      style={{
        height: "100%",
        width: 300,
        marginLeft: 11,

        // bottom: 70,
      }}
    >
      <LinearGradient
        style={{
          height: "80%",
          width: "100%",
          flexDirection: "row",
          elevation: 2,
          //   backgroundColor: "pink",
          top: 30,
          borderBottomLeftRadius: 100,

          borderTopRightRadius: 100,
          borderWidth: 1,
          borderColor: "pink",
        }}
        colors={["#1390E0", "#66ffff"]}
      ></LinearGradient>
    </View>
  );
}
