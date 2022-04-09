import React, {useState} from "react";
import {Button, StyleSheet, Text, TextInput, View} from "react-native";

export type Probs = {
    onSubmit: (title: string, content: string) => void
    initialValues: {
        title: string
        content: string
    }
}

const BlogPostForm = ({onSubmit, initialValues}: Probs) => {
    const [title, updateTitle] = useState(initialValues.title || '');
    const [content, updateContent] = useState(initialValues.content || '')

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
                onSubmit(title, content)
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
                onSubmit(title, content)
            }}/>

        <Button title={'Save'} onPress={() => {
            onSubmit(title, content)
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

export default BlogPostForm