import { Login, Register } from "../";
import MyTabs from "../Screens/Main/BottomTabs";
import OTP from "../Screens/OTP";
import DashBoardHeader from "../Screens/Main/Dashboard/DashBoardHeader";
import { createStackNavigator } from "@react-navigation/stack";
import AppPageStack from "./AppPageStack";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: null }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
    </Stack.Navigator>
  );
}
