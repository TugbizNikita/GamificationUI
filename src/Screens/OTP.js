import AsyncStorage from "@react-native-async-storage/async-storage";

import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import api from "../api";
// import { AuthContext } from "../Context/context";
import { useDispatch } from "react-redux";
// import {Login} from '../store/actions'
const { height, width } = Dimensions.get("window");
import { LoginWithOtp } from "../store/actions";

const CELL_COUNT = 4;

export default function OTP({ navigation, route }) {
  const [value, setValue] = useState();
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  let EmailID = route.params.paramKey;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  // const submit = () => {
  //   dispatch(Login(username, password));
  // };

  console.log("44", EmailID);
  const requestOptions = {
    mail: route.params.paramKey,
    otp: value,
  };

  let EMAIL = requestOptions.mail;
  console.log("requestOptions22222", EMAIL);

  // const { signInwithOtp } = React.useContext(AuthContext);

  const submitForm = async (data) => {
    console.log("otpDAta", data);
    // Login API calling
    api.auth
      .otpRequest(requestOptions)
      .then(async (response) => {
        if (response.data.status_code === 0) {
          var token = response.data.token;

          // signInwithOtp(requestOptions.mail, requestOptions.otp, token);
          dispatch(
            LoginWithOtp(requestOptions.mail, requestOptions.otp, token)
          );

          // navigation.navigate("MyTabs", {
          //   paramKey: EMAIL.trim(),
          // });
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
    <View style={styles.Container}>
      <View style={styles.mainView}>
        <Image
          source={require("../../assets/Images/NovelLogo.png")}
          style={{ height: 65, width: 281 }}
        />
      </View>

      <View style={styles.textView}>
        <View style={styles.text}>
          <Text style={styles.textstyle}>
            Enter 4 digit OTP sent to your Email
          </Text>
        </View>

        <SafeAreaView style={styles.root}>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            placeholder="0"
            renderCell={({ index, symbol, isFocused }) => (
              <View
                onLayout={getCellOnLayoutHandler(index)}
                key={index}
                style={[styles.cellRoot, isFocused && styles.focusCell]}
              >
                <Text style={styles.cellText}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />
        </SafeAreaView>

        <TouchableOpacity
          onPress={submitForm}
          style={{
            height: 45,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            marginTop: 60,
            width: "80%",
          }}
        >
          <Text style={styles.submit}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: height,
    width: width,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "white",
  },
  mainView: {
    width: width,
    flex: 0.3,
    paddingTop: 10,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  textView: {
    flex: 0.7,
    backgroundColor: "#0084D6",
    width: width,
    borderTopStartRadius: 100,
    alignItems: "center",
  },
  text: {
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    marginTop: 20,
  },
  textstyle: {
    color: "white",
    lineHeight: 20,
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Helvetica",
  },
  btn: {
    height: 40,
    width: width - 80,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    marginTop: 80,
  },
  submit: {
    color: "#0084D6",
    fontFamily: "bold",
    textAlign: "center",
    fontSize: 17,
  },
  root: { padding: 2, minHeight: 20, marginTop: 10 },
  title: { textAlign: "center", fontSize: 20 },
  codeFieldRoot: {
    marginTop: 1,
    width: width - 65,
    marginLeft: "auto",
    marginRight: "auto",
    height: 50,
  },
  cellRoot: {
    height: 50,
    width: 50,
    backgroundColor: "#cfe2f3",
    borderRadius: 16,
    alignItems: "center",
    fontSize: 20,
    textAlign: "center",
    justifyContent: "center",
  },
  cellText: {
    color: "#000",
    fontSize: 26,
    textAlign: "center",
  },
  focusCell: {
    borderBottomColor: "#007AFF",
    borderBottomWidth: 0.0,
  },
});
