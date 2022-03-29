import React from "react";
import {StyleSheet, View, Text, FlatList} from "react-native";


const friends = [
    { Name: 'Felix 1', age: 23},
    { Name: 'Felix 2', age: 23},
    { Name: 'Felix 3', age: 23},
    { Name: 'Felix 4', age: 23},
    { Name: 'Felix 5', age: 23},
    { Name: 'Felix 6', age: 23},
    { Name: 'Felix 7', age: 23},
    { Name: 'Felix 8', age: 23}
]

const listScreen = () => {
    return <View>
        <Text>My Friends</Text>

        <FlatList
            keyExtractor={(element) => {return element.Name}}
            data={friends}
            renderItem={({item}) => {
            return <Text style={styles.list}>{item.Name} - {item.age} </Text>
        }}/>
    </View>;
}

const styles = StyleSheet.create({
    list: {
        marginVertical: 10
    }
})

export default listScreen