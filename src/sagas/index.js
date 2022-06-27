import {FETCH_TASKS, ADD_TASK, DELETE_TASK} from "../constants/actionTypes";
import {takeEvery} from "redux-saga/effects";
import {fetchTasksWorkerSaga, addTaskWorkerSaga, deleteTaskWorkerSaga} from "./taskSagas";

export const rootSaga = function*() {
    yield takeEvery(FETCH_TASKS, fetchTasksWorkerSaga);
    yield takeEvery(ADD_TASK, addTaskWorkerSaga);
    yield takeEvery(DELETE_TASK, deleteTaskWorkerSaga);
};