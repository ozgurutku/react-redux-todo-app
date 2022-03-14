import { COMPLETE_TODO } from "../actions/todoDoneActions";
import { todoDoneItems } from "../initialValues/todoItems";
const initialState = {
    todoDoneItems: todoDoneItems
}

export default function todoDoneReducer(state = initialState, { type, payload }) {

    switch (type) {
        case COMPLETE_TODO:
            return {
                ...state, todoDoneItems: [...state.todoDoneItems, payload]
            }
        default:
            return state;
    }
}