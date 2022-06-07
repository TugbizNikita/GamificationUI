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
    // .string()
    // .email("Please enter official email")
    // .required("Your official email address is required"),
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

// const loginValidationSchema = yup.object().shape({
//   student_name: yup
//     .string()
//     .min(2, "Mininum 2 characters")
//     .max(30, "Maximum 30 characters")
//     .required("Your name is required"),
//   student_corp_emailId: yup
//     .string()
//     .email("Please enter official email")
//     .required("Your official email address is required"),

//   student_mob_no: yup
//     .number()
//     .min(8, "Mininum 8 characters")

//     .required("Your mobile number is required"),
// });

const { width } = Dimensions.get("window");

export default function Register({ navigation }) {
  const [to, setTo] = useState("");
  const [email, setEmail] = useState("");
  // const requestOptions = {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify([
  //     {
  //       to: [to],
  //     },
  //   ]),
  // };

  const onSubmitHandler = async (data) => {
    // setEmail(data.to);
    console.log("emailll".student_name);
    // console.log("data11333====", data.to);
    let formData = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        student_name: data.student_name,
        student_corp_emailId: data.student_corp_emailId,

        student_mob_no: data.student_mob_no,
      }),
    };
    console.log("formdata00", formData);
    try {
      await fetch(
        "http://3.215.18.129/gamification_registration/",
        formData
      ).then((response) => {
        response.json().then((data) => {
          console.log("dataaa", data);

          // Alert.alert("Post created at : ", data);
          if (data.status_code === 0) {
            alert("Registration Sucessfully");
            navigation.navigate("Login");
          } else if (data.status_code === 1) {
            alert("User Already Exist");
          } else {
            alert("Something went wrong!");
          }
        });
      });
    } catch (error) {
      console.error(error);
    }
  };
  const [checked, setChecked] = React.useState("first");

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View
        style={{
          // width: "100%",
          justifyContent: "center",
          borderWidth: 1,
          backgroundColor: "#0084D6",
          flex: 1,
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
            flex: 0.6,
            alignItems: "center",
            // marginTop: 40,
            // borderWidth: 1,
            backgroundColor: "white",
            borderTopLeftRadius: 70,
          }}
        >
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
                  top: 30,
                  alignItems: "center",
                }}
              >
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
                  style={{
                    height: 40,
                    width: "90%",
                    lineHeight: 20,
                    top: 20,
                    backgroundColor: "white",
                  }}
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
                  style={{
                    height: 40,
                    width: "90%",
                    lineHeight: 20,
                    top: 30,
                    backgroundColor: "white",
                  }}
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
                  style={{
                    height: 40,
                    width: "90%",
                    lineHeight: 20,
                    top: 40,
                    backgroundColor: "white",
                  }}
                  onBlur={() => props.setFieldTouched("student_mob_no")}
                />

                {props.touched.student_mob_no &&
                  props.errors.student_mob_no && (
                    <Text style={{ fontSize: 15, color: "red", top: 40 }}>
                      {props.errors.student_mob_no}
                    </Text>
                  )}
                <View
                  style={{
                    margin: 20,
                    top: 40,
                    width: "90%",
                    borderRadius: 40,
                  }}
                >
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

          {/* <View style={{ padding: 20, top: 20 }}>
            <Formik
              validationSchema={loginValidationSchema}
              initialValues={{
                student_name: "",
                student_corp_emailId: "",

                student_mob_no: "",
              }}
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
                    name="student_name"
                    placeholder="Candidate name"
                    // style={styles.textInput}
                    label="Candidate name"
                    mode="outlined"
                    onChangeText={handleChange("student_name")}
                    onBlur={handleBlur("student_name")}
                    value={values.student_name}
                    keyboardType="email-address"
                    theme={{ colors: { primary: "#89D8BB" } }}
                    style={{
                      height: 40,
                      width: width - 80,
                      // left: 20,

                      lineHeight: 20,
                    }}
                  />
                  {errors.student_name && (
                    <Text style={{ fontSize: 10, color: "red", left: 20 }}>
                      {errors.student_name}
                    </Text>
                  )}

                  <TextInput
                    name="student_corp_emailId"
                    placeholder="Orgnization mail ID"
                    // style={styles.textInput}
                    label="Orgnization mail ID"
                    mode="outlined"
                    onChangeText={handleChange("student_corp_emailId")}
                    onBlur={handleBlur("student_corp_emailId")}
                    value={values.student_corp_emailId}
                    keyboardType="email-address"
                    theme={{ colors: { primary: "#89D8BB" } }}
                    style={{
                      height: 40,
                      width: width - 80,
                      // left: 20,
                      top: 10,
                      lineHeight: 20,
                    }}
                  />
                  {errors.student_corp_emailId && (
                    <Text
                      style={{
                        fontSize: 10,
                        color: "red",
                        left: 20,
                        top: 10,
                      }}
                    >
                      {errors.student_corp_emailId}
                    </Text>
                  )}

                  <TextInput
                    name="student_mob_no"
                    placeholder="Mobile Number"
                    // style={styles.textInput}
                    label="Mobile Number"
                    mode="outlined"
                    onChangeText={handleChange("student_mob_no")}
                    onBlur={handleBlur("student_mob_no")}
                    value={values.student_mob_no}
                    keyboardType="email-address"
                    theme={{ colors: { primary: "#89D8BB" } }}
                    style={{
                      height: 40,
                      width: width - 80,
                      // left: 20,
                      top: 20,
                      lineHeight: 20,
                    }}
                  />
                  {errors.student_mob_no && (
                    <Text
                      style={{
                        fontSize: 10,
                        color: "red",
                        left: 20,
                        top: 20,
                      }}
                    >
                      {errors.student_mob_no}
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
                      top: 40,
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
                      Register
                    </Text>
                  </TouchableOpacity>
                </>
              )}
            </Formik>
          </View> */}

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              top: 60,
            }}
          >
            <Text
              style={{
                color: "#fb5414",
                fontFamily: "Helvetica",
                fontSize: 14,
              }}
            >
              Already connected to gamification?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <View style={{ left: 5, borderBottomWidth: 2 }}>
                <Text style={styles.Register}>Log In</Text>
              </View>
            </TouchableOpacity>
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
  textInput: {
    // height: 40,
    // width: "90%",
    // margin: 10,
    // // left: 20,
    // backgroundColor: "white",
    // borderColor: "gray",
    // // borderWidth: StyleSheet.hairlineWidth,
    // borderRadius: 10,
  },
});

// import { StatusBar } from "expo-status-bar";
// import React, { useEffect, useState } from "react";
// import RNSearchablePicker from "react-native-searchable-picker";
// import { Checkbox } from "react-native-paper";

// import {
//   StyleSheet,
//   Text,
//   View,
//   Dimensions,
//   TouchableOpacity,
//   Image,
//   TouchableWithoutFeedback,
//   Keyboard,
//   ScrollView,
//   Platform,
//   Modal,
//   Button,
// } from "react-native";
// import { Formik } from "formik";
// import * as yup from "yup";
// import Icon from "react-native-vector-icons/FontAwesome5";
// import { TextInput } from "react-native-paper";
// import LoginOnboarding from "../LoginOnboard/LoginOnboarding";

// const loginValidationSchema = yup.object().shape({
//   student_name: yup
//     .string()
//     .min(2, "Mininum 2 characters")
//     .max(30, "Maximum 30 characters")
//     .required("Your name is required"),
//   student_corp_emailId: yup
//     .string()
//     .email("Please enter valid email")
//     .required("Email Address is Required"),
//   student_personal_emailId: yup
//     .string()
//     .email("Please enter valid email")
//     .required("Email Address is Required"),

//   empid: yup
//     .number()
//     .min(6, "Mininum 2 characters")

//     .required("Your name is required"),
//   student_mob_no: yup
//     .number()
//     .min(8, "Mininum 8 characters")

//     .required("Your name is required"),
//   student_batch_code: yup
//     .string()

//     .required("Your batch code is required"),
// });

// const { width } = Dimensions.get("window");

// export default function Register({ navigation }) {
//   const [to, setTo] = useState("");
//   const requestOptions = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       student_name: "",
//       student_corp_emailId: "",
//       empid: "",
//       student_mob_no: "",
//       student_batch_code: "",
//       student_personal_emailId: "",
//     }),
//   };

//   const onSubmitHandler = async (data) => {
//     console.log("d", data);
//     let formData = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         student_name: "",
//         student_corp_emailId: "",
//         empid: "",
//         student_mob_no: "",
//         student_batch_code: "",
//         student_personal_emailId: "",
//       }),
//     };
//     console.log("dataaa", formData);
//     try {
//       await fetch(
//         "http://3.215.18.129/gamification_registration/",
//         formData
//       ).then((response) => {
//         response.json().then((data) => {
//           console.log("***********");
//           console.log("dataaa", data);
//           console.log("dataaa name", student_name);

//           // Alert.alert("Post created at : ", data);
//         });
//         navigation.navigate("Login");
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   const [checked, setChecked] = React.useState("first");
//   const [selected, setSelected] = useState();

//   const selectHandler = (item) => {
//     setSelected(item);
//   };

//   useEffect(() => {
//     console.log(selected);
//   }, [selected]);

//   const data = [
//     {
//       label: "VV_SELJ_BP_22 - 03 - 22_96",
//       value: "1",
//     },
//     {
//       label: "VV_SELJ_BP_22 - 03 - 22_97",
//       value: "2",
//     },
//     {
//       label: "JD_BP_22 - 03 - 22_108",
//       value: "3",
//     },
//     {
//       label: " AWS_BP_19 - 4 - 22_50",
//       value: "4",
//     },
//     {
//       label: "VV_SD_BP_21 - 4 - 22_38",
//       value: "5",
//     },
//     {
//       label: "VV_SELJ_BP_19 - 05 - 22_24",
//       value: "6",
//     },
//     {
//       label: "NZ_BP_19 - 05 - 22_19",
//       value: "7",
//     },
//   ];

//   return (
//     <View
//       style={{
//         width: "100%",
//         justifyContent: "center",
//         backgroundColor: "white",
//         flex: 1,
//       }}
//     >
//       <View
//         style={{
//           width: width,
//           alignItems: "center",
//           backgroundColor: "white",
//           height: 30,

//           borderWidth: 0,
//         }}
//       >
//         <Image
//           source={require("../../../assets/Images/NovelLogo.png")}
//           style={{ height: 45, width: 171, top: 30 }}
//         />
//       </View>

//       <ScrollView>
//         <View
//           style={{
//             justifyContent: "center",
//             alignItems: "center",
//             backgroundColor: "#0084D6",
//             borderTopLeftRadius: 60,
//             flex: 0.6,
//             top: 50,
//             height: 720,
//           }}
//         >
//           <View>
//             <Formik
//               validationSchema={loginValidationSchema}
//               initialValues={{
//                 student_name: "",
//                 student_corp_emailId: "",
//                 empid: "",
//                 student_mob_no: "",
//                 student_batch_code: "",
//                 student_personal_emailId: "",
//               }}
//               onSubmit={onSubmitHandler}
//             >
//               {({
//                 handleChange,
//                 handleBlur,
//                 handleSubmit,
//                 values,
//                 errors,
//                 isValid,
//               }) => (
//                 <>
//                   <TextInput
//                     name="student_name"
//                     placeholder="Student Name"
//                     // style={styles.textInput}
//                     label="Student Name"
//                     mode="outlined"
//                     autoCapitalize="none"
//                     onChangeText={handleChange("student_name")}
//                     onBlur={handleBlur("student_name")}
//                     value={values.student_name}
//                     // keyboardType="email-address"
//                     theme={{ colors: { primary: "#89D8BB" } }}
//                     style={{
//                       height: 45,
//                       // top: 10,
//                       width: width - 70,
//                       fontSize: 16,

//                       marginTop: 30,
//                       color: "#89D8BB",
//                       lineHeight: 20,
//                       fontFamily: "Spartan_SemiBold",
//                     }}
//                   />
//                   {errors.student_name && (
//                     <Text
//                       style={{
//                         fontSize: 16,
//                         color: "red",
//                         // top: 10,
//                         right: "20%",
//                       }}
//                     >
//                       {errors.student_name}
//                     </Text>
//                   )}

//                   <TextInput
//                     name="student_corp_emailId"
//                     placeholder="Email Address"
//                     // style={styles.textInput}
//                     label="Email Address"
//                     mode="outlined"
//                     autoCapitalize="none"
//                     onChangeText={handleChange("student_corp_emailId")}
//                     onBlur={handleBlur("student_corp_emailId")}
//                     value={values.student_corp_emailId}
//                     // keyboardType="email-address"
//                     theme={{ colors: { primary: "#89D8BB" } }}
//                     style={{
//                       height: 45,
//                       // top: 30,
//                       width: width - 70,
//                       fontSize: 16,
//                       lineHeight: 20,
//                       // marginTop: 10,
//                       color: "#89D8BB",
//                       fontFamily: "Spartan_SemiBold",
//                     }}
//                   />
//                   {errors.student_corp_emailId && (
//                     <Text style={{ fontSize: 16, color: "red", right: "17%" }}>
//                       {errors.student_corp_emailId}
//                     </Text>
//                   )}

//                   <TextInput
//                     name="empid"
//                     placeholder="Employee ID"
//                     // style={styles.textInput}
//                     label="Employee ID"
//                     mode="outlined"
//                     autoCapitalize="none"
//                     onChangeText={handleChange("empid")}
//                     onBlur={handleBlur("empid")}
//                     value={values.empid}
//                     // keyboardType="email-address"
//                     theme={{ colors: { primary: "#89D8BB" } }}
//                     style={{
//                       height: 45,
//                       // top: 30,
//                       width: width - 70,
//                       fontSize: 16,
//                       lineHeight: 20,
//                       // marginTop: 10,
//                       color: "#89D8BB",
//                       fontFamily: "Spartan_SemiBold",
//                     }}
//                   />
//                   {errors.empid && (
//                     <Text style={{ fontSize: 16, color: "red", right: "20%" }}>
//                       {errors.empid}
//                     </Text>
//                   )}

//                   <TextInput
//                     name="student_mob_no"
//                     placeholder="Mobile Number"
//                     // style={styles.textInput}
//                     label="Mobile Number"
//                     mode="outlined"
//                     autoCapitalize="none"
//                     onChangeText={handleChange("student_mob_no")}
//                     onBlur={handleBlur("student_mob_no")}
//                     value={values.student_mob_no}
//                     // keyboardType="email-address"
//                     theme={{ colors: { primary: "#89D8BB" } }}
//                     style={{
//                       height: 45,
//                       // top: 30,
//                       width: width - 70,
//                       fontSize: 16,
//                       lineHeight: 20,
//                       // marginTop: 10,
//                       color: "#89D8BB",
//                       fontFamily: "Spartan_SemiBold",
//                     }}
//                   />
//                   {errors.student_mob_no && (
//                     <Text style={{ fontSize: 16, color: "red", right: "20%" }}>
//                       {errors.student_mob_no}
//                     </Text>
//                   )}

//                   <TextInput
//                     name="student_personal_emailId"
//                     placeholder="Email Address"
//                     // style={styles.textInput}
//                     label="Email Address"
//                     mode="outlined"
//                     autoCapitalize="none"
//                     onChangeText={handleChange("student_personal_emailId")}
//                     onBlur={handleBlur("student_personal_emailId")}
//                     value={values.student_personal_emailId}
//                     // keyboardType="email-address"
//                     theme={{ colors: { primary: "black" } }}
//                     style={{
//                       height: 45,
//                       // top: 30,
//                       width: width - 70,
//                       fontSize: 16,
//                       lineHeight: 20,
//                       // marginTop: 10,
//                       color: "#89D8BB",
//                       fontFamily: "Spartan_SemiBold",
//                     }}
//                   />
//                   {errors.student_personal_emailId && (
//                     <Text style={{ fontSize: 16, color: "red", right: "15%" }}>
//                       {errors.student_personal_emailId}
//                     </Text>
//                   )}

//                   <View
//                     style={{
//                       backgroundColor: "white",
//                       width: 340,
//                       borderRadius: 10,
//                       height: 120,
//                       top: 10,
//                     }}
//                   >
//                     <RNSearchablePicker
//                       name="student_batch_code"
//                       onSelect={selectHandler}
//                       // onChangeText={handleChange("student_batch_code")}
//                       // onBlur={handleBlur("student_batch_code")}
//                       data={data}
//                       value={values.student_batch_code}
//                       placeholder="Select"
//                       defaultValue={data[0].label}
//                       containerStyles={{ marginHorizontal: 10 }}
//                       listStyles={{ maxHeight: 50 }}
//                     />
//                   </View>
//                   {/* {errors.student_batch_code && (
//                     <Text style={{ fontSize: 10, color: "red", top: 10 }}>
//                       {errors.student_batch_code}
//                     </Text>
//                   )} */}

//                   <TouchableOpacity
//                     onPress={handleSubmit}
//                     onClick={console.log("regitser")}
//                     disabled={!isValid}
//                     style={{
//                       // borderWidth: 1,
//                       height: 50,
//                       width: 340,
//                       backgroundColor: "white",
//                       justifyContent: "center",
//                       alignItems: "center",
//                       top: 20,

//                       borderRadius: 10,
//                     }}
//                   >
//                     <Text
//                       style={{
//                         color: "#0084D6",
//                         fontSize: 16,
//                         fontWeight: "bold",
//                       }}
//                     >
//                       REGISTER
//                       {console.log("regitser")}
//                     </Text>
//                   </TouchableOpacity>
//                 </>
//               )}
//             </Formik>
//           </View>
//           <View
//             style={{
//               flexDirection: "row",
//               justifyContent: "center",
//               alignItems: "center",
//               top: 20,
//             }}
//           >
//             <Text
//               style={{
//                 color: "#fb5414",
//                 fontFamily: "Helvetica",
//                 fontSize: 14,
//               }}
//             >
//               {" "}
//               New to Gamification ?{" "}
//             </Text>
//             <TouchableOpacity onPress={() => navigation.navigate("Login")}>
//               <View style={{}}>
//                 <Text style={{ color: "white" }}>Login</Text>
//               </View>
//             </TouchableOpacity>
//           </View>
//           <View
//             style={{
//               width: width - 55,
//               alignItems: "flex-start",
//               justifyContent: "space-between",
//               flexDirection: "row",
//               marginTop: 20,
//               backgroundColor: "#0084D6",
//               height: 140,
//               // left: 20,
//             }}
//           >
//             <Checkbox
//               color="white"
//               style={{ color: "white" }}
//               status={checked ? "checked" : "unchecked"}
//               onPress={() => {
//                 setChecked(!checked);
//               }}
//             />
//             <View style={{ width: "90%" }}>
//               <Text
//                 style={{
//                   color: "white",
//                   lineHeight: 20,
//                   fontSize: 13,
//                   fontFamily: "Helvetica",
//                 }}
//               >
//                 {" "}
//                 I have read and agreed to the Gamification
//               </Text>
//               <Text
//                 style={{
//                   color: "white",
//                   lineHeight: 20,
//                   fontSize: 13,
//                   fontFamily: "Helvetica",
//                   textAlign: "left",
//                 }}
//               >
//                 {" "}
//                 Terms and Conditions, Privacy Policies and User Agreement.
//               </Text>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     width: width,
//     alignItems: "center",
//     backgroundColor: "white",
//     top: 20,
//   },
//   ModalView: {
//     flex: 1,
//     backgroundColor: "#000000aa",
//     width: width,
//     alignItems: "center",
//     justifyContent: "flex-end",
//   },
//   MainBodyView: {
//     width: width,
//     alignItems: "center",
//     height: 30,
//     marginTop: 10,
//   },
//   NameText: {
//     fontFamily: "Spartan_Bold",
//     color: "#283673",
//     fontSize: 20,
//   },
//   Second: {
//     width: width,
//     alignItems: "center",
//     justifyContent: "center",
//     height: 40,
//   },
//   Profile: { height: 90, width: 90 },
//   TextInputView: {
//     width: "90%",
//     marginTop: 20,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "red",
//   },
//   Date: {
//     textAlign: "center",
//     color: "gray",
//   },
//   GenderView: { width: width - 80, marginTop: 10 },
//   GenderText: {
//     fontSize: 17,
//     color: "#283673",
//     fontFamily: "Spartan_Medium",
//   },
//   RadioButtonView: {
//     width: width - 100,
//     alignItems: "center",
//     justifyContent: "space-around",
//     flexDirection: "row",
//   },
//   RadioButtonText: {
//     fontSize: 15,
//     color: "#283673",
//     fontFamily: "Spartan_Medium",
//   },
//   Button: {
//     backgroundColor: "#89D8BB",
//     height: 45,
//     width: 45,
//     borderRadius: 45,
//     position: "absolute",
//     marginLeft: 200,
//     marginTop: 50,
//   },
//   ButtonView: {
//     backgroundColor: "#283672",
//     height: 45,
//     borderRadius: 45,
//     width: "100%",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   TextInput: {
//     height: 40,
//     width: width - 80,
//     fontSize: 14,
//     color: "#89D8BB",
//     fontFamily: "Spartan_SemiBold",
//   },
//   TextInput1: {
//     height: 40,
//     marginTop: 19,
//     width: width - 80,
//     fontSize: 14,
//     color: "#89D8BB",
//     fontFamily: "Spartan_SemiBold",
//     marginTop: 20,
//   },
//   DOB: {
//     height: 40,
//     marginTop: 19,
//     width: width - 80,
//     fontSize: 14,
//     color: "#89D8BB",
//     fontFamily: "Spartan_SemiBold",
//     borderWidth: 1,
//     borderColor: "gray",
//     borderRadius: 3,
//     paddingTop: 9,
//   },
//   loginContainer: {
//     width: "80%",
//     alignItems: "center",
//     backgroundColor: "white",
//     padding: 10,
//     elevation: 10,
//     backgroundColor: "#e6e6e6",
//   },
//   textInput: {
//     // height: 40,
//     // width: "90%",
//     // margin: 10,
//     // // left: 20,
//     // backgroundColor: "white",
//     // borderColor: "gray",
//     // // borderWidth: StyleSheet.hairlineWidth,
//     // borderRadius: 10,
//   },
// });

// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Dimensions,
//   TouchableOpacity,
//   ScrollView,
//   SafeAreaView,
//   Alert,
//   Button,
// } from "react-native";
// import api from "../../api";

// const { width, height } = Dimensions.get("window");
// import TextInputWithLabel from "../../Components/TextInputWithLabel";
// import ButtonWithLoader from "../../Components/ButtonWithLoader";
// import { TextInput } from "react-native-paper";
// import { Formik } from "formik";
// import * as yup from "yup";

// import LoginOnboarding from "../LoginOnboard/LoginOnboarding";
// // import SearchableDropdownComponent from "../../Components/SearchableDropdown";

// // import React, { useState, useEffect } from "react";

// // import all the components we are going to use
// // import { SafeAreaView, StyleSheet, Text, View } from "react-native";

// // import SearchableDropdown component
// import SearchableDropdown from "react-native-searchable-dropdown";

// const loginValidationSchema = yup.object().shape({
//   student_name: yup
//     .string()
//     .min(2, "Mininum 2 characters")
//     .max(30, "Maximum 30 characters")
//     .required("Your name is required"),
//   student_corp_emailId: yup
//     .string()
//     .email("Please enter valid email")
//     .required("Email Address is Required"),
//   student_personal_emailId: yup
//     .string()
//     .email("Please enter valid email")
//     .required("Email Address is Required"),

//   empid: yup
//     .string()
//     .min(6, "Mininum 2 characters")

//     .required("Your name is required"),
//   student_mob_no: yup
//     .string()
//     .min(8, "Mininum 2 characters")

//     .required("Your name is required"),
//   student_batch_code: yup
//     .string()
//     .min(8, "Mininum 2 characters")

//     .required("Your name is required"),
// });

// // Item array for the dropdown
// const items = [
//   // name key is must. It is to show the text in front
//   { id: 1, name: "angellist" },
//   { id: 2, name: "codepen" },
//   { id: 3, name: "envelope" },
//   { id: 4, name: "etsy" },
//   { id: 5, name: "facebook" },
//   { id: 6, name: "foursquare" },
//   { id: 7, name: "github-alt" },
//   { id: 8, name: "github" },
//   { id: 9, name: "gitlab" },
//   { id: 10, name: "instagram" },
// ];

// const SearchableDropdownComponent = () => {
//   const [serverData, setServerData] = useState([]);

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.container}>
//         <SearchableDropdown
//           onTextChange={(text) => console.log(text)}
//           // Listner on the searchable input
//           onItemSelect={(item) => alert(JSON.stringify(item))}
//           // Called after the selection
//           containerStyle={{ padding: 5 }}
//           // Suggestion container style
//           textInputStyle={{
//             // Inserted text style
//             padding: 8,
//             top: 10,
//             borderWidth: 1,
//             borderRadius: 30,
//             borderColor: "black",
//             backgroundColor: "#FAF7F6",
//           }}
//           itemStyle={{
//             // Single dropdown item style
//             padding: 10,
//             borderRadius: 20,
//             marginTop: 12,
//             backgroundColor: "#FAF9F8",
//             borderColor: "#bbb",
//             borderWidth: 1,
//           }}
//           itemTextStyle={{
//             // Text style of a single dropdown item
//             color: "#222",
//           }}
//           itemsContainerStyle={{
//             // Items container style you can pass maxHeight
//             // To restrict the items dropdown hieght
//             maxHeight: "60%",
//           }}
//           items={items}
//           // Mapping of item array
//           defaultIndex={2}
//           // Default selected item index
//           placeholder="placeholder"
//           // place holder for the search input
//           resPtValue={false}
//           // Reset textInput Value with true and false state
//           underlineColorAndroid="transparent"
//           // To remove the underline from the android input
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// // export default SearchableDropdownComponent;

// export default function Register({ navigation }) {
//   const [student_name, setStudent_name] = useState("");
//   const [student_corp_emailId, setStudent_corp_emailId] = useState("");
//   const [empid, setEmpid] = useState("");
//   const [student_mob_no, setStudent_mob_no] = useState("");
//   const [student_batch_code, setStudent_batch_code] = useState("");
//   const [student_personal_emailId, setStudent_personal_emailId] = useState("");

//   const requestOptions = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       student_name: "",
//       student_corp_emailId: "",
//       empid: "",
//       student_mob_no: "",
//       student_batch_code: "",
//       student_personal_emailId: "",
//     }),
//   };

//   // const onSubmitHandler = () => {
//   //   console.log("data====>", requestOptions);
//   //   api.auth
//   //     .registrationRequest(requestOptions)
//   //     .then((response) => {
//   //       console.log("Registration request", response);
//   //     })
//   //     .catch((error) => {
//   //       console.log("catch error", error);
//   //     });
//   // };

//   const onSubmitHandler = async () => {
//     try {
//       await fetch(
//         "http://3.215.18.129/gamification_registration/",
//         requestOptions
//       ).then((response) => {
//         response.json().then((data) => {
//           console.log("***********");
//           console.log("dataaa", data);
//           console.log("dataaa name", student_name);

//           // Alert.alert("Post created at : ", data);
//         });
//         navigation.navigate("Login");
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <View style={{ backgroundColor: "#0084D6", width: "100%", height: "100%" }}>
//       <View style={{ height: 200, width: "100%" }}>
//         <LoginOnboarding />
//       </View>
//       <ScrollView>
//         <View
//           style={{
//             // borderWidth: 1,
//             height: height,
//             width: "100%",
//             borderTopLeftRadius: 70,
//             // padding: 20,
//             backgroundColor: "white",
//             alignItems: "center",
//             // justifyContent: "center",
//             alignSelf: "center",
//           }}
//         >
//           <Formik
//             validationSchema={loginValidationSchema}
//             initialValues={{
//               student_name: "",
//               student_corp_emailId: "",
//               empid: "",
//               student_mob_no: "",
//               student_batch_code: "",
//               student_personal_emailId: "",
//             }}
//             onSubmit={(values) => console.log(values)}
//           >
//             {({
//               handleChange,
//               handleBlur,
//               handleSubmit,
//               values,
//               errors,
//               isValid,
//             }) => (
//               <>
//                 <TextInput
//                   name="student_name"
//                   placeholder="Student Name"
//                   // style={styles.textInput}
//                   label="Student Name"
//                   mode="outlined"
//                   autoCapitalize="none"
//                   onChangeText={handleChange("Student Name")}
//                   onBlur={handleBlur("Student Name")}
//                   value={values.student_name}
//                   // keyboardType="email-address"
//                   theme={{ colors: { primary: "#89D8BB" } }}
//                   style={{
//                     height: 45,
//                     // top: 30,
//                     width: width - 80,
//                     fontSize: 16,

//                     marginTop: 20,
//                     color: "#89D8BB",
//                     fontFamily: "Spartan_SemiBold",
//                   }}
//                 />
//                 {errors.student_name && (
//                   <Text style={{ fontSize: 10, color: "red" }}>
//                     {errors.student_name}
//                   </Text>
//                 )}

//                 <TextInput
//                   name="student_corp_emailId"
//                   placeholder="Email Address"
//                   // style={styles.textInput}
//                   label="Email Address"
//                   mode="outlined"
//                   autoCapitalize="none"
//                   onChangeText={handleChange("Email Address")}
//                   onBlur={handleBlur("Email Address")}
//                   value={values.student_corp_emailId}
//                   // keyboardType="email-address"
//                   theme={{ colors: { primary: "#89D8BB" } }}
//                   style={{
//                     height: 45,
//                     // top: 30,
//                     width: width - 80,
//                     fontSize: 16,

//                     marginTop: 20,
//                     color: "#89D8BB",
//                     fontFamily: "Spartan_SemiBold",
//                   }}
//                 />
//                 {errors.student_corp_emailId && (
//                   <Text style={{ fontSize: 10, color: "red" }}>
//                     {errors.student_corp_emailId}
//                   </Text>
//                 )}

//                 <TextInput
//                   name="empid"
//                   placeholder="Employee ID"
//                   // style={styles.textInput}
//                   label="Employee ID"
//                   mode="outlined"
//                   autoCapitalize="none"
//                   onChangeText={handleChange("Employee ID")}
//                   onBlur={handleBlur("Employee ID")}
//                   value={values.empid}
//                   // keyboardType="email-address"
//                   theme={{ colors: { primary: "#89D8BB" } }}
//                   style={{
//                     height: 45,
//                     // top: 30,
//                     width: width - 80,
//                     fontSize: 16,

//                     marginTop: 20,
//                     color: "#89D8BB",
//                     fontFamily: "Spartan_SemiBold",
//                   }}
//                 />
//                 {errors.empid && (
//                   <Text style={{ fontSize: 10, color: "red" }}>
//                     {errors.empid}
//                   </Text>
//                 )}

//                 <TextInput
//                   name="student_mob_no"
//                   placeholder="Mobile Number"
//                   // style={styles.textInput}
//                   label="Mobile Number"
//                   mode="outlined"
//                   autoCapitalize="none"
//                   onChangeText={handleChange("Mobile Number")}
//                   onBlur={handleBlur("Mobile Number")}
//                   value={values.student_mob_no}
//                   // keyboardType="email-address"
//                   theme={{ colors: { primary: "#89D8BB" } }}
//                   style={{
//                     height: 45,
//                     // top: 30,
//                     width: width - 80,
//                     fontSize: 16,

//                     marginTop: 20,
//                     color: "#89D8BB",
//                     fontFamily: "Spartan_SemiBold",
//                   }}
//                 />
//                 {errors.student_mob_no && (
//                   <Text style={{ fontSize: 10, color: "red" }}>
//                     {errors.student_mob_no}
//                   </Text>
//                 )}

//                 <TextInput
//                   name="student_batch_code"
//                   placeholder="Batch Code"
//                   // style={styles.textInput}
//                   label="Batch Code"
//                   mode="outlined"
//                   autoCapitalize="none"
//                   onChangeText={handleChange("Batch Code")}
//                   onBlur={handleBlur("Batch Code")}
//                   value={values.student_batch_code}
//                   // keyboardType="email-address"
//                   theme={{ colors: { primary: "#89D8BB" } }}
//                   style={{
//                     height: 45,
//                     // top: 30,
//                     width: width - 80,
//                     fontSize: 16,

//                     marginTop: 20,
//                     color: "#89D8BB",
//                     fontFamily: "Spartan_SemiBold",
//                   }}
//                 />
//                 {errors.student_batch_code && (
//                   <Text style={{ fontSize: 10, color: "red" }}>
//                     {errors.student_batch_code}
//                   </Text>
//                 )}

//                 <TextInput
//                   name="student_personal_emailId"
//                   placeholder="Email Address"
//                   // style={styles.textInput}
//                   label="Email Address"
//                   mode="outlined"
//                   autoCapitalize="none"
//                   onChangeText={handleChange("Email Address")}
//                   onBlur={handleBlur("Email Address")}
//                   value={values.student_personal_emailId}
//                   // keyboardType="email-address"
//                   theme={{ colors: { primary: "#89D8BB" } }}
//                   style={{
//                     height: 45,
//                     // top: 30,
//                     width: width - 80,
//                     fontSize: 16,

//                     marginTop: 20,
//                     color: "#89D8BB",
//                     fontFamily: "Spartan_SemiBold",
//                   }}
//                 />
//                 {errors.student_personal_emailId && (
//                   <Text style={{ fontSize: 10, color: "red" }}>
//                     {errors.student_personal_emailId}
//                   </Text>
//                 )}

//                 <View style={{ top: 20, width: "80%" }}>
//                   <Button
//                     onPress={handleSubmit}
//                     title="REGISTER"
//                     disabled={!isValid}
//                   />
//                 </View>
//               </>
//             )}
//           </Formik>
//           <View style={{ top: 20, flexDirection: "row" }}>
//             <Text style={styles.GoText}>
//               {" "}
//               Already connected to Gamification?
//             </Text>
//             <TouchableOpacity onPress={() => navigation.navigate("Login")}>
//               <View style={styles.Log}>
//                 <Text
//                   style={{
//                     color: "#253f67",
//                     lineHeight: 29,
//                     fontSize: 14,
//                     fontFamily: "Helvetica-Bold",
//                   }}
//                 >
//                   Login
//                 </Text>
//               </View>
//             </TouchableOpacity>
//           </View>

//           {/* <TextInputWithLabel label="username" />
//         <TextInputWithLabel label="email" /> */}
//         </View>
//       </ScrollView>
//     </View>

//     // <View style={styles.Container}>
//     //   {/* <View style={styles.SecondContainer}> */}
//     //   <LoginOnboarding />
//     //   {/* </View> */}

//     //   <View>
//     //     <TextInputWithLabel />
//     //   </View>

//     // {
//     /* <View style={styles.ThirdContainer}>
//         <ScrollView
//           style={{ backgroundColor: "white" }}
//           showsVerticalScrollIndicator={false}
//         >
//           <View style={{ width: "100%", alignItems: "center" }}>
//             <SearchableDropdownComponent />
//             <View
//               style={{
//                 height: 55,
//                 width: width - 66,
//               }}
//             >
//               <TextInputWithLabel
//                 placeholder="Enter Your Name"
//                 value={student_name}
//                 onChangeText={(text) => setStudent_name(text)}
//               />

//               <TextInputWithLabel
//                 placeholder="Enter Your E-mail ID"
//                 value={student_corp_emailId}
//                 onChangeText={(text) => setStudent_corp_emailId(text)}
//               />
//               <TextInputWithLabel
//                 placeholder="Enter Your Personal E-mail ID"
//                 value={student_personal_emailId}
//                 onChangeText={(text) => setStudent_personal_emailId(text)}
//               />
//               <TextInputWithLabel
//                 placeholder="Enter Your Employee ID"
//                 value={empid}
//                 onChangeText={(text) => setEmpid(text)}
//               />
//               <TextInputWithLabel
//                 placeholder="Enter Your Mobile Number"
//                 value={student_mob_no}
//                 onChangeText={(text) => setStudent_mob_no(text)}
//               />

//               <TextInputWithLabel
//                 placeholder="Enter Your Batch code"
//                 value={student_batch_code}
//                 onChangeText={(text) => setStudent_batch_code(text)}
//               />

//             </View>

//             <View style={{ width: "85%", top: 390 }}>
//               <ButtonWithLoader text="Register" onPress={onSubmitHandler} />
//             </View>
//             <View style={styles.GoLog}>
//               <Text style={styles.GoText}>
//                 {" "}
//                 Already connected to Gamification?
//               </Text>
//               <TouchableOpacity onPress={() => navigation.navigate("Login")}>
//                 <View style={styles.Log}>
//                   <Text
//                     style={{
//                       color: "#253f67",
//                       lineHeight: 29,
//                       fontSize: 14,
//                       fontFamily: "Helvetica-Bold",
//                     }}
//                   >
//                     Login
//                   </Text>
//                 </View>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </ScrollView>
//       </View> */
//     // }
//     // </View>
//   );
// }

// const styles = StyleSheet.create({
//   Container: {
//     height: height,
//     width: width,
//     alignItems: "center",
//     justifyContent: "flex-end",
//     backgroundColor: "#0084D6",
//   },
//   SecondContainer: {
//     width: width,
//     // flex: 0.3,
//     backgroundColor: "transparent",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   TextInput: {
//     height: 40,
//     top: 30,
//     width: width - 80,
//     fontSize: 14,
//     color: "#89D8BB",
//     fontFamily: "Spartan_SemiBold",
//   },
//   LogoView: {
//     width: 130,
//     height: 130,
//     alignItems: "center",
//     marginTop: 25,
//     backgroundColor: "white",
//     borderRadius: 100,
//     justifyContent: "center",
//   },
//   Fregister: {
//     color: "white",
//     marginLeft: 10,
//     fontSize: 23,
//     fontFamily: "Helvetica-Bold",
//     textAlign: "center",
//     marginTop: 20,
//   },
//   ThirdContainer: {
//     flex: 0.7,
//     backgroundColor: "white",
//     width: width,
//     borderTopStartRadius: 100,
//     alignItems: "center",
//   },
//   GoLog: {
//     height: 70,
//     width: width,
//     alignItems: "center",
//     justifyContent: "center",
//     flexDirection: "row",
//     marginTop: 320,
//   },
//   GoText: {
//     color: "#fb5414",
//     right: 12,
//     fontFamily: "Helvetica",
//     fontSize: 15,
//     top: 3,
//   },
//   Log: {
//     height: 27,
//     width: 53,
//     alignItems: "center",
//     borderBottomWidth: 2,
//     borderColor: "#253f67",
//     right: 8,
//   },
//   container: {
//     // flex: 1,
//     // backgroundColor: "white",
//     // padding: 10,
//     // alignItems: "center",
//     // width: "100%",
//     // borderRadius: 20,
//     // borderWidth: 1,
//   },
//   titleText: {
//     padding: 8,
//     fontSize: 16,
//     textAlign: "center",
//     fontWeight: "bold",
//   },
//   headingText: {
//     padding: 8,
//   },
// });
