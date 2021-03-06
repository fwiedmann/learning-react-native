import React, {useContext} from "react";
import {StyleSheet} from "react-native";
import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";
import {BlogPost, Context} from "../context/blogContext";
import BlogPostForm from "../components/blogPostForm";

export type Probs = {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const CreateScreen = ({navigation}: Probs) => {
    const {addPost} = useContext(Context);
    const handleSubmit = (title: string, description: string) => {
        if (!title || !description) {
            return;
        }
        addPost({
            title: title,
            description: description,
        } as BlogPost, () => {
            navigation.navigate('Index')
        })
    };

    return <BlogPostForm onSubmit={handleSubmit} initialValues={{title: '', content: ''}}/>
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