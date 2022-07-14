import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import Fontisto from "react-native-vector-icons/Fontisto";
import YoutubePlayer from "react-native-youtube-iframe";
export default function DailyQ() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        // marginLeft: 11,
        bottom: 22,

        backgroundColor: "white",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          top: 30,
          flexDirection: "row",
          // justifyContent: "center",
          // justifyContent: "space-between",
          padding: 10,
        }}
      >
        <View
          style={{
            height: 40,
            width: 40,
            backgroundColor: "#FBEE24",
            borderRadius: 40,
            borderWidth: 0,
            elevation: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Q</Text>
          {/* <Fontisto
            name="blogger"
            size={30}
            style={{
              justifyContent: "center",
              alignItems: "center",

              
            }}
          /> */}
        </View>
        <Text style={{ left: 15, top: 10, fontSize: 15 }}>DailyQ</Text>
        <Text style={{ left: 200, top: 10, fontSize: 15 }}>Today</Text>
      </View>
      <View
        style={{
          height: "70%",
          width: "100%",
        }}
      >
        <>
          <Video
            ref={video}
            style={styles.video}
            source={{
              uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            }}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
          <View style={styles.buttons}></View>
        </>
      </View>
      <View
        style={{
          height: "30%",
          width: "100%",
          backgroundColor: "#0084D6",
          borderBottomEndRadius: 20,
          borderBottomStartRadius: 20,
          padding: 10,
        }}
      >
        <Text
          style={{ top: 5, textAlign: "center", color: "white", fontSize: 16 }}
        >
          Tap to watch Deepak's incredible story of recovery and his journey to
          fitness!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  video: {
    alignSelf: "center",
    width: "100%",
    // top: 10,
    height: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
