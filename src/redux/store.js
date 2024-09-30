
import React from 'react';
import ReactDOM from 'react-dom/client';
import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { userReducer } from './reducer';



const rootReducer = combineReducers({
    users: userReducer,
  });
  
  export const store = createStore(rootReducer, applyMiddleware(thunk));