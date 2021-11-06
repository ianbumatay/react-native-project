// import { StatusBar} from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import Goals from './components/Goals'
import GoalsInput from './components/GoalsInput';

export default function App() {

  const [goals, setGoals] = useState([])


  const onPressHandler = (InputTitle) => {
    // setGoals([...goal, InputGoal]) 
    setGoals(currentState => [...currentState,
    { key: Math.random().toString(), value: InputTitle }
    ])
  }


  return (
    <View style={styles.container}>
      <GoalsInput onPressFunc={onPressHandler} />
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
});
