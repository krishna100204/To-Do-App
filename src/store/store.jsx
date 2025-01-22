// src/store/store.js
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Correctly import thunk as a named export
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk)); // Apply middleware correctly

export default store;