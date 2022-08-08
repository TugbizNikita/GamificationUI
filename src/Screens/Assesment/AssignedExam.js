import React, { useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";

import {
  View,
  BackHandler,
  ScrollView,
  Text,
  FlatList,
  Modal,
  StyleSheet,
  alert,
  TouchableOpacity,
} from "react-native";

import Toast from "react-native-tiny-toast";
import { useSelector, useDispatch } from "react-redux";

export default function AssignedExam({ navigation }) {
  const [assigned_exam_data, setAssigned_exam_data] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const authToken = useSelector((state) => state.Reducers.authToken);
  const userNamee = useSelector((state) => state.Reducers.userName);
  console.log("authToken=====>", authToken);
  console.log("userNameasssign=====0000>", userNamee);
  const Exam = `http://3.215.18.129/getAssessmentData/?login-Id=${userNamee}`;

  const ExamData = () => {
    fetch(Exam)
      .then((response) => response.json())

      .then((json) => {
        setAssigned_exam_data(json.assigned_exam_data);
        console.log("assigned_exam_data", json.assigned_exam_data);
      })

      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    ExamData();
  }, []);

  // let assdata = assigned_exam_data;

  //

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate("DashBoard");

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

  const Item = ({ item }) => {
    const FinalExamUrl = item.finalExamUrl;
    console.log("finalExamUrl", FinalExamUrl);
    const typedata = item.type;
    console.log("type of data===>", typedata);
    return (
      <View
        style={{
          backgroundColor: "white",
          // marginVertical: 5,
          top: 0,
          // bottom: 10,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "white",
            width: "90%",
            padding: 10,
          }}
        >
          <View
            style={{
              alignItems: "center",
              backgroundColor: "white",
              width: "70%",
              backgroundColor: "white",
            }}
          >
            <Text style={{ fontSize: 13 }}>{item.externalExamName}</Text>
          </View>

          {typedata !== "programming" ? (
            <View
              style={{
                width: "20%",
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("FinalExamUrl", {
                    paramKey: FinalExamUrl,
                  })
                }
                style={{
                  height: 50,
                  width: 100,
                  borderWidth: 1,
                  borderRadius: 40,
                  backgroundColor: "#0084D6",
                  justifyContent: "center",
                  borderColor: "gray",
                  elevation: 1,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Start Exam
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View
              style={{
                width: "20%",
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={{
                  height: 50,
                  width: 100,
                  borderWidth: 1,
                  borderRadius: 40,
                  backgroundColor: "#0084D6",
                  justifyContent: "center",
                  borderColor: "gray",
                  elevation: 1,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Start Exam
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          justifyContent: "space-between",
          // top: 20,
          backgroundColor: "white",
        }}
      >
        <FlatList
          data={assigned_exam_data}
          renderItem={Item}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Modal
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={{ backgroundColor: "rgba(0,0,0,0.5)", flex: 1 }}>
            <View style={styles.modalView}>
              <Text style={{ fontSize: 16, lineHeight: 20 }}>
                You cannot take this test on your mobile phone. You will have to
                use a laptop to take it
              </Text>
              <View style={{ alignItems: "flex-end", top: 50 }}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      color: "#0084D6",
                    }}
                  >
                    OK
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    height: "30%",
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    // justifyContent: "center",
    // alignItems: "center",
    alignContent: "center",
    top: 220,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
