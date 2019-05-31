import React, { useReducer, createContext } from "react";
import todoReducer, { VisibilityFilters }  from "../reducers/todosReducer";

const TodoContext = createContext();

const initialState = {
    filter: VisibilityFilters.SHOW_ALL,
    todos: []
}

function TodoContextProvider(props) {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const value = {state, dispatch};

    return (
        <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
    );

}

export { TodoContext, TodoContextProvider};