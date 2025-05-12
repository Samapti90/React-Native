// Import React and Component from react library
import React from "react"; 
// Import necessary components from react-native
import { StyleSheet, Text, View, FlatList } from "react-native"; 
// Import SearchBar component from react-native-elements library
import { SearchBar } from "react-native-elements"; 

// Sample data to display in the FlatList
const DATA = [
  { id: "1", title: "Data Structures" },
  { id: "2", title: "STL" },
  { id: "3", title: "C++" },
  { id: "4", title: "Java" },
  { id: "5", title: "Python" },
  { id: "6", title: "CP" },
  { id: "7", title: "ReactJs" },
  { id: "8", title: "NodeJs" },
  { id: "9", title: "MongoDb" },
  { id: "10", title: "ExpressJs" },
  { id: "11", title: "PHP" },
  { id: "12", title: "MySql" },
];

// Functional component to render each item in the FlatList
const Item = ({ title }) => (
  <View style={styles.item}> {/* Style for each item */}
    <Text style={styles.itemText}>{title}</Text> {/* Display the title */}
  </View>
);

export default Search = () => {
  // State to manage the filtered data and search input
  const [data, setData] = React.useState(DATA);
  // State to manage the search input value
  const [searchValue, setSearchValue] = React.useState(""); 
  // Ref to hold the original data
  const arrayholder = React.useRef(DATA); 

  // Function to handle search functionality
  const searchFunction = (text) => {
    const updatedData = arrayholder.current.filter((item) => {
      const itemData = item.title.toUpperCase(); // Convert item title to uppercase
      const textData = text.toUpperCase(); // Convert search text to uppercase
      return itemData.includes(textData); // Check if item title includes the search text
    });
    setData(updatedData); // Update the filtered data
    setSearchValue(text); // Update the search value
  };

  return (
    <View style={styles.container}> {/* Main container style */}
      {/* SearchBar component for user input */}
      <SearchBar
        placeholder="Search Here..." // Placeholder text for the search bar
        lightTheme // Use light theme for the search bar
        round // Make the search bar round
        value={searchValue} // Bind the search value to the state
        onChangeText={searchFunction} // Call searchFunction on text change
        autoCorrect={false} // Disable auto-correct
        backgroundColor="white" // Background color of the search bar
        containerStyle={{
          backgroundColor: "white", // Background color of the container
          borderTopWidth: 0, // Remove top border
          borderBottomWidth: 0, // Remove bottom border
          padding: 10, // Padding around the container
          borderColor: "black", // Border color
        }}
        inputContainerStyle={{
          backgroundColor: "lightgrey", // Background color of the input container
          borderRadius: 10, // Rounded corners for the input container
        }}
        inputStyle={{
          backgroundColor: "white", // Background color of the input field
          borderRadius: 10, // Rounded corners for the input field
          padding: 10, // Padding inside the input field
        }}
        searchIcon={{ size: 24, color: "black" }} // Style for the search icon
        clearIcon={{ size: 24, color: "black" }} // Style for the clear icon
        cancelIcon={{ size: 24, color: "black" }} // Style for the cancel icon
      />
      {/* FlatList to display the filtered data */}
      <FlatList
        data={data} // Data to display in the list
        renderItem={({ item }) => <Item title={item.title} />} // Render each item using the Item component
        keyExtractor={(item) => item.id} // Unique key for each item
      />
    </View>
  );
};


// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up the full screen
    marginTop: 30, // Margin from the top
    padding: 10, // Padding inside the container
  },
  item: {
    backgroundColor: "green", // Background color for each item
    padding: 20, // Padding inside each item
    marginVertical: 8, // Vertical margin between items
    marginHorizontal: 16, // Horizontal margin between items
    borderRadius: 8, // Rounded corners for each item
  },
  itemText: {
    color: "white", // Text color
    fontSize: 18, // Font size for the text
  },
});