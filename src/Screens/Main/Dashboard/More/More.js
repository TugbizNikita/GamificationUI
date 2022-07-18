import React, { useCallback, useState, useEffect } from "react";
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
import RNSearchablePicker from "react-native-searchable-picker";

const { width, height } = Dimensions.get("window");

const data = [
  {
    label: "Group-1",
    value: "Group-1",
  },
  {
    label: "Group-2",
    value: "Group-2",
  },
  {
    label: "Group-3",
    value: "Group-3",
  },
  {
    label: "Group-4",
    value: "Group-4",
  },
  {
    label: "Group-5",
    value: "Group-5",
  },
  {
    label: "Group-6",
    value: "Group-6",
  },
  {
    label: "Group-7",
    value: "Group-7",
  },
];

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

  const [selected, setSelected] = useState();

  const selectHandler = (item) => {
    setSelected(item);
  };

  useEffect(() => {
    console.log(selected);
  }, [selected]);

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
          height: 65,
          width: "100%",
          backgroundColor: "#0084D6",
          top: 30,

          padding: 10,

          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            left: 10,

            justifyContent: "center",

            color: "white",
            fontWeight: "bold",
          }}
        >
          User Profile
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "white",

          justifyContent: "center",
          width: "100%",
          padding: 20,
          // flex: 1,
          top: 40,
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            width: "100%",
            backgroundColor: "white",
            paddingBottom: 190,
          }}
        >
          <View
            style={{
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
              width: "105%",
              backgroundColor: "white",
              top: 10,

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
              width: "105%",
              backgroundColor: "white",
              top: 20,

              right: 10,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", left: 20 }}>
              Mobile
            </Text>
            <InputComponent placeholder="Mobile" label="Mobile" />
          </View>

          <View
            style={{
              width: "105%",
              backgroundColor: "white",
              top: 30,

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
              width: "105%",
              backgroundColor: "white",
              top: 40,

              right: 10,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", left: 20 }}>
              Organization Email
            </Text>
            <InputComponent
              placeholder="Organization Email"
              label="Organization Email"
            />
          </View>

          <View
            style={{
              width: "105%",
              backgroundColor: "white",
              top: 50,

              right: 10,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", left: 20 }}>
              Password
            </Text>
            <InputComponent placeholder="Password" label="Password" />
          </View>

          <Text style={{ fontSize: 16, fontWeight: "bold", left: 20, top: 60 }}>
            Group
          </Text>

          <View
            style={{
              backgroundColor: "white",

              borderRadius: 20,
              top: 70,

              // height: 150,
            }}
          >
            <RNSearchablePicker
              onSelect={selectHandler}
              data={data}
              placeholder="Choose an item"
              defaultValue={data[0].label}
              containerStyles={{
                marginHorizontal: 10,
                backgroundColor: "white",
                borderRadius: 20,
                borderWidth: 1,
                padding: 10,
              }}
              listStyles={{ maxHeight: 70, borderRadius: 20, padding: 10 }}
            />
          </View>

          <View style={{ width: "95%", left: 10 }}>
            <TouchableOpacity
              style={{
                height: 50,
                backgroundColor: "#0084D6",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                top: 100,
              }}
            >
              <Text
                style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
              >
                Update
              </Text>
            </TouchableOpacity>
            <View style={{ height: 100 }}></View>
          </View>
          <View style={{ height: 100 }}></View>
        </ScrollView>
      </View>
    </View>
  );
}
