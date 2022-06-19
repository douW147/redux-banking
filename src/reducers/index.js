import { combineReducers } from "redux";
import { tasksReducer } from "./tasksReducer";

const allReducers = combineReducers({tasks: tasksReducer});

export default allReducers;