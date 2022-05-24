import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const { height, width } = Dimensions.get("window");

export default function WaitingOrders() {
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
            // justifyContent: "center",
            backgroundColor: "white",
            marginTop: 4,
            paddingTop: 13,
            borderTopStartRadius: 20,
            borderTopEndRadius: 20,
            // borderBottomWidth: 2,
            borderBottomColor: "#253f67",
            // paddingBottom: 20,
            height: height,
          }}
        >
          <View
            style={{
              height: 164,
              width: "93%",
              borderRadius: 22,
              backgroundColor: "white",
              elevation: 1,
              borderWidth: 1.5,
              borderColor: "#C1C0D3",
              alignItems: "center",
              // justifyContent: "center",
              // flexDirection: "row",
              padding: 7,
            }}
          >
            <View
              style={{
                height: 50,
                width: "100%",
                // justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  height: 50,
                  width: "50%",
                  backgroundColor: "white",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "#253f67",
                    lineHeight: 30,
                    fontSize: 22,
                    fontFamily: "Helvetica-Bold",
                  }}
                >
                  {" "}
                  Rakesh s{" "}
                </Text>
              </View>
              <View
                style={{
                  height: 50,
                  width: "50%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  // backgroundColor: "red",
                }}
              >
                <Text
                  style={{
                    color: "#253f67",
                    lineHeight: 30,
                    fontSize: 19,
                    fontFamily: "Helvetica-Bold",
                  }}
                >
                  {" "}
                  Contact :{" "}
                </Text>
                <TouchableOpacity
                  style={{
                    height: 40,
                    backgroundColor: "#253f67",
                    width: 40,
                    borderRadius: 70,
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={require("../../../../assets/Images/Wcontact.png")}
                    style={{
                      height: 32,
                      width: 32,
                      alignSelf: "center",
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                height: 40,
                width: "100%",
                flexDirection: "row",
                backgroundColor: "white",
                marginTop: 5,
              }}
            >
              <View
                style={{
                  height: "70%",
                  width: "50%",
                  backgroundColor: "white",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#253f67",
                    fontSize: 17,
                    fontFamily: "Helvetica-Bold",
                    marginLeft: 5,
                  }}
                >
                  Wakad
                </Text>
              </View>
              <View
                style={{
                  height: "70%",
                  width: "50%",
                  backgroundColor: "white",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "#253f67",
                    lineHeight: 20,
                    fontSize: 16,
                    fontFamily: "Helvetica-Bold",
                  }}
                >
                  At time :
                </Text>

                <Text
                  style={{
                    color: "#253f67",
                    lineHeight: 20,
                    fontSize: 15,
                    fontFamily: "Helvetica",
                  }}
                >
                  {" "}
                  9:50 AM
                </Text>
              </View>
            </View>
            <View
              style={{
                height: 40,
                width: "100%",
                flexDirection: "row",
                backgroundColor: "white",
                marginTop: 5,
              }}
            >
              <View
                style={{
                  height: "70%",
                  width: "60%",
                  backgroundColor: "white",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#253f67",
                    lineHeight: 20,
                    fontSize: 16,
                    fontFamily: "Helvetica-Bold",
                    marginLeft: 5,
                  }}
                >
                  Order value : Rs. xxx.xx
                </Text>
              </View>
              <View
                style={{
                  height: "70%",
                  width: "40%",
                  backgroundColor: "white",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    height: 35,
                    width: 100,
                    backgroundColor: "#253f67",
                    borderRadius: 17,
                    alignItems: "center",
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

          <View
            style={{
              height: 164,
              width: "93%",
              borderRadius: 22,
              backgroundColor: "white",
              elevation: 1,
              borderWidth: 1.5,
              borderColor: "#C1C0D3",
              alignItems: "center",
              // justifyContent: "center",
              // flexDirection: "row",
              padding: 7,
              marginTop: 17,
            }}
          >
            <View
              style={{
                height: 50,
                width: "100%",
                // justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  height: 50,
                  width: "50%",
                  backgroundColor: "white",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "#253f67",
                    lineHeight: 30,
                    fontSize: 22,
                    fontFamily: "Helvetica-Bold",
                  }}
                >
                  {" "}
                  Rakesh s{" "}
                </Text>
              </View>
              <View
                style={{
                  height: 50,
                  width: "50%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  // backgroundColor: "red",
                }}
              >
                <Text
                  style={{
                    color: "#253f67",
                    lineHeight: 30,
                    fontSize: 19,
                    fontFamily: "Helvetica-Bold",
                  }}
                >
                  {" "}
                  Contact :{" "}
                </Text>
                <TouchableOpacity
                  style={{
                    height: 40,
                    backgroundColor: "#253f67",
                    width: 40,
                    borderRadius: 70,
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={require("../../../../assets/Images/Wcontact.png")}
                    style={{
                      height: 32,
                      width: 32,
                      alignSelf: "center",
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                height: 40,
                width: "100%",
                flexDirection: "row",
                backgroundColor: "white",
                marginTop: 5,
              }}
            >
              <View
                style={{
                  height: "70%",
                  width: "50%",
                  backgroundColor: "white",
                  flexDirection: "row",
                  paddingRight: 5,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#253f67",
                    lineHeight: 20,
                    fontSize: 17,
                    fontFamily: "Helvetica-Bold",
                    marginLeft: 5,
                  }}
                >
                  Wakad
                </Text>
              </View>
              <View
                style={{
                  height: "70%",
                  width: "50%",
                  backgroundColor: "white",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "#253f67",
                    lineHeight: 20,
                    fontSize: 16,
                    fontFamily: "Helvetica-Bold",
                  }}
                >
                  At time :
                </Text>

                <Text
                  style={{
                    color: "#253f67",
                    lineHeight: 20,
                    fontSize: 15,
                    fontFamily: "Helvetica",
                  }}
                >
                  {" "}
                  9:50 AM
                </Text>
              </View>
            </View>
            <View
              style={{
                height: 40,
                width: "100%",
                flexDirection: "row",
                backgroundColor: "white",
                marginTop: 5,
              }}
            >
              <View
                style={{
                  height: "70%",
                  width: "60%",
                  backgroundColor: "white",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#253f67",
                    lineHeight: 20,
                    fontSize: 16,
                    fontFamily: "Helvetica-Bold",
                    marginLeft: 5,
                  }}
                >
                  Order value : Rs. xxx.xx
                </Text>
              </View>
              <View
                style={{
                  height: "70%",
                  width: "40%",
                  backgroundColor: "white",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    height: 35,
                    width: 100,
                    backgroundColor: "#253f67",
                    borderRadius: 17,
                    alignItems: "center",
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
