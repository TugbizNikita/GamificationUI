import React, { useCallback } from "react";
import {
  Alert,
  View,
  BackHandler,
  Text,
  TextInput,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useBackHandler } from "@react-native-community/hooks/lib/useBackHandler";
import { useFocusEffect } from "@react-navigation/native";
import ButtonWithLoader from "../../../../Components/ButtonWithLoader";
// import { TouchableOpacity } from "react-native-gesture-handler";
// import { ScrollView } from "react-native-gesture-handler";
// import { TextInput } from "react-native-paper";

import InputComponent from "../../../../Components/InputComponent";

const { width, height } = Dimensions.get("window");

export default function More({ navigation, route }) {
  // useBackHandler(
  //   useCallback(() => {
  //     Alert.alert("", "Want to do something", [
  //       {
  //         text: "No",
  //         onPress: () => null,
  //         style: "cancel",
  //       },
  //       {
  //         text: "Yes",
  //         onPress: () => {
  //           goBack();
  //         },
  //       },
  //     ]);
  //     return true;
  //   }, [])
  // );

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate("DashBoardHeader");
        // Return true to stop default back navigaton
        // Return false to keep default back navigaton
        return true;
      };

      // Add Event Listener for hardwareBackPress
      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () => {
        // Once the Screen gets blur Remove Event Listener
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
      };
    }, [])
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        width: "100%",
      }}
    >
      <View
        style={{
          top: 30,
          justifyContent: "center",
          alignItems: "center",
          height: 50,
          width: "100%",
          backgroundColor: "#0084D6",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <Text style={{ fontSize: 18, color: "white" }}>User Profile</Text>
      </View>
      <ScrollView style={{ marginTop: 30 }}>
        <View
          style={{
            width: "100%",
            height: height,
            backgroundColor: "white",

            padding: 20,
          }}
        >
          <View
            style={{
              height: 50,
              width: "105%",
              backgroundColor: "white",
              right: 10,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", left: 20 }}>
              First Name
            </Text>
            <View
              style={{
                height: 50,
                width: "90%",
                left: 20,
                // lineHeight: 20,
                marginVertical: 5,
                // top: 20,
                borderRadius: 10,
                borderWidth: 1,
                backgroundColor: "#D1D1D1",
                borderColor: "#D1D1D1",
                elevation: 1,
                justifyContent: "center",
                padding: 10,
              }}
            >
              <Text
                style={{
                  justifyContent: "center",
                  textAlign: "left",
                  fontSize: 16,
                }}
              >
                Sanket Kumar Gupta
              </Text>
            </View>
          </View>

          <View
            style={{
              height: 50,
              width: "105%",
              backgroundColor: "white",
              marginTop: 40,
              right: 10,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", left: 20 }}>
              Last Name
            </Text>
            <View
              style={{
                height: 50,
                width: "90%",
                left: 20,
                // lineHeight: 20,
                marginVertical: 5,
                // top: 20,
                borderRadius: 10,
                borderWidth: 1,
                backgroundColor: "#D1D1D1",
                borderColor: "#D1D1D1",
                elevation: 1,
              }}
            ></View>
          </View>

          <View
            style={{
              height: 50,
              width: "105%",
              backgroundColor: "white",
              marginTop: 40,
              right: 10,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", left: 20 }}>
              Mobile
            </Text>
            <InputComponent placeholder="Mobile" />
          </View>

          <View
            style={{
              height: 50,
              width: "105%",
              backgroundColor: "white",
              marginTop: 40,
              right: 10,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", left: 20 }}>
              Login ID
            </Text>
            <View
              style={{
                height: 50,
                width: "90%",
                left: 20,
                // lineHeight: 20,
                marginVertical: 5,
                // top: 20,
                borderRadius: 10,
                borderWidth: 1,
                backgroundColor: "#D1D1D1",
                borderColor: "#D1D1D1",
                elevation: 1,
              }}
            ></View>
          </View>

          <View
            style={{
              height: 50,
              width: "105%",
              backgroundColor: "white",
              marginTop: 40,
              right: 10,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", left: 20 }}>
              Organization Email
            </Text>
            <InputComponent placeholder="Organization Email" />
          </View>

          <View
            style={{
              height: 50,
              width: "105%",
              backgroundColor: "white",
              marginTop: 40,
              right: 10,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", left: 20 }}>
              Password
            </Text>
            <InputComponent placeholder="Password" />
          </View>

          <View
            style={{
              height: 50,
              width: "105%",
              backgroundColor: "white",
              marginTop: 40,
              right: 10,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", left: 20 }}>
              Group
            </Text>
            <InputComponent placeholder="Group" />
          </View>
          <View style={{ width: "95%", left: 10 }}>
            <TouchableOpacity
              style={{
                height: 50,
                backgroundColor: "#0084D6",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                marginTop: 50,
              }}
            >
              <Text
                style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
              >
                Update
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
