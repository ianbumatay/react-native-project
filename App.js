// import { StatusBar} from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {

  const [InputGoal, setInputGoal] = useState(" ");
  const [goals, setGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setInputGoal(enteredText);
  };

  const onPressHandler = () => {
    // setGoals([...goal, InputGoal]) 
    setGoals(currentState => [...currentState, InputGoal])
  }




  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add Text Here"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={InputGoal}
        />
        <Button
          title="Add"
          onPress={onPressHandler} />
      </View>
      <View>
        <ScrollView>
          {goals.map((goal) => { return <View key={goal.id} style={styles.list}><Text> {goal} </Text></View> })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 70
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textInput: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  list: {
    padding: 10,
    // margin: 10 
    marginVertical: 10,//margin on top and buttom 
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'green'


  }
});
