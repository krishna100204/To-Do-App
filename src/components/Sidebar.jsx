// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../store/actions/weatherActions';


const Sidebar = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const handleFetchWeather = (e) => {
    e.preventDefault();
    dispatch(fetchWeather(city));
    setCity('');
  };

  return (
    <div className="sidebar">
      <h1>To-Do List</h1>
      <h4>Weather in Your City</h4>
      <form onSubmit={handleFetchWeather}>
        <input 
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit" style={{ marginTop: '10px', backgroundColor: '#28a745', borderRadius: `4px`, padding: '5px 5px',  color: `white` }}>Get Weather</button>
      </form>
    </div>
  );
};

export default Sidebar;