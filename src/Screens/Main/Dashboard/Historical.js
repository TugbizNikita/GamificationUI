import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const { height, width } = Dimensions.get("window");

export default function Historical() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");

  const [show, setShow] = useState(false);
  const [text, setText] = useState("Select Date");

  const onChange = (event, selectDate) => {
    const currentDate = selectDate || date;
    setShow(Platform.os === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();

    setText(fDate);

    console.log(fDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const [date1, setDate1] = useState(new Date());
  const [mode1, setMode1] = useState("date1");

  const [show1, setShow1] = useState(false);
  const [text1, setText1] = useState("Select Date");

  const onChange1 = (event, selectDate1) => {
    const currentDate1 = selectDate1 || date1;
    setShow1(Platform.os === "ios");
    setDate1(currentDate1);

    let tempDate1 = new Date(currentDate1);
    let fDate1 =
      tempDate1.getDate() +
      "/" +
      (tempDate1.getMonth() + 1) +
      "/" +
      tempDate1.getFullYear();

    setText1(fDate1);

    console.log(fDate1);
  };

  const showMode1 = (currentMode1) => {
    setShow1(true);
    setMode1(currentMode1);
  };

  return (
    <View style={styles.Container}>
      <ScrollView
        style={{
          width: "100%",
        }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            paddingTop: 15,
            borderTopStartRadius: 20,
            borderTopEndRadius: 20,
            flex: 1,
            height: "100%",
          }}
        >
          <View
            style={{
              width: "95%",
              // height: 290,
              backgroundColor: "white",
              alignItems: "flex-start",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                height: 30,
                width: "95%",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#253f67",
                  lineHeight: 25,
                  fontSize: 19,
                  fontFamily: "Helvetica-Bold",
                  marginTop: 7,
                }}
              >
                {" "}
                From Date{" "}
              </Text>
              <TouchableOpacity
                onPress={() => showMode("date")}
                style={{ marginLeft: 31 }}
              >
                <Image
                  source={require("../../../../assets/Images/Calender.png")}
                  style={{ height: 28, width: 28 }}
                />
              </TouchableOpacity>
              <View
                style={{
                  height: 36,
                  width: "40%",
                  borderRadius: 16,
                  backgroundColor: "white",
                  elevation: 1,
                  borderWidth: 1.5,
                  borderColor: "#C1C0D3",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity onPress={() => showMode("date")}>
                  <Text style={{ fontFamily: "Helvetica-Bold" }}>{text}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                height: 30,
                width: "95%",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  color: "#253f67",
                  lineHeight: 25,
                  fontSize: 19,
                  fontFamily: "Helvetica-Bold",
                  marginTop: 7,
                }}
              >
                {" "}
                To Date{" "}
              </Text>
              <TouchableOpacity
                onPress={() => showMode1("date1")}
                style={{ marginLeft: 57 }}
              >
                <Image
                  source={require("../../../../assets/Images/Calender.png")}
                  style={{ height: 28, width: 28 }}
                />
              </TouchableOpacity>
              <View
                style={{
                  height: 36,
                  width: "40%",
                  borderRadius: 16,
                  backgroundColor: "white",
                  elevation: 1,
                  borderWidth: 1.5,
                  borderColor: "#C1C0D3",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity onPress={() => showMode1("date1")}>
                  <Text style={{ fontFamily: "Helvetica-Bold" }}>{text1}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={{
              height: 40,
              width: width - 190,
              backgroundColor: "#fb5414",
              borderRadius: 39,
              justifyContent: "center",
              marginTop: 15,
            }}
          >
            <Text
              style={{
                color: "white",
                fontFamily: "Helvetica-Bold",
                textAlign: "center",
                fontSize: 17,
              }}
            >
              Generate Report
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: width,
              paddingRight: 18,
              alignItems: "flex-end",
              height: 20,
              flexDirection: "row",
              justifyContent: "flex-end",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                color: "#253f67",
                lineHeight: 20,
                fontSize: 12,
                fontFamily: "Helvetica-Bold",
              }}
            >
              Cumulative
            </Text>
            <Text
              style={{
                color: "#253f67",
                lineHeight: 20,
                fontSize: 12,
                fontFamily: "Helvetica-Bold",
                marginLeft: 30,
              }}
            >
              Average
            </Text>
          </View>
          <View
            style={{
              width: "90%",
              // height: "80%",
            }}
          >
            <Text
              style={{
                color: "#fb5414",
                fontFamily: "Helvetica-Bold",
                fontSize: 17,
              }}
            >
              {" "}
              Income{" "}
            </Text>
            <View
              style={{
                width: 56,
                height: 1,
                borderBottomWidth: 1.4,
                borderColor: "#fb5414",
                marginLeft: 6,
              }}
            ></View>
            <View
              style={{
                width: "100%",
                justifyContent: "space-around",
                marginTop: 6,
                flexDirection: "row",
              }}
            >
              <Text style={{ fontFamily: "Helvetica" }}>
                {" "}
                Total payment received{" "}
              </Text>
              <Text style={{ fontFamily: "Helvetica", marginLeft: 20 }}>
                {" "}
                Rs. 2000{" "}
              </Text>
              <Text style={{ fontFamily: "Helvetica", marginLeft: 20 }}>
                {" "}
                Rs. 2000{" "}
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                justifyContent: "space-around",
                marginTop: 6,
                flexDirection: "row",
              }}
            >
              <Text style={{ fontFamily: "Helvetica" }}>
                {" "}
                Total payment pending{" "}
              </Text>
              <Text style={{ fontFamily: "Helvetica", marginLeft: 20 }}>
                {" "}
                Rs. 2000{" "}
              </Text>
              <Text style={{ fontFamily: "Helvetica", marginLeft: 20 }}>
                {" "}
                Rs. 2000{" "}
              </Text>
            </View>

            <Text
              style={{
                color: "#fb5414",
                fontFamily: "Helvetica-Bold",
                fontSize: 17,

                marginTop: 10,
              }}
            >
              {" "}
              Opportunity{" "}
            </Text>
            <View
              style={{
                width: 92,
                height: 1,
                borderBottomWidth: 1.4,
                borderColor: "#fb5414",
                marginLeft: 8,
              }}
            ></View>
            <View
              style={{
                width: "100%",
                marginTop: 6,
                flexDirection: "row",
              }}
            >
              <View style={{ width: "53%" }}>
                <Text style={{ fontFamily: "Helvetica" }}>
                  {" "}
                  Total RFQs Received{" "}
                </Text>
                <Text style={{ fontFamily: "Helvetica" }}>
                  {" "}
                  Total responses made{" "}
                </Text>
                <Text style={{ fontFamily: "Helvetica" }}>
                  {" "}
                  Total orders received{" "}
                </Text>
              </View>
              <View style={{ width: "26%" }}>
                <Text style={{ fontFamily: "Helvetica-Bold", marginLeft: 10 }}>
                  {" "}
                  * *{" "}
                </Text>
                <Text style={{ fontFamily: "Helvetica-Bold", marginLeft: 10 }}>
                  {" "}
                  * *{" "}
                </Text>
                <Text style={{ fontFamily: "Helvetica-Bold", marginLeft: 10 }}>
                  {" "}
                  * *{" "}
                </Text>
              </View>
              <View style={{ width: "20%" }}>
                <Text style={{ fontFamily: "Helvetica-Bold", marginLeft: 10 }}>
                  {" "}
                  * *{" "}
                </Text>
                <Text style={{ fontFamily: "Helvetica-Bold", marginLeft: 10 }}>
                  {" "}
                  * *{" "}
                </Text>
                <Text style={{ fontFamily: "Helvetica-Bold", marginLeft: 10 }}>
                  {" "}
                  * *{" "}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              height: 1,
              width: width,
              borderWidth: 1,
              borderColor: "#253f67",
              marginTop: 20,
            }}
          ></View>
          <View style={{ width: "90%", backgroundColor: "#FFFF" }}>
            <Text
              style={{
                color: "#fb5414",
                fontFamily: "Helvetica-Bold",
                fontSize: 17,

                marginTop: 10,
              }}
            >
              {" "}
              orders{" "}
            </Text>
            <View
              style={{
                width: 52,
                height: 1,
                borderBottomWidth: 1.4,
                borderColor: "#fb5414",
                marginLeft: 6,
              }}
            ></View>
            <View
              style={{
                width: "100%",
                marginTop: 6,
                flexDirection: "row",
              }}
            >
              <View style={{ width: "53%" }}>
                <Text style={{ fontFamily: "Helvetica" }}>
                  {" "}
                  Total Orders Received{" "}
                </Text>
                <Text style={{ fontFamily: "Helvetica" }}>
                  {" "}
                  Orders under packing{" "}
                </Text>
                <Text style={{ fontFamily: "Helvetica" }}>
                  {" "}
                  Orders out for delivery{" "}
                </Text>
                <Text style={{ fontFamily: "Helvetica" }}>
                  {" "}
                  Orders delivered{" "}
                </Text>
              </View>
              <View style={{ width: "26%" }}>
                <Text style={{ fontFamily: "Helvetica-Bold", marginLeft: 10 }}>
                  {" "}
                  * *{" "}
                </Text>
                <Text style={{ fontFamily: "Helvetica-Bold", marginLeft: 10 }}>
                  {" "}
                  * *{" "}
                </Text>
                <Text style={{ fontFamily: "Helvetica-Bold", marginLeft: 10 }}>
                  {" "}
                  * *{" "}
                </Text>
                <Text style={{ fontFamily: "Helvetica-Bold", marginLeft: 10 }}>
                  {" "}
                  * *{" "}
                </Text>
              </View>
              <View style={{ width: "20%" }}>
                <Text style={{ fontFamily: "Helvetica-Bold", marginLeft: 10 }}>
                  {" "}
                  * *{" "}
                </Text>
                <Text style={{ fontFamily: "Helvetica-Bold", marginLeft: 10 }}>
                  {" "}
                  * *{" "}
                </Text>
                <Text style={{ fontFamily: "Helvetica-Bold", marginLeft: 10 }}>
                  {" "}
                  * *{" "}
                </Text>
                <Text style={{ fontFamily: "Helvetica-Bold", marginLeft: 10 }}>
                  {" "}
                  * *{" "}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{ width: width, height: 20, backgroundColor: "white" }}
        ></View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        {show1 && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date1}
            mode={mode1}
            is24Hour={true}
            display="default"
            onChange={onChange1}
          />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: height,
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#253f67",
  },
});
