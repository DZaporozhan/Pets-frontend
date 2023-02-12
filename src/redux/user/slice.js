import { createSlice } from '@reduxjs/toolkit';
import { getUserData } from './operations';

const initialState = {
  userInfo: {},
  //   token: null,
  //   isLoggedIn: false,
  //   isRefreshing: false,
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
      //   state.token = null;
      //   state.isLoggedIn = true;
      state.isLoading = false;
    },
    [getUserData.rejected]: handleRejected,
  },

  //     // LOGIN
  //     [login.pending]: handlePending,
  //     [login.fulfilled](state, action) {
  //       state.user = action.payload.user;
  //       state.token = action.payload.token;
  //       state.isLoggedIn = true;
  //       state.isAuthLoading = false;
  //     },
  //     [login.rejected]: handleRejected,

  //     // LOGOUT
  //     [logout.pending]: handlePending,
  //     [logout.fulfilled](state) {
  //       state.user = {
  //         email: null,
  //       };
  //       state.token = null;
  //       state.isLoggedIn = false;
  //       state.isAuthLoading = false;
  //     },
  //     [logout.rejected]: handleRejected,

  //     [current.pending]: handlePending,
  //   },
  //   [current.fulfilled]: (store, { payload }) => {
  //     store.loading = false;
  //     store.user = payload;
  //     store.isLogin = true;
  //   },
  //   [current.rejected]: handleRejected,
});

export const userReducer = userSlice.reducer;
