import React, { useState, useEffect } from "react";
import { View, Text, Button, ScrollView, FlatList } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

const header = ["DAYS", "STARTDATE", "ENDDATE", "TRAINERNAME", "ACTIVITY"];

// import { ScrollView } from "react-native-gesture-handler";
// import { Button } from "react-native-paper";
export default function Scheduled() {
  const [batchSchedule, setBatchSchedule] = useState([]);

  const dashboardData =
    "http://3.215.18.129/dashboard/?login-Id=gupta.sanket007@gmail.com";

  useEffect(() => {
    fetch(dashboardData)
      .then((response) => response.json())

      .then((json) => {
        setBatchSchedule(json.batchSchedule[0]["schedule"]);
        console.log("batchSchedule===>", json.batchSchedule[0]["schedule"]);
      })

      .catch((error) => {
        console.error(error);
      });
  }, []);

  array = batchSchedule;
  // console.log("array=>", array);

  const arraydata = [];

  batchSchedule.map((item) => {
    arraydata.push([
      item.days,
      item.startDate.split(" ")[0],
      item.endDate.split(" ")[0],
      item.trainerName,
      item.activity,
    ]);
  });
  console.log("arraydata", arraydata);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, backgroundColor: "white" }}
    >
      <View
        style={{
          marginTop: 120,
          // padding: 20,
          backgroundColor: "white",
          justifyContent: "center",
          bottom: 10,
          // alignItems: "center",
          bottom: 100,
        }}
      >
        <Table
          borderStyle={{
            borderWidth: 2,
            backgroundColor: "white",
            borderColor: "#c8e1ff",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Row
            textStyle={{ textAlign: "center", fontSize: 9, fontWeight: "bold" }}
            data={header}
          />

          <Rows
            textStyle={{ textAlign: "center", fontSize: 10 }}
            data={arraydata}
          />
        </Table>
      </View>
    </ScrollView>
  );
}
