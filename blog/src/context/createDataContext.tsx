import React, {useReducer} from "react";

export type Probs = {
    children: any;
}

export type Action = {
    type: string,
    data: any
}

export default (reducer: any, actions: any, initialState: any) => {
    const Context = React.createContext(initialState);

    const Provider = (probs: Probs) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        const boundActions = {};
        for (let key in actions) {
            // @ts-ignore
            boundActions[key] = actions[key](dispatch);
        }
        
        return <Context.Provider value={{state, ...boundActions}}>
            {probs.children}
        </Context.Provider>
    };
    return {Context, Provider}
};
