import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/Navigations/AuthStack";
import DashBoardHeader from "./src/Screens/Main/DashBoardHeader";
import { BackHandler, Alert } from "react-native";
import { useBackHandler } from "@react-native-community/hooks";
import Store from "./src/redux/Store";
import { Provider } from "react-redux";
import Route from "./src/Navigations/Route";
import * as SecureStore from "expo-secure-store";
import AuthContext, { AuthContextProvider } from "./src/store/auth_store";

// import AuthContext from "./src/redux/authStore";

export default function App() {
  // const authCtx = useContext(AuthContext);
  // function backActionHandler() {
  //   Alert.alert("", "Are you sure to exit the App?", [
  //     {
  //       text: "No",
  //       onPress: () => null,
  //       style: "cancel",
  //     },
  //     {
  //       text: "Yes",
  //       onPress: () => BackHandler.exitApp(),
  //     },
  //   ]);
  //   return true;
  // }
  // useBackHandler(backActionHandler);

  const authCtx = useContext(AuthContext);

  return (
    // <>
    //   <DashBoardHeader />
    // </>

    <AuthContextProvider>
      <Route />
    </AuthContextProvider>
  );
}

// import React from "react";
// import { StyleSheet, Alert } from "react-native";
// import Login from "./src/Screens/Login/Login";
// // import Verify from "./src/Screens/Auth/Verify";
// // import HeaderTabs from "./src/Screens/Details/HeaderTabs";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// // import KYC from "./src/Screens/Details/KYC";
// // import SetupPayment from "./src/Screens/Details/SetupPayment";
// // import Register from "./src/Screens/Register/Register";
// // import VerifyLogin from "./src/Screens/Auth/VerifyLogin";
// // import Confirm from "./src/Screens/Details/Confirm";
// // import FlashMessage from "react-native-flash-message";

// // const Stack = createStackNavigator();

// // function MyStack() {
// //   return (
// //     <Stack.Navigator
// //       initialRouteName="Login"
// //       screenOptions={{ headerShown: null }}
// //     >
// //       <Stack.Screen name="Login" component={Login} />
// //       {/* <Stack.Screen name="Verify" component={Verify} /> */}
// //       {/* <Stack.Screen name="VerifyLogin" component={VerifyLogin} /> */}
// //       <Stack.Screen name="HeaderTabs" component={HeaderTabs} />
// //       <Stack.Screen name="KYC" component={KYC} />
// //       <Stack.Screen name="SetupPayment" component={SetupPayment} />
// //       <Stack.Screen name="Register" component={Register} />
// //       <Stack.Screen name="MyTabs" component={MyTabs} />
// //       {/* <Stack.Screen name="Confirm" component={Confirm} /> */}
// //     </Stack.Navigator>
// //   );
// // }

// import { useFonts } from "@use-expo/font";
// import AppLoading from "expo-app-loading";
// import MyTabs from "./src/Screens/Main/BottomTabs";
// import { Provider } from "react-redux";
// import store from "./src/redux/Store";
// import Routes from "./src/Navigations/Routes";

// import DashBoardHeader from "./src/Screens/Main/Dashboard/DashBoardHeader";
// export default function App() {
//   return (
//     // <NavigationContainer>
//     //   <DashBoardHeader />
//     // </NavigationContainer>
//     <Provider store={store}>
//       <Routes />
//     </Provider>
//   );
// }
// //   let [fontsLoaded] = useFonts({
// //     "Helvetica-Bold": require("./assets/Fonts/Helvetica-Bold.ttf"),
// //     "Helvetica-Oblique": require("./assets/Fonts/Helvetica-Oblique.ttf"),
// //     "Helvetica-BoldOblique": require("./assets/Fonts/Helvetica-BoldOblique.ttf"),
// //     Helvetica: require("./assets/Fonts/Helvetica.ttf"),
// //   });
// //   if (!fontsLoaded) {
// //     return <AppLoading />;
// //   }
// //   return (
// //     <NavigationContainer>
// //       <MyStack />
// //       <FlashMessage position="top" />
// //     </NavigationContainer>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#fff",
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },
// // });
