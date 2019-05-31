import React, { useContext } from "react";
import { TOGGLE_TODO } from "./../reducers/todosReducer";
import {TodoContext} from "../contexts/TodoContext";

const Todo = ({ id , completed , text}) => {
    const { dispatch } = useContext(TodoContext);
    return (
        <li
            onClick={() => 
                dispatch({
                    type: TOGGLE_TODO,
                    payload: { id, completed: !completed}
                })
            }
            style={{
                cursor: "pointer",
                textDecoration: completed ? "line-through" : "none",
                color: completed ? "orange" : "LimeGreen",
            }}
            >
            {text}
        </li>
    )
}

export default Todo;