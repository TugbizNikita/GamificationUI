import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Animated,
  useWindowDimensions,
  View,
  Text,
} from "react-native";

export default function Paginator({ data, scrollX }) {
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView style={{ flexDirection: "row", height: 0 }}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 3, 0.3],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            style={[styles.dot, { width: dotWidth, opacity }]}
            key={i.toString()}
          />
        );
      })}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  dot: {
    height: 12,
    borderRadius: 5,
    backgroundColor: "white",
    marginHorizontal: 5,
  },
});
