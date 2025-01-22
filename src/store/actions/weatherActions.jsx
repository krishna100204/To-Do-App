// src/store/actions/weatherActions.js
import axios from 'axios';

export const setWeatherData = (data) => ({
  type: 'SET_WEATHER_DATA',
  payload: data,
});

export const setError = (error) => ({
  type: 'SET_ERROR',
  payload: error,
});

export const fetchWeather = (city) => {
  return async (dispatch) => {
    if (!city) {
      dispatch(setError('City name cannot be empty'));
      return;
    }

    const API_KEY = '059535d6e51964f8c4df26debc45723b'; // Replace with your actual API key

    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`);
      dispatch(setWeatherData(response.data));
    } catch (err) {
      dispatch(setError(err.response ? err.response.data.message : 'An error occurred'));
    }
  };
};