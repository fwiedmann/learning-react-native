import React from "react";
import {StyleSheet, Text, View} from "react-native";

const ComponentScreen = () => {
    const name = 'Felix'

    return (
        <View>
            <Text style={styles.textHeader}>This is my first screen</Text>
            <Text style={styles.textName}>My Name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textHeader: {
        fontSize: 45,
        paddingBottom: 10
    },
    textName: {
        fontSize: 20
    }
});

export default ComponentScreen