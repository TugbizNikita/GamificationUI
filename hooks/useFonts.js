import * as Font from "expo-font";
import { Prompt_700Bold, Prompt_100Thin, Prompt_600SemiBold } from "@expo-google-fonts/prompt";
import {Padauk_400Regular, Padauk_700Bold} from "@expo-google-fonts/padauk";

const useFonts = async () => {
  await Font.loadAsync({
    Prompt_Bold: Prompt_700Bold,
    Prompt_SemiBold: Prompt_600SemiBold,
    Padauk_Regular: Padauk_400Regular,
    Padauk_Bold: Padauk_700Bold,
  });
};

export default useFonts;
