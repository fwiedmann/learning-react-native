import React, {useState} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";


const validateInput = (text) => {
    switch (text) {
        case '':
            return 'Text is empty!'
        default:
            return ''
    }
};

const TextScreen = () => {

    const [state, setState] = useState({text: '', error: ''});

    return <View>
        <TextInput style={styles.input}
                   autoCapitalize='none'
                   autoCorrect={false}
                   onChangeText={(text) => {
                       setState({
                           text: text,
                           error: validateInput(text)
                       });
                   }}/>
        <Text>{state.text}</Text>
        {state.error !== '' ? <Text style={styles.error}>{state.error}</Text> : null}
    </View>;
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    },
    error: {
        margin: 15,
        color: 'red'
    }
});

export default TextScreen;