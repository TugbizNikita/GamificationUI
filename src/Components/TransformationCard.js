import react from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";

export default function TransformationCard() {
  return (
    <View
      style={{
        height: "100%",
        width: 300,
        marginLeft: 11,
      }}
    >
      <View
        style={{
          height: "70%",
          width: "100%",
          flexDirection: "row",
        }}
      >
        <>
          <Image
            style={{
              height: "100%",
              width: "50%",
              borderTopLeftRadius: 20,
              // borderBottomLeftRadius: 20,
            }}
            source={require("../../assets/Images/PreAssesment.webp")}
          />
          <Text
            style={{
              shadowColor: "#000",
              color: "white",
              fontWeight: "bold",
              position: "absolute",
              bottom: 7,
              left: 22,
            }}
          >
            Pre Assesment
          </Text>
        </>
        <>
          <Image
            style={{
              height: "100%",
              width: "50%",
              borderTopRightRadius: 20,
              // borderBottomRightRadius: 20,
            }}
            source={require("../../assets/Images/PostAssesment1.jpg")}
          />
          <Text
            style={{
              shadowColor: "#000",
              color: "white",
              fontWeight: "bold",
              position: "absolute",
              bottom: 7,
              right: 22,
            }}
          >
            Post Assesment
          </Text>
        </>
      </View>
      <View
        style={{
          height: "30%",
          width: "100%",
          backgroundColor: "#0084D6",
          borderBottomEndRadius: 20,
          borderBottomStartRadius: 20,
        }}
      >
        <Text style={{ top: 5, textAlign: "center", color: "white" }}>
          {" "}
          Nitin, 30 yrs
        </Text>

        <Text
          style={{ top: 5, textAlign: "center", fontSize: 17, color: "white" }}
        >
          {" "}
          Lost 15 kg in 6 Months
        </Text>
      </View>
    </View>
  );
}
