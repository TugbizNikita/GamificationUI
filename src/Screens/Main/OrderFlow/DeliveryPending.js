import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Track from "./DeliveryPendingNested/Track";
import OutOfDelivery from "./DeliveryPendingNested/OutOfDelivery";
import Delivered from "./DeliveryPendingNested/Delivered";
import PaymentReceived from "./DeliveryPendingNested/PaymentReceived";

const Tab = createMaterialTopTabNavigator();

const { height, width } = Dimensions.get("window");

function MiddelTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#FFFF",
          height: 60,
        },
      }}
    >
      <Tab.Screen
        options={{
          title: ({ focused }) => (
            <View
              style={{
                height: 42,
                borderRadius: 10,
                width: 42,
                marginTop: 1,
                backgroundColor: focused ? "#253f67" : "white",
                justifyContent: "center",
                borderWidth: 1,
                borderColor: "#253f67",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontFamily: "Helvetica-Bold",
                  lineHeight: 20,
                  fontSize: 17,
                  color: focused ? "#FFFF" : "#253f67",
                }}
              >
                Track
              </Text> */}

              <Image
                source={require("../../../../assets/Images/filter.png")}
                style={{
                  height: 40,
                  width: 40,
                  tintColor: focused ? "#FFFF" : "#253f67",
                }}
              />
            </View>
          ),
        }}
        name="Track"
        component={Track}
      />
      <Tab.Screen
        options={{
          title: ({ focused }) => (
            <View
              style={{
                height: 40,
                borderRadius: 17,
                width: 70,
                marginTop: 1,
                borderWidth: 1,
                backgroundColor: focused ? "#253f67" : "white",
                justifyContent: "center",
                borderColor: "#253f67",
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontFamily: "Helvetica-Bold",
                  fontSize: 11,
                  color: focused ? "#FFFF" : "#253f67",
                }}
              >
                Out for delivery
              </Text>
            </View>
          ),
        }}
        name="OutOfDelivery"
        component={OutOfDelivery}
      />
      <Tab.Screen
        options={{
          title: ({ focused }) => (
            <View
              style={{
                height: 40,
                borderRadius: 17,
                width: 70,
                marginTop: 1,
                borderWidth: 1,
                backgroundColor: focused ? "#253f67" : "white",
                justifyContent: "center",
                borderColor: "#253f67",
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontFamily: "Helvetica-Bold",
                  fontSize: 11,
                  color: focused ? "#FFFF" : "#253f67",
                }}
              >
                Delivered
              </Text>
            </View>
          ),
        }}
        name="Delivered"
        component={Delivered}
      />
      <Tab.Screen
        options={{
          title: ({ focused }) => (
            <View
              style={{
                height: 40,
                borderRadius: 17,
                width: 70,
                marginTop: 1,
                borderWidth: 1,
                backgroundColor: focused ? "#253f67" : "white",
                justifyContent: "center",
                borderColor: "#253f67",
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontFamily: "Helvetica-Bold",
                  fontSize: 11,
                  color: focused ? "#FFFF" : "#253f67",
                }}
              >
                Payment Received
              </Text>
            </View>
          ),
        }}
        name="PaymentReceived"
        component={PaymentReceived}
      />
    </Tab.Navigator>
  );
}

export default function DeliveryPending() {
  return (
    <View style={styles.Container}>
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
          borderBottomWidth: 2,
          borderBottomColor: "#253f67",
          paddingBottom: 20,
          height: height,
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
          Locate All Orders on Map
        </Text>

        <View
          style={{
            height: 120,
            width: "90%",
            backgroundColor: "white",
            marginTop: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              height: "100%",
              width: "70%",
              backgroundColor: "#C1C0D3",
              borderRadius: 14,
              marginTop: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../../../../assets/Images/map.png")}
              style={{ height: 66, width: 66 }}
            />
          </View>
        </View>
        <View
          style={{
            height: "90%",
            width: "90%",
            backgroundColor: "white",
            marginTop: 20,
          }}
        >
          <MiddelTabs />
        </View>
      </View>
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
