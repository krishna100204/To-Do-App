// src/store/reducers/index.js
import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer';
import weatherReducer from './weatherReducer';
import authReducer from './authReducer'; // Import the auth reducer

const rootReducer = combineReducers({
  tasks: tasksReducer,
  weather: weatherReducer,
  auth: authReducer, // Add auth reducer
});

export default rootReducer;