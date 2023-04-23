import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: null,
};

export const userName = createSlice({
  name: 'userName',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setUserName } = userName.actions;

export default userName.reducer;
