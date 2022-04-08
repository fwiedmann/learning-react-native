import React, {useContext} from "react";
import {StyleSheet, Text, View} from "react-native";
import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";
import {Context} from "../context/blogContext";

export type Probs = {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const ShowScreen = ({navigation}: Probs) => {
    const {state} = useContext(Context)
    console.log()

    const blog = state.find((state: { title: any; }) => state.title === navigation.getParam('title'))

    if (!blog) {
        return null
    }
    return <View>
        <Text>{blog.title}</Text>
    </View>;
};


const styles = StyleSheet.create({});

export default ShowScreen