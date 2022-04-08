import createDataContext, {Action} from "./createDataContext";

export type BlogPost = {
    title: string
}

export enum ActionTypes {
    CreatePost = 'CreatePost'
}


const reducer = (state: BlogPost[], action: Action): BlogPost[] => {
    switch (action.type) {
        case ActionTypes.CreatePost:
            return action.data.title && state.find(value => value.title === action.data.title) === undefined ? [...state, action.data] : state;
        default:
            return state;
    }
};

export const addPost = (dispatch: (action: Action) => void) => {
    return (p: BlogPost) => {
        dispatch({
            type: ActionTypes.CreatePost,
            data: p,
        } as Action)
    }
};

export const {Context, Provider} = createDataContext(reducer, {
    addPost
}, [
    {
        title: 'Blog Post 1'
    },
    {
        title: 'Blog Post 2'
    },
] as BlogPost[]);