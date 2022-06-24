import {ADD_TASK, DELETE_TASK, FETCH_TASKS} from "../constants/actionTypes.js";
import { host } from "../constants/actionTypes.js";
import axios from "axios";

export const addTask = (newTask) => (
    {type: ADD_TASK,
    payload: axios.post(`${host}/tasks`, newTask)
    }
);

export const deleteTask = (id) => (
    {type: DELETE_TASK,
    payload: axios.delete(`${host}/tasks/${id}`)
    }
);

export const fetchTasks = () => (
    {type: FETCH_TASKS,
    payload: axios.get(`${host}/tasks`)}
);