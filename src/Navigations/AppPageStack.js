import { createStackNavigator } from "@react-navigation/stack";
import DashBoardHeader from "../Screens/Main/Dashboard/DashBoardHeader";
import BlogLink from "../Screens/Discover/BlogLink";
import VideoLink from "../Screens/Discover/VideoLink";
import All from "../Screens/Discover/All";
import Blog from "../Screens/Discover/Blog";
import AllTab from "../Screens/Discover/AllTab";
import { useEffect, useRef } from "react";
import { BackHandler } from "react-native";
// import HacksLink from "../Screens/Discover/HacksLink";
const Stack = createStackNavigator();

export default function AppPageStack({ props }) {
  // const navigationRef = useRef(null);

  // //

  // useEffect(() => {
  //   // this function gets called when user clicks on device back
  //   const backAction = () => {
  //     console.log("Back Button pressed:***********");
  //     // const navigationState = navigationRef.current?.getCurrentRoute();
  //     const currentRouteName = navigationRef.current.getCurrentRoute().name;
  //     // const currentRouteName = navigationState?.routes[navigationState?.index]?.name;
  //     // console.log("CurrentRouteName:", currentRouteName, navigationState);
  //     if (currentRouteName === "DashBoardHeader") {
  //       Alert.alert("Hold on!", "Are you sure you want to exit from App?", [
  //         {
  //           text: "Cancel",
  //           onPress: () => null,
  //           style: "cancel",
  //         },
  //         { text: "YES", onPress: () => BackHandler.exitApp() },
  //       ]);
  //     } else {
  //       navigationRef?.current?.goBack();
  //     }
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     backAction
  //   );

  //   return () => backHandler.remove();
  // }, []);

  return (
    <Stack.Navigator
      backBehaviour="initialRoute"
      initialRouteName="DashBoardHeader"
      screenOptions={{ headerShown: null }}
    >
      <Stack.Screen name="DashBoardHeader" component={DashBoardHeader} />
      <Stack.Screen name="BlogLink" component={BlogLink} />
      <Stack.Screen name="VideoLink" component={VideoLink} />
      <Stack.Screen name="All" component={All} />
      <Stack.Screen name="Blog" component={Blog} />
      <Stack.Screen name="AllTab" component={AllTab} />
      {/* <Stack.Screen name="HacksLink" component={HacksLink} /> */}
    </Stack.Navigator>
  );
}
