import {ADD_TASK, DELETE_TASK, FETCH_TASKS} from "../constants/actionTypes";
import { initialTasks } from "../data/initialTasks";

export const tasksReducer = (state = initialTasks, action) => {
    switch (action.type){
        case ADD_TASK:
            return [...state, action.payload];
        case DELETE_TASK:
            return state.filter(task => {return task.id !== action.payload});
        case FETCH_TASKS:
            return action.payload;
        default:
            return state;
    }
}