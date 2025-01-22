// src/store/loggerMiddleware.js
const loggerMiddleware = (store) => (next) => (action) => {
    console.log('Dispatching:', action);
    const result = next(action);
    console.log('Next state:', store.getState());
    return result;
  };
  
  export default loggerMiddleware;