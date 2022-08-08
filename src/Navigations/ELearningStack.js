import MyTabs from "../Screens/BottomTabs";
import { createStackNavigator } from "@react-navigation/stack";
import { ELearningUI, ELearningLink } from "../Utils";

const Stack = createStackNavigator();

export default function ELearningStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: null }}
      initialRouteName="ELearningUI"
    >
      <Stack.Screen name="ELearningUI" component={ELearningUI} />
      <Stack.Screen name="ELearningLink" component={ELearningLink} />
    </Stack.Navigator>
  );
}
