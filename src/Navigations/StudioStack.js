import { createStackNavigator } from "@react-navigation/stack";

import { useEffect, useRef } from "react";
import { BackHandler } from "react-native";
import StudioLink from "../Screens/Main/Dashboard/Studio/StudioLink";
// import HacksLink from "../Screens/Discover/HacksLink";
import Studio from "../Screens/Main/Dashboard/Studio/Studio";
const Stack = createStackNavigator();

export default function StudioStack({ props }) {
  return (
    <Stack.Navigator
      backBehaviour="initialRoute"
      initialRouteName="Studio"
      screenOptions={{ headerShown: null }}
    >
      <Stack.Screen name="Studio" component={Studio} />
      {/* <Stack.Screen name="BlogLink" component={BlogLink} />
      <Stack.Screen name="VideoLink" component={VideoLink} />
      <Stack.Screen name="All" component={All} />
      <Stack.Screen name="Blog" component={Blog} />
      <Stack.Screen name="AllTab" component={AllTab} /> */}
      <Stack.Screen name="StudioLink" component={StudioLink} />

      {/* <Stack.Screen name="HacksLink" component={HacksLink} /> */}
    </Stack.Navigator>
  );
}
