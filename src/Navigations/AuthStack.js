import { Login, Register } from "../";
import MyTabs from "../Screens/Main/BottomTabs";
import OTP from "../Screens/OTP";

export default function (Stack) {
  return (
    <>
      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="OTP" component={OTP} />
    </>
  );
}
