import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screens/Login/Login";
import MainStack from "./MainStack";
import AuthStack from "./AuthStack";
import { useSelector } from "react-redux";
const Stack = createStackNavigator();
export default function Routes() {
  // const userData = useSelector((state) => state.AuthStack.userData);
  // console.log("user data", userData);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: null }}>
        {false ? MainStack(Stack) : AuthStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
