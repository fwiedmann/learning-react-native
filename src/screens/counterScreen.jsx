import React, {useReducer} from "react";
import {Button, StyleSheet, Text, View} from "react-native";

const reducer = (state, action) => {
    switch (action.type) {
        case 'increase':
            return state + 1;

        case 'decrease':
            return state - 1 < 0
                ? state
                : state - 1
        default:
            return state
    }
};


const CounterScreen = () => {
    console.log("rendered")
    const [counter, dispatch] = useReducer(reducer, 0);
    return <View>
        <Button title='Increase' onPress={() => {
            dispatch({type: 'increase'})
        }}/>
        <Button title='Decrease' onPress={() => {
            dispatch({type: 'decrease'})
        }}/>
        <Text>Current Count: {counter}</Text>
    </View>
};


const styles = StyleSheet.create({});

export default CounterScreen;