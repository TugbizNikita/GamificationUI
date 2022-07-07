import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { TextInput } from "react-native-paper";

const { width } = Dimensions.get("window");

const InputComponent = ({
  placeholder,
  label,
  onChangeText,
  value,
  name,
  type,
  setFieldTouched,
  onBlur,
}) => {
  return (
    <View
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <TextInput
        placeholder={placeholder}
        mode="outlined"
        theme={{
          colors: { primary: "#0084D6" },
          //   fonts: {
          //     regular: { fontFamily: "Philosopher_400Regular_Italic" },
          //   },
          label: { primary: "#9505E9" },
          roundness: 13,
        }}
        label={label}
        onChangeText={onChangeText}
        value={value}
        name={name} // added this
        type={type}
        setFieldTouched={setFieldTouched}
        placeholderTextColor="grey"
        underlineColorAndroid="grey"
        returnKeyType="next"
        style={styles.emailInput}
        onBlur={onBlur}
      />
    </View>
  );
};

export default InputComponent;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    borderWidth: 1,
    backgroundColor: "#0084D6",
  },
  Onboarding: {
    borderBottomLeftRadius: 70,
    flex: 0.4,
    justifyContent: "center",
  },
  secondView: {
    alignItems: "center",
    flex: 0.6,
    backgroundColor: "white",
    borderTopLeftRadius: 70,
  },
  logo: {
    height: 55,
    width: 221,
    top: 40,
  },
  inputView: {
    padding: 20,
    top: 20,
    width: "100%",
  },
  emailInput: {
    height: 45,
    width: "90%",
    lineHeight: 20,
    marginVertical: 5,
    // top: 20,
    borderRadius: 30,
    // borderWidth: 1,
    backgroundColor: "white",
  },
  checkboxView: {
    width: width - 55,
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 7,
    backgroundColor: "white",
    left: 20,
    top: 50,
  },
  terms: {
    color: "#253f67",
    lineHeight: 20,
    fontSize: 14,
    fontFamily: "Helvetica",
  },
});
