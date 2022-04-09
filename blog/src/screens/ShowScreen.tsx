import React, {useContext} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";
import {BlogPost, Context} from "../context/blogContext";
import {Feather} from "@expo/vector-icons";

export type Probs = {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const ShowScreen = ({navigation}: Probs) => {
    const {state} = useContext(Context)


    const blog: BlogPost = state.find((state: { id: any; }) => state.id === navigation.getParam('id'))

    if (!blog) {
        return null
    }
    return <View>
        <Text style={styles.title}>{blog.title}</Text>
        <Text style={styles.content}>{blog.description}</Text>
    </View>;
};


const styles = StyleSheet.create({
    title: {
        margin: 10,
        fontSize: 18,
        fontWeight: "bold",
    },
    content: {
        marginHorizontal: 10,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
    edit: {
        marginRight: 10,
    }

});


ShowScreen.navigationOptions = ({navigation}: Probs) => {
    return {
        headerRight: () => <TouchableOpacity
            style={styles.edit}
            onPress={() => {

                navigation.navigate('Edit', {id: navigation.getParam('id')});
            }}>
            <Feather name={'edit'} size={30}/>
        </TouchableOpacity>
    }
};

export default ShowScreen