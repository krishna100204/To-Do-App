// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';

const container = document.getElementById('root'); // Ensure this matches your HTML
const root = ReactDOM.createRoot(container); // Create a root

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);