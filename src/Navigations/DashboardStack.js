import MyTabs from "../Screens/BottomTabs";
import { createStackNavigator } from "@react-navigation/stack";
import { DashBoard, FinalExamUrl, AssignedExam, CompletedExam } from "../Utils";
import TopTab from "./TopTab";
// import TypeData from "../Screens/Assesment/TypeData";

const Stack = createStackNavigator();

export default function DashBoardStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: null }}
      initialRouteName="DashBoard"
    >
      <Stack.Screen name="DashBoard" component={DashBoard} />
      <Stack.Screen name="TopTab" component={TopTab} />
      <Stack.Screen name="AssignedExam" component={AssignedExam} />
      <Stack.Screen name="FinalExamUrl" component={FinalExamUrl} />
      {/* <Stack.Screen name="TypeData" component={TypeData} /> */}
    </Stack.Navigator>
  );
}
