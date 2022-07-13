import React, { useContext } from "react";
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
import { TextInput } from "react-native-paper";
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
  to: "",
};

const validationSchema = yup.object().shape({
  to: yup
    .string()
    .trim()
    .required("Your official email address is required")
    .email("Please enter official email"),
});

const { width } = Dimensions.get("window");

export default function Login({ navigation }) {
  const authCtx = useContext(AuthContext);
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

  const onSubmitHandler = async (data, { resetForm }) => {
    let em = {
      to: [data.to.trim()],
    };
    console.log("em=====///", em);
    console.log("onSubmit", data);
    let emailInfo = data.to.trim();
    console.log("emailinfo", emailInfo);

    // let formData = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify([
    //     {
    //       to: [data.to.trim()],
    //     },
    //   ]),
    // };

    if (checked == true) {
      try {
        api.auth.loginRequest([em]).then((response) => {
          console.log("updatedapi", data);
          if (response.data.status_code === 0 && checked == true) {
            navigation.navigate("OTP", {
              paramKey: emailInfo,
            });
            resetForm({ data: "" });
          } else if (response.data.status_code === 1) {
            alert("User is not registered. Please register first.");
          }
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Please select the checkbox to continue");
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
                    onChangeText={props.handleChange("to")}
                    value={props.values.to.trim()}
                    name="to" // added this
                    type="to"
                    setFieldTouched="to"
                    onBlur={() => props.setFieldTouched("to")}
                  />
                  {/* <TextInput
                    placeholder="Email ID"
                    mode="outlined"
                    theme={{ colors: { primary: "#0084D6" } }}
                    label="Email ID"
                    onChangeText={props.handleChange("to")}
                    value={props.values.to.trim()}
                    name="to" // added this
                    type="to"
                    setFieldTouched="to"
                    placeholderTextColor="grey"
                    underlineColorAndroid="grey"
                    returnKeyType="next"
                    style={styles.emailInput}
                    onBlur={() => props.setFieldTouched("to")}
                  /> */}

                  {props.touched.to && props.errors.to && (
                    <Text style={{ fontSize: 15, color: "red" }}>
                      {props.errors.to}
                    </Text>
                  )}

                  {/* <TextInput
                    placeholder="Password"
                    mode="outlined"
                    theme={{ colors: { primary: "#0084D6" } }}
                    label="Password"
                    // onChangeText={props.handleChange("to")}
                    // value={props.values.to.trim()}
                    name="to" // added this
                    type="to"
                    setFieldTouched="to"
                    placeholderTextColor="grey"
                    underlineColorAndroid="grey"
                    returnKeyType="next"
                    style={styles.emailInput}
                    // onBlur={() => props.setFieldTouched("to")}
                  /> */}

                  {/* <TextInputComponent  placeholder="Password"></TextInputComponent> */}

                  <View
                    style={{
                      // margin: 10,
                      // top: 20,
                      width: "90%",
                      backgroundColor: "white",
                    }}
                  >
                    <ButtonWithLoader
                      text="Log In"
                      onPress={() => // {() => authCtx.logout()} //
                        navigation.navigate("MyTabs")
                      }
                      // {props.handleSubmit}
                      // disabled={props.isSubmitting}
                    />

                    {/* <Button
                      title="Log In"
                      color="#0084D6"
                      onPress={
                        // {() => navigation.navigate("MyTabs")} // {() => authCtx.logout()}
                        props.handleSubmit
                      }
                      disabled={props.isSubmitting}
                    /> */}
                    {/* <ActivityIndicator size="small" color="#0000ff" /> */}
                  </View>
                </View>
              )}
            </Formik>
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
          <View style={styles.checkboxView}>
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
    height: 40,
    width: "90%",
    lineHeight: 20,
    top: 20,
    borderRadius: 30,
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
