import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const HomeScreen = ({navigation}) => {

    return <View>
        <Text style={styles.text}>Hi There!</Text>


        <Button
            title='Go to components demo'
            onPress={() => navigation.navigate('Components')}
        />

        <Button
            title='Go to List Demo'
            onPress={() => navigation.navigate('List')}
        />


        <Button
            title='Go to Image Screen'
            onPress={() => navigation.navigate('Images')}
        />


        <Button
            title='Go to Counter Screen'
            onPress={() => navigation.navigate('Counter')}
        />


        <Button
            title='Go to Color Screen'
            onPress={() => navigation.navigate('Color')}
        />

        <Button
            title='Go to Square Screen'
            onPress={() => navigation.navigate('Square')}
        />

    </View>
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
});

export default HomeScreen;
