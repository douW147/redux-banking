import {ADD_TASK_SUCCESS, ADD_TASK_FAILURE, ADD_TASK_REQUEST, DELETE_TASK_REQUEST, DELETE_TASK_FAILURE, 
    DELETE_TASK_SUCCESS, FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE} from "../constants/actionTypes.js";
import { host } from "../constants/actionTypes.js";
import axios from "axios";

export const addTask = (newTask) => async(dispatch) => {
    dispatch({type: ADD_TASK_REQUEST});
    try{
        const response = await axios.post(`${host}/tasks`, newTask);
        dispatch({type: ADD_TASK_SUCCESS, payload: response.data});
    } catch(err) {
        dispatch({type: ADD_TASK_FAILURE, payload: err});
    }
};

export const deleteTask = (id) => async(dispatch) => {
    dispatch({type: DELETE_TASK_REQUEST});
    try{
        const response = await axios.delete(`${host}/tasks/${id}`);
        console.log(response);
        dispatch({type: DELETE_TASK_SUCCESS, payload: id});
    } catch(err) {
        dispatch({type: DELETE_TASK_FAILURE, payload: err});
    }
};

export const fetchTasks = () => async(dispatch, getState) => {
    dispatch({type: FETCH_TASKS_REQUEST});
    try{
        const response = await axios.get(`${host}/tasks`);
        dispatch({type: FETCH_TASKS_SUCCESS, payload: response.data});
    }
    catch(err){
        dispatch({type: FETCH_TASKS_FAILURE, payload: err});
    }
};