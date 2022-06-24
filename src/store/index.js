import allReducers from "../reducers";
import { createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import {createLogger} from "redux-logger"
import reduxPromiseMiddleware from "redux-promise-middleware";
const logger = createLogger();

const middlewares = [reduxThunk, reduxPromiseMiddleware, logger]
const taskStore = createStore(allReducers, composeWithDevTools(applyMiddleware(...middlewares)));

export default taskStore;