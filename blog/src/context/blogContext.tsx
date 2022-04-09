import createDataContext, {Action} from "./createDataContext";
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

export type BlogPost = {
    id: string
    title: string
    description: string;
}

export enum ActionTypes {
    CreatePost = 'CreatePost',
    EditPost = 'EditPost',
    DeletePost = 'DeletePost',
}


const reducer = (state: BlogPost[], action: Action): BlogPost[] => {
    switch (action.type) {
        case ActionTypes.CreatePost:
            action.data.id = uuidv4()
            return action.data.id && state.find(value => value.id === action.data.id) === undefined ? [...state, action.data] : state;
        case ActionTypes.EditPost:
            const index: number = state.findIndex(value => value.id === action.data.id)
            if (index >= 0) {
                console.log(action.data)
                state[index] = action.data
                return [...state]
            }
            return state
        case ActionTypes.DeletePost:
            return action.data.id && state.find(value => value.id === action.data.id) !== undefined ? state.filter(blog => blog.id !== action.data.id) : state;
        default:
            return state;
    }
};

const addPost = (dispatch: (action: Action) => void) => {
    return (p: BlogPost, cb: () => void) => {
        dispatch({
            type: ActionTypes.CreatePost,
            data: p,
        } as Action,)
        cb()
    }
};

const editPost = (dispatch: (action: Action) => void) => {
    return (p: BlogPost, cb: () => void) => {
        dispatch({
            type: ActionTypes.EditPost,
            data: p,
        } as Action)
        cb()
    }
};

const deletePost = (dispatch: (action: Action) => void) => {
    return (p: BlogPost) => {
        dispatch({
            type: ActionTypes.DeletePost,
            data: p,
        } as Action)
    }
};

export const {Context, Provider} = createDataContext(reducer, {
    addPost,
    editPost,
    deletePost
}, [
    {
        id: uuidv4(),
        title: 'Blog Post 1',
        description: 'This is a very cool blog post'
    },
    {
        id: uuidv4(),
        title: 'Blog Post 2',
        description: 'This is a very cool blog post'
    },
] as BlogPost[]);