import { combineReducers } from '@reduxjs/toolkit';
import isLoggedInSlice from './slicers/isLoggedInSlice';

const rootReducer = combineReducers({
  isLoggedIn: isLoggedInSlice,
});

export default rootReducer;
