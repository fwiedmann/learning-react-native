import React, {useContext} from "react";
import {Button, FlatList, StyleSheet, Text} from "react-native";
import BlogContext from "../context/blogContext";

const IndexScreen = () => {
    const contextValue = useContext(BlogContext)


    return <>
        <Text>Index Screen</Text>
        <Button title={'Add Post'} onPress={() => {
            contextValue.addPosts({title: 'Felix'})
        }
        }/>
        <FlatList keyExtractor={item => item.title} data={contextValue.data} renderItem={({item}) => {
            return <Text>{item.title}</Text>
        }}/>
    </>
};
const styles = StyleSheet.create({});

export default IndexScreen;