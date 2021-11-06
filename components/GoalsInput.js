import React from 'react'; 
import {StyleSheet, View, TextInput, Button } from 'react-native'; 

const GoalsInput = () => { 

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
    
    return(
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


    );
}; 

export default GoalsInput  

const styles = StylSheet.create({
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

})

