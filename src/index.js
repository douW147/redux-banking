import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'jquery';
import 'popper.js/dist/umd/popper';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';
import {createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

const initalBallance = 0;

const DEPOSIT = "DEPOSIT";
const WITHDRAW = "WITHDRAW";

const balanceReducer = (state = initalBallance, action) => {
    switch (action.type) {
        case DEPOSIT:
            return state + action.payload.amount;
        case WITHDRAW:
            return state - action.payload.amount;
        default:
            return state;
    }
}

const depositAction = (amount) => {
    return {
        type: DEPOSIT,
        payload: {
            amount: amount
        }
    }
};

const withdrawAction = (amount) => {
    return {
        type: WITHDRAW,
        payload: {
            amount: amount
        }
    }
};

// const store = createStore(balanceReducer, composeWithDevTools());
// store.subscribe(() => {
//     console.log(store.getState());
// })
// store.dispatch(depositAction(1000));
// store.dispatch({type:DEPOSIT, payload: {amount: 500}});
// store.dispatch({type:WITHDRAW, payload: {amount: 750}});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
