import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Checkbox } from "react-native-paper";

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
  Button,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import Icon from "react-native-vector-icons/FontAwesome5";
import { TextInput } from "react-native-paper";
import LoginOnboarding from "../LoginOnboard/LoginOnboarding";

// const loginValidationSchema = yup.object().shape({
//   to: yup
//     .string()
//     .email("Please enter valid orgnization email ID")
//     // .matches(/([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com/g)
//     .required("Email Address is Required"),
// });

const initialValues = {
  to: "",
};

const validationSchema = yup.object().shape({
  to: yup
    // .string()
    // .email("Please enter official email")
    // .required("Your official email address is required"),
    .string()
    .required("Your official email address is required")
    .email("Please enter official email"),
});

const { width } = Dimensions.get("window");

export default function Login({ navigation }) {
  const [to, setTo] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (data) => {
    setEmail(data.to);
    // console.log("emailll".email);
    // console.log("data11333====", data.to);
    let formData = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([
        {
          to: [data.to],
        },
      ]),
    };
    // console.log("formdata12", formData);
    try {
      await fetch("http://3.215.18.129/generate_otp/", formData).then(
        (response) => {
          response.json().then((data) => {
            // console.log("dataaa", data);

            // Alert.alert("Post created at : ", data);
            if (data.status_code === 0) {
              // alert("Mail Sent Sucessfully");
              navigation.navigate("OTP", {
                paramKey: email,
              });
            } else if (data.status_code === 1) {
              alert("Wrong credentials");
            } else {
              alert("Something went wrong!");
            }
          });
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  const [checked, setChecked] = React.useState(false);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View
        style={{
          // width: "100%",
          flex: 1,
          justifyContent: "center",
          borderWidth: 1,
          backgroundColor: "#0084D6",
        }}
      >
        <View
          style={{
            // height: 300,
            borderBottomLeftRadius: 70,
            // width: "100%",
            // bottom: 100,
            flex: 0.4,
            justifyContent: "center",
          }}
        >
          <LoginOnboarding />
        </View>

        <View
          style={{
            // width: "100%",
            // height: 500,
            alignItems: "center",
            // marginTop: 40,
            // borderWidth: 1,
            flex: 0.6,
            backgroundColor: "white",
            borderTopLeftRadius: 70,
          }}
        >
          <Image
            source={require("../../../assets/Images/NovelLogo.png")}
            style={{ height: 55, width: 221, top: 40 }}
          />

          <View style={{ padding: 20, top: 20 }}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmitHandler}
            >
              {(props) => (
                <View
                  style={{
                    width: 350,
                    justifyContent: "space-between",
                    top: 20,
                    alignItems: "center",
                  }}
                >
                  {console.log(" ____retutn ______ " + JSON.stringify(props))}
                  <TextInput
                    placeholder="Email ID"
                    onChangeText={props.handleChange("to")}
                    value={props.values.to}
                    name="to" // added this
                    type="to"
                    setFieldTouched="to"
                    placeholderTextColor="grey"
                    underlineColorAndroid="grey"
                    returnKeyType="next"
                    style={{
                      height: 40,
                      width: width - 80,
                      lineHeight: 20,
                      top: 20,
                    }}
                    onBlur={() => props.setFieldTouched("to")}
                  />

                  {props.touched.to && props.errors.to && (
                    <Text style={{ fontSize: 15, color: "red", top: 20 }}>
                      {props.errors.to}
                    </Text>
                  )}

                  <View style={{ margin: 20, top: 20, width: "96%" }}>
                    <Button
                      title="Log In"
                      color="#0084D6"
                      onPress={props.handleSubmit}
                      disabled={props.isSubmitting}
                    />
                  </View>
                </View>
              )}
            </Formik>
            {/* <Formik
              validationSchema={loginValidationSchema}
              initialValues={{ to: "" }}
              onSubmit={onSubmitHandler}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                isValid,
              }) => (
                <>
                  <TextInput
                    name="to"
                    placeholder=" Email"
                    // style={styles.textInput}
                    label=" Email"
                    mode="outlined"
                    onChangeText={handleChange("to")}
                    onBlur={handleBlur("to")}
                    value={values.to}
                    keyboardType="email-address"
                    theme={{ colors: { primary: "#89D8BB" } }}
                    style={{
                      height: 40,
                      width: width - 80,
                      // left: 20,
                      lineHeight: 20,
                    }}
                  />
                  {errors.to && (
                    <Text style={{ fontSize: 10, color: "red", left: 20 }}>
                      {errors.to}
                    </Text>
                  )}
                  <TouchableOpacity
                    onPress={handleSubmit}
                    disabled={!isValid}
                    style={{
                      // borderWidth: 1,
                      height: 45,
                      width: width - 80,
                      backgroundColor: "#0084D6",
                      justifyContent: "center",
                      alignItems: "center",
                      top: 20,
                      // left: 20,
                      borderRadius: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 15,
                        fontWeight: "bold",
                      }}
                    >
                      LOG IN
                    </Text>
                  </TouchableOpacity>
                </>
              )}
            </Formik> */}
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              top: 50,
            }}
          >
            <Text
              style={{
                color: "#fb5414",
                fontFamily: "Helvetica",
                fontSize: 16,
              }}
            >
              {" "}
              New to Gamification ?{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <View style={styles.RegisterView}>
                <Text style={{ borderBottomWidth: 2 }}>Register</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: width - 55,
              alignItems: "flex-start",
              justifyContent: "space-between",
              flexDirection: "row",
              marginTop: 7,
              backgroundColor: "white",
              // height: 150,
              left: 20,
              top: 50,
            }}
          >
            <Checkbox
              color="#253f67"
              style={{ color: "red" }}
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <View style={{ width: "90%" }}>
              <Text
                style={{
                  color: "#253f67",
                  lineHeight: 20,
                  fontSize: 14,
                  fontFamily: "Helvetica",
                }}
              >
                {" "}
                I have read and agreed to the Gamification
              </Text>
              <Text
                style={{
                  color: "#253f67",
                  lineHeight: 20,
                  fontSize: 14,
                  fontFamily: "Helvetica",
                }}
              >
                {" "}
                Terms and Conditions, Privacy Policies
              </Text>
              <Text
                style={{
                  color: "#253f67",
                  lineHeight: 20,
                  fontSize: 14,
                  fontFamily: "Helvetica",
                }}
              >
                and User Agreement.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    alignItems: "center",
    backgroundColor: "white",
    top: 20,
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
    height: 40,
  },
  Profile: { height: 90, width: 90 },
  TextInputView: {
    width: "90%",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
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
    marginTop: 50,
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
    height: 40,
    marginTop: 19,
    width: width - 80,
    fontSize: 14,
    color: "#89D8BB",
    fontFamily: "Spartan_SemiBold",
    marginTop: 20,
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
  loginContainer: {
    width: "80%",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    elevation: 10,
    backgroundColor: "#e6e6e6",
  },
  textInput: {},
});
