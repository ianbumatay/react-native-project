// import { StatusBar} from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import Goal from './components/Goal'
import GoalsInput from './components/GoalsInput';

export default function App() {

  const [goals, setGoals] = useState([])

  const [isAddMode, setIsAddMode] = useState(false);


  const onPressHandler = (InputTitle) => {
    // setGoals([...goal, InputGoal]) 
    setGoals(currentState => [
      ...currentState,
      { id: Math.random().toString(), value: InputTitle }
    ])
    setIsAddMode(false);
  };

  const onDeleteHandler = (goalId) => {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  const cancelGoalHnadler = () => {
    setIsAddMode(false)
  }


  return (
    <View style={styles.container}>
      <Button
        title="Add Goal"
        onPress={() => setIsAddMode(true)}
      />
      <GoalsInput
        isAddMode={isAddMode}
        onPressFunc={onPressHandler}
        onCancelFunc={cancelGoalHnadler}
      />
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
