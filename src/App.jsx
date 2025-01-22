// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import WeatherWidget from './components/WeatherWidget';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route 
            path="/tasks" 
            element={
              <ProtectedRoute component={TasksPage} />
            } 
          />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

const TasksPage = () => (
  <div className="app">
    <Sidebar /> {/* Render Sidebar only on the tasks page */}
    <div className="main-content"> {/* Main content area */}
      <div className="task-input">
        <TaskInput />
      </div>
      <div className="task-weather-container">
        <div className="task-list">
          <TaskList /> {/* TaskList will be on the left */}
        </div>
        <div className="weather-widget">
          <WeatherWidget /> {/* WeatherWidget will be on the right */}
        </div>
      </div>
    </div>
  </div>
);

export default App;