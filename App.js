import { StatusBar} from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() { 

  const [outputText, setOutputText] = useState("Ian's Raact Native App")


  return (
    <View style={styles.container}>
      <Text>{outputText} </Text>
      <Button title="Press Button" onPress={()=> setOutputText("New Text")}/>
      <StatusBar style="auto" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
