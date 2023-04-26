import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

export const isLoggedInSlice = createSlice({
  name: 'isLoggedIn',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setIsLoggedIn } = isLoggedInSlice.actions;

export default isLoggedInSlice.reducer;
