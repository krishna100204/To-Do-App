// src/components/WeatherWidget.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const WeatherWidget = () => {
  const weatherData = useSelector((state) => state.weather.weatherData);
  const error = useSelector((state) => state.weather.error);

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!weatherData) {
    return null;
  }

  return (
    <div className="weather-widget">
      <h2>{weatherData.name}</h2>
      <p>Temperature: {Math.round(weatherData.main.temp)}°F</p>
      <p>Condition: {weatherData.weather[0].description}</p>
    </div>
  );
};

export default WeatherWidget;