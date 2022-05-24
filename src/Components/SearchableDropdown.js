import React, { useState, useEffect } from "react";

// import all the components we are going to use
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

// import SearchableDropdown component
import SearchableDropdown from "react-native-searchable-dropdown";

// Item array for the dropdown
const items = [
  // name key is must. It is to show the text in front
  { id: 1, name: "angellist" },
  { id: 2, name: "codepen" },
  { id: 3, name: "envelope" },
  { id: 4, name: "etsy" },
  { id: 5, name: "facebook" },
  { id: 6, name: "foursquare" },
  { id: 7, name: "github-alt" },
  { id: 8, name: "github" },
  { id: 9, name: "gitlab" },
  { id: 10, name: "instagram" },
];

const SearchableDropdownComponent = () => {
  const [serverData, setServerData] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SearchableDropdown
          onTextChange={(text) => console.log(text)}
          // Listner on the searchable input
          onItemSelect={(item) => alert(JSON.stringify(item))}
          // Called after the selection
          containerStyle={{ padding: 5 }}
          // Suggestion container style
          textInputStyle={{
            // Inserted text style
            padding: 12,
            borderWidth: 1,
            borderColor: "#ccc",
            backgroundColor: "#FAF7F6",
          }}
          itemStyle={{
            // Single dropdown item style
            padding: 10,
            marginTop: 2,
            backgroundColor: "#FAF9F8",
            borderColor: "#bbb",
            borderWidth: 1,
          }}
          itemTextStyle={{
            // Text style of a single dropdown item
            color: "#222",
          }}
          itemsContainerStyle={{
            // Items container style you can pass maxHeight
            // To restrict the items dropdown hieght
            maxHeight: "60%",
          }}
          items={items}
          // Mapping of item array
          defaultIndex={2}
          // Default selected item index
          placeholder="placeholder"
          // place holder for the search input
          resPtValue={false}
          // Reset textInput Value with true and false state
          underlineColorAndroid="transparent"
          // To remove the underline from the android input
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchableDropdownComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  titleText: {
    padding: 8,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  headingText: {
    padding: 8,
  },
});
