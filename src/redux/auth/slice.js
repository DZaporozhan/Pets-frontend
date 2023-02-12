import { createSlice } from '@reduxjs/toolkit';
import { login, logout, register, current } from './operations';

const initialState = {
  user: {
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isAuthLoading: false,
  error: null,
};

const handlePending = state => {
  state.isAuthLoading = true;
};

const handleRejected = (state, action) => {
  state.isAuthLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    // REGISTER
    [register.pending]: handlePending,
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = null;
      state.isLoggedIn = true;
      state.isAuthLoading = false;
    },
    [register.rejected]: handleRejected,

    // LOGIN
    [login.pending]: handlePending,
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.accessToken;
      state.isLoggedIn = true;
      state.isAuthLoading = false;
    },
    [login.rejected]: handleRejected,

    // LOGOUT
    [logout.pending]: handlePending,
    [logout.fulfilled](state) {
      state.user = {
        email: null,
      };
      state.token = null;
      state.isLoggedIn = false;
      state.isAuthLoading = false;
    },
    [logout.rejected]: handleRejected,

    [current.pending]: state => {
      state.isAuthLoading = true;
      state.error = null;
      state.isRefreshing = true;
    },
    [current.fulfilled]: (state, { payload }) => {
      state.isLoggedIn = true;
      state.user = payload.user;
      state.isAuthLoading = false;
      state.isRefreshing = false;
    },
    [current.rejected]: (state, action) => {
      state.isAuthLoading = false;
      state.isRefreshing = false;
      state.token = null;
      state.error = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
