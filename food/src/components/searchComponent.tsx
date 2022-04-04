import React, {PropsWithChildren} from "react";

import {NativeSyntheticEvent, StyleSheet, TextInput, View} from "react-native";
import {Feather} from '@expo/vector-icons'


export interface Probs {
    term: string,
    onTermChange: (newTerm: string) => void
    onSearchSubmitted: (e: NativeSyntheticEvent<any>) => void
}

export const SearchComponent = (probs: PropsWithChildren<Probs>) => {

    return <View style={styles.background}>
        <Feather name='search' style={styles.iconsStyle}/>
        <TextInput
            placeholder='Search'
            autoCapitalize='none'
            autoCorrect={false}
            value={probs.term}
            onChangeText={probs.onTermChange}
            onEndEditing={probs.onSearchSubmitted}
            style={styles.inputStyle}
        />
    </View>;
}

const styles = StyleSheet.create({
    background: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15,
        marginBottom: 10,
        flexDirection: "row",
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
    iconsStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15
    }
})