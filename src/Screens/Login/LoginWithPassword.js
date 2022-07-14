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
  email: "",
  password: "",
};

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("Your official email address is required")
    .email("Please enter official email"),
  password: yup.number().required("requred"),
});

const { width } = Dimensions.get("window");

export default function LoginWithPassword({ navigation }) {
  const authCtx = useContext(AuthContext);

  const theme = useTheme();
  const { colors } = theme;
  // useEffect(() => {
  //   const backAction = () => {
  //     Alert.alert("Hold on!", "Are you sure you want to go back?", [
  //       {
  //         text: "Cancel",
  //         onPress: () => null,
  //         style: "cancel",
  //       },
  //       { text: "YES", onPress: () => BackHandler.exitApp() },
  //     ]);
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     backAction
  //   );

  //   return () => backHandler.remove();
  // }, []);

  const [checked, setChecked] = React.useState(false);
  const [text, setText] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(true);

  // const onSubmitHandler = async (data) => {
  //   let emailInfo = data.to;
  //   console.log("emailInfo", emailInfo);
  //   console.log("data", data);

  // let formData = {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify([
  //     {
  //       to: [data.to.trim()],
  //     },
  //   ]),
  // };

  // if (checked == true) {
  //   console.log("ASmita======>", data.to);
  //   try {
  //     let emailInfo = [data.to.trim()];
  //     console.log("mailID======>", emailInfo);

  //     api.auth
  //       .loginRequest(emailInfo)
  //       .then((response) => {
  //         console.log("Response======>", response);
  //         if (response.data.status_code === 0 && checked == true) {
  //           navigation.navigate("OTP", {
  //             paramKey: emailInfo.trim(),
  //           });
  //         } else if (response.data.status_code === 1) {
  //           alert("User is not registered. Please register first.");
  //         }
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });

  //   // console.log("NEW", data);
  //   // await fetch("http://3.215.18.129/generate_otp/", formData).then(
  //   //   (response) => {
  //   //     response.json().then((data) => {
  //   //       if (data.status_code === 0 && checked == true) {
  //   //         navigation.navigate("OTP", {
  //   //           paramKey: emailInfo.trim(),
  //   //         });
  //   //       } else if (data.status_code === 1) {
  //   //         alert("User is not registered. Please register first.");
  //   //       }
  //   //     });
  //     }
  //   );
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   } else {
  //     alert("Please select the checkbox to continue");
  //   }
  // };

  // const submitForm = (data) => {
  //   let em = {
  //     to: [data.to.trim()],
  //   };
  //   console.log("em=====///", em);
  //   console.log("onSubmit", data);
  //   let emailInfo = data.to.trim();
  //   console.log("emailinfo", emailInfo);
  //   if (checked == true) {

  //     try {

  //       api.auth
  //         .loginRequest([em])
  //         .then((response) => {
  //           console.log("updatedapi", data);
  //           // handle success
  //           if (response.data.status_code === 0 && checked == true) {
  //             navigation.navigate("OTP", {
  //               paramKey: emailInfo,
  //             });
  //           } else if (response.data.status_code === 1) {
  //             alert("User is not registered. Please register first.");
  //           }
  //         })
  //         .catch((error) => {
  //           console.error(error);
  //         });
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   } else {
  //     alert("Please select the checkbox to continue");
  //   }
  // };

  // const onSubmitHandler = async (data, { resetForm }) => {
  //   try {
  //     await fetch(
  //       "http://3.215.18.129/getLoginIdWithPassword/?login-Id=gupta.sanket007@gmail.com&pass=iI4GtAOc"
  //     ).then((response) => {
  //       response.json().then((data) => {
  //         console.log("datapassword", data);
  //         if (data.status_code === 0) {
  //           navigation.navigate("MyTabs");
  //         } else if (data.status_code === 1) {
  //           alert("User is not registered. Please register first.");
  //         }
  //       });
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  console.log("llllllllllllll");

  const onSubmitHandler = async (data, { resetForm }) => {
    let em = {
      email: data.email.trim(),
      password: data.password,
    };
    // console.log("em=====///", em);
    // console.log("onSubmit", data);
    // let emailInfo = data.to.trim();
    // console.log("emailinfo", emailInfo);

    // let formData = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify([
    //     {
    //       email: data.email.trim(),
    //       password: data.password,
    //     },
    //   ]),
    // };
    console.log("formdata", em);
    try {
      await fetch(
        "http://3.215.18.129/getLoginIdWithPassword/?login-Id=gupta.sanket007@gmail.com&pass=iI4GtAOc",
        [em]
      ).then((response) => {
        console.log("updatedapi", data);
        if (response.data.status_code === 0) {
          alert("logn sucessfully");
          console.log("statuscode", response.status_code);
          navigation.navigate("MyTabs");
          resetForm({ data: "" });
        } else if (response.status_code === 1) {
          alert("User Already Exist");
        } else {
          alert("Something went wrong!");
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

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
                    onChangeText={props.handleChange("email")}
                    value={props.values.email.trim()}
                    name="email" // added this
                    type="email"
                    setFieldTouched="email"
                    onBlur={() => props.setFieldTouched("email")}
                  />

                  {props.touched.email && props.errors.email && (
                    <Text style={{ fontSize: 15, color: "red" }}>
                      {props.errors.email}
                    </Text>
                  )}

                  {/* <TextInputComponent /> */}

                  <TextInput
                    placeholder="password"
                    mode="outlined"
                    theme={{
                      colors: { primary: "#0084D6" },
                      //   fonts: {
                      //     regular: { fontFamily: "Philosopher_400Regular_Italic" },
                      //   },
                      label: { primary: "#9505E9" },
                      roundness: 13,
                    }}
                    label="password"
                    onChangeText={props.handleChange("password")}
                    value={props.values.password}
                    name="password" // added this
                    type="password"
                    setFieldTouched="password"
                    secureTextEntry={passwordVisible}
                    //   onChangeText={onChangeText}
                    //   value={value}
                    //   name={name} // added this
                    //   type={type}
                    //   setFieldTouched={setFieldTouched}
                    placeholderTextColor="grey"
                    underlineColorAndroid="grey"
                    returnKeyType="next"
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
            </TouchableOpacity>
          </View>
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
    flex: 0.3,
    justifyContent: "center",
  },
  secondView: {
    alignItems: "center",
    flex: 0.7,
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
