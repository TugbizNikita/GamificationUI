import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  BackHandler,
  FlatList,
  Touchable,
  TouchableOpacity,
  Linking,
  Dimensions,
  ScrollView,
} from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useFocusEffect } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

// const Coach = () => {
//   return (
//     <View
//       style={{
//         justifyContent: "center",
//         width: "100%",

//         top: 30,
//         padding: 10,
//         alignItems: "center",
//         backgroundColor: "white",
//       }}
//     >
//       <View
//         style={{
//           width: "100%",
//           height: 80,
//           backgroundColor: "white",
//           padding: 10,
//           justifyContent: "flex-start",
//           alignItems: "center",
//           flexDirection: "row",
//         }}
//       >
//         <Image
//           style={{
//             height: 50,
//             width: 50,
//             borderRadius: 50,
//             resizeMode: "contain",
//           }}
//           source={require("../../../../../assets/Images/people.png")}
//         />
//         <View style={{ justifyContent: "center", left: 10 }}>
//           <Text style={{ fontWeight: "bold" }}>Shrinidhi Bhangdiya</Text>
//           <Text style={{ color: "gray" }}>Diet Coach</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

export default function Discussion({ navigation }) {
  const [coachData, setCoachData] = useState([]);
  const [mobileNumber, setMobileNumber] = useState([]);
  const [analysisMessage, setAnalysisMessage] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate("DashBoardHeader");
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
  // console.log("hiii====");
  const CoachUrl =
    "http://3.215.18.129/get_trainer/?batch-code=VV_BP_15-07-21_68";
  useEffect(() => {
    fetch(CoachUrl)
      .then((response) => response.json())
      .then((json) => {
        setCoachData(json.trainer_df);
        setMobileNumber(json.trainer_df[0]["mobileNumber"]);

        // for (let i = 0; i <= json.trainer_df.length; i++) {
        //   setMobileNumber(json.trainer_df[i]["mobileNumber"]);

        //   console.log("Asmita", json.trainer_df[i]["mobileNumber"]);
        // }
      })

      .catch((error) => {
        console.error(error);
      });
  }, []);

  const CoachAnalysis = "http://3.215.18.129/bot_analysis/?file-name=G2";
  useEffect(() => {
    fetch(CoachAnalysis)
      .then((response) => response.json())
      .then((json) => {
        setAnalysisMessage(json.analysis_message[0]["analysis_message"]);
        setMobileNumber(json.trainer_df[0]["mobileNumber"]);

        console.log("Newinfo", json.analysis_message[0]["analysis_message"]);
      })

      .catch((error) => {
        console.error(error);
      });
  }, []);

  const Track = () => {
    let analysisMessageData = analysisMessage;
    console.log("analysisMessageData", analysisMessageData);
    return (
      <View
        style={
          {
            // justifyContent: "center",
            // width: "100%",
            // borderTopWidth: 20,
            // borderBottomWidth: 20,
            // // borderBottomColor: "#F4F6F7",
            // borderTopColor: "#F4F6F7",
            // padding: 10,
            // top: 20,
            // alignItems: "center",
            // backgroundColor: "white",
          }
        }
      >
        <View
          style={{
            width: "95%",

            // height: 100,
            // backgroundColor: "white",
            // padding: 20,
            // justifyContent: "flex-start",
            // alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              borderWidth: 0,
              borderRadius: 100,
              height: 65,
              width: 65,

              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#1390E0",
            }}
          >
            <Fontisto
              name="blogger"
              size={30}
              style={{
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 50,

                // backgroundColor: "#0084D6",
              }}
            />
          </View>
          <View style={{ justifyContent: "center", left: 10, width: "90%" }}>
            <Text style={{ fontWeight: "bold" }}>HealthifyMe Smart Scale</Text>
            <Text style={{ color: "gray", lineHeight: 18 }}>
              {analysisMessageData}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const StatcicWhatsApp = () => {
    // let MobileNumber = mobileNumber;

    // console.log("MobileNumber", MobileNumber);
    // Check for perfect 10 digit length
    // if (mobileNumber.length != 10) {
    //   alert("Please insert correct WhatsApp number");
    //   return;
    // }
    // Using 91 for India
    // You can change 91 with your country code
    let mobileno = 9987507676;
    let url = "whatsapp://send?text=" + "&phone=91" + mobileno;
    Linking.openURL(url)
      .then((data) => {
        console.log("WhatsApp Opened", url);
      })
      .catch(() => {
        alert("Make sure Whatsapp installed on your device");
      });
  };

  const StaticWhatsApp = () => {
    // let MobileNumber = mobileNumber;

    // console.log("MobileNumber", MobileNumber);
    // Check for perfect 10 digit length
    // if (mobileNumber.length != 10) {
    //   alert("Please insert correct WhatsApp number");
    //   return;
    // }
    // Using 91 for India
    // You can change 91 with your country code
    let mobilenum = 7219299108;
    let url = "whatsapp://send?text=" + "&phone=91" + mobilenum;
    Linking.openURL(url)
      .then((data) => {
        console.log("WhatsApp Opened", url);
      })
      .catch(() => {
        alert("Make sure Whatsapp installed on your device");
      });
  };

  const Item = ({ item }) => {
    // let MobileNumber = mobileNumber;
    const initiateWhatsApp = () => {
      // let MobileNumber = mobileNumber;

      // console.log("MobileNumber", MobileNumber);
      // Check for perfect 10 digit length
      if (mobileNumber.length != 10) {
        alert("Please insert correct WhatsApp number");
        return;
      }
      // Using 91 for India
      // You can change 91 with your country code
      let url = "whatsapp://send?text=" + "&phone=91" + item.mobileNumber;
      Linking.openURL(url)
        .then((data) => {
          console.log("WhatsApp Opened", url);
        })
        .catch(() => {
          alert("Make sure Whatsapp installed on your device");
        });
    };
    return (
      <View>
        <LinearGradient
          style={{
            width: "100%",
            // height: 100,
            // backgroundColor: "red",
            padding: 10,
            elevation: 1,
            // justifyContent: "center",
            alignItems: "center",
            padding: 20,
            // flexDirection: "row",
            marginVertical: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            // borderRadius: 20,
            borderBottomLeftRadius: 50,

            borderTopRightRadius: 50,
          }}
          colors={["white", "#89CFF0"]}
        >
          <View
            style={{
              width: "50%",
              // backgroundColor: "white",
              flexDirection: "row",
            }}
          >
            <Image
              style={{
                height: 40,
                width: 40,
                borderRadius: 50,

                resizeMode: "contain",
              }}
              source={require("../../../../../assets/Images/people.png")}
            />
            <View
              style={{
                height: 70,
                width: 0,
                borderWidth: 0.5,
                left: 5,
                borderColor: "gray",
              }}
            ></View>
            <View style={{ flexDirection: "column", left: 20 }}>
              <Text style={{ fontWeight: "bold" }}>{item.trainerName}</Text>

              {/* <Text style={{ color: "gray" }}>{item.mobileNumber}</Text> */}
            </View>
          </View>
          <View
            style={{ flexDirection: "column", justifyContent: "space-between" }}
          >
            <View
              style={{ flexDirection: "row", marginVertical: 8, bottom: 5 }}
            >
              <Image
                style={{ height: 23, width: 23 }}
                source={require("../../../../../assets/Images/skills2.png")}
              />
              <Text
                style={{
                  color: "gray",
                  left: 10,
                  fontWeight: "bold",
                  color: "gray",
                }}
              >
                {item.expertise}
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity
                onPress={initiateWhatsApp}
                style={{ flexDirection: "row" }}
              >
                <FontAwesome size={25} color="#28D146" name="whatsapp" />
                <Text
                  style={{
                    color: "gray",
                    left: 8,
                    fontWeight: "bold",
                    color: "gray",
                  }}
                >
                  {item.mobileNumber}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        width: "100%",
      }}
    >
      <View
        style={{
          height: 65,
          width: "100%",
          backgroundColor: "#0084D6",
          top: 30,

          padding: 10,

          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
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
          Contact Us
        </Text>
      </View>

      <View style={{ padding: 20, top: 40, backgroundColor: "white" }}>
        <ScrollView
          showsVerticalScrollIndicator={true}
          nestedScrollEnabled={true}
          style={{ backgroundColor: "white" }}
        >
          <FlatList
            data={coachData}
            renderItem={Item}
            keyExtractor={(item) => item.mobileNumber}
          />
        </ScrollView>
      </View>

      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          padding: 20,
          top: 30,
        }}
      >
        <LinearGradient
          style={{
            width: "100%",
            // height: 100,
            // backgroundColor: "red",
            padding: 10,
            elevation: 1,
            // justifyContent: "center",
            alignItems: "center",
            padding: 20,
            // flexDirection: "row",
            marginVertical: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            // borderRadius: 20,
            borderBottomLeftRadius: 50,

            borderTopRightRadius: 50,
          }}
          colors={["white", "#89CFF0"]}
        >
          <View
            style={{
              width: "50%",
              // backgroundColor: "white",
              flexDirection: "row",
            }}
          >
            <Image
              style={{
                height: 40,
                width: 40,
                borderRadius: 50,

                resizeMode: "contain",
              }}
              source={require("../../../../../assets/Images/people.png")}
            />
            <View
              style={{
                height: 70,
                width: 0,
                borderWidth: 0.5,
                left: 5,
                borderColor: "gray",
              }}
            ></View>
            <View style={{ flexDirection: "column", left: 20 }}>
              <Text style={{ fontWeight: "bold" }}>Shilpa Wankhade</Text>

              {/* <Text style={{ color: "gray" }}>{item.mobileNumber}</Text> */}
            </View>
          </View>
          <View
            style={{ flexDirection: "column", justifyContent: "space-between" }}
          >
            <View
              style={{ flexDirection: "row", marginVertical: 8, bottom: 5 }}
            >
              <Image
                style={{ height: 23, width: 23 }}
                source={require("../../../../../assets/Images/skills2.png")}
              />
              <Text
                style={{
                  color: "gray",
                  left: 10,
                  fontWeight: "bold",
                  color: "gray",
                }}
              >
                Buddy trainer
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity
                onPress={StatcicWhatsApp}
                style={{ flexDirection: "row" }}
              >
                <FontAwesome size={25} color="#28D146" name="whatsapp" />
                <Text
                  style={{
                    color: "gray",
                    left: 8,
                    fontWeight: "bold",
                    color: "gray",
                  }}
                >
                  9987507676
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>

        <LinearGradient
          style={{
            width: "100%",
            // height: 100,
            // backgroundColor: "red",
            padding: 10,
            elevation: 1,
            // justifyContent: "center",
            alignItems: "center",
            padding: 20,
            // flexDirection: "row",
            marginVertical: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            // borderRadius: 20,
            borderBottomLeftRadius: 50,

            borderTopRightRadius: 50,
          }}
          colors={["white", "#89CFF0"]}
        >
          <View
            style={{
              width: "50%",
              // backgroundColor: "white",
              flexDirection: "row",
            }}
          >
            <Image
              style={{
                height: 40,
                width: 40,
                borderRadius: 50,

                resizeMode: "contain",
              }}
              source={require("../../../../../assets/Images/people.png")}
            />
            <View
              style={{
                height: 70,
                width: 0,
                borderWidth: 0.5,
                left: 5,
                borderColor: "gray",
              }}
            ></View>
            <View style={{ flexDirection: "column", left: 20 }}>
              <Text style={{ fontWeight: "bold" }}>Nikita Gandhi</Text>

              {/* <Text style={{ color: "gray" }}>{item.mobileNumber}</Text> */}
            </View>
          </View>
          <View
            style={{ flexDirection: "column", justifyContent: "space-between" }}
          >
            <View
              style={{ flexDirection: "row", marginVertical: 8, bottom: 5 }}
            >
              <Image
                style={{ height: 23, width: 23 }}
                source={require("../../../../../assets/Images/skills2.png")}
              />
              <Text
                style={{
                  color: "gray",
                  left: 10,
                  fontWeight: "bold",
                  color: "gray",
                }}
              >
                For any queries
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity
                onPress={StaticWhatsApp}
                style={{ flexDirection: "row" }}
              >
                <FontAwesome size={25} color="#28D146" name="whatsapp" />
                <Text
                  style={{
                    color: "gray",
                    left: 8,
                    fontWeight: "bold",
                    color: "gray",
                  }}
                >
                  7219299108
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>

    // <View
    //   style={{
    //     backgroundColor: "white",
    //     width: "100%",
    //   }}
    // >
    //   <View
    //     style={{
    //       width: "100%",
    //       backgroundColor: "white",
    //     }}
    //   >
    //     <Image
    //       style={{
    //         height: 200,
    //         width: "100%",
    //         borderTopLeftRadius: 30,
    //         borderBottomLeftRadius: 30,
    //         top: 20,
    //         resizeMode: "cover",
    //       }}
    //       source={require("../../../../../assets/Images/PreAssesment.webp")}
    //     />
    //   </View>

    //   <View
    //     style={{
    //       width: "100%",
    //       justifyContent: "center",
    //       alignItems: "center",
    //       alignContent: "center",
    //       padding: 20,
    //     }}
    //   >
    //     <LinearGradient
    //       style={{
    //         width: "100%",
    //         // height: 100,
    //         // backgroundColor: "red",
    //         padding: 10,
    //         elevation: 1,
    //         // justifyContent: "center",
    //         alignItems: "center",
    //         padding: 20,
    //         // flexDirection: "row",
    //         marginVertical: 10,
    //         flexDirection: "row",
    //         justifyContent: "space-between",
    //         // borderRadius: 20,
    //         borderBottomLeftRadius: 50,

    //         borderTopRightRadius: 50,
    //       }}
    //       colors={["white", "#89CFF0"]}
    //     >
    //       <View
    //         style={{
    //           width: "50%",
    //           // backgroundColor: "white",
    //           flexDirection: "row",
    //         }}
    //       >
    //         <Image
    //           style={{
    //             height: 40,
    //             width: 40,
    //             borderRadius: 50,

    //             resizeMode: "contain",
    //           }}
    //           source={require("../../../../../assets/Images/people.png")}
    //         />
    //         <View
    //           style={{
    //             height: 70,
    //             width: 0,
    //             borderWidth: 0.5,
    //             left: 5,
    //             borderColor: "gray",
    //           }}
    //         ></View>
    //         <View style={{ flexDirection: "column", left: 20 }}>
    //           <Text style={{ fontWeight: "bold" }}>Shilpa Wankhade</Text>

    //           {/* <Text style={{ color: "gray" }}>{item.mobileNumber}</Text> */}
    //         </View>
    //       </View>
    //       <View
    //         style={{ flexDirection: "column", justifyContent: "space-between" }}
    //       >
    //         <View
    //           style={{ flexDirection: "row", marginVertical: 8, bottom: 5 }}
    //         >
    //           <Image
    //             style={{ height: 23, width: 23 }}
    //             source={require("../../../../../assets/Images/skills2.png")}
    //           />
    //           <Text
    //             style={{
    //               color: "gray",
    //               left: 10,
    //               fontWeight: "bold",
    //               color: "gray",
    //             }}
    //           >
    //             Buddy trainer
    //           </Text>
    //         </View>
    //         <View
    //           style={{ flexDirection: "row", justifyContent: "space-between" }}
    //         >
    //           <TouchableOpacity
    //             onPress={StatcicWhatsApp}
    //             style={{ flexDirection: "row" }}
    //           >
    //             <FontAwesome size={25} color="#28D146" name="whatsapp" />
    //             <Text
    //               style={{
    //                 color: "gray",
    //                 left: 8,
    //                 fontWeight: "bold",
    //                 color: "gray",
    //               }}
    //             >
    //               9987507676
    //             </Text>
    //           </TouchableOpacity>
    //         </View>
    //       </View>
    //     </LinearGradient>
    //   </View>

    //   <View
    //     style={{
    //       width: "100%",
    //       backgroundColor: "blue",
    //       padding: 10,
    //     }}
    //   >
    //     <ScrollView
    //       // showsVerticalScrollIndicator={true}
    //       style={{ backgroundColor: "red" }}
    //     >
    //       <FlatList
    //         data={coachData}
    //         renderItem={Item}
    //         keyExtractor={(item) => item.mobileNumber}
    //       />
    //     </ScrollView>
    //   </View>
    // </View>
  );
}

//  <View>
//    <View
//      style={{
//        justifyContent: "center",
//        padding: 10,
//        alignItems: "center",
//        height: 220,
//        backgroundColor: "white",
//        top: 20,
//      }}
//    >
//      <Image
//        style={{
//          height: "90%",
//          width: "100%",
//          borderTopLeftRadius: 20,
//          borderBottomLeftRadius: 20,

//          // borderBottomLeftRadius: 20,
//        }}
//        source={require("../../../../../assets/Images/PreAssesment.webp")}
//      />
//    </View>
//    <View
//      style={{
//        justifyContent: "center",
//        height: 200,
//        width: "100%",
//        backgroundColor: "white",
//      }}
//    >
//      <FlatList
//        data={coachData}
//        renderItem={Item}
//        keyExtractor={(item) => item.mobileNumber}
//      />
//    </View>

//    <View
//      style={{
//        width: "100%",
//        height: 150,
//        backgroundColor: "white",
//        justifyContent: "center",
//        top: 20,
//      }}
//    >
//      <Track />
//    </View>
//  </View>;
