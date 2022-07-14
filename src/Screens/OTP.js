// import AsyncStorage from "@react-native-community/async-storage";
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
import AuthContext from "../store/auth_store";
// import AuthContext from "../redux/authStore";

const { height, width } = Dimensions.get("window");

const CELL_COUNT = 4;

export default function OTP({ navigation, route }) {
  const authCtx = useContext(AuthContext);
  const [value, setValue] = useState();
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  // console.log("key otp", route.params.paramKey);
  // const requestOptions = {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     mail: route.params.paramKey,
  //     otp: value,
  //   }),
  // };

  let EmailID = route.params.paramKey;

  console.log("44", EmailID);
  // const onSubmitHandler = async () => {
  //   console.log("requestoptionData====>", requestOptions);
  //   try {
  //     await fetch("http://3.215.18.129/verify_otp/", requestOptions).then(
  //       (response) => {
  //         response.json().then((data) => {
  //           console.log("TokenData====>", data);
  //           if (data.status_code === 0) {
  //             navigation.navigate("MyTabs", {
  //               paramKey: EmailID.trim(),
  //             });
  //           } else if (data.status_code === 1) {
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
  // console.log("otpNumber", value);
  const requestOptions = {
    mail: route.params.paramKey,
    otp: value,
  };
  console.log("requestOptions1", requestOptions);

  const submitForm = async (data) => {
    console.log("otpDAta", data);
    // Login API calling
    api.auth
      .otpRequest(requestOptions)
      .then(async (response) => {
        // console.log("updatedapi", data);
        // handle success

        if (response.data.status_code === 0) {
          authCtx.login(response.data.token);
          // console.log("token==============/////", response.data.token);
          navigation.navigate("MyTabs", {
            paramKey: EmailID.trim(),
          });

          console.log("Logintoken=====>", authCtx.token);
          console.log("Logintoken=====>", response.data.token);
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

        <TouchableOpacity onPress={submitForm} style={styles.btn}>
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
