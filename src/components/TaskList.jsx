// src/components/TaskList.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTaskCompletion } from '../store/actions/taskActions';
import './TaskList.css'; // Import the CSS file for TaskList

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className={`task-item ${task.completed ? 'completed' : ''}`}>
          <span className="task-text">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch(toggleTaskCompletion(index))}
              className="task-checkbox"
            />
            {task.text} - <strong>{task.priority}</strong> {/* Displaying the priority */}
          </span>
          <button 
            className="delete-button"
            onClick={() => dispatch(deleteTask(index))}
            style={{background:`#28a745`}}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;