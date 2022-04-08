import createDataContext, {Action} from "./createDataContext";

export type BlogPost = {
    title: string
}

export enum ActionTypes {
    CreatePost = 'CreatePost',
    DeletePost = 'DeletePost'
}


const reducer = (state: BlogPost[], action: Action): BlogPost[] => {
    switch (action.type) {
        case ActionTypes.CreatePost:
            return action.data.title && state.find(value => value.title === action.data.title) === undefined ? [...state, action.data] : state;
        case ActionTypes.DeletePost:
            return action.data.title && state.find(value => value.title === action.data.title) !== undefined ? state.filter(blog => blog.title !== action.data.title) : state;
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
    deletePost
}, [
    {
        title: 'Blog Post 1'
    },
    {
        title: 'Blog Post 2'
    },
] as BlogPost[]);