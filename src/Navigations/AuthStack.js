import React, { useContext } from "react";
import { Login, Register } from "../";
import OTP from "../Screens/OTP";
import MyTabs from "../Screens/BottomTabs";
import AuthContext from "../store/auth_store";
import Assesment from "../Components/ExamTab";

import TermsCondition from "../Screens/Register/TermsCondition";
import PrivacyPolicy from "../Screens/Register/PrivacyPolicy";
import LoginWithPassword from "../Screens/Login/LoginWithPassword";
import FinalExamUrl from "../Screens/Assesment/FinalExamUrl";

export default function (Stack) {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <Stack.Screen name="LoginWithPassword" component={LoginWithPassword} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />

      <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="Assesment" component={Assesment} />
      <Stack.Screen name="FinalExamUrl" component={FinalExamUrl} />

      <Stack.Screen name="TermsCondition" component={TermsCondition} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
    </>
  );
}

// import { Login, Register } from "../";
// import MyTabs from "../Screens/BottomTabs";
// import OTP from "../Screens/OTP";
// import DashBoardHeader from "../Screens/Main/DashBoardHeader";
// import { createStackNavigator } from "@react-navigation/stack";
// import AppPageStack from "./AppPageStack";

// const Stack = createStackNavigator();

// export default function AuthStack() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: null }}>
//       <Stack.Screen name="Login" component={Login} />
//       <Stack.Screen name="Register" component={Register} />
//       <Stack.Screen name="OTP" component={OTP} />
//       <Stack.Screen name="MyTabs" component={MyTabs} />
//     </Stack.Navigator>
//   );
// }
