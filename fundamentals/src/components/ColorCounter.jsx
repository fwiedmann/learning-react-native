import React from "react";
import {Button, StyleSheet, View} from "react-native";


const ColorCounter = ({colorName, onIncrease, onDecrease}) => {
    return <View>
        <Button title={`more ${colorName} color`}
                onPress={() => onIncrease()}
        />

        <Button title={`less ${colorName} color`}
                onPress={() => onDecrease()}
        />
    </View>;
};

const styles = StyleSheet.create({});

export default ColorCounter;