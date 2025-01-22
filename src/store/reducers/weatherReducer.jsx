// src/store/reducers/weatherReducer.js
const initialWeatherState = {
    weatherData: null,
    error: null,
  };
  
  const weatherReducer = (state = initialWeatherState, action) => {
    switch (action.type) {
      case 'SET_WEATHER_DATA':
        return { ...state, weatherData: action.payload, error: null };
      case 'SET_ERROR':
        return { ...state, error: action.payload, weatherData: null };
      default:
        return state;
    }
  };
  
  export default weatherReducer;