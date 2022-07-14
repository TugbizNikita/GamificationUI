import React, { useState } from "react";
import {
  StyleSheet,
  Dimensions,
  //   TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";

import Icon from "react-native-vector-icons/FontAwesome5";
const { height, width } = Dimensions.get("window");
export default function TextInputComponent({
  value,
  setValue,
  placeholder,
  onChangeText,
  keyboardType,
}) {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  return (
    <View style={styles.InputStyle}>
      <TextInput
        theme={{
          colors: { primary: "#0084D6" },
          //   fonts: {
          //     regular: { fontFamily: "Philosopher_400Regular_Italic" },
          //   },
          label: { primary: "#9505E9" },
          roundness: 13,
        }}
        style={styles.TextInputStyle}
        placeholder={placeholder}
        secureTextEntry={isSecureEntry}
        value={value}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
      ></TextInput>
      <View style={styles.EyeView}>
        <TouchableOpacity
          onPress={() => {
            setIsSecureEntry((prev) => !prev);
          }}
        >
          <Icon>
            {" "}
            {setIsSecureEntry ? (
              <Icon name="eye" size={16} color="gray" />
            ) : (
              <Icon name="eye-off-outline" />
            )}
          </Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  InputStyle: {
    height: 50,
    width: "90%",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "gray",
    // elevation: 3,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  TextInputStyle: {
    height: "100%",
    width: "80%",
    paddingLeft: 10,
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: "white",
  },
  EyeView: {
    height: "100%",
    width: "18%",
    alignItems: "center",
    justifyContent: "center",
  },
});
