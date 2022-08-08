import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  BackHandler,
} from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import { useFocusEffect } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";

export default function ELearningUI({ navigation }) {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate("DashBoard");
        // Return true to stop default back navigaton
        // Return false to keep default back navigaton
        return true;
      };

      // Add Event Listener for hardwareBackPress
      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () => {
        // Once the Screen gets blur Remove Event Listener
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
      };
    }, [])
  );

  const authToken = useSelector((state) => state.Reducers.authToken);
  const userNamee = useSelector((state) => state.Reducers.userName);
  console.log("authToken=====>", authToken);

  const [studyMaterial, setStudyMaterial] = useState([]);
  const dashboardData = `http://3.215.18.129/getStudyMaterial/?login-Id=${userNamee}`;

  useEffect(() => {
    fetch(dashboardData)
      .then((response) => response.json())
      .then((json) => {
        setStudyMaterial(json.studyMaterial);
        console.log("studyMaterial", json.studyMaterial);
      })

      .catch((error) => alert(error));
  }, []);

  const Item = ({ item }) => {
    let CourseID = item.recordedlink;

    return (
      <LinearGradient
        style={{
          // height: 200,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",

          borderRadius: 20,

          padding: 20,
          elevation: 4,
          // backgroundColor: "white",
          borderWidth: 0.5,
          borderColor: "#D6DBDF",
          // margin: 10,
          marginVertical: 10,
          // marginLeft: 20,
        }}
        colors={["white", "#66ffff"]}
      >
        <LinearGradient
          style={{
            borderWidth: 1,
            width: 60,
            height: 60,
            position: "absolute",

            borderTopLeftRadius: 20,
            borderBottomRightRadius: 20,

            borderColor: "pink",

            top: 0,
            left: 0,
          }}
          colors={["#5899E2", "#FFFFFF"]}
        ></LinearGradient>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",

            // padding: 10,
            marginVertical: 10,
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 13,

              top: 10,
              fontWeight: "bold",
              marginVertical: 20,
            }}
          >
            {item.name.split(" ")[0]}
          </Text>
          <Text
            style={{
              textAlign: "left",
              fontSize: 20,
              color: "#0084D6",
              fontWeight: "bold",
              marginVertical: 10,
            }}
          >
            {item.name.split(" ")[1]} {item.name.split(" ")[2]}
          </Text>
        </View>

        <LinearGradient
          style={{
            width: "70%",
            justifyContent: "center",

            borderRadius: 20,
          }}
          colors={["#5899E2", "#29E7CD"]}
        >
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ELearningLink", {
                paramKey: CourseID,
              })
            }
            style={{
              height: 50,

              padding: 10,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontSize: 25,
                fontWeight: "bold",
                bottom: 5,
              }}
            >
              Start
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </LinearGradient>
    );
  };

  const StudyMaterial = studyMaterial.reverse();
  console.log("StudyMaterial===========>", StudyMaterial);

  return (
    <LinearGradient
      style={{
        backgroundColor: "white",
        flex: 1,
        width: "100%",
      }}
      colors={["#5899E2", "#FFFFFF"]}
    >
      <View
        style={{
          // height: 65,
          flex: 0.1,
          width: "100%",
          backgroundColor: "#0084D6",
          // top: 30,
          borderBottomStartRadius: 40,

          padding: 10,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            left: 10,

            justifyContent: "center",

            color: "white",
            fontWeight: "bold",
          }}
        >
          E-Learning
        </Text>
      </View>
      <View
        style={{
          // bottom: 60,
          flex: 0.9,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
          style={{}}
        >
          <FlatList
            data={StudyMaterial}
            renderItem={Item}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
      </View>
    </LinearGradient>
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
