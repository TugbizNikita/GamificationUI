import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screens/Login/Login";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";
import { useSelector } from "react-redux";
// import AuthContext from "../redux/authStore";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthContext from "../store/auth_store";

// import AsyncStorage from "@react-native-community/async-storage";

// import AsyncStorage from "@react-native-community/async-storage";
const Stack = createStackNavigator();

export default function Route() {
  // const [loggedIn, setLoggedIn] = useState(false);
  const authCtx = useContext(AuthContext);
  // console.log("authCtx========================>", authCtx);

  // const userData = useSelector((state) => state.Auth.userData);
  // console.log("===============================>", userData);

  // useEffect(() => {
  //   const token = await AsyncStorage.setItem("token")

  //   if (token) {
  //     setLoggedIn(true)
  //   } else {
  //     setLoggedIn(false)
  //   }
  // }, []);

  // const setToken = (token) => {
  //   return SecureStore.setItemAsync("secure_token", token);
  // };

  // const getToken = () => {
  //   return SecureStore.getItemAsync("secure_token");
  // };

  // setToken("#your_secret_token");
  // getToken().then((token) => console.log(token)); // output '#your_secret_token'

  // const [isLoggedIn, setLoggedIn] = useState(false);

  // useEffect(async () => {
  //   // const token = await AsyncStorage.getItem("token");
  //   console.log("gettoken=====>", token);
  //   if (token) {
  //     setLoggedIn(true);
  //   } else {
  //     setLoggedIn(false);
  //   }
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: null }}>
        {!authCtx.isLoggedIn && MainStack(Stack)}
        {authCtx.isLoggedIn && AuthStack(Stack)}
        {console.log("!authCtx.isLoggedIn", !authCtx.isLoggedIn)}
        {console.log("Routes Token", authCtx.token)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
