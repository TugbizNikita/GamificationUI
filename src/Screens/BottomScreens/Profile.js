import React, { useState, useEffect } from "react";
import {
  View,
  BackHandler,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { Formik } from "formik";
import * as yup from "yup";
import ButtonWithLoader from "../../Components/ButtonWithLoader";
import api from "../../api";

import InputComponent from "../../Components/InputComponent";
import RNSearchablePicker from "react-native-searchable-picker";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector, useDispatch } from "react-redux";

const { width, height } = Dimensions.get("window");

const data = [
  {
    value: "Group-1",
    label: "Group-1",
  },
  {
    value: "Group-2",
    label: "Group-2",
  },
  {
    value: "Group-3",
    label: "Group-3",
  },
  {
    value: "Group-4",
    label: "Group-4",
  },
  {
    value: "Group-5",
    label: "Group-5",
  },
  {
    value: "Group-6",
    label: "Group-6",
  },
  {
    value: "Group-7",
    label: "Group-7",
  },
];

export default function Profile({ navigation, route }) {
  const [selected, setSelected] = useState();

  const selectHandler = (item) => {
    setSelected(item.value);
    console.log("itemvalue", item);
  };

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate("DashBoard");

        return true;
      };

      // Add Event Listener for hardwareBackPress
      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () => {
        // Once the Screen gets blur Remove Event Listener
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
      };
    }, [])
  );

  const [loginId, setLoginId] = useState("");
  const [mobile, setMobile] = useState("");
  const [orgEmail, setOrgEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const authToken = useSelector((state) => state.Reducers.authToken);
  const userNamee = useSelector((state) => state.Reducers.userName);
  console.log("authTokendash=====>", authToken);
  console.log("userNamemore=====0000>", userNamee);

  const initialValues = {
    mobile: "",
    orgEmail: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    mobile: yup
      .string()
      .trim()
      .required("Your official email address is required"),
    orgEmail: yup
      .string()
      .trim()
      .required("Your official email address is required")
      .email("Please enter official email"),
    password: yup
      .string()
      .trim()
      .required("Your official email address is required"),
  });
  console.log("hellloo");
  const UpdateHandler = async (data) => {
    let updatedata = {
      loginId: userNamee,
      mobile: data.mobile,
      orgEmail: data.orgEmail,
      password: data.password,
      userGroup: selected,
    };

    try {
      api.auth.UpdateRequest(updatedata).then((response) => {
        console.log("UPDATEDATA", data);
        console.log("updatedapi=>", response.data);
        setName(response.data);
        console.log("updatedapi0000=>", response.data);
        if (response.data.status_code === 0) {
          alert("Profile successfully updated");
        } else if (response.data.status_code === 1) {
          alert("Please enter a valid Mail ID");
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  const [userName, setUserName] = useState("");

  const dashboardData = `http://3.215.18.129/dashboard/?login-Id=${userNamee}`;

  const Dashboard = () => {
    fetch(dashboardData)
      .then((response) => response.json())

      .then((json) => {
        setUserName(json.all_data[0]["userName"]);
        console.log("userName", json.all_data[0]["userName"]);
      })

      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    Dashboard();
  }, []);

  let firstname = userName.split(" ")[0];
  console.log("firstname", firstname);

  let Lastname = userName.split(" ")[1];
  console.log("lastname", Lastname);
  return (
    <LinearGradient
      style={{
        width: "100%",

        flex: 1,
        justifyContent: "center",
      }}
      colors={["#5899E2", "#FFFFFF"]}
    >
      <View
        style={{
          width: "100%",
          backgroundColor: "#0084D6",
          flex: 0.1,
          padding: 10,

          borderBottomStartRadius: 40,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            left: 10,

            justifyContent: "center",

            color: "white",
            fontWeight: "bold",
          }}
        >
          User Profile
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          // backgroundColor: "pink",
          flex: 0.9,
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
          style={{}}
        >
          <View style={{ top: 10, marginBottom: 100 }}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={UpdateHandler}
            >
              {(props) => (
                <View
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      left: 20,
                    }}
                  >
                    First Name
                  </Text>
                  <View
                    style={{
                      height: 50,
                      width: "90%",
                      left: 20,

                      marginVertical: 5,

                      borderRadius: 10,
                      borderWidth: 1,
                      backgroundColor: "#D1D1D1",
                      borderColor: "#D1D1D1",
                      elevation: 1,
                      justifyContent: "center",

                      padding: 10,
                    }}
                  >
                    <Text
                      style={{
                        justifyContent: "center",
                        textAlign: "left",
                        fontSize: 16,
                      }}
                    >
                      {firstname}
                    </Text>
                  </View>
                  <Text style={{ fontSize: 16, fontWeight: "bold", left: 20 }}>
                    Last Name
                  </Text>
                  <View
                    style={{
                      height: 50,
                      width: "90%",
                      left: 20,

                      marginVertical: 5,

                      borderRadius: 10,
                      borderWidth: 1,
                      backgroundColor: "#D1D1D1",
                      borderColor: "#D1D1D1",
                      elevation: 1,
                      justifyContent: "center",

                      padding: 10,
                    }}
                  >
                    <Text
                      style={{
                        justifyContent: "center",
                        textAlign: "left",
                        fontSize: 16,
                      }}
                    >
                      {Lastname}
                    </Text>
                  </View>

                  <InputComponent
                    placeholder="Mobile"
                    label="Mobile"
                    value={props.values.mobile.trim()}
                    onChangeText={props.handleChange("mobile")}
                  />

                  <View
                    style={{
                      height: 50,
                      width: "90%",
                      left: 20,

                      marginVertical: 5,

                      borderRadius: 10,
                      borderWidth: 1,
                      backgroundColor: "#D1D1D1",
                      borderColor: "#D1D1D1",
                      elevation: 1,
                      justifyContent: "center",

                      padding: 10,
                    }}
                  >
                    <Text
                      style={{
                        justifyContent: "center",
                        textAlign: "left",
                        fontSize: 16,
                      }}
                    >
                      {userNamee}
                    </Text>
                  </View>

                  <InputComponent
                    placeholder="Organization Email"
                    label="Organization Email"
                    value={props.values.orgEmail.trim()}
                    onChangeText={props.handleChange("orgEmail")}
                  />

                  <InputComponent
                    placeholder="Password"
                    label="Password"
                    value={props.values.password.trim()}
                    onChangeText={props.handleChange("password")}
                  />

                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      left: 20,
                    }}
                  >
                    Group
                  </Text>
                  <View
                    style={{
                      borderRadius: 20,
                      top: 10,
                      width: "95%",
                      left: 10,
                    }}
                  >
                    <RNSearchablePicker
                      onSelect={selectHandler}
                      data={data}
                      placeholder="Choose an item"
                      containerStyles={{
                        marginHorizontal: 10,
                        backgroundColor: "white",
                        borderRadius: 20,
                        borderWidth: 1,
                        padding: 10,
                      }}
                      listStyles={{
                        maxHeight: 70,
                        padding: 5,
                        marginVertical: 2,

                        // padding: 10,
                      }}
                    />
                  </View>

                  <View
                    style={{
                      top: 20,
                      width: "90%",

                      justifyContent: "center",
                      left: 20,
                      bottom: 50,
                    }}
                  >
                    <ButtonWithLoader
                      text="UPDATE"
                      onPress={props.handleSubmit}
                    />
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  secondView: {
    alignItems: "center",
    // flex: 0.6,
    backgroundColor: "red",
    borderTopLeftRadius: 70,
  },
});
