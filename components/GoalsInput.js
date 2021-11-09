import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const GoalsInput = (props) => {

    const [InputGoal, setInputGoal] = useState(" ");


    const goalInputHandler = (enteredText) => {
        setInputGoal(enteredText);
    };


    return (
        <Modal visible={props.isAddMode} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Add Text Here"
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                    value={props.InputGoal}
                />
                <Button
                    title="Add"
                    onPress={props.onPressFunc.bind(this, InputGoal)}
                />
                <Button
                    title="Cancel"
                    color="red"
                />
            </View>
        </Modal>
    );
};

export default GoalsInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    },

})

