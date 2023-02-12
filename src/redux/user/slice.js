import { createSlice } from '@reduxjs/toolkit';
import { getUserData } from './operations';

const initialState = {
  userInfo: {},
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    // GET USER
    [getUserData.pending]: handlePending,
    [getUserData.fulfilled](state, action) {
      state.userInfo = action.payload;
      state.isLoading = false;
    },
    [getUserData.rejected]: handleRejected,
  },
});

export const userReducer = userSlice.reducer;
