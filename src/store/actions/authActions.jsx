// src/store/actions/authActions.js
export const login = (username, password) => {
    return (dispatch) => {
      // Simulate an API call
      setTimeout(() => {
        if (username === 'user' && password === 'password') { // Mock credentials
          dispatch({ type: 'LOGIN_SUCCESS', payload: { username } });
        } else {
          dispatch({ type: 'LOGIN_FAILURE', payload: 'Invalid credentials' });
        }
      }, 1000);
    };
  };
  
  export const logout = () => {
    return (dispatch) => {
      dispatch({ type: 'LOGOUT' });
    };
  };