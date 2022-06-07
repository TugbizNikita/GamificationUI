import { createStackNavigator } from "@react-navigation/stack";
import DashBoardHeader from "../Screens/Main/Dashboard/DashBoardHeader";
import BlogLink from "../Screens/Discover/BlogLink";
import VideoLink from "../Screens/Discover/VideoLink";
import All from "../Screens/Discover/All";
import Blog from "../Screens/Discover/Blog";
import AllTab from "../Screens/Discover/AllTab";

const Stack = createStackNavigator();

export default function AppPageStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="DashBoardHeader"
      screenOptions={{ headerShown: null }}
    >
      <Stack.Screen name="DashBoardHeader" component={DashBoardHeader} />
      <Stack.Screen name="BlogLink" component={BlogLink} />
      <Stack.Screen name="VideoLink" component={VideoLink} />
      <Stack.Screen name="All" component={All} />
      <Stack.Screen name="Blog" component={Blog} />
      <Stack.Screen name="AllTab" component={AllTab} />
    </Stack.Navigator>
  );
}
