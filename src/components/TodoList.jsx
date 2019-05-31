import React, { useContext } from "react";
import Todo from './Todo';
import { VisibilityFilters } from "./../reducers/todosReducer";
import { TodoContext } from "../contexts/TodoContext";

const TodoList = () => {
    const { state } = useContext(TodoContext);
    const todos = applyFilter(state);
    return (
        <ul
            style={{
                listStyle: "none",
                padding: 0
            }}
            >
            {
                todos.map(todo => (
                    <Todo key={todo.id} {...todo}/>
                ))
            }
        </ul>
    );
};

const applyFilter = (state) => {
    const {filter, todos} = state;
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(item => item.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(item => !item.completed);
        default:
            throw new Error("Unknow filter: " + filter);
    }
};

export default TodoList;