import {DELETE_TASK_PENDING, DELETE_TASK_FULFILLED, DELETE_TASK_REJECTED,
     FETCH_TASKS_PENDING, FETCH_TASKS_FULFILLED, FETCH_TASKS_REJECTED, ADD_TASK_PENDING, ADD_TASK_FULFILLED, ADD_TASK_REJECTED} from "../constants/actionTypes";
import { initialTasks } from "../data/initialTasks";

const initialState = {data: initialTasks, loading: false, error: ""}
export const tasksReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_TASKS_PENDING:
            return {data: initialTasks, loading: true, error: ""};
        case FETCH_TASKS_FULFILLED:
            return {data: action.payload.data, loading: false, error: ""};
        case FETCH_TASKS_REJECTED:
            console.log(action.payload)
            return {data: state.data, loading: false, error: action.payload.message};    
        case ADD_TASK_PENDING:
            return {data: state.data, loading: true, error: ""};
        case ADD_TASK_FULFILLED:
            return {data: [...state.data, action.payload.data], loading: false, error: ""};
        case ADD_TASK_REJECTED:
            return {data: state.data, loading: false, error: action.payload.message};
        case DELETE_TASK_PENDING:
            return {data: state.data, loading: true, error: ""};
        case DELETE_TASK_FULFILLED: {
            const id = action.payload.config.url.substr(
                action.payload.config.url.lastIndexOf("/") + 1
            );
            return {data: state.data.filter(task => {return task.id !== id}), loading: false, error: ""};
        }
        case DELETE_TASK_REJECTED:
            return {data: state.data, loading: false, error: action.payload.message};
        default:
            return state;
    }
}