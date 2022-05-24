import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";

const { height, width } = Dimensions.get("window");

export default function NewRequest() {
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
            paddingTop: 15,
            borderTopStartRadius: 20,
            borderTopEndRadius: 20,
            // borderBottomWidth: 2,
            borderBottomColor: "#253f67",
            paddingBottom: 20,
          }}
        >
          <View
            style={{
              height: 100,
              width: "92%",
              borderRadius: 22,
              backgroundColor: "white",
              elevation: 1,
              borderWidth: 1.5,
              borderColor: "#C1C0D3",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              padding: 7,
            }}
          >
            <View
              style={{ height: "100%", width: "40%", justifyContent: "center" }}
            >
              <Text
                style={{
                  color: "#253f67",
                  lineHeight: 38,
                  fontSize: 19,
                  fontFamily: "Helvetica-Bold",
                }}
              >
                {" "}
                Rakesh s{" "}
              </Text>

              <View
                style={{
                  // height: 50,
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  // justifyContent: "center",
                  // backgroundColor: "red",
                }}
              >
                <Text
                  style={{
                    color: "#253f67",
                    lineHeight: 30,
                    fontSize: 16,
                    fontFamily: "Helvetica-Bold",
                  }}
                >
                  {" "}
                  Contact :{" "}
                </Text>
                <TouchableOpacity
                  style={{
                    height: 30,
                    backgroundColor: "#253f67",
                    width: 30,
                    borderRadius: 70,
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={require("../../../../assets/Images/Wcontact.png")}
                    style={{
                      height: 25,
                      width: 25,
                      alignSelf: "center",
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                height: "100%",
                width: "25%",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "#253f67",
                  lineHeight: 30,
                  fontSize: 17,
                  fontFamily: "Helvetica-Bold",
                }}
              >
                {" "}
                Pune{" "}
              </Text>
              <Text
                style={{
                  color: "#253f67",
                  lineHeight: 30,
                  fontSize: 16,
                  fontFamily: "Helvetica",
                }}
              >
                {" "}
                9:50 AM{" "}
              </Text>
            </View>
            <View
              style={{
                height: "100%",
                width: "35%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  height: 36,
                  width: 96,
                  backgroundColor: "#253f67",
                  alignSelf: "center",
                  borderRadius: 17,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: 19,
                    fontFamily: "Helvetica-Bold",
                  }}
                >
                  Quote
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              height: 100,
              width: "92%",
              borderRadius: 22,
              backgroundColor: "white",
              elevation: 1,
              borderWidth: 1.5,
              borderColor: "#C1C0D3",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              padding: 7,
              marginTop: 15,
            }}
          >
            <View
              style={{ height: "100%", width: "40%", justifyContent: "center" }}
            >
              <Text
                style={{
                  color: "#253f67",
                  lineHeight: 38,
                  fontSize: 19,
                  fontFamily: "Helvetica-Bold",
                }}
              >
                {" "}
                Rakesh s{" "}
              </Text>

              <View
                style={{
                  // height: 50,
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  // justifyContent: "center",
                  // backgroundColor: "red",
                }}
              >
                <Text
                  style={{
                    color: "#253f67",
                    lineHeight: 30,
                    fontSize: 16,
                    fontFamily: "Helvetica-Bold",
                  }}
                >
                  {" "}
                  Contact :{" "}
                </Text>
                <TouchableOpacity
                  style={{
                    height: 30,
                    backgroundColor: "#253f67",
                    width: 30,
                    borderRadius: 70,
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={require("../../../../assets/Images/Wcontact.png")}
                    style={{
                      height: 25,
                      width: 25,
                      alignSelf: "center",
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                height: "100%",
                width: "25%",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "#253f67",
                  lineHeight: 30,
                  fontSize: 17,
                  fontFamily: "Helvetica-Bold",
                }}
              >
                {" "}
                Pune{" "}
              </Text>
              <Text
                style={{
                  color: "#253f67",
                  lineHeight: 30,
                  fontSize: 16,
                  fontFamily: "Helvetica",
                }}
              >
                {" "}
                9:50 AM{" "}
              </Text>
            </View>
            <View
              style={{
                height: "100%",
                width: "35%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  height: 36,
                  width: 96,
                  backgroundColor: "#253f67",
                  alignSelf: "center",
                  borderRadius: 17,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: 19,
                    fontFamily: "Helvetica-Bold",
                  }}
                >
                  Quote
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              height: 100,
              width: "92%",
              borderRadius: 22,
              backgroundColor: "white",
              elevation: 1,
              borderWidth: 1.5,
              borderColor: "#C1C0D3",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              padding: 7,
              marginTop: 15,
            }}
          >
            <View
              style={{ height: "100%", width: "40%", justifyContent: "center" }}
            >
              <Text
                style={{
                  color: "#253f67",
                  lineHeight: 38,
                  fontSize: 19,
                  fontFamily: "Helvetica-Bold",
                }}
              >
                {" "}
                Rakesh s{" "}
              </Text>

              <View
                style={{
                  // height: 50,
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  // justifyContent: "center",
                  // backgroundColor: "red",
                }}
              >
                <Text
                  style={{
                    color: "#253f67",
                    lineHeight: 30,
                    fontSize: 16,
                    fontFamily: "Helvetica-Bold",
                  }}
                >
                  {" "}
                  Contact :{" "}
                </Text>
                <TouchableOpacity
                  style={{
                    height: 30,
                    backgroundColor: "#253f67",
                    width: 30,
                    borderRadius: 70,
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={require("../../../../assets/Images/Wcontact.png")}
                    style={{
                      height: 25,
                      width: 25,
                      alignSelf: "center",
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                height: "100%",
                width: "25%",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "#253f67",
                  lineHeight: 30,
                  fontSize: 17,
                  fontFamily: "Helvetica-Bold",
                }}
              >
                {" "}
                Pune{" "}
              </Text>
              <Text
                style={{
                  color: "#253f67",
                  lineHeight: 30,
                  fontSize: 16,
                  fontFamily: "Helvetica",
                }}
              >
                {" "}
                9:50 AM{" "}
              </Text>
            </View>
            <View
              style={{
                height: "100%",
                width: "35%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  height: 36,
                  width: 96,
                  backgroundColor: "#253f67",
                  alignSelf: "center",
                  borderRadius: 17,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: 19,
                    fontFamily: "Helvetica-Bold",
                  }}
                >
                  Quote
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              height: 100,
              width: "92%",
              borderRadius: 22,
              backgroundColor: "white",
              elevation: 1,
              borderWidth: 1.5,
              borderColor: "#C1C0D3",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              padding: 7,
              marginTop: 15,
            }}
          >
            <View
              style={{ height: "100%", width: "40%", justifyContent: "center" }}
            >
              <Text
                style={{
                  color: "#253f67",
                  lineHeight: 38,
                  fontSize: 19,
                  fontFamily: "Helvetica-Bold",
                }}
              >
                {" "}
                Rakesh s{" "}
              </Text>

              <View
                style={{
                  // height: 50,
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  // justifyContent: "center",
                  // backgroundColor: "red",
                }}
              >
                <Text
                  style={{
                    color: "#253f67",
                    lineHeight: 30,
                    fontSize: 16,
                    fontFamily: "Helvetica-Bold",
                  }}
                >
                  {" "}
                  Contact :{" "}
                </Text>
                <TouchableOpacity
                  style={{
                    height: 30,
                    backgroundColor: "#253f67",
                    width: 30,
                    borderRadius: 70,
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={require("../../../../assets/Images/Wcontact.png")}
                    style={{
                      height: 25,
                      width: 25,
                      alignSelf: "center",
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                height: "100%",
                width: "25%",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "#253f67",
                  lineHeight: 30,
                  fontSize: 17,
                  fontFamily: "Helvetica-Bold",
                }}
              >
                {" "}
                Pune{" "}
              </Text>
              <Text
                style={{
                  color: "#253f67",
                  lineHeight: 30,
                  fontSize: 16,
                  fontFamily: "Helvetica",
                }}
              >
                {" "}
                9:50 AM{" "}
              </Text>
            </View>
            <View
              style={{
                height: "100%",
                width: "35%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  height: 36,
                  width: 96,
                  backgroundColor: "#253f67",
                  alignSelf: "center",
                  borderRadius: 17,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: 19,
                    fontFamily: "Helvetica-Bold",
                  }}
                >
                  Quote
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              height: 100,
              width: "92%",
              borderRadius: 22,
              backgroundColor: "white",
              elevation: 1,
              borderWidth: 1.5,
              borderColor: "#C1C0D3",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              padding: 7,
              marginTop: 15,
            }}
          >
            <View
              style={{ height: "100%", width: "40%", justifyContent: "center" }}
            >
              <Text
                style={{
                  color: "#253f67",
                  lineHeight: 38,
                  fontSize: 19,
                  fontFamily: "Helvetica-Bold",
                }}
              >
                {" "}
                Rakesh s{" "}
              </Text>

              <View
                style={{
                  // height: 50,
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  // justifyContent: "center",
                  // backgroundColor: "red",
                }}
              >
                <Text
                  style={{
                    color: "#253f67",
                    lineHeight: 30,
                    fontSize: 16,
                    fontFamily: "Helvetica-Bold",
                  }}
                >
                  {" "}
                  Contact :{" "}
                </Text>
                <TouchableOpacity
                  style={{
                    height: 30,
                    backgroundColor: "#253f67",
                    width: 30,
                    borderRadius: 70,
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={require("../../../../assets/Images/Wcontact.png")}
                    style={{
                      height: 25,
                      width: 25,
                      alignSelf: "center",
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                height: "100%",
                width: "25%",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "#253f67",
                  lineHeight: 30,
                  fontSize: 17,
                  fontFamily: "Helvetica-Bold",
                }}
              >
                {" "}
                Pune{" "}
              </Text>
              <Text
                style={{
                  color: "#253f67",
                  lineHeight: 30,
                  fontSize: 16,
                  fontFamily: "Helvetica",
                }}
              >
                {" "}
                9:50 AM{" "}
              </Text>
            </View>
            <View
              style={{
                height: "100%",
                width: "35%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  height: 36,
                  width: 96,
                  backgroundColor: "#253f67",
                  alignSelf: "center",
                  borderRadius: 17,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: 19,
                    fontFamily: "Helvetica-Bold",
                  }}
                >
                  Quote
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              height: 100,
              width: "92%",
              borderRadius: 22,
              backgroundColor: "white",
              elevation: 1,
              borderWidth: 1.5,
              borderColor: "#C1C0D3",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              padding: 7,
              marginTop: 15,
            }}
          >
            <View
              style={{ height: "100%", width: "40%", justifyContent: "center" }}
            >
              <Text
                style={{
                  color: "#253f67",
                  lineHeight: 38,
                  fontSize: 19,
                  fontFamily: "Helvetica-Bold",
                }}
              >
                {" "}
                Rakesh s{" "}
              </Text>

              <View
                style={{
                  // height: 50,
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  // justifyContent: "center",
                  // backgroundColor: "red",
                }}
              >
                <Text
                  style={{
                    color: "#253f67",
                    lineHeight: 30,
                    fontSize: 16,
                    fontFamily: "Helvetica-Bold",
                  }}
                >
                  {" "}
                  Contact :{" "}
                </Text>
                <TouchableOpacity
                  style={{
                    height: 30,
                    backgroundColor: "#253f67",
                    width: 30,
                    borderRadius: 70,
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={require("../../../../assets/Images/Wcontact.png")}
                    style={{
                      height: 25,
                      width: 25,
                      alignSelf: "center",
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                height: "100%",
                width: "25%",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "#253f67",
                  lineHeight: 30,
                  fontSize: 17,
                  fontFamily: "Helvetica-Bold",
                }}
              >
                {" "}
                Pune{" "}
              </Text>
              <Text
                style={{
                  color: "#253f67",
                  lineHeight: 30,
                  fontSize: 16,
                  fontFamily: "Helvetica",
                }}
              >
                {" "}
                9:50 AM{" "}
              </Text>
            </View>
            <View
              style={{
                height: "100%",
                width: "35%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  height: 36,
                  width: 96,
                  backgroundColor: "#253f67",
                  borderRadius: 17,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: 19,
                    fontFamily: "Helvetica-Bold",
                  }}
                >
                  Quote
                </Text>
              </TouchableOpacity>
            </View>
          </View>
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
