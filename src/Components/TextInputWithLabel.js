// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { StyleSheet, Text, View, TextInput } from "react-native";

// export default function TextInputWithLabel({
//   label,
//   value,
//   placeholder,
//   isSecure,
//   onChangeText,
//   name,
//   ...props
// }) {
//   return (
//     <View>
//       <Text style={styles.LabelStyle}></Text>
//       <TextInput
//         name={name}
//         value={value}
//         placeholder={placeholder}
//         onChangeText={onChangeText}
//         style={styles.inputStyle}
//         {...props}
//         placeholderTextColor="gray"
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#fff",
//     justifyContent: "center",
//   },
//   inputStyle: {
//     height: 41.3,
//     width: "100%",
//     backgroundColor: "#cfe2f3",
//     borderColor: "#253f67",
//     borderRadius: 20,
//     paddingTop: 2.5,
//     color: "#253f67",
//     fontFamily: "Helvetica-Bold",
//     fontSize: 14,
//     paddingLeft: 15,
//   },
//   LabelStyle: {
//     fontWeight: "bold",
//     fontSize: 16,
//     marginBottom: 1,
//     paddingLeft: 15,
//   },
// });
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Platform,
  Modal,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { TextInput } from "react-native-paper";
// import { RadioButton } from "react-native-paper";
// import DateTimePicker from "@react-native-community/datetimepicker";
// import ProfilePhoto from "../../../Components/Modals/ProfilePhoto";
// import { Button } from "./Profile";
const Input = ({ label }) => {
  return (
    <TextInput
      label={label}
      mode="outlined"
      autoCapitalize="none"
      theme={{ colors: { primary: "#89D8BB" } }}
      style={styles.TextInput}
    />
  );
};
const { width } = Dimensions.get("window");

export default function TextInputWithLabel({ navigation, label }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView
        style={
          {
            // backgroundColor: "blue",
            // // top: 40,
            // width: "100%",
            // borderTopLeftRadius: 18,
          }
        }
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            width: "90%",
            alignItems: "center",
            alignContent: "center",
            alignSelf: "center",
            borderRadius: 20,
            height: 200,
            // top: 50,
            backgroundColor: "red",
          }}
        >
          <Input label={label} />
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    alignItems: "center",
    backgroundColor: "white",
    // top: 20,
  },
  ModalView: {
    flex: 1,
    backgroundColor: "#000000aa",
    width: width,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  MainBodyView: {
    width: width,
    alignItems: "center",
    height: 30,
    marginTop: 10,
  },
  NameText: {
    fontFamily: "Spartan_Bold",
    color: "#283673",
    fontSize: 20,
  },
  Second: {
    width: width,
    alignItems: "center",
    justifyContent: "center",
    height: 100,
  },
  Profile: { height: 90, width: 90 },
  TextInputView: {
    // width: "90%",
    // marginTop: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  Date: {
    textAlign: "center",
    color: "gray",
  },
  GenderView: { width: width - 80, marginTop: 10 },
  GenderText: {
    fontSize: 17,
    color: "#283673",
    fontFamily: "Spartan_Medium",
  },
  RadioButtonView: {
    width: width - 100,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  RadioButtonText: {
    fontSize: 15,
    color: "#283673",
    fontFamily: "Spartan_Medium",
  },
  Button: {
    backgroundColor: "#89D8BB",
    height: 45,
    width: 45,
    borderRadius: 45,
    position: "absolute",
    marginLeft: 200,
    marginTop: 60,
  },
  ButtonView: {
    backgroundColor: "#283672",
    height: 45,
    borderRadius: 45,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  TextInput: {
    height: 40,
  
    width: width - 80,
    fontSize: 14,
    color: "#89D8BB",
    fontFamily: "Spartan_SemiBold",
  },
  TextInput1: {
    // height: 40,
    // marginTop: 19,
    // width: width - 80,
    // fontSize: 14,
    // color: "#89D8BB",
    // fontFamily: "Spartan_SemiBold",
    // marginTop: 19,
  },
  DOB: {
    height: 40,
    marginTop: 19,
    width: width - 80,
    fontSize: 14,
    color: "#89D8BB",
    fontFamily: "Spartan_SemiBold",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 3,
    paddingTop: 9,
  },
});
