import { createStackNavigator } from "@react-navigation/stack";
import DashBoardHeader from "../Screens/Main/DashBoardHeader";
import BlogLink from "../Screens/Discover/BlogLink";
import VideoLink from "../Screens/Discover/VideoLink";
import All from "../Screens/Discover/All";
import Elearning from "../Screens/Discover/Elearning";
import AllTab from "../Screens/Discover/AllTab";
import { useEffect, useRef } from "react";
import { BackHandler } from "react-native";
import StudioLink from "../Screens/Main/Dashboard/Studio/StudioLink";
// import HacksLink from "../Screens/Discover/HacksLink";
const Stack = createStackNavigator();

export default function AppPageStack({ props }) {
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
      <Stack.Screen name="Blog" component={Elearning} />
      <Stack.Screen name="AllTab" component={AllTab} />
      <Stack.Screen name="StudioLink" component={StudioLink} />

      {/* <Stack.Screen name="HacksLink" component={HacksLink} /> */}
    </Stack.Navigator>
  );
}
