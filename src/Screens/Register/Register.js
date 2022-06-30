import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { TextInput } from "react-native-paper";
import LoginOnboarding from "../LoginOnboard/LoginOnboarding";
import actions from "../../redux/actions";
import api from "../../api";
const initialValues = {
  student_name: "",
  student_corp_emailId: "",
  student_mob_no: "",
};

const validationSchema = yup.object().shape({
  student_name: yup
    .string()
    .trim()
    .min(2, "Mininum 2 characters")
    .max(30, "Maximum 30 characters")
    .required("Your name is required"),

  student_corp_emailId: yup
    .string()
    .trim()
    .required("Your official email address is required")
    .email("Please enter official email"),
  student_mob_no: yup
    .string()
    .trim()
    .matches(/^[0-9]+$/, "Only numbers allowed.")
    .min(10, "Mobile Number must be minimum 10 digits")
    .max(10, "Mobile Number must be maximum 10 digits")
    .required("Your mobile number is required"),
});

const { width } = Dimensions.get("window");

export default function Register({ navigation }) {
  // const onRegister = async (data) => {
  //   console.log("hello");
  //   let data_student_corp_emailId = data.student_corp_emailId.trim();

  //   try {
  //     const res = await actions.Register({
  //       student_name: data.student_name,
  //       student_corp_emailId: data_student_corp_emailId,

  //       student_mob_no: data.student_mob_no,
  //     });
  //     console.log("res of register", res);
  //     navigation.navigate("Login");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const submitForm = (data) => {
    console.log("onSubmit", data);
    // Login API calling
    api.auth
      .registrationRequest(data)
      .then((response) => {
        console.log("updatedapi", data);
        // handle success
        if (response.data.status_code === 0) {
          alert("Registration Sucessfully");
          navigation.navigate("Login");
        } else if (response.data.status_code === 1) {
          alert("User Already Exist");
        } else {
          alert("Something went wrong!");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // const onSubmitHandler = async (data) => {
  //   let data_student_corp_emailId = data.student_corp_emailId.trim();
  //   console.log("shradhha", data.student_corp_emailId.trim());
  //   let formData = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       student_name: data.student_name,
  //       student_corp_emailId: data_student_corp_emailId,

  //       student_mob_no: data.student_mob_no,
  //     }),
  //   };
  //   console.log("formdata", formData);
  //   try {
  //     await fetch(
  //       "http://3.215.18.129/gamification_registration/",
  //       formData
  //     ).then((response) => {
  //       response.json().then((data) => {
  //         console.log("dataaa", data);
  //         if (data.status_code === 0) {
  //           alert("Registration Sucessfully");
  //           navigation.navigate("Login");
  //         } else if (data.status_code === 1) {
  //           alert("User Already Exist");
  //         } else {
  //           alert("Something went wrong!");
  //         }
  //       });
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.Container}>
        <View style={styles.Onboarding}>
          <LoginOnboarding />
        </View>
        <View style={styles.textinputView}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submitForm}
          >
            {(props) => (
              <View style={styles.formikView}>
                {console.log(" ____retutn ______ " + JSON.stringify(props))}
                <TextInput
                  mode="outlined"
                  theme={{ colors: { primary: "#0084D6" } }}
                  label="Candidate Name"
                  placeholder="Candidate Name"
                  onChangeText={props.handleChange("student_name")}
                  value={props.values.student_name.trim()}
                  name="student_name" // added this
                  type="student_name"
                  setFieldTouched="student_name"
                  placeholderTextColor="grey"
                  underlineColorAndroid="grey"
                  returnKeyType="next"
                  style={styles.candidateInput}
                  onBlur={() => props.setFieldTouched("student_name")}
                />

                {props.touched.student_name && props.errors.student_name && (
                  <Text style={{ fontSize: 15, color: "red", top: 20 }}>
                    {props.errors.student_name}
                  </Text>
                )}

                <TextInput
                  mode="outlined"
                  theme={{ colors: { primary: "#0084D6" } }}
                  label="Organization Email ID"
                  placeholder="Organization Email ID"
                  onChangeText={props.handleChange("student_corp_emailId")}
                  value={props.values.student_corp_emailId.trim()}
                  name="student_corp_emailId" // added this
                  type="student_corp_emailId"
                  setFieldTouched="student_corp_emailId"
                  placeholderTextColor="grey"
                  underlineColorAndroid="grey"
                  returnKeyType="next"
                  style={styles.emailInput}
                  onBlur={() => props.setFieldTouched("student_corp_emailId")}
                />

                {props.touched.student_corp_emailId &&
                  props.errors.student_corp_emailId && (
                    <Text style={{ fontSize: 15, color: "red", top: 30 }}>
                      {props.errors.student_corp_emailId}
                    </Text>
                  )}
                <TextInput
                  mode="outlined"
                  theme={{ colors: { primary: "#0084D6" } }}
                  label="Mobile Number"
                  placeholder="Mobile Number"
                  onChangeText={props.handleChange("student_mob_no")}
                  value={props.values.student_mob_no.trim()}
                  name="student_mob_no" // added this
                  type="student_mob_no"
                  setFieldTouched="student_mob_no"
                  placeholderTextColor="grey"
                  underlineColorAndroid="grey"
                  returnKeyType="next"
                  style={styles.mobileInput}
                  onBlur={() => props.setFieldTouched("student_mob_no")}
                />

                {props.touched.student_mob_no &&
                  props.errors.student_mob_no && (
                    <Text style={{ fontSize: 15, color: "red", top: 40 }}>
                      {props.errors.student_mob_no}
                    </Text>
                  )}
                <View style={styles.btnView}>
                  <Button
                    title="REGISTER"
                    color="#0084D6"
                    borderRadius={30}
                    onPress={props.handleSubmit}
                    disabled={props.isSubmitting}
                  />
                </View>
              </View>
            )}
          </Formik>

          <View style={styles.textView}>
            <Text style={styles.text}>Already connected to gamification?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <View style={{ left: 5, borderBottomWidth: 2 }}>
                <Text>Log In</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  Container: {
    justifyContent: "center",
    borderWidth: 1,
    backgroundColor: "#0084D6",
    flex: 1,
  },
  Onboarding: {
    borderBottomLeftRadius: 70,
    flex: 0.4,
    justifyContent: "center",
  },
  textinputView: {
    flex: 0.6,
    alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 70,
  },
  formikView: {
    width: 350,
    justifyContent: "space-between",
    top: 30,
    alignItems: "center",
  },
  candidateInput: {
    height: 40,
    width: "90%",
    lineHeight: 20,
    top: 20,
    backgroundColor: "white",
  },
  emailInput: {
    height: 40,
    width: "90%",
    lineHeight: 20,
    top: 30,
    backgroundColor: "white",
  },
  mobileInput: {
    height: 40,
    width: "90%",
    lineHeight: 20,
    top: 40,
    backgroundColor: "white",
  },
  btnView: {
    margin: 20,
    top: 40,
    width: "90%",
    borderRadius: 40,
  },
  textView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    top: 60,
  },
  text: {
    color: "#fb5414",
    fontFamily: "Helvetica",
    fontSize: 14,
  },
});
