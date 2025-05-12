import React from "react"; // Import React library for building UI components
import {
  View, // Import View component for layout
  StyleSheet, // Import StyleSheet for styling
  Alert // Import Alert for displaying alerts
} from 'react-native';
import { Button } from "react-native-paper"; // Import Button component from react-native-paper library


// Define the PostRequestExample functional component
const PostRequestExample = () => {

  // Function to make a POST request
  const postExample = async () => {
    try {
      // Make a POST request to the API endpoint
      const response = await fetch('https://reqres.in/api/posts', {
        method: 'POST', // Specify HTTP method as POST
        headers: {
          'Content-Type': 'application/json', // Set content type to JSON
          'x-api-key': 'reqres-free-v1'  // Add API key in the headers
        },
        body: JSON.stringify({ postName: 'React updates' }) // Send data in the request body
      });

      // Parse the JSON response
      const data = await response.json();
      if (response.ok) { // Check if the response status is OK (200-299)
        console.log(data); // Log the response data to the console
        Alert.alert("Post created at:", data.createdAt || "No timestamp"); // Show success alert with timestamp
      } else {
        console.error(data); // Log the error response to the console
        Alert.alert("Error", data.error || "Request failed"); // Show error alert
      }

    } catch (error) { // Catch any errors during the request
      console.error(error); // Log the error to the console
      Alert.alert("Error", "Something went wrong."); // Show generic error alert
    }
  };

  // Render the UI
  return (
    <View style={styles.btn}> {/* Apply styles to the container */}
      {/* Button to trigger the POST request */}
      <Button mode="contained" onPress={postExample}>
        Click to make a Post request
      </Button>
    </View>
  );
};

// Define styles for the component
const styles = StyleSheet.create({
  btn: {
    marginTop: 60, // Add top margin
    marginHorizontal: 30 // Add horizontal margin
  }
});

// Main App component
const App = () => {
  return (
    <View>
      <PostRequestExample />
    </View>
  );
};

// Export the App component as default
export default App;