import React, {useContext} from "react";
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Context as BlogContext} from "../context/blogContext";
import {Feather} from '@expo/vector-icons';
import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";

export type Probs = {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}


const IndexScreen = ({navigation}: Probs) => {
    const {state, addPost, deletePost} = useContext(BlogContext)

    return <>
        <FlatList style={styles.blogList} keyExtractor={item => item.title} data={state} renderItem={({item}) => {
            return <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Show', {te: item.title});
                }}>
                <View style={styles.blog}>
                    <Text style={styles.blogTitle}>{item.title}</Text>
                    <TouchableOpacity
                        onPress={() => {
                            deletePost({
                                title: item.title
                            })
                        }}>
                        <Feather style={styles.blogIcon} name={'trash'}/>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>;
        }}/>
    </>
};

IndexScreen.navigationOptions = ({navigation}: Probs) => {
    return {
        headerRight: () => <TouchableOpacity
            style={styles.create}
            onPress={() => {
                navigation.navigate('Create')
            }}>
            <Feather name={'plus'} size={30}/>
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    blog: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginBottom: 5,
        borderRadius: 5,
        borderWidth: 1,
        padding: 5,
        backgroundColor: "#6b5b95",
    },
    blogTitle: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#ffffff",
    },
    blogIcon: {
        fontSize: 16,
        color: "#ffffff",
    },
    blogList: {
        marginVertical: 20
    },
    create: {
        marginRight: 10,
    }
});

export default IndexScreen;