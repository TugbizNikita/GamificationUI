import React, { useContext } from "react";
import { Login, LoginWithPassword, OTP } from "../Utils";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: null }}>
      <Stack.Screen name="LoginWithPassword" component={LoginWithPassword} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="OTP" component={OTP} />
    </Stack.Navigator>
  );
}
