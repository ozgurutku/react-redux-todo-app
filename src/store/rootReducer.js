import {combineReducers} from "redux";
import todoDoneReducer from "./reducers/todoDoneReducer";
import todoReducer from "./reducers/todoReducer";

const rootReducer = combineReducers({
    todo : todoReducer,
    todoDone : todoDoneReducer
})

export default rootReducer;