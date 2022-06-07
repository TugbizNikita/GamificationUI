import { DashBoardHeader } from "../";
import AppPageStack from "./AppPageStack";

export default function (Stack) {
  return (
    <>
      <Stack.Screen name="DashBoardHeader" component={DashBoardHeader} />
      <Stack.Screen name="AppPageStack" component={AppPageStack} />
    </>
  );
}
