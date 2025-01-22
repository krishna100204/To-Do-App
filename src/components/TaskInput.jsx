// src/components/TaskInput.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/actions/taskActions';

const TaskInput = () => {
  const [taskInput, setTaskInput] = useState('');
  const [priority, setPriority] = useState('Medium');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskInput) {
      dispatch(addTask({ text: taskInput, priority }));
      setTaskInput('');
      setPriority('Medium');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Add a new task"
      />
      <select  style={{ marginLeft: '10px' }} value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit" style={{ marginLeft: '10px',  backgroundColor: '#28a745', borderRadius: `4px`, padding: '5px 5px',  color: `white`}}>Add Task</button>
    </form>
  );
};

export default TaskInput;