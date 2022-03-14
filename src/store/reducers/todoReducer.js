import { ADD_TODO, REMOVE_TODO } from "../actions/todoActions";
import { todoItems } from "../initialValues/todoItems";

const initialState = {
    todoItems: todoItems
}

export default function todoReducer(state = initialState, { type, payload }) {

    switch (type) {
        case ADD_TODO:
            return {
                ...state, todoItems: [...state.todoItems, payload]
            }
        case REMOVE_TODO:
            return {
                ...state, todoItems : state.todoItems.filter((value) => value !== payload)
            }
        default:
            return state;
    }
}