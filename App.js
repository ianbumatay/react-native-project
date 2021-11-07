// import { StatusBar} from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Goal from './components/Goal'
import GoalsInput from './components/GoalsInput';

export default function App() {

  const [goals, setGoals] = useState([])


  const onPressHandler = (InputTitle) => {
    // setGoals([...goal, InputGoal]) 
    setGoals(currentState => [
      ...currentState,
      { key: Math.random().toString(), value: InputTitle }
    ])
  } 

  const onDeleteHandler = () => {
    setGoals(currentGoals => {
      return currentGoals.filter((goal)=> {goal.id !== goal_id});
    });
  }


  return (
    <View style={styles.container}>
      <GoalsInput onPressFunc={onPressHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={itemData => 
          <Goal 
            id={itemData.item.id}
            title={itemData.item.value} 
            onDelete={onDeleteHandler}
          />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 70
  },
});
