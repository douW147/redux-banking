import allReducers from "../reducers";
import { createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import {createLogger} from "redux-logger"
import reduxPromiseMiddleware from "redux-promise-middleware";
import reduxSaga from "redux-saga";
import { rootSaga } from "../sagas";


const logger = createLogger();
const createReduxSaga = reduxSaga();

const middlewares = [reduxThunk,  createReduxSaga, reduxPromiseMiddleware, logger]; 
const taskStore = createStore(allReducers, composeWithDevTools(applyMiddleware(...middlewares)));

createReduxSaga.run(rootSaga);

export default taskStore;