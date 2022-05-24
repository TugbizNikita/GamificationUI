import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

const { height, width } = Dimensions.get("window");

const CELL_COUNT = 4;

export default function OTP({ navigation, route }) {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      mail: "",
      otp: route.params.paramKey,
    }),
  };

  console.log("otpcode", route.params.paramKey);
  const onSubmitHandler = async () => {
    try {
      await fetch("http://3.215.18.129/verify_otp/", requestOptions).then(
        (response) => {
          response.json().then((data) => {
            console.log("***********");
            if (response.Success === 1) {
              alert("Login Successfully");
            } else if (response.Success === 0) {
              alert("Please fill the correct OTP");
            }
            console.log("Otp Api Call", data);

            // console.log("otp", otp);

            // Alert.alert("Post created at : ", data);
          });
          navigation.navigate("MyTabs");
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  console.log("otpNumber", value);
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "white" }}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={{
          height: height,
          width: width,
          alignItems: "center",
          justifyContent: "flex-end",
          backgroundColor: "white",
          // flex: 1,
          paddingBottom: 0,
        }}
      >
        <View
          style={{
            width: width,
            flex: 0.4,
            paddingTop: 0,
            backgroundColor: "transparent",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: width,
              flex: 0.3,
              paddingTop: 10,
              backgroundColor: "transparent",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 40,
            }}
          >
            {/* <Image
              source={require("../../../assets/Images/otp.png")}
              style={{ height: 120, width: 120, borderRadius: 0 }}
            /> */}

            <Image
              source={require("../../assets/Images/NovelLogo.png")}
              style={{ height: 65, width: 281, top: 0 }}
            />
          </View>
        </View>
        <View
          style={{
            flex: 0.7,
            backgroundColor: "#0084D6",
            width: width,
            borderTopStartRadius: 100,
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "60%",
              alignItems: "center",
              justifyContent: "center",
              height: 70,
              marginTop: 20,
            }}
          >
            <Text
              style={{
                color: "white",
                lineHeight: 20,
                fontSize: 15,
                textAlign: "center",
                fontFamily: "Helvetica",
              }}
            >
              Enter 4 digit OTP sent to your Email
            </Text>
          </View>

          <SafeAreaView style={styles.root}>
            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              placeholder="0"
              renderCell={({ index, symbol, isFocused }) => (
                <View
                  // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
                  onLayout={getCellOnLayoutHandler(index)}
                  key={index}
                  style={[styles.cellRoot, isFocused && styles.focusCell]}
                >
                  <Text style={styles.cellText}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                </View>
              )}
            />
          </SafeAreaView>
          <View
            style={{
              height: 50,
              flexDirection: "row",
              width: width,
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            {/* <Text
              style={{
                right: 33,
                fontFamily: "Helvetica",
                fontSize: 19,
                color: "#B7BEBB",
              }}
            >
              Resend
            </Text> */}
            <Text
              style={{
                right: 33,
                fontSize: 20,
                color: "white",
                marginLeft: 8,
                fontFamily: "Helvetica-Bold",
              }}
            >
              (60)
            </Text>
          </View>
          <TouchableOpacity
            onPress={onSubmitHandler}
            style={{
              height: 40,
              width: width - 80,
              backgroundColor: "white",
              borderRadius: 20,
              justifyContent: "center",
              marginTop: 0,
            }}
          >
            <Text
              style={{
                color: "#0084D6",
                fontFamily: "bold",
                textAlign: "center",
                fontSize: 17,
              }}
            >
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: "100%",
    paddingTop: 31,
    width: width,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#253f67",
  },
  root: { padding: 2, minHeight: 20, marginTop: 10 },
  title: { textAlign: "center", fontSize: 20 },
  codeFieldRoot: {
    marginTop: 1,
    width: width - 65,
    marginLeft: "auto",
    marginRight: "auto",
    height: 50,
  },
  cellRoot: {
    height: 50,
    width: 50,
    backgroundColor: "#cfe2f3",
    borderRadius: 16,
    alignItems: "center",
    fontSize: 20,
    textAlign: "center",
    justifyContent: "center",
  },
  cellText: {
    color: "#000",
    fontSize: 26,
    textAlign: "center",
  },
  focusCell: {
    borderBottomColor: "#007AFF",
    borderBottomWidth: 0.0,
  },
});

// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   Dimensions,
//   TouchableOpacity,
//   ScrollView,
//   SafeAreaView,
// } from "react-native";
// import {
//   CodeField,
//   Cursor,
//   useBlurOnFulfill,
//   useClearByFocusCell,
// } from "react-native-confirmation-code-field";

// const { height, width } = Dimensions.get("window");

// const CELL_COUNT = 4;

// export default function Verify({ navigation }) {
//   const [value, setValue] = useState("");
//   const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
//   const [props, getCellOnLayoutHandler] = useClearByFocusCell({
//     value,
//     setValue,
//   });

//   return (
//     <ScrollView
//       style={{ flex: 1, backgroundColor: "white" }}
//       showsVerticalScrollIndicator={false}
//     >
//       <View
//         style={styles.Container}
//       >
//         <View
//           style={styles.SecondContainer}
//         >
//           <View
//             style={styles.ThirdContainer}
//           >
//             <Image
//               source={require("../LocallyTImages/otp.png")}
//               style={{ height: 120, width: 120, borderRadius: 0 }}
//             />

//             <Text
//               style={styles.VerifyText}
//             >
//               Verify OTP
//             </Text>
//           </View>
//         </View>
//         <View
//           style={styles.LowerView}
//         >
//           <View
//             style={styles.LowerView1}
//           >
//             <Text
//               style={styles.Enter}
//             >
//               Enter 4 digit OTP sent to your mobile number
//             </Text>
//           </View>

//           <SafeAreaView style={styles.root}>
//             <CodeField
//               ref={ref}
//               {...props}
//               value={value}
//               onChangeText={setValue}
//               cellCount={CELL_COUNT}
//               rootStyle={styles.codeFieldRoot}
//               keyboardType="number-pad"
//               textContentType="oneTimeCode"
//               placeholder="0"
//               renderCell={({ index, symbol, isFocused }) => (
//                 <View
//                   onLayout={getCellOnLayoutHandler(index)}
//                   key={index}
//                   style={[styles.cellRoot, isFocused && styles.focusCell]}
//                 >
//                   <Text style={styles.cellText}>
//                     {symbol || (isFocused ? <Cursor /> : null)}
//                   </Text>
//                 </View>
//               )}
//             />
//           </SafeAreaView>
//           <View
//             style={styles.ResendView}
//           >
//             <Text
//               style={{
//                 right: 33,
//                 fontFamily: "Helvetica",
//                 fontSize: 19,
//                 color: "#B7BEBB",
//               }}
//             >
//               Resend
//             </Text>
//             <Text
//               style={styles.Sixtee}
//             >
//               (60)
//             </Text>
//           </View>
//           <TouchableOpacity
//             onPress={() => navigation.navigate("HeaderTabs")}
//             style={styles.SubmitButton}
//           >
//             <Text
//               style={styles.SubmitText}
//             >
//               Submit
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ScrollView>

//   );
// }

// const styles = StyleSheet.create({
//   Container: {
//     height: height,
//     width: width,
//     alignItems: "center",
//     justifyContent: "flex-end",
//     backgroundColor: "#253f67",
//   },
//   root: { padding: 2, minHeight: 20, marginTop: 10 },
//   title: { textAlign: "center", fontSize: 20 },
//   codeFieldRoot: {
//     marginTop: 1,
//     width: width - 65,
//     marginLeft: "auto",
//     marginRight: "auto",
//     height: 50,
//   },
//   cellRoot: {
//     height: 50,
//     width: 50,
//     backgroundColor: "#cfe2f3",
//     borderRadius: 16,
//     alignItems: "center",
//     fontSize: 20,
//     textAlign: "center",
//     justifyContent: "center",
//   },
//   cellText: {
//     color: "#000",
//     fontSize: 26,
//     textAlign: "center",
//   },
//   focusCell: {
//     borderBottomColor: "#007AFF",
//     borderBottomWidth: 0.0,
//   },
//   SecondContainer: {
//     width: width,
//     flex: 0.4,
//     backgroundColor: "transparent",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   ThirdContainer: {
//     width: width,
//     flex: 0.3,
//     paddingTop: 10,
//     backgroundColor: "transparent",
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 40,
//   },
//   VerifyText: {
//     color: "white",
//     marginLeft: 10,
//     fontSize: 23,
//     fontFamily: "Helvetica-Bold",
//     textAlign: "center",
//     marginTop: 5,
//   },
//   LowerView: {
//     flex: 0.7,
//     backgroundColor: "white",
//     width: width,
//     borderTopStartRadius: 100,
//     alignItems: "center",
//   },
//   LowerView1: {
//     width: "60%",
//     alignItems: "center",
//     justifyContent: "center",
//     height: 70,
//     marginTop: 30,
//   },
//   Enter: {
//     color: "#253f67",
//     lineHeight: 20,
//     fontSize: 17,
//     textAlign: "center",
//     fontFamily: "Helvetica",
//   },
//   ResendView: {
//     height: 55,
//     flexDirection: "row",
//     width: width,
//     alignItems: "center",
//     justifyContent: "flex-end",
//   },
//   Sixtee: {
//     right: 33,
//     fontSize: 20,
//     color: "#253f67",
//     marginLeft: 8,
//     fontFamily: "Helvetica-Bold",
//   },
//   SubmitButton: {
//     height: 44,
//     width: width - 197,
//     backgroundColor: "#253f67",
//     borderRadius: 39,
//     justifyContent: "center",
//   },
//   SubmitText: {
//     color: "white",
//     textAlign: "center",
//     fontSize: 21,
//     fontFamily: "Helvetica",
//   },
// });

// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   Dimensions,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
//   Keyboard,
//   ScrollView,
//   SafeAreaView,
// } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome5";
// import {
//   CodeField,
//   Cursor,
//   useBlurOnFulfill,
//   useClearByFocusCell,
// } from "react-native-confirmation-code-field";

// const { height, width } = Dimensions.get("window");

// const CELL_COUNT = 4;

// export default function OTP({ navigation, route }) {
//   const [otp, setOtp] = useState("");
//   const ref = useBlurOnFulfill({ otp, cellCount: CELL_COUNT });
//   const [props, getCellOnLayoutHandler] = useClearByFocusCell({
//     otp,
//     setOtp,
//   });

//   const requestOptions = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       mail: "",
//       otp: route.params.paramKey,
//     }),
//   };

//   console.log("otpcode", route.params.paramKey);
//   const onSubmitHandler = async () => {
//     try {
//       await fetch("http://3.215.18.129/verify_otp/", requestOptions).then(
//         (response) => {
//           response.json().then((data) => {
//             console.log("***********");

//             console.log("dataaa", data);
//             console.log("dataaa otp", otp);
//             // console.log("otp", otp);

//             // Alert.alert("Post created at : ", data);
//           });
//           navigation.navigate("MyTabs");
//         }
//       );
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   console.log("requestOption", requestOptions);

//   return (
//     <ScrollView
//       style={{ flex: 1, backgroundColor: "white" }}
//       showsVerticalScrollIndicator={false}
//     >
//       <View
//         style={{
//           height: height,
//           width: width,
//           alignItems: "center",
//           justifyContent: "flex-end",
//           backgroundColor: "#253f67",
//           // flex: 1,
//           paddingBottom: 0,
//         }}
//       >
//         <View
//           style={{
//             width: width,
//             flex: 0.4,
//             paddingTop: 0,
//             backgroundColor: "transparent",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <View
//             style={{
//               width: width,
//               flex: 0.3,
//               paddingTop: 10,
//               backgroundColor: "transparent",
//               alignItems: "center",
//               justifyContent: "center",
//               marginTop: 40,
//             }}
//           >
//             {/* <Image
//               source={require("../../../assets/Images/otp.png")}
//               style={{ height: 120, width: 120, borderRadius: 0 }}
//             /> */}

//             <Text
//               style={{
//                 color: "white",
//                 marginLeft: 10,
//                 fontSize: 23,
//                 fontFamily: "Helvetica-Bold",
//                 textAlign: "center",
//                 marginTop: 5,
//               }}
//             >
//               Verify OTP
//             </Text>
//           </View>
//         </View>
//         <View
//           style={{
//             flex: 0.7,
//             backgroundColor: "white",
//             width: width,
//             borderTopStartRadius: 100,
//             alignItems: "center",
//           }}
//         >
//           <View
//             style={{
//               width: "60%",
//               alignItems: "center",
//               justifyContent: "center",
//               height: 70,
//               marginTop: 20,
//             }}
//           >
//             <Text
//               style={{
//                 color: "#253f67",
//                 lineHeight: 25,
//                 fontSize: 15,
//                 textAlign: "center",
//                 fontFamily: "Helvetica",
//               }}
//             >
//               Enter 4 digit OTP sent to your email
//             </Text>
//           </View>

//           <SafeAreaView style={styles.root}>
//             <CodeField
//               ref={ref}
//               {...props}
//               value={otp}
//               onChangeText={setOtp}
//               cellCount={CELL_COUNT}
//               rootStyle={styles.codeFieldRoot}
//               keyboardType="number-pad"
//               textContentType="oneTimeCode"
//               placeholder="0"
//               renderCell={({ index, symbol, isFocused }) => (
//                 <View
//                   // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
//                   onLayout={getCellOnLayoutHandler(index)}
//                   key={index}
//                   style={[styles.cellRoot, isFocused && styles.focusCell]}
//                 >
//                   <Text style={styles.cellText}>
//                     {symbol || (isFocused ? <Cursor /> : null)}
//                   </Text>
//                 </View>
//               )}
//             />
//           </SafeAreaView>
//           <View
//             style={{
//               height: 50,
//               flexDirection: "row",
//               width: width,
//               alignItems: "center",
//               justifyContent: "flex-end",
//             }}
//           >
//             {/* <Text
//               style={{
//                 right: 33,
//                 fontFamily: "Helvetica",
//                 fontSize: 19,
//                 color: "#B7BEBB",
//               }}
//             >
//               Resend
//             </Text> */}
//             <Text
//               style={{
//                 right: 33,
//                 fontSize: 20,
//                 color: "#253f67",
//                 marginLeft: 8,
//                 fontFamily: "Helvetica-Bold",
//               }}
//             >
//               (60)
//             </Text>
//           </View>
//           <TouchableOpacity
//             onPress={onSubmitHandler}
//             style={{
//               height: 40,
//               width: width - 190,
//               backgroundColor: "#fb5414",
//               borderRadius: 39,
//               justifyContent: "center",
//               marginTop: 0,
//             }}
//           >
//             <Text
//               style={{
//                 color: "white",
//                 fontFamily: "Helvetica-Bold",
//                 textAlign: "center",
//                 fontSize: 17,
//               }}
//             >
//               Submit
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   Container: {
//     height: "100%",
//     paddingTop: 31,
//     width: width,
//     // alignItems: "center",
//     // justifyContent: "center",
//     backgroundColor: "#253f67",
//   },
//   root: { padding: 2, minHeight: 20, marginTop: 10 },
//   title: { textAlign: "center", fontSize: 20 },
//   codeFieldRoot: {
//     marginTop: 1,
//     width: width - 65,
//     marginLeft: "auto",
//     marginRight: "auto",
//     height: 50,
//   },
//   cellRoot: {
//     height: 50,
//     width: 50,
//     backgroundColor: "#cfe2f3",
//     borderRadius: 16,
//     alignItems: "center",
//     fontSize: 20,
//     textAlign: "center",
//     justifyContent: "center",
//   },
//   cellText: {
//     color: "#000",
//     fontSize: 26,
//     textAlign: "center",
//   },
//   focusCell: {
//     borderBottomColor: "#007AFF",
//     borderBottomWidth: 0.0,
//   },
// });
