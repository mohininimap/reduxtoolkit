import {configureStore} from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
  const store=configureStore({
    reducer:userReducer
    // preloadedState:initialState
  })
  
  export default store;