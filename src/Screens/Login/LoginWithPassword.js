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

import { BackHandler, Alert } from "react-native";
import { useEffect } from "react";
import api from "../../api";
import AuthContext from "../../store/auth_store";
import TextInputComponent from "../../Components/TextInputComponent";
import InputComponent from "../../Components/InputComponent";
import ButtonWithLoader from "../../Components/ButtonWithLoader";

// import AuthContext from "../../redux/authStore";

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
    .min(8, "Password must be minimum 8 characters")
    .max(8, "Password must be maximum 8 characters")

    .required("Please enter a valid password"),

  // .email("Please enter official email"),
});

const { width } = Dimensions.get("window");

export default function LoginWithPassword({ navigation }) {
  const authCtx = useContext(AuthContext);
  const [passwordVisible, setPasswordVisible] = useState(true);

  const theme = useTheme();
  const { colors } = theme;

  const onSubmitHandler = async (data, { resetForm }) => {
    let formdata = {
      // method: "POST",
      // headers: { "Content-Type": "application/json" },
      // body: JSON.stringify([
      //   {
      loginId: data.loginId.trim(),
      pass: data.pass,
      //   },
      // ]),
    };

    let EMAIL = data.loginId.trim();
    console.log("AsmitaEMAIL", EMAIL);
    console.log("em=====///", formdata);
    console.log("onSubmit", data);

    try {
      api.auth.loginRequestWithPassword(formdata).then((response) => {
        console.log("updatedapi", data);
        console.log("updatedapi=>", response);
        if (response.data.status_code === 0) {
          navigation.navigate("MyTabs", {
            paramKey: EMAIL.trim(),
          });
          resetForm({ data: "" });
        } else if (response.data.status_code === 1) {
          alert("Please enter a valid credentials");
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  //   try {
  //     await fetch("http://3.215.18.129/getLoginIdWithPassword/", formdata).then(
  //       (response) => {
  //         response.json().then((data) => {
  //           console.log("TokenData====>", data);
  //           if (response.data.status_code === 0) {
  //             navigation.navigate("MyTabs", {
  //               paramKey: EMAIL.trim(),
  //             });
  //           } else if (response.data.status_code === 1) {
  //             alert("Wrong credentials");
  //           } else {
  //             alert("Something went wrong!");
  //           }
  //         });
  //       }
  //     );
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  //       .then((response) => {
  //         console.log("passworddata1111", data);
  //         console.log("passworddata11=>", response.json());
  //         console.log("passworddata11", data);

  //         // navigation.navigate("MyTabs", {
  //         //   paramKey: EMAIL.trim(),
  //         // });
  //         if (response.data.status_code === 0) {
  //           alert("data");
  //           // navigation.navigate("MyTabs");
  //           resetForm({ data: "" });
  //         } else if (response.data.status_code === 1) {
  //           alert("Please enter a valid Mail ID");
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("catch error", error);
  //       });
  //   } catch (error) {
  //     console.error("catch error", error);
  //   }
  // };
  // // else {
  // //   alert("Please select the checkbox to continue");
  // // }
  // // };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.Container}>
        <View style={styles.Onboarding}>
          <LoginOnboarding />
        </View>
        {console.log("!authCtx.isLoggedIn", !authCtx.isLoggedIn)}
        {console.log("Routes Token", authCtx.token)}
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
                    top: 20,
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
                    // {...register(email)}
                    setFieldTouched="loginId"
                    onBlur={() => props.setFieldTouched("loginId")}
                  />

                  {props.touched.loginId && props.errors.loginId && (
                    <Text style={{ fontSize: 15, color: "red" }}>
                      {props.errors.loginId}
                    </Text>
                  )}

                  {/* <TextInputComponent /> */}

                  <TextInput
                    placeholder="Password"
                    mode="outlined"
                    theme={{
                      colors: { primary: "#0084D6" },
                      //   fonts: {
                      //     regular: { fontFamily: "Philosopher_400Regular_Italic" },
                      //   },
                      label: { primary: "#9505E9" },
                      roundness: 13,
                    }}
                    label="Password"
                    secureTextEntry={passwordVisible}
                    // onChangeText={props.handleChange("password")}
                    // value={props.values.password}
                    // name={password} // added this
                    // type={type}
                    // setFieldTouched={password}
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
                  {props.touched.pass && props.errors.pass && (
                    <Text style={{ fontSize: 15, color: "red", top: 10 }}>
                      {props.errors.pass}
                    </Text>
                  )}

                  <View
                    style={{
                      // margin: 10,
                      top: 10,
                      width: "90%",
                      backgroundColor: "white",
                    }}
                  >
                    <ButtonWithLoader
                      text="Log In"
                      onPress={
                        // {() => navigation.navigate("MyTabs")} // {() => authCtx.logout()}
                        props.handleSubmit
                      }
                      // disabled={props.isSubmitting}
                    />
                  </View>
                </View>
              )}
            </Formik>
            <View style={{ top: 40 }}>
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

          {/* <View
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
              <View>
                <Text style={{ borderBottomWidth: 2 }}>Register</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              top: 60,
              backgroundColor: "white",
              width: "80%",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("TermsCondition")}
            >
              <Text
                style={{ color: "#0084D6", textDecorationLine: "underline" }}
              >
                Terms & Conditions
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("PrivacyPolicy")}
            >
              <Text
                style={{ color: "#0084D6", textDecorationLine: "underline" }}
              >
                Privacy Policies
              </Text>
            </TouchableOpacity> */}
          {/* </View> */}
          {/* <View style={styles.checkboxView}>
            <Checkbox
              color="#0084D6"
              style={{ color: "red" }}
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <View style={{ width: "90%" }}>
              <Text style={styles.terms}>
                {" "}
                I have read and agreed to the Gamification
              </Text>
              <Text style={styles.terms}>
                {" "}
                Terms and Conditions, Privacy Policies
              </Text>
              <Text style={styles.terms}>and User Agreement.</Text>
            </View>
          </View> */}
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
