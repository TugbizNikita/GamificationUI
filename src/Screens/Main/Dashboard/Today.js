import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const { height, width } = Dimensions.get("window");

export default function Today() {
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
            marginTop: 4,
            paddingTop: 13,
            borderTopStartRadius: 20,
            borderTopEndRadius: 20,
          }}
        >
          <View
            style={{
              width: "90%",
              height: 290,
              borderWidth: 1,
              borderColor: "#253f67",
              borderRadius: 20,
              elevation: 1,
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <View
              style={{
                height: 40,
                width: width - 150,
                backgroundColor: "#253f67",
                position: "absolute",
                bottom: 270,
                alignSelf: "center",
                borderRadius: 11,
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 16,
                  marginTop: 6,
                  fontFamily: "Helvetica",
                }}
              >
                Business Summary
              </Text>
            </View>

            <View
              style={{
                width: "95%",
                height: "80%",
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
                  width: 57,
                  height: 1,
                  borderBottomWidth: 1.4,
                  borderColor: "#fb5414",
                  marginLeft: 6,
                }}
              ></View>
              <View
                style={{
                  width: "100%",
                  justifyContent: "space-between",
                  marginTop: 6,
                  flexDirection: "row",
                }}
              >
                <Text style={{ fontFamily: "Helvetica" }}>
                  {" "}
                  Total payment received{" "}
                </Text>
                <Text style={{ fontFamily: "Helvetica", textAlign: "right" }}>
                  {" "}
                  Rs. 2000{" "}
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  justifyContent: "space-between",
                  marginTop: 6,
                  flexDirection: "row",
                }}
              >
                <Text style={{ fontFamily: "Helvetica" }}>
                  {" "}
                  Total payment pending{" "}
                </Text>
                <Text style={{ fontFamily: "Helvetica", marginLeft: 0 }}>
                  {" "}
                  Rs. 2000{" "}
                </Text>
              </View>

              <Text
                style={{
                  color: "#fb5414",
                  fontFamily: "Helvetica-Bold",
                  fontSize: 17,

                  marginTop: 25,
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
                  marginLeft: 9,
                }}
              ></View>
              <View
                style={{
                  width: "100%",
                  justifyContent: "space-between",
                  marginTop: 6,
                  flexDirection: "row",
                }}
              >
                <Text style={{ fontFamily: "Helvetica" }}>
                  {" "}
                  Total request received{" "}
                </Text>
                <Text style={{ fontFamily: "Helvetica-Bold", marginLeft: 0 }}>
                  {" "}
                  * *{" "}
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  justifyContent: "space-between",
                  marginTop: 6,
                  flexDirection: "row",
                }}
              >
                <Text style={{ fontFamily: "Helvetica" }}>
                  {" "}
                  Total responses made{" "}
                </Text>
                <Text style={{ fontFamily: "Helvetica-Bold", marginLeft: 10 }}>
                  {" "}
                  * *{" "}
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  justifyContent: "space-between",
                  marginTop: 6,
                  flexDirection: "row",
                }}
              >
                <Text style={{ fontFamily: "Helvetica" }}>
                  {" "}
                  Total orders received{" "}
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
              width: "90%",
              height: 290,
              borderWidth: 1,
              borderColor: "#253f67",
              borderRadius: 20,
              elevation: 1,
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <View
              style={{
                height: 40,
                width: width - 150,
                backgroundColor: "#253f67",
                position: "absolute",
                bottom: 275,
                alignSelf: "center",
                borderRadius: 11,
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 16,
                  marginTop: 6,
                  fontFamily: "Helvetica-Bold",
                }}
              >
                Order Summary
              </Text>
            </View>

            <View
              style={{
                width: "95%",
                height: "80%",
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
                Orders{" "}
              </Text>
              <View
                style={{
                  width: 53,
                  height: 1,
                  borderBottomWidth: 1.4,
                  borderColor: "#fb5414",
                  marginLeft: 6,
                }}
              ></View>
              <View
                style={{
                  width: "100%",
                  justifyContent: "space-between",
                  marginTop: 6,
                  flexDirection: "row",
                }}
              >
                <Text style={{ fontFamily: "Helvetica" }}>
                  {" "}
                  Total orders Received{" "}
                </Text>
                <Text style={{ fontFamily: "Helvetica-Bold", marginLeft: 10 }}>
                  {" "}
                  * *{" "}
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  justifyContent: "space-between",
                  marginTop: 6,
                  flexDirection: "row",
                }}
              >
                <Text style={{ fontFamily: "Helvetica", marginLeft: 5 }}>
                  Orders under packing
                </Text>
                <Text style={{ fontFamily: "Helvetica-Bold", marginLeft: 10 }}>
                  {" "}
                  * *{" "}
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  justifyContent: "space-between",
                  marginTop: 6,
                  flexDirection: "row",
                }}
              >
                <Text style={{ fontFamily: "Helvetica" }}>
                  {" "}
                  Orders out for delivery{" "}
                </Text>
                <Text style={{ fontFamily: "Helvetica-Bold", marginLeft: 10 }}>
                  {" "}
                  * *{" "}
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  justifyContent: "space-between",
                  marginTop: 6,
                  flexDirection: "row",
                }}
              >
                <Text style={{ fontFamily: "Helvetica", marginLeft: 5 }}>
                  Orders delivered
                </Text>
                <Text style={{ fontFamily: "Helvetica-Bold", marginLeft: 10 }}>
                  {" "}
                  * *{" "}
                </Text>
              </View>

              <Text
                style={{
                  color: "#fb5414",
                  fontFamily: "Helvetica-Bold",
                  fontSize: 17,

                  marginTop: 20,
                }}
              >
                {" "}
                Payment{" "}
              </Text>
              <View
                style={{
                  width: 68,
                  height: 1,
                  borderBottomWidth: 1.4,
                  borderColor: "#fb5414",
                  marginLeft: 7,
                }}
              ></View>
              <View
                style={{
                  width: "100%",
                  justifyContent: "space-between",
                  marginTop: 6,
                  flexDirection: "row",
                }}
              >
                <Text style={{ fontFamily: "Helvetica" }}>
                  {" "}
                  Orders - payment pending{" "}
                </Text>
                <Text style={{ fontFamily: "Helvetica-Bold", marginLeft: 10 }}>
                  {" "}
                  * *{" "}
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  justifyContent: "space-between",
                  marginTop: 6,
                  flexDirection: "row",
                }}
              >
                <Text style={{ fontFamily: "Helvetica" }}>
                  {" "}
                  Orders - payment received{" "}
                </Text>
                <Text style={{ fontFamily: "Helvetica-Bold", marginLeft: 0 }}>
                  {" "}
                  * *{" "}
                </Text>
              </View>
            </View>
          </View>
          <View style={{ height: 30, width: width }}></View>
        </View>
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
