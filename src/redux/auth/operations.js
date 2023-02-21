import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/api/auth';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  width: '200px',
  position: 'right-top',
  closeButton: false,
  distance: '100px',
});
// REGISTRATION
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { user } = await api.register(credentials);

      const response = await api.login({
        email: user.email,
        password: user.password,
      });

      return response;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      Notify.failure(data.message);
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// LOGIN
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await api.login(credentials);
      Notify.success('Login successfully');
      return response;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      if (error.status === 403) {
        Notify.failure(
          'The password you entered is incorrect. Please try again'
        );
      }
      if (error.message === "Cannot read property '_id' of null") {
        Notify.failure(`Please enter your registered email`);
      }
      console.log(error);

      return thunkAPI.rejectWithValue(error);
    }
  }
);

// LOGOUT
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await api.logout;
    Notify.success('Logout successfully');
  } catch ({ response }) {
    const { status, data } = response;
    const error = {
      status,
      message: data.message,
    };
    console.log(error);
    return thunkAPI.rejectWithValue(error);
  }
});

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();

      const result = await api.getCurrent(auth.token);
      return result;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);
