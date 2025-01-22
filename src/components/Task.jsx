// src/components/Task.jsx
import React from 'react';

const Task = ({ task, deleteTask }) => {
  return (
    <li>
      <span>{task.text} - <strong>{task.priority}</strong></span>
      <button   onClick={deleteTask}>Delete</button>
    </li>
  );
};

export default Task;