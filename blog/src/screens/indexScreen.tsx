import React, {useContext} from "react";
import {Button, FlatList, StyleSheet, Text} from "react-native";
import {BlogPost, Context as BlogContext} from "../context/blogContext";

const IndexScreen = () => {
    const {state, addPost} = useContext(BlogContext)


    return <>
        <Text>Index Screen</Text>
        <Button title={'Add Post'} onPress={() => {
            addPost({
                title: 'Felix'
            } as BlogPost)
        }
        }/>
        <FlatList keyExtractor={item => item.title} data={state} renderItem={({item}) => {
            return <Text>{item.title}</Text>
        }}/>
    </>
};
const styles = StyleSheet.create({});

export default IndexScreen;