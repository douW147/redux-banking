import allReducers from "../reducers";
import { createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";


const taskStore = createStore(allReducers, composeWithDevTools(applyMiddleware(reduxThunk)));

export default taskStore;