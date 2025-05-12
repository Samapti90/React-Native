// Import React and useState hook from React library
import React, { useState } from 'react';
import {
  StyleSheet, // Import StyleSheet for styling
  Text, // Import Text component for displaying text
  View, // Import View component for layout
  Switch // Import Switch component for toggle functionality
} from 'react-native'; // Import components from react-native library

// Define the main App component
export default function App() {
  // Declare a state variable 'Enable' with initial value 'false' and a function 'setEnable' to update it
  const [Enable, setEnable] = useState(false);

  // Function to toggle the state of 'Enable'
  const toggle = (state) => {
    // Update the state with the new value
    setEnable(state);
  }

  return (
    <View style={styles.container}> {/* Main container with styling */}
      {/* Text color changes based on the 'Enable' state */}
      <Text style={{ color: Enable ? "red" : "green" }}>
        {/* Displayed text */}
        GeeksforGeeks
      </Text>
      <Switch
        trackColor={{ false: "#43f746", true: "#63dff2" }} // Set track color for the switch based on the state
        thumbColor={Enable ? "#faf68c" : "#e243f7"} // Set thumb color for the switch based on the state
        onValueChange={toggle} // Call 'toggle' function when the switch value changes
        value={Enable} // Bind the switch value to the 'Enable' state
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { // Style for the main container
    flex: 1, // Use full height of the screen
    alignItems: 'center', // Center align items horizontally
    justifyContent: 'center', // Center align items vertically
  },
});