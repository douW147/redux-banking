import {ADD_TASK, DELETE_TASK, FETCH_TASKS} from "../constants/actionTypes.js";

export const addTask = (newTask) => (
    {type: ADD_TASK,
    payload: newTask
    }
);

export const deleteTask = (id) => (
    {type: DELETE_TASK,
    payload: id
    }
);

export const fetchTasks = () => (
    {type: FETCH_TASKS
    }
);