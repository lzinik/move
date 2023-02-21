import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const App = () => {
  const handlePress = () => {
    fetch("https://login.uber.com/oauth/v2/authorize?client_id=J2R0JhObZEoRNZtvAVe7r8BfY-Gnqacs&client_secret=l1D-UakFaRJjYtZVjWeJeXTC9zv6oe84JsakfWg&grant_type=client_credentials&scope=SPACE_DELIMITED_LIST_OF_SCOPES", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
      }
    }).then(response => console.log(response))
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title='Click me' onPress={handlePress} />
      <StatusBar style="auto" />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;