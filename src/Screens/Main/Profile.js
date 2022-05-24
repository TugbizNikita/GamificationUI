import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from "accordion-collapse-react-native";

const { height, width } = Dimensions.get("window");

export default function Profile({navigation}) {
  const [open, setOpen] = useState(false);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ height: "100%", backgroundColor: "#253f67" }}
    >
      <View style={styles.Container}>
        <ImageBackground
          source={require("../../../assets/Images/back.jpg")}
          style={{ height: "100%", width: width, position: "absolute" }}
        />
        <Modal visible={open} transparent={true}>
          <TouchableWithoutFeedback onPress={() => setOpen(false)}>
            <View
              style={{
                flex: 1,
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#000000aa",
              }}
            >
              <View
                style={{
                  height: "67%",
                  width: "85%",
                  backgroundColor: "white",
                  alignItems: "center",
                  borderRadius: 50,
                }}
              >
                <View
                  style={{
                    width: "77%",
                    height: 155,
                    paddingTop: 15,
                    paddingLeft: 0,
                    alignItems: "center",
                    borderBottomWidth: 2,
                    borderColor: "#253f67",
                  }}
                >
                  <Image
                    source={require("../../../assets/Images/Profilee.png")}
                    style={{ height: 90, width: 90 }}
                  />

                  <Text
                    style={{
                      color: "#253f67",
                      marginLeft: 5,
                      fontFamily: "Helvetica-Bold",
                      fontSize: 19,
                      marginTop: 10,
                    }}
                  >
                    {" "}
                    Hello, Rakesh{" "}
                  </Text>
                </View>
                <View
                  style={{
                    width: "100%",
                    paddingLeft: 10,
                    flexDirection: "row",
                    marginTop: 20,
                    height: 30,
                    justifyContent: "space-between",
                    paddingRight: 20,
                    paddingLeft: 21,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#253f67",
                      fontFamily: "Helvetica",
                      fontSize: 15,
                      marginTop: 10,
                    }}
                  >
                    Linked Phone Number -{" "}
                  </Text>
                  <Text
                    style={{
                      color: "#253f67",
                      fontFamily: "Helvetica-Bold",
                      fontSize: 15,
                      marginTop: 10,
                    }}
                  >
                    9657842135{" "}
                  </Text>
                </View>
                <View
                  style={{
                    width: "100%",
                    paddingLeft: 10,
                    flexDirection: "row",
                    marginTop: 20,
                    height: 30,
                    justifyContent: "space-between",
                    paddingRight: 20,
                    paddingLeft: 21,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#253f67",
                      fontFamily: "Helvetica",
                      fontSize: 15,
                      marginTop: 10,
                    }}
                  >
                    Vendor ID -{" "}
                  </Text>
                  <Text
                    style={{
                      color: "#253f67",
                      fontFamily: "Helvetica-Bold",
                      fontSize: 15,
                      marginTop: 10,
                    }}
                  >
                    VI00123{" "}
                  </Text>
                </View>
                <View
                  style={{
                    width: "100%",
                    paddingLeft: 10,
                    flexDirection: "row",
                    marginTop: 20,
                    height: 30,
                    justifyContent: "space-between",
                    paddingRight: 20,
                    paddingLeft: 21,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#253f67",
                      fontFamily: "Helvetica",
                      fontSize: 15,
                      marginTop: 10,
                    }}
                  >
                    Business Email -{" "}
                  </Text>
                  <Text
                    style={{
                      color: "#253f67",
                      fontFamily: "Helvetica-Bold",
                      fontSize: 15,
                      marginTop: 10,
                    }}
                  >
                    email@gmail.com{" "}
                  </Text>
                </View>
                <View
                  style={{
                    width: "100%",
                    paddingLeft: 10,
                    flexDirection: "row",
                    marginTop: 20,
                    height: 47,
                    justifyContent: "space-between",
                    paddingRight: 20,
                    paddingLeft: 21,
                    alignItems: "center",
                  }}
                >
                  <View style={{ width: "50%" }}>
                    <Text
                      style={{
                        color: "#253f67",
                        fontFamily: "Helvetica",
                        fontSize: 15,
                        marginTop: 10,
                        lineHeight: 22,
                      }}
                    >
                      Payments Linked Phone Number -{" "}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: "#253f67",
                      fontFamily: "Helvetica-Bold",
                      fontSize: 15,
                      marginTop: 10,
                    }}
                  >
                    9665321478{" "}
                  </Text>
                </View>
                <View
                  style={{
                    width: "100%",
                    paddingLeft: 10,
                    flexDirection: "row",
                    marginTop: 20,
                    height: 30,
                    justifyContent: "space-between",
                    paddingRight: 20,
                    paddingLeft: 21,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#253f67",
                      fontFamily: "Helvetica",
                      fontSize: 15,
                      marginTop: 10,
                    }}
                  >
                    UPI ID -{" "}
                  </Text>

                  <Text
                    style={{
                      color: "#253f67",
                      fontFamily: "Helvetica-Bold",
                      fontSize: 15,
                      marginTop: 10,
                    }}
                  >
                    ABC4567{" "}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <View style={{ width: width, padding: 10, paddingLeft: 20 }}>
          <View
            style={{
              height: 86,
              borderRadius: 59,
              alignItems: "center",
              // justifyContent: "center",
              width: 86,
              backgroundColor: "#fb5414",
              marginTop: 30,
              marginLeft: 20,
            }}
          >
            <TouchableOpacity onPress={() => setOpen(true)}>
              <Image
                source={require("../../../assets/Images/Profilee.png")}
                style={{ height: 80, width: 80 }}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => setOpen(true)}>
            <Text
              style={{
                color: "white",
                marginLeft: 5,
                fontFamily: "Helvetica-Bold",
                fontSize: 18,
                marginTop: 10,
              }}
            >
              {" "}
              Hello, Rakesh{" "}
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: 1,
            width: "74.78%",
            borderWidth: 0.6,
            borderColor: "#fb5414",
            alignSelf: "flex-start",
          }}
        ></View>

        <View style={{ width: "90%" }}>
          <Collapse>
            <CollapseHeader
              style={{ height: 60, alignItems: "center", flexDirection: "row" }}
            >
              <Image
                source={require("../../../assets/Images/DropDown.png")}
                style={{ tintColor: "white", height: 14, width: 14 }}
              />
              <Text
                style={{
                  color: "white",
                  fontFamily: "Helvetica-Bold",
                  fontSize: 17,
                  left: 11,
                }}
              >
                {" "}
                My Business Profile{" "}
              </Text>
            </CollapseHeader>
            <CollapseBody
              style={{ marginLeft: 20, marginTop: 0, marginBottom: 0 }}
            >
              <TouchableOpacity onPress={() => navigation.navigate("Today")}>
                <View
                  style={{
                    height: 50,
                    width: "100%",
                    paddingLeft: 10,
                    flexDirection: "row",
                    // alignItems: "center",
                    marginTop: 0,
                  }}
                >
                  <Image
                    source={require("../../../assets/Images/TodaysReports.png")}
                    style={{ height: 40, width: 33.3 }}
                  />

                  <Text
                    style={{
                      color: "white",
                      marginLeft: 5,
                      fontFamily: "Helvetica",
                      fontSize: 16,
                      marginTop: 10,
                      marginLeft: 20,
                    }}
                  >
                    {" "}
                    Today's Reports{" "}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    height: 50,
                    width: width,
                    paddingLeft: 10,
                    flexDirection: "row",
                    // alignItems: "center",
                    marginTop: 0,
                  }}
                >
                  <Image
                    source={require("../../../assets/Images/HistoricalReports.png")}
                    style={{ height: 40, width: 33.3, right: 5.7 }}
                  />

                  <Text
                    style={{
                      color: "white",
                      marginLeft: 5,
                      fontFamily: "Helvetica",
                      fontSize: 16,
                      marginTop: 10,
                      marginLeft: 20,
                    }}
                  >
                    {" "}
                    Historical Reports{" "}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    height: 60,
                    width: width,
                    paddingLeft: 10,
                    flexDirection: "row",
                    // alignItems: "center",
                    marginTop: 0,
                  }}
                >
                  <Image
                    source={require("../../../assets/Images/Rating.png")}
                    style={{ height: 40, width: 33.3 }}
                  />

                  <Text
                    style={{
                      color: "white",
                      marginLeft: 5,
                      fontFamily: "Helvetica",
                      fontSize: 16,
                      marginTop: 10,
                      marginLeft: 26,
                    }}
                  >
                    Rating & Review
                  </Text>
                </View>
              </TouchableOpacity>
            </CollapseBody>
          </Collapse>
          <Collapse>
            <CollapseHeader
              style={{ height: 60, alignItems: "center", flexDirection: "row" }}
            >
              <Image
                source={require("../../../assets/Images/DropDown.png")}
                style={{ tintColor: "white", height: 14, width: 14 }}
              />
              <Text
                style={{
                  color: "white",
                  fontFamily: "Helvetica-Bold",
                  fontSize: 17,
                  left: 11,
                }}
              >
                {" "}
                Grow My Business{" "}
              </Text>
            </CollapseHeader>
            <CollapseBody
              style={{ marginLeft: 20, marginTop: 0, marginBottom: 0 }}
            >
              <TouchableOpacity>
                <View
                  style={{
                    height: 50,
                    width: "100%",
                    paddingLeft: 10,
                    flexDirection: "row",
                    // alignItems: "center",
                    marginTop: 0,
                  }}
                >
                  <Image
                    source={require("../../../assets/Images/Deal.png")}
                    style={{ height: 40, width: 33.3 }}
                  />

                  <Text
                    style={{
                      color: "white",
                      marginLeft: 5,
                      fontFamily: "Helvetica",
                      fontSize: 16,
                      marginTop: 10,
                      marginLeft: 20,
                    }}
                  >
                    {" "}
                    My Current Deals{" "}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    height: 50,
                    width: width,
                    paddingLeft: 10,
                    flexDirection: "row",
                    // alignItems: "center",
                    marginTop: 0,
                  }}
                >
                  <Image
                    source={require("../../../assets/Images/CreateNewDeal.png")}
                    style={{ height: 40, width: 33.3, right: 5.7 }}
                  />

                  <Text
                    style={{
                      color: "white",
                      marginLeft: 5,
                      fontFamily: "Helvetica",
                      fontSize: 16,
                      marginTop: 10,
                      marginLeft: 20,
                    }}
                  >
                    {" "}
                    Create New Deal{" "}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    height: 60,
                    width: width,
                    paddingLeft: 10,
                    flexDirection: "row",
                    // alignItems: "center",
                    marginTop: 0,
                  }}
                >
                  <Image
                    source={require("../../../assets/Images/CreateAdvertisement.png")}
                    style={{ height: 40, width: 33.3, right: 5 }}
                  />

                  <Text
                    style={{
                      color: "white",
                      marginLeft: 5,
                      fontFamily: "Helvetica",
                      fontSize: 16,
                      marginTop: 10,
                      marginLeft: 23,
                    }}
                  >
                    Create an Advertisement
                  </Text>
                </View>
              </TouchableOpacity>
            </CollapseBody>
          </Collapse>

          <Collapse>
            <CollapseHeader
              style={{ height: 60, alignItems: "center", flexDirection: "row" }}
            >
              <Image
                source={require("../../../assets/Images/DropDown.png")}
                style={{ tintColor: "white", height: 17, width: 17 }}
              />
              <Text
                style={{
                  color: "white",
                  fontFamily: "Helvetica-Bold",
                  fontSize: 17,
                  left: 11,
                }}
              >
                {" "}
                Change Business Information{" "}
              </Text>
            </CollapseHeader>
            <CollapseBody
              style={{ marginLeft: 20, marginTop: 0, marginBottom: 0 }}
            >
              <TouchableOpacity>
                <View
                  style={{
                    height: 50,
                    width: "100%",
                    paddingLeft: 10,
                    flexDirection: "row",
                    alignItems: "flex-start",
                    marginTop: 0,
                  }}
                >
                  <Image
                    source={require("../../../assets/Images/ModifyBusinessName.png")}
                    style={{ height: 30, width: 28.3, marginTop: 7 }}
                  />

                  <Text
                    style={{
                      color: "white",
                      marginLeft: 5,
                      fontFamily: "Helvetica",
                      fontSize: 16,
                      marginTop: 10,
                      marginLeft: 20,
                    }}
                  >
                    {" "}
                    Modify Business Name{" "}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    height: 50,
                    width: width,
                    paddingLeft: 10,
                    flexDirection: "row",
                    // alignItems: "center",
                    marginTop: 0,
                  }}
                >
                  <Image
                    source={require("../../../assets/Images/ChangeAdress.png")}
                    style={{ height: 40, width: 33.3, right: 1 }}
                  />

                  <Text
                    style={{
                      color: "white",
                      marginLeft: 5,
                      fontFamily: "Helvetica",
                      fontSize: 16,
                      marginTop: 10,
                      marginLeft: 20,
                      right: 6,
                    }}
                  >
                    {" "}
                    Change Address{" "}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    height: 60,
                    width: width,
                    paddingLeft: 10,
                    flexDirection: "row",
                    // alignItems: "center",
                    marginTop: 0,
                  }}
                >
                  <Image
                    source={require("../../../assets/Images/Payment.png")}
                    style={{ height: 35, width: 31.3, right: 1 }}
                  />

                  <Text
                    style={{
                      color: "white",
                      marginLeft: 5,
                      fontFamily: "Helvetica",
                      fontSize: 16,
                      marginTop: 10,
                      marginLeft: 26,
                      right: 4,
                      bottom: 5,
                    }}
                  >
                    Update Payment Options
                  </Text>
                </View>
              </TouchableOpacity>
            </CollapseBody>
          </Collapse>
          <TouchableOpacity>
            <View
              style={{
                height: 60,
                width: width,
                paddingLeft: 0,
                flexDirection: "row",
                alignItems: "center",
                marginTop: 0,
              }}
            >
              <Image
                source={require("../../../assets/Images/NeedSupport.png")}
                style={{ height: 40, width: 33.3 }}
              />

              <Text
                style={{
                  color: "white",
                  marginLeft: 5,
                  fontFamily: "Helvetica-Bold",
                  fontSize: 16,
                  marginTop: 10,
                  marginLeft: 17,
                }}
              >
                {" "}
                Need Support{" "}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                height: 60,
                width: width,
                paddingLeft: 0,
                flexDirection: "row",
                alignItems: "center",
                marginTop: 0,
              }}
            >
              <Image
                source={require("../../../assets/Images/RateLocallyt.png")}
                style={{ height: 40, width: 33.3 }}
              />

              <Text
                style={{
                  color: "white",
                  marginLeft: 5,
                  fontFamily: "Helvetica-Bold",
                  fontSize: 16,
                  marginTop: 10,
                  marginLeft: 16,
                }}
              >
                {" "}
                Rate LocallyT{" "}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                height: 60,
                width: width,
                paddingLeft: 0,
                flexDirection: "row",
                alignItems: "center",
                marginTop: 0,
              }}
            >
              <Image
                source={require("../../../assets/Images/referfriend.png")}
                style={{ height: 40, width: 33.3 }}
              />

              <Text
                style={{
                  color: "white",
                  marginLeft: 5,
                  fontFamily: "Helvetica-Bold",
                  fontSize: 16,
                  marginTop: 10,
                  marginLeft: 16,
                }}
              >
                {" "}
                Refer Friend{" "}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                height: 60,
                width: width,
                paddingLeft: 0,
                flexDirection: "row",
                alignItems: "center",
                marginTop: 0,
              }}
            >
              <Image
                source={require("../../../assets/Images/TodaysReports.png")}
                style={{ height: 38, width: 31.3 }}
              />

              <Text
                style={{
                  color: "white",
                  marginLeft: 5,
                  fontFamily: "Helvetica-Bold",
                  fontSize: 16,
                  marginTop: 10,
                  marginLeft: 16,
                }}
              >
                {" "}
                Terms and Conditions{" "}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                height: 60,
                width: width,
                paddingLeft: 0,
                flexDirection: "row",
                alignItems: "center",
                marginTop: 0,
              }}
            >
              <Image
                source={require("../../../assets/Images/PrivacyPolicy.png")}
                style={{ height: 37, width: 30.3 }}
              />

              <Text
                style={{
                  color: "white",
                  marginLeft: 5,
                  fontFamily: "Helvetica-Bold",
                  fontSize: 16,
                  marginTop: 10,
                  marginLeft: 16,
                }}
              >
                {" "}
                Privacy Policy{" "}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <View
              style={{
                height: 60,
                width: width,
                paddingLeft: 0,
                flexDirection: "row",
                alignItems: "center",
                marginTop: 0,
              }}
            >
              <Image
                source={require("../../../assets/Images/LogOut.png")}
                style={{ height: 40, width: 33.3 }}
              />

              <Text
                style={{
                  color: "white",
                  marginLeft: 5,
                  fontFamily: "Helvetica-Bold",
                  fontSize: 16,
                  marginTop: 10,
                  marginLeft: 16,
                }}
              >
                {" "}
                Log Out
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{ height: 20, width: "100%" }}></View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
  },
});
