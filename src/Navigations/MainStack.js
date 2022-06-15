import MyTabs from "../Screens/Main/BottomTabs";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: null }}
      initialRouteName="MyTabs"
    >
      <Stack.Screen name="MyTabs" component={MyTabs} />
    </Stack.Navigator>
  );
}
