// Importing the useState hook from React
import { useState } from "react";
// Importing necessary components from React Native
import {
  StyleSheet,  // for styling components
  View,        // for creating a container
  Text,        // for displaying text
  Button       // for creating a button
} from "react-native";
// Importing axios for making HTTP requests
import axios from "axios";

// Defining the main App component
export default function App() {
  // Declaring a state variable 'advice' to store the advice text
  const [advice, setAdvice] = useState("");

  // Function to generate a random ID between a given range (min and max)
  const getRandomId = (min, max) => {
    min = Math.ceil(min); // Ensuring min is rounded up
    max = Math.floor(max); // Ensuring max is rounded down
    // Returning a random integer between min and max (inclusive) as a string
    return (Math.floor(Math.random() *
      (max - min + 1)) + min).toString();
  };

  // Function to fetch advice from the API
  const getAdvice = () => {
    axios
      .get("http://api.adviceslip.com/advice/" +
        getRandomId(1, 200)) // Fetching advice using a random ID
      .then((response) => {
        // Updating the 'advice' state with the fetched advice
        setAdvice(response.data.slip.advice);
      });
  };

  // Rendering the UI
  return (
    <View style={styles.container}>
      {/* Displaying the fetched advice */}
      <Text style={styles.advice}>{advice}</Text>
      {/* Button to trigger the getAdvice function */}
      <Button title="Get Advice"
        onPress={getAdvice} color="green" />
    </View>
  );
}

// Defining styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes the container take up the full screen
    backgroundColor: "#fff", // Sets the background color to white
    alignItems: "center", // Centers content horizontally
    justifyContent: "center", // Centers content vertically
  },
  advice: {
    fontSize: 20, // Sets the font size for the advice text
    fontWeight: "bold", // Makes the advice text bold
    marginHorizontal: 20, // Adds horizontal margin to the advice text
  },
});