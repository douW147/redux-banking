import axios from "axios";
import { FETCH_TASKS_PENDING, FETCH_TASKS_FULFILLED, FETCH_TASKS_REJECTED, ADD_TASK_PENDING, host, ADD_TASK_FULFILLED, ADD_TASK_REJECTED,DELETE_TASK_FULFILLED, DELETE_TASK_PENDING, DELETE_TASK_REJECTED } from "../constants/actionTypes";
import {put, call} from "redux-saga/effects";
import { fetchTasks } from "../api/tasks";

export const fetchTasksWorkerSaga = function*() {
    yield put({ type: FETCH_TASKS_PENDING });
    try{
        const response = yield call(fetchTasks);
        yield put({ type: FETCH_TASKS_FULFILLED, payload: response });
    } catch(error)
    {
        yield put({ type: FETCH_TASKS_REJECTED, payload: error });
    }    
};

export const addTaskWorkerSaga = function*(action) {
    yield put({ type: ADD_TASK_PENDING });
    try{
        const response = yield axios.post(`${host}/tasks`, action.payload);
        yield put({type: ADD_TASK_FULFILLED, payload: response});
    } catch(error) {
        yield put({type: ADD_TASK_REJECTED, payload: error});
    }
};

export const deleteTaskWorkerSaga = function*(action) {
    yield put({ type: DELETE_TASK_PENDING });
    try{
        yield axios.delete(`${host}/tasks/${action.payload}`, action.payload);
        yield put({type: DELETE_TASK_FULFILLED, payload: action.payload});
    } catch(error) {
        yield put({type: DELETE_TASK_REJECTED, payload: error});
    }
};


