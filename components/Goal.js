import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Goal = (props) => { 
 
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.list}>
                <Text> {props.title} </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    list: {
        padding: 10,
        //margin: 10
        marginVertical: 10,//margin on top and buttom 
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'green'
    }
})

export default Goal