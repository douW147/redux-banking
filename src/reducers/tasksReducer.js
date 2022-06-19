import {ADD_TASK_SUCCESS, ADD_TASK_REQUEST, ADD_TASK_FAILURE, DELETE_TASK_REQUEST, DELETE_TASK_FAILURE, DELETE_TASK_SUCCESS,
     FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE} from "../constants/actionTypes";
import { initialTasks } from "../data/initialTasks";

const initialState = {data: initialTasks, loading: false, error: ""}
export const tasksReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_TASKS_REQUEST:
            return {data: initialTasks, loading: true, error: ""};
        case FETCH_TASKS_SUCCESS:
            return {data: action.payload, loading: false, error: ""};
        case FETCH_TASKS_FAILURE:
            return {data: state.data, loading: false, error: action.payload};    
        case ADD_TASK_REQUEST:
            return {data: state.data, loading: true, error: ""};
        case ADD_TASK_SUCCESS:
            return {data: [...state.data, action.payload], loading: false, error: ""};
        case ADD_TASK_FAILURE:
            return {data: state.data, loading: false, error: action.payload};
        case DELETE_TASK_REQUEST:
            return {data: state.data, loading: true, error: ""};
        case DELETE_TASK_SUCCESS:
            return {data: state.data.filter(task => {return task.id !== action.payload}), loading: false, error: ""};
        case DELETE_TASK_FAILURE:
            return {data: state.data, loading: false, error: action.payload};
        default:
            return state;
    }
}