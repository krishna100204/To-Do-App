// src/store/reducers/tasksReducer.js
const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
  };
  
  const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        const newTasksAdd = [...state.tasks, action.payload];
        localStorage.setItem('tasks', JSON.stringify(newTasksAdd));
        return { ...state, tasks: newTasksAdd };
      case 'DELETE_TASK':
        const newTasksDelete = state.tasks.filter((_, i) => i !== action.payload);
        localStorage.setItem('tasks', JSON.stringify(newTasksDelete));
        return { ...state, tasks: newTasksDelete };
      case 'TOGGLE_TASK_COMPLETION':
        const newTasksToggle = state.tasks.map((task, i) =>
          i === action.payload ? { ...task, completed: !task.completed } : task
        );
        localStorage.setItem('tasks', JSON.stringify(newTasksToggle));
        return { ...state, tasks: newTasksToggle };
      default:
        return state;
    }
  };
  
  export default tasksReducer;