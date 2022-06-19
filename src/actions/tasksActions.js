import {ADD_TASK, DELETE_TASK, FETCH_TASKS} from "../constants/actionTypes.js";
import { host } from "../constants/actionTypes.js";
import axios from "axios";

export const addTask = (newTask) => {
    return {
        type: ADD_TASK,
        payload: newTask
    }
};

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id
    }
};

export const fetchTasks = () => async(dispatch, getState) => {
    const response = await axios.get(`${host}/tasks`);
    dispatch({type: FETCH_TASKS, payload: response.data});
};