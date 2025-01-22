// src/store/actions/taskActions.js
export const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: task,
  });
  
  export const deleteTask = (index) => ({
    type: 'DELETE_TASK',
    payload: index,
  });
  
  export const toggleTaskCompletion = (index) => ({
    type: 'TOGGLE_TASK_COMPLETION',
    payload: index,
  });