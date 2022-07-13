import React, { useContext } from "react";
import { Register } from "../redux/actions/Auth";

import MyTabs from "../Screens/BottomTabs";
import Login from "../Screens/Login/Login";
import OTP from "../Screens/OTP";
import Assesment from "../Components/ExamTab";
import AuthContext from "../store/auth_store";
import AuthStack from "./AuthStack";
import FinalExamUrl from "../Screens/Assesment/FinalExamUrl";
import DashBoardHeader from "../Screens/Main/DashBoardHeader";
import VideoLink from "../Screens/Discover/VideoLink";
import Dummy from "../Screens/Dummy";
import ElearningUI from "../Screens/Elearning/ElearningUI";
import ElearningLink from "../Screens/Elearning/ElearningLink";
// import Elearning from "../Screens/Elearning";
export default function (Stack) {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <Stack.Screen name="MyTabs" component={MyTabs} />
      {/* <Stack.Screen name="DashBoardHeader" component={DashBoardHeader} /> */}
      <Stack.Screen name="Assesment" component={Assesment} />
      <Stack.Screen name="FinalExamUrl" component={FinalExamUrl} />
      {/* <Stack.Screen name="Elearning" component={Elearning} /> */}
      <Stack.Screen name="VideoLink" component={VideoLink} />
      <Stack.Screen name="ElearningUI" component={ElearningUI} />
      <Stack.Screen name="ElearningLink" component={ElearningLink} />
      <Stack.Screen name="Dummy" component={Dummy} />

      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="Register" component={Register} />

      <Stack.Screen name="OTP" component={OTP} />
    </>
  );
}
// import MyTabs from "../Screens/BottomTabs";
// import { createStackNavigator } from "@react-navigation/stack";

// const Stack = createStackNavigator();

// export default function MainStack() {
//   return (
//     <Stack.Navigator
//       screenOptions={{ headerShown: null }}
//       initialRouteName="MyTabs"
//     >
//       <Stack.Screen name="MyTabs" component={MyTabs} />
//     </Stack.Navigator>
//   );
// }
