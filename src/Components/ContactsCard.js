import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  BackHandler,
  FlatList,
  TouchableOpacity,
  Linking,
  Dimensions,
  ScrollView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useFocusEffect } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");
export default function ContactsCard({ name, profile, mobilenumber, onPress }) {
  return (
    <View
      style={{
        width: "100%",
        // height: "100%",
        bottom: 10,
      }}
    >
      <LinearGradient
        style={{
          width: width - 30,

          padding: 10,
          elevation: 1,

          //   alignItems: "center",
          padding: 20,
          marginVertical: 5,
          flexDirection: "row",
          //   justifyContent: "space-between",
          borderBottomLeftRadius: 50,

          borderTopRightRadius: 50,
        }}
        colors={["white", "#66ffff"]}
      >
        <View
          style={{
            width: "100%",
            flexDirection: "row",

            justifyContent: "space-between",
          }}
        >
          <Image
            style={{
              height: 40,
              width: 40,
              borderRadius: 50,

              resizeMode: "contain",
            }}
            source={require("../../assets/Images/people.png")}
          />
          <View
            style={{
              height: 70,
              width: 0,
              borderWidth: 0.5,
              left: 5,
              borderColor: "#D3D3D3",
            }}
          ></View>
          <View
            style={{
              flexDirection: "column",
              width: "80%",
              marginHorizontal: 20,

              // backgroundColor: "red",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                color: "black",
                textAlign: "left",
              }}
            >
              {name}
            </Text>

            <View
              style={{
                width: "100%",
                marginVertical: 5,
              }}
            >
              <TouchableOpacity
                // onPress={WhatsAppContactAditya}
                onPress={onPress}
                style={{
                  flexDirection: "row",

                  // justifyContent: "space-between",
                }}
              >
                <FontAwesome size={25} color="#28D146" name="whatsapp" />
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "gray",
                    marginHorizontal: 10,
                    marginVertical: 5,
                  }}
                >
                  {/* 7007061232 */}
                  {mobilenumber}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",

                width: "100%",

                // justifyContent: "space-between",
              }}
            >
              <Image
                style={{ height: 23, width: 23 }}
                source={require("../../assets/Images/skills2.png")}
              />
              <Text
                style={{
                  fontWeight: "bold",
                  color: "gray",
                  marginHorizontal: 10,
                }}
              >
                {profile}
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
