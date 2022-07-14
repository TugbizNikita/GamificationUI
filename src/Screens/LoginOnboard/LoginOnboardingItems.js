import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  useWindowDimensions,
  SafeAreaView,
} from "react-native";

const { height, width } = Dimensions.get("window");
export default function LoginOnboardingItems({ item }) {
  // const { width } = useWindowDimensions();

  return (
    <SafeAreaView style={[styles.container, { width }]}>
      <View style={{ width: "100%", alignItems: "center", paddingTop: 5 }}>
        <Image source={item.image} style={styles.image} />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 0,
  },
  image: {
    height: 200,
    width: width - 30,
    borderRadius: 20,
    resizeMode: "contain",
  },
});
