import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";

const { height, width } = Dimensions.get("window");

export default function Track() {
  return (
    <ScrollView
      style={{
        width: "100%",
        backgroundColor: "white",
      }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.Container}>
        <View
          style={{
            height: 200,
            width: "90%",
            borderRadius: 22,
            backgroundColor: "white",
            elevation: 1,
            borderWidth: 1.3,
            borderColor: "#C1C0D3",
            alignItems: "center",
            marginTop: 30,
            padding: 8,
          }}
        >
          <View
            style={{
              height: "50%",
              width: "100%",
              backgroundColor: "white",
              flexDirection: "row",
              borderRadius: 25,
            }}
          >
            <View
              style={{
                height: "100%",
                width: "45%",
                backgroundColor: "white",
                justifyContent: "center",
                paddingLeft: 3,
              }}
            >
              <Text
                style={{
                  color: "#253f67",
                  fontSize: 22,
                  fontFamily: "Helvetica-Bold",
                }}
              >
                {" "}
                Rakesh s{" "}
              </Text>

              <Text
                style={{
                  color: "#253f67",
                  lineHeight: 26,
                  fontSize: 18,
                  fontFamily: "Helvetica-Bold",
                  marginLeft: 5,
                }}
              >
                Pune
              </Text>

              <Text
                style={{
                  color: "#253f67",
                  lineHeight: 20,
                  fontSize: 15,
                  fontFamily: "Helvetica-Bold",
                  marginLeft: 6,
                }}
              >
                9:50 AM
              </Text>
            </View>
            <View
              style={{
                height: "100%",
                width: "55%",
                backgroundColor: "white",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                marginLeft: 7,
                borderRadius: 25,
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 25,
                }}
              >
                <TouchableOpacity
                  style={{
                    height: 48,
                    width: 48,
                    borderRadius: 14,
                    backgroundColor: "white",
                    elevation: 1,
                    borderWidth: 1,
                    borderColor: "#C1C0D3",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={require("../../../../../assets/Images/location.png")}
                    style={{ height: 37, width: 37 }}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    height: 20,
                    width: 70,
                    backgroundColor: "#FFFF",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 20,
                    marginTop: 4,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10,
                      color: "#253f67",
                      fontWeight: "bold",
                    }}
                  >
                    Copy Address
                  </Text>
                </View>
              </View>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity
                  style={{
                    height: 48,
                    width: 48,
                    borderRadius: 14,
                    backgroundColor: "white",
                    elevation: 1,
                    borderWidth: 1,
                    borderColor: "#C1C0D3",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={require("../../../../../assets/Images/contact.png")}
                    style={{ height: 37, width: 37 }}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    height: 20,
                    width: 70,
                    backgroundColor: "#FFFF",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 20,
                    marginTop: 4,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10,
                      color: "#253f67",
                      fontWeight: "bold",
                    }}
                  >
                    Copy Contact
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Text
            style={{
              color: "#253f67",
              lineHeight: 30,
              fontSize: 17,
              fontFamily: "Helvetica-Bold",
              marginTop: 7,
            }}
          >
            Set order status
          </Text>
          <View
            style={{
              height: 55,
              width: "100%",
              backgroundColor: "white",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <TouchableOpacity
              style={{
                height: 41,
                width: 90,
                borderWidth: 0,
                backgroundColor: "#15CE88",
                borderRadius: 20,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 14,
                  fontFamily: "Helvetica-Bold",
                }}
              >
                Out of delivery
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 41,
                width: 90,
                borderWidth: 0,
                backgroundColor: "#15CE88",
                borderRadius: 20,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 14,
                  fontFamily: "Helvetica-Bold",
                }}
              >
                Delivered
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 41,
                width: 90,
                borderWidth: 0,
                backgroundColor: "#fb5414",
                borderRadius: 20,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 13,
                  fontFamily: "Helvetica-Bold",
                  // lineHeight: 16,
                  // marginTop: 3,
                }}
              >
                Payment Received
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            height: 200,
            width: "90%",
            borderRadius: 22,
            backgroundColor: "white",
            elevation: 1,
            borderWidth: 1.3,
            borderColor: "#C1C0D3",
            alignItems: "center",
            marginTop: 30,
            padding: 8,
          }}
        >
          <View
            style={{
              height: "50%",
              width: "100%",
              backgroundColor: "white",
              flexDirection: "row",
              borderRadius: 25,
            }}
          >
            <View
              style={{
                height: "100%",
                width: "45%",
                backgroundColor: "white",
                justifyContent: "center",
                paddingLeft: 3,
              }}
            >
              <Text
                style={{
                  color: "#253f67",
                  fontSize: 22,
                  fontFamily: "Helvetica-Bold",
                }}
              >
                {" "}
                Rakesh s{" "}
              </Text>

              <Text
                style={{
                  color: "#253f67",
                  lineHeight: 26,
                  fontSize: 18,
                  fontFamily: "Helvetica-Bold",
                  marginLeft: 5,
                }}
              >
                Pune
              </Text>

              <Text
                style={{
                  color: "#253f67",
                  lineHeight: 20,
                  fontSize: 15,
                  fontFamily: "Helvetica-Bold",
                  marginLeft: 6,
                }}
              >
                9:50 AM
              </Text>
            </View>
            <View
              style={{
                height: "100%",
                width: "55%",
                backgroundColor: "white",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                marginLeft: 7,
                borderRadius: 25,
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 25,
                }}
              >
                <TouchableOpacity
                  style={{
                    height: 48,
                    width: 48,
                    borderRadius: 14,
                    backgroundColor: "white",
                    elevation: 1,
                    borderWidth: 1,
                    borderColor: "#C1C0D3",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={require("../../../../../assets/Images/location.png")}
                    style={{ height: 37, width: 37 }}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    height: 20,
                    width: 70,
                    backgroundColor: "#FFFF",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 20,
                    marginTop: 4,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10,
                      color: "#253f67",
                      fontWeight: "bold",
                    }}
                  >
                    Copy Address
                  </Text>
                </View>
              </View>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity
                  style={{
                    height: 48,
                    width: 48,
                    borderRadius: 14,
                    backgroundColor: "white",
                    elevation: 1,
                    borderWidth: 1,
                    borderColor: "#C1C0D3",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={require("../../../../../assets/Images/contact.png")}
                    style={{ height: 37, width: 37 }}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    height: 20,
                    width: 70,
                    backgroundColor: "#FFFF",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 20,
                    marginTop: 4,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10,
                      color: "#253f67",
                      fontWeight: "bold",
                    }}
                  >
                    Copy Contact
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Text
            style={{
              color: "#253f67",
              lineHeight: 30,
              fontSize: 17,
              fontFamily: "Helvetica-Bold",
              marginTop: 7,
            }}
          >
            Set order status
          </Text>
          <View
            style={{
              height: 55,
              width: "100%",
              backgroundColor: "white",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <TouchableOpacity
              style={{
                height: 41,
                width: 90,
                borderWidth: 0,
                backgroundColor: "#15CE88",
                borderRadius: 20,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 14,
                  fontFamily: "Helvetica-Bold",
                }}
              >
                Out of delivery
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 41,
                width: 90,
                borderWidth: 0,
                backgroundColor: "#15CE88",
                borderRadius: 20,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 14,
                  fontFamily: "Helvetica-Bold",
                }}
              >
                Delivered
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 41,
                width: 90,
                borderWidth: 0,
                backgroundColor: "#fb5414",
                borderRadius: 20,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 13,
                  fontFamily: "Helvetica-Bold",
                }}
              >
                Payment Received
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            height: 200,
            width: "90%",
            borderRadius: 22,
            backgroundColor: "white",
            elevation: 1,
            borderWidth: 1.3,
            borderColor: "#C1C0D3",
            alignItems: "center",
            marginTop: 30,
            padding: 8,
          }}
        >
          <View
            style={{
              height: "50%",
              width: "100%",
              backgroundColor: "white",
              flexDirection: "row",
              borderRadius: 25,
            }}
          >
            <View
              style={{
                height: "100%",
                width: "45%",
                backgroundColor: "white",
                justifyContent: "center",
                paddingLeft: 3,
              }}
            >
              <Text
                style={{
                  color: "#253f67",
                  fontSize: 22,
                  fontFamily: "Helvetica-Bold",
                }}
              >
                {" "}
                Rakesh s{" "}
              </Text>

              <Text
                style={{
                  color: "#253f67",
                  lineHeight: 26,
                  fontSize: 18,
                  fontFamily: "Helvetica-Bold",
                  marginLeft: 5,
                }}
              >
                Pune
              </Text>

              <Text
                style={{
                  color: "#253f67",
                  lineHeight: 20,
                  fontSize: 15,
                  fontFamily: "Helvetica-Bold",
                  marginLeft: 6,
                }}
              >
                9:50 AM
              </Text>
            </View>
            <View
              style={{
                height: "100%",
                width: "55%",
                backgroundColor: "white",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                marginLeft: 7,
                borderRadius: 25,
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 25,
                }}
              >
                <TouchableOpacity
                  style={{
                    height: 48,
                    width: 48,
                    borderRadius: 14,
                    backgroundColor: "white",
                    elevation: 1,
                    borderWidth: 1,
                    borderColor: "#C1C0D3",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={require("../../../../../assets/Images/location.png")}
                    style={{ height: 37, width: 37 }}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    height: 20,
                    width: 70,
                    backgroundColor: "#FFFF",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 20,
                    marginTop: 4,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10,
                      color: "#253f67",
                      fontWeight: "bold",
                    }}
                  >
                    Copy Address
                  </Text>
                </View>
              </View>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity
                  style={{
                    height: 48,
                    width: 48,
                    borderRadius: 14,
                    backgroundColor: "white",
                    elevation: 1,
                    borderWidth: 1,
                    borderColor: "#C1C0D3",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={require("../../../../../assets/Images/contact.png")}
                    style={{ height: 37, width: 37 }}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    height: 20,
                    width: 70,
                    backgroundColor: "#FFFF",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 20,
                    marginTop: 4,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10,
                      color: "#253f67",
                      fontWeight: "bold",
                    }}
                  >
                    Copy Contact
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Text
            style={{
              color: "#253f67",
              lineHeight: 30,
              fontSize: 17,
              fontFamily: "Helvetica-Bold",
              marginTop: 7,
            }}
          >
            Set order status
          </Text>
          <View
            style={{
              height: 55,
              width: "100%",
              backgroundColor: "white",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <TouchableOpacity
              style={{
                height: 41,
                width: 90,
                borderWidth: 0,
                backgroundColor: "#15CE88",
                borderRadius: 20,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 14,
                  fontFamily: "Helvetica-Bold",
                }}
              >
                Out of delivery
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 41,
                width: 90,
                borderWidth: 0,
                backgroundColor: "#15CE88",
                borderRadius: 20,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 14,
                  fontFamily: "Helvetica-Bold",
                }}
              >
                Delivered
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 41,
                width: 90,
                borderWidth: 0,
                backgroundColor: "#fb5414",
                borderRadius: 20,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 13,
                  fontFamily: "Helvetica-Bold",
                }}
              >
                Payment Received
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          height: 300,
          marginTop: 10,
          width: width,
          backgroundColor: "white",
        }}
      ></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: height,
    width: width,
    flex: 1,
    backgroundColor: "white",
  },
});
