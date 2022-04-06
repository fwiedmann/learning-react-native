import React, {useReducer} from "react";

export type BlogPost = {
    title: string
}

export interface ContextValue {
    data: BlogPost[],
    addPosts: (post: BlogPost) => void
}


// Will store the value and will be used by the child's to receive the data/value
const BlogContext = React.createContext({} as ContextValue);


export type Probs = {
    children: any;
}

export enum ActionTypes {
    CreatePost = 'CreatePost'
}


type action = {
    type: string,
    post: BlogPost;
}

const reducer = (state: BlogPost[], action: action): BlogPost[] => {
    switch (action.type) {
        case ActionTypes.CreatePost:
            return action.post.title && state.find(value => value.title === action.post.title) === undefined ? [...state, action.post] : state;
        default:
            return state;
    }
};

// BlogProvider component will be used to wrap around the app,
export const BlogProvider = (probs: Probs) => {

    const blogPosts: BlogPost[] = [
        {
            title: 'Blog Post 1'
        },
        {
            title: 'Blog Post 2'
        },
    ]

    const [state, dispatch] = useReducer(reducer, [...blogPosts] as BlogPost[])

    const addPost = (post: BlogPost) => {
        dispatch({
            type: ActionTypes.CreatePost,
            post: post,
        })
    };

    return <BlogContext.Provider value={{data: state, addPosts: addPost}}>
        {probs.children}
    </BlogContext.Provider>
}

export default BlogContext