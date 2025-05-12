// import required libraries
import React from "react";
// import TouchableHighlight and other components from react-native
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
} from "react-native";

// create a main functional component
export default function App() {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => {
          Alert.alert("Touchable Highlight pressed.");
        }}
        style={styles.touchable}
        activeOpacity={1}
        underlayColor="red"
      >
        <Text style={styles.text}>Click Me!</Text>
      </TouchableHighlight>
    </View>
  );
}

// create styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  touchable: {
    height: 50,
    width: 200,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
  text: {
    color: "#fff",
  },
});