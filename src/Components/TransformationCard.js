import { element } from "prop-types";
import react from "react";
import { Text, Image, View, TouchableOpacity, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const { width, height } = Dimensions.get("window");

export default function TransformationCard({
  name,
  marks,
  name1,
  marks1,
  pre,
  post,
}) {
  return (
    <LinearGradient
      style={{
        backgroundColor: "blue",
        width: width - 80,
        height: 200,

        borderRadius: 10,

        flexDirection: "row",

        justifyContent: "space-between",
        borderRadius: 20,

        elevation: 1,
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 10,
      }}
      colors={["white", "#66ffff"]}
    >
      <View
        style={{
          borderWidth: 0,
          height: 100,
          width: 100,
          borderRadius: 100,
          backgroundColor: "white",
          justifyContentL: "center",
          alignItems: "center",
          borderWidth: 2,
          borderColor: "#66ffff",
        }}
      >
        <View
          style={{
            borderWidth: 0,
            height: 80,
            width: 80,
            borderRadius: 80,
            backgroundColor: "#0084D6",
            justifyContentL: "center",
            alignItems: "center",
            marginVertical: 8,
            // top: 5,
          }}
        >
          <Text
            style={{
              shadowColor: "#000",
              color: "white",
              fontWeight: "bold",
              position: "absolute",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              textAlign: "center",
              marginVertical: 20,

              // top: 25,

              fontSize: 25,
            }}
          >
            {pre}
          </Text>
        </View>
      </View>

      <View
        style={{
          borderWidth: 0,
          height: 100,
          width: 100,
          borderRadius: 100,
          backgroundColor: "white",
          justifyContentL: "center",
          alignItems: "center",
          borderWidth: 2,
          borderColor: "#66ffff",
        }}
      >
        <View
          style={{
            borderWidth: 0,
            height: 80,
            width: 80,
            borderRadius: 80,
            backgroundColor: "#0084D6",
            justifyContentL: "center",
            alignItems: "center",
            marginVertical: 8,
            // top: 5,
          }}
        >
          <Text
            style={{
              shadowColor: "#000",
              color: "white",
              fontWeight: "bold",
              position: "absolute",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              textAlign: "center",
              marginVertical: 20,

              fontSize: 25,
            }}
          >
            {post}
          </Text>
        </View>
      </View>

      <LinearGradient
        style={{
          width: width - 80,

          backgroundColor: "white",
          position: "absolute",

          justifyContent: "space-between",
          flexDirection: "row",
          padding: 10,

          marginVertical: 10,
          bottom: 30,
          // borderWidth: 1,

          // borderBottomEndRadius: 20,
          // borderBottomStartRadius: 20,
        }}
        colors={["#0084D6", "white", "#5899E2"]}
      >
        <Text
          style={{
            textAlign: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: 14,
            // top: 10,
            color: "black",
          }}
        >
          Pre Assessment
        </Text>

        <Text
          style={{
            textAlign: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: 14,
            color: "black",
            // top: 10,
          }}
        >
          Post Assessment
        </Text>
      </LinearGradient>
      <View
        style={{
          bottom: 10,
          position: "absolute",
          width: "100%",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontStyle: "italic",
            fontWeight: "bold",
            fontSize: 18,
            alignItems: "center",
          }}
        >
          {name}
        </Text>
      </View>
    </LinearGradient>
    // </View>
  );
}
