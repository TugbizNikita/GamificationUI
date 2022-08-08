import React, { useContext } from "react";

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import LoginOnboarding from "../LoginOnboard/LoginOnboarding";

import api from "../../api";

import InputComponent from "../../Components/InputComponent";
import ButtonWithLoader from "../../Components/ButtonWithLoader";

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
  // const authCtx = useContext(AuthContext);

  const onSubmitHandler = async (data, { resetForm }) => {
    let em = {
      to: [data.to.trim()],
    };
    console.log("em=====///", em);
    console.log("onSubmit", data);
    let emailInfo = data.to.trim();
    console.log("emailinfo", emailInfo);

    try {
      api.auth.loginRequest([em]).then((response) => {
        console.log("updatedapi", data);
        console.log("updatedapi=>", response);
        if (response.data.status_code === 0) {
          navigation.navigate("OTP", {
            paramKey: emailInfo,
          });

          resetForm({ data: "" });
        } else if (response.data.status_code === 1) {
          alert("Please enter a valid Mail ID");
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
                    name="to"
                    type="to"
                    setFieldTouched="to"
                    onBlur={() => props.setFieldTouched("to")}
                  />

                  {props.touched.to && props.errors.to && (
                    <Text style={{ fontSize: 15, color: "red" }}>
                      {props.errors.to}
                    </Text>
                  )}

                  <View
                    style={{
                      top: 20,
                      width: "90%",
                      backgroundColor: "white",
                    }}
                  >
                    <ButtonWithLoader
                      text="Log In"
                      onPress={props.handleSubmit}
                    />
                  </View>
                </View>
              )}
            </Formik>
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
    // top: 40,
    marginVertical: 10,
  },
  inputView: {
    padding: 10,
    // top: 40,
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
