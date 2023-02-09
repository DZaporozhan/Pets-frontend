import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/api/auth';

// REGISTRATION
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { user } = await api.register(credentials);
      thunkAPI.dispatch(login({ email: user.email, password: user.password }));

      return user;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
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

      return response;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// LOGOUT
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await api.logout;
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
