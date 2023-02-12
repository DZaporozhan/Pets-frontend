import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/api/user';

// Manipulate User Info
export const getUserData = createAsyncThunk(
  'user/getAllInfo',
  async (_, thunkAPI) => {
    try {
      const { user } = await api.getUserData();
      return user;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      console.log('getUserData', error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
