import React, { useContext } from "react";
import Button from "./Button";

import { CHANGE_FILTER, REMOVE_ALL_COMPLETED , VisibilityFilters } from "./../reducers/todosReducer";
import {TodoContext} from "../contexts/TodoContext";

const buttonsFilter = [
    {
        id: 1,
        caption: "All",
        type: CHANGE_FILTER,
        filter: VisibilityFilters.SHOW_ALL
    },
    {
        id: 2,
        caption: "Active",
        type: CHANGE_FILTER,
        filter: VisibilityFilters.SHOW_ACTIVE
    },
    {
        id: 3,
        caption: "Completed",
        type: CHANGE_FILTER,
        filter: VisibilityFilters.SHOW_COMPLETED
    },
    {
        id: 4,
        caption: "remove all completed",
        type: REMOVE_ALL_COMPLETED,
    },
];

const Footer = () => {
    const { state, dispatch } = useContext(TodoContext);
    return (
        <footer>
            {buttonsFilter.map((item) => {
                return (
                    <Button
                        key={item.id}
                        disabled={state.filter === item.filter}
                        onClick={() => dispatch({ type: item.type, payload: item.filter})}
                        >
                        {item.caption}
                    </Button>
                )
            })}
        </footer>
    );
};

export default Footer;