import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

// create the app
function App() {
  return (
    <View style={styles.container}>
      <ActivityIndicator
       size="large" 
       color="lightgreen"/>
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text : {
    marginTop : 20,
    color: '#fff'
  }
  
});

// export the app
export default App;