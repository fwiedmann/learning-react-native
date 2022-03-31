import React, {useReducer} from "react";
import {StyleSheet, View} from "react-native";
import ColorCounter from "../components/ColorCounter";


// never change the state directly in the reducer.
// If so react will not be able to detect changes and will not re-render the component
// To make changes, create a new state object with the current values of the state argument and then make changes to it afterwards
// to the properties
// Also make sure to return a value when no action.type was found so that the value of the state will not be empty on next re-rendering
const reducer = (state, action) => {
    switch (action.type) {
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0
                ? state
                : {...state, red: state.red + action.payload};
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0
                ? state
                : {...state, green: state.green + action.payload};
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
                ? state
                : {...state, blue: state.blue + action.payload};
        default:
            return state
    }
};

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    console.log('hello')

    return <View>
        <ColorCounter colorName="red"
                      onIncrease={() => dispatch({type: 'change_red', payload: 15})}
                      onDecrease={() => dispatch({type: 'change_red', payload: -15})}/>

        <ColorCounter colorName="blue"
                      onIncrease={() => dispatch({type: 'change_blue', payload: 15})}
                      onDecrease={() => dispatch({type: 'change_blue', payload: -15})}/>

        <ColorCounter colorName="green"
                      onIncrease={() => dispatch({type: 'change_green', payload: 15})}
                      onDecrease={() => dispatch({type: 'change_green', payload: -15})}/>
        <View style={{
            height: 100,
            width: 100,
            backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`
        }}></View>
    </View>;
};

const styles = StyleSheet.create({});

export default SquareScreen;