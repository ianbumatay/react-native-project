// import { StatusBar} from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import Goals from './components/Goals'

export default function App() {

  const [InputGoal, setInputGoal] = useState(" ");
  const [goals, setGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setInputGoal(enteredText);
  };

  const onPressHandler = () => {
    // setGoals([...goal, InputGoal]) 
    setGoals(currentState => [...currentState,
    { key: Math.random().toString(), value: InputGoal }
    ])
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

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={itemData => <Goals title={itemData.item.value} />}
      />

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



});
