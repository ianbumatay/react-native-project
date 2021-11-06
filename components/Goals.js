import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Goals = (props) => {
    return (
        <View style={styles.list}>
            <Text> {props.title} </Text>
        </View>
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

export default Goals