import React, { useContext, useState } from "react";
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
  Button,
  ActivityIndicator,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { TextInput, useTheme } from "react-native-paper";
import LoginOnboarding from "../LoginOnboard/LoginOnboarding";
import api from "../../api";
import InputComponent from "../../Components/InputComponent";
import ButtonWithLoader from "../../Components/ButtonWithLoader";
// import { AuthContext } from "../../Context/context";
import NetInfo from "@react-native-community/netinfo";
import Toast from "react-native-tiny-toast";
import { useDispatch } from "react-redux";
import { Login } from "../../store/actions";
const initialValues = {
  loginId: "",
  pass: "",
};

const validationSchema = yup.object().shape({
  loginId: yup
    .string()
    .trim()
    .required("Your official email address is required")
    .email("Please enter official email"),
  pass: yup
    .string()

    .required("Please enter a valid password"),
});

const { width } = Dimensions.get("window");

export default function LoginWithPassword({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(true);

  const theme = useTheme();
  const { colors } = theme;
  const dispatch = useDispatch();
  console.log("hellllo");
  const onSubmitHandler = async (data) => {
    let formdata = {
      loginId: data.loginId,
      pass: data.pass,
    };
    console.log("loginData", formdata.pass);
    // Login API calling
    api.auth
      .loginRequestWithPassword(formdata)
      .then(async (response) => {
        if (response.data.status_code === 0) {
          var token = response.data.token;
          console.log("tokennnnnnn", token);
          dispatch(Login(formdata.loginId, formdata.pass, token));
        } else if (response.data.status_code === 1) {
          alert("Wrong credentials");
        } else {
          alert("Something went wrong!");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.Container}>
        <View style={styles.Onboarding}>
          <LoginOnboarding />
        </View>
        <View style={styles.secondView}>
          <Image
            source={require("../../../assets/Images/NovelLogo.png")}
            style={styles.logo}
          />

          <View style={styles.inputView}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmitHandler}
            >
              {(props) => (
                <View
                  style={{
                    justifyContent: "space-between",
                    marginVertical: 10,
                    alignItems: "center",
                  }}
                >
                  <InputComponent
                    placeholder="Email ID"
                    label="Email ID"
                    onChangeText={props.handleChange("loginId")}
                    value={props.values.loginId.trim()}
                    name="loginId" // added this
                    type="email"
                    setFieldTouched="loginId"
                    onBlur={() => props.setFieldTouched("loginId")}
                  />

                  {props.touched.loginId && props.errors.loginId && (
                    <Text style={{ fontSize: 15, color: "red" }}>
                      {props.errors.loginId}
                    </Text>
                  )}

                  <TextInput
                    placeholder="Password"
                    mode="outlined"
                    theme={{
                      colors: { primary: "#0084D6" },

                      label: { primary: "#9505E9" },
                      roundness: 13,
                    }}
                    label="Password"
                    secureTextEntry={passwordVisible}
                    placeholderTextColor="grey"
                    underlineColorAndroid="grey"
                    returnKeyType="next"
                    onChangeText={props.handleChange("pass")}
                    value={props.values.pass}
                    name="pass" // added this
                    type="pass"
                    // {...register(email)}
                    setFieldTouched="pass"
                    onBlur={() => props.setFieldTouched("pass")}
                    style={styles.PasswordInput}
                    //   onBlur={onBlur}
                    right={
                      <TextInput.Icon
                        style={{ top: 5 }}
                        name={passwordVisible ? "eye" : "eye-off"}
                        onPress={() => setPasswordVisible(!passwordVisible)}
                      />
                    }
                  />

                  <View
                    style={{
                      // margin: 10,
                      marginVertical: 10,

                      width: "90%",
                      backgroundColor: "white",
                    }}
                  >
                    <ButtonWithLoader
                      text="Log In"
                      onPress={props.handleSubmit}
                      // disabled={props.isSubmitting}
                    />
                  </View>
                </View>
              )}
            </Formik>
            <View style={{ bottom: 10 }}>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "gray",
                  textAlign: "center",
                }}
              >
                OR
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 16,

                    color: "#0084D6",
                  }}
                >
                  continue with E-mail
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

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
    width: "100%",
  },
  logo: {
    height: 55,
    width: 221,
    marginVertical: 10,
    // top: 40,
  },
  inputView: {
    padding: 10,
    // top: 20,
    bottom: 20,

    width: "100%",
  },
  PasswordInput: {
    height: 45,
    width: "90%",
    lineHeight: 20,
    top: 5,
    borderRadius: 30,
    bottom: 20,
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
