import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const GoalsInput = (props) => {

    const [InputGoal, setInputGoal] = useState(" ");


    const goalInputHandler = (enteredText) => {
        setInputGoal(enteredText);
    };


    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Add Text Here"
                style={styles.textInput}
                onChangeText={goalInputHandler}
                value={props.InputGoal}
            />
            <Button
                title="Add"
                onPress={props.onPressFunc.bind(this, InputGoal)} />
        </View>
    );
};

export default GoalsInput

const styles = StyleSheet.create({
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

