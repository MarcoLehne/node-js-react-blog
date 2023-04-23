import { combineReducers } from '@reduxjs/toolkit';
import isLoggedInSlice from './slicers/isLoggedInSlice';
import userNameSlice from './slicers/userName';

const rootReducer = combineReducers({
  isLoggedIn: isLoggedInSlice,
  userName: userNameSlice,
});

export default rootReducer;
