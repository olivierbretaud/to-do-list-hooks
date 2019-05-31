export const CHANGE_FILTER = "CHANGE_FILTER";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const ADD_TODO = "ADD_TODO";
export const REMOVE_ALL_COMPLETED = "REMOVE_ALL_COMPLETED";

export const VisibilityFilters = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_COMPLETED: "SHOW_COMPLETED",
    SHOW_ACTIVE: "SHOW_ACTIVE"
};

const toDoReducer = (state, { type, payload }) => {
    switch (type) {
        case CHANGE_FILTER:
            return { ...state, filter: payload};
        case TOGGLE_TODO: {
            const todos = state.todos.map(item =>
                item.id === payload.id ? { ...item, ...payload } : item
            );
            return {...state, todos};
        }
        case REMOVE_ALL_COMPLETED: {
            const todos = state.todos.filter(item => {
                return  item.completed === false 
            })
            return {...state, todos};
        }
        case ADD_TODO: {
            const todos = [...state.todos, payload];
            return {...state, todos};
        }
        default:
            return state;
    }
};

export default toDoReducer;