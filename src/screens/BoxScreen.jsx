import React from "react";
import {StyleSheet, Text, View} from "react-native";


const validateInput = (text) => {
    switch (text) {
        case '':
            return 'Text is empty!'
        default:
            return ''
    }
};

const TextScreen = () => {

    return <View style={styles.viewStyle}>
        <View style={styles.header}>
            <Text>App</Text>
        </View>

        <View style={styles.boxes}>
            <Text style={styles.textStyle}>Box Screen 1</Text>
            <Text style={StyleSheet.flatten([styles.textStyle, styles.middleBox])}>Box Screen 2</Text>
            <Text style={styles.textStyle}>Box Screen 3</Text>
        </View>

    </View>;
};

const styles = StyleSheet.create({
    viewStyle: {
        display: "flex",
        alignItems: "stretch",
        marginVertical: 10
    },

    header: {
        padding: 10,
        borderWidth: 1,
        display: "flex",
        alignItems: "center"
    },


    boxes: {
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "space-between",
        height: 100
    },
    textStyle: {
        borderColor: 'black',
        borderWidth: 1,
        height: 50,
        width: 50,
    },

    middleBox: {
        alignSelf: "flex-end"
    }

});

export default TextScreen;