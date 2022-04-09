import React, {useContext} from "react";
import {StyleSheet} from "react-native";
import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";
import {BlogPost, Context} from "../context/blogContext";
import BlogPostForm from "../components/blogPostForm";

export type Probs = {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const EditScreen = ({navigation}: Probs) => {
    const {state, editPost} = useContext(Context);

    const post: BlogPost = state.find((post: { id: any; }) => post.id === navigation.getParam('id'))
    if (!post) {
        return null
    }
    
    const handleSubmit = (title: string, description: string) => {
        if (!title || !description) {
            return;
        }
        editPost({
            id: post.id,
            title: title,
            description: description,
        } as BlogPost, () => {
            navigation.goBack()
        })
    };
    return <BlogPostForm onSubmit={handleSubmit} initialValues={{title: post.title, content: post.description}}/>
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

export default EditScreen