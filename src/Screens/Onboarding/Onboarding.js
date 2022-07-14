import { StatusBar } from "expo-status-bar";
import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  math,
  SafeAreaView,
  Animated,
  FlatList,
  Dimensions,
  ImageBackground,
} from "react-native";
import Slides from "./Slides";
import OnboardingItems from "./OnboardingItems";
import Paginator from "./Paginator";
import { TouchableOpacity } from "react-native-gesture-handler";
import Login from "../Login/Login";
export default function Onboarding({ navigation }) {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

  const ref = React.useRef(null);
  const { height, width } = Dimensions.get("window");

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;

  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != Slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "red" }}>
      <View
        style={{
          height: height,
          justifyContent: "flex-start",
        }}
      >
        <ImageBackground
          style={{ height: height, width: "100%", position: "absolute" }}
          source={require("../../../assets/Images/bg8.jpg")}
          blurRadius={30}
        />
        <FlatList
          onMomentumScrollEnd={updateCurrentSlideIndex}
          data={Slides}
          renderItem={({ item }) => <OnboardingItems item={item} />}
          horizontal
          showsHorizontalScrollIndicator
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
          ref={ref}
        />
      </View>
      <View>
        {currentSlideIndex == Slides.length - 1 ? (
          <View
            style={{
              width: width,
              alignItems: "center",
              height: 50,
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "space-around",
              position: "absolute",
              bottom: 12,
            }}
          >
            <TouchableOpacity
              style={{ marginLeft: width - 100 }}
              onPress={() => navigation.navigate("Login")}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  color: "white",
                }}
              >
                Done
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={{
              width: width,
              alignItems: "center",
              height: 50,
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "space-around",
              position: "absolute",
              bottom: 12,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  textTransform: "uppercase",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Skip
              </Text>
            </TouchableOpacity>
            <Paginator data={Slides} scrollX={scrollX} />
            <TouchableOpacity onPress={goNextSlide}>
              <Text
                style={{
                  textTransform: "uppercase",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Next
              </Text>
            </TouchableOpacity>
          </View>
        )}
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
