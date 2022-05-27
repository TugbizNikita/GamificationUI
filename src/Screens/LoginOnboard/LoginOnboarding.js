import { StatusBar } from "expo-status-bar";
import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Animated,
  FlatList,
  Dimensions,
  ImageBackground,
} from "react-native";
import LoginOnboardingItems from "./LoginOnboardingItems";
import LoginPaginator from "./LoginPaginator";
import LoginSlides from "./LoginSlides";
export default function LoginOnboarding() {
  const { height, width } = Dimensions.get("window");

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;

  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <SafeAreaView style={{ backgroundColor: "#0084D6", flex: 1 }}>
      <View
        style={{
          justifyContent: "flex-start",
          paddingTop: 20,
          // top: 150,
          backgroundColor: "#0084D6",
        }}
      >
        {/* <ImageBackground
          style={{ height: height, width: "100%", position: "absolute" }}
          source={require("../../../assets/Images/bg8.jpg")}
          blurRadius={30}
        /> */}
        <FlatList
          data={LoginSlides}
          renderItem={({ item }) => <LoginOnboardingItems item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <View style={{ width: width, alignItems: "center", bottom: 30 }}>
        <LoginPaginator data={LoginSlides} scrollX={scrollX} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#45c5d6",
    alignItems: "center",
    justifyContent: "center",
  },
});
