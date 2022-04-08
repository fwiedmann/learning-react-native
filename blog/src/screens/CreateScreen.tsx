import React, {useContext, useState} from "react";
import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";
import {BlogPost, Context} from "../context/blogContext";

export type Probs = {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const CreateScreen = ({navigation}: Probs) => {
    const [title, updateTitle] = useState('')
    const [content, updateContent] = useState('')

    const {addPost} = useContext(Context);

    const handleSubmit = (title: string, description: string) => {
        if (!title || !description) {
            return;
        }
        addPost({
            title: title
        } as BlogPost, () => {
            navigation.navigate('Index')
        })
    };

    return <View>
        <Text style={styles.text}>Enter title</Text>
        <TextInput
            style={styles.input}
            placeholder={'title...'}
            value={title}
            onChangeText={(text) => {
                updateTitle(text)
            }}
            onSubmitEditing={() => {
                handleSubmit(title, content)
            }}
        />

        <Text style={styles.text}>Enter content</Text>
        <TextInput
            style={styles.input}
            placeholder={"content..."}
            value={content}
            onChangeText={(text) => {
                updateContent(text)
            }}
            onSubmitEditing={() => {
                handleSubmit(title, content)
            }}/>

        <Button title={'Add Blog Post'} onPress={() => {
            handleSubmit(title, content)
        }}/>
    </View>;
};


const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        margin: 10
    },
    text: {
        marginTop: 10,
        marginLeft: 10,
    }
});

export default CreateScreen