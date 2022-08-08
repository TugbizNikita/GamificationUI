import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  BackHandler,
  FlatList,
  TouchableOpacity,
  Linking,
  Dimensions,
  ScrollView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useFocusEffect } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import ContactsCard from "../../Components/ContactsCard";

const { width, height } = Dimensions.get("window");

export default function Contacts({ navigation }) {
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

  const WhatsAppContactAditya = () => {
    let mobileno = 7007061232;
    let url = "whatsapp://send?text=" + "&phone=91" + mobileno;
    Linking.openURL(url)
      .then((data) => {
        console.log("WhatsApp Opened", url);
      })
      .catch(() => {
        alert("Make sure Whatsapp installed on your device");
      });
  };

  const WhatsAppContactShilpa = () => {
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

  const WhatsAppContactNikita = () => {
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

  return (
    <LinearGradient
      style={{
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
      colors={["#5899E2", "#FFFFFF"]}
    >
      <View
        style={{
          flex: 0.1,
          width: "100%",
          backgroundColor: "#0084D6",

          padding: 10,

          borderBottomStartRadius: 40,
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

      <View
        style={{
          width: "100%",

          flex: 0.9,

          padding: 20,
        }}
      >
        <ContactsCard
          name="Aditya Saxena"
          profile="Delivery Manager"
          mobilenumber="7007061232"
          onPress={WhatsAppContactAditya}
        />

        <ContactsCard
          name="Shilpa Wankhade"
          profile="Buddy trainer"
          mobilenumber="9987507676"
          onPress={WhatsAppContactShilpa}
        />

        <ContactsCard
          name="  Nikita Gandhi"
          profile="For any queries"
          mobilenumber="7219299108"
          onPress={WhatsAppContactNikita}
        />
      </View>
    </LinearGradient>
  );
}
