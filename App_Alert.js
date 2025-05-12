import React from 'react'; // Import React library to use React components and hooks
import {
  StyleSheet, // Import StyleSheet for styling the components
  View, // Import View component to create a container
  Button, // Import Button component to create a clickable button
  Alert // Import Alert to display alert dialogs
} from 'react-native'; // Import components from react-native library

// Define the main App component as the default export
export default function App() {

  // Function to display an alert dialog
  const alert = () => {
    Alert.alert( // Display an alert dialog
      "GeeksforGeeks", // Title of the alert
      "How are you!", // Message of the alert
      [
        {
          text: "Cancel", // Button with "Cancel" text
        },
        {
          text: "OK", // Button with "OK" text
        }
      ]
    );
  }

  // Return the UI of the App component
  return (
    <View style={styles.container}> {/* Container view with styles applied */}
      <Button title={"Click me"} onPress={alert} /> {/* Button with title "Click me" that triggers the alert function on press */}
    </View>
  );
}

// Define styles for the components
const styles = StyleSheet.create({
  container: { // Style for the container view
    flex: 1, // Take up the full height of the screen
    backgroundColor: '#fff', // Set background color to white
    alignItems: 'center', // Align items horizontally to the center
    justifyContent: 'center', // Align items vertically to the center
  },
});