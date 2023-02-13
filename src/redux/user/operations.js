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
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Add Pet
export const addPet = createAsyncThunk(
  'user/deletePet',
  async (id, thunkAPI) => {
    try {
      const response = await api.removeUserPet(id);
      console.log(response);
      return response;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Delete Pet
export const deletePet = createAsyncThunk(
  'user/deletePet',
  async (id, thunkAPI) => {
    try {
      const response = await api.removeUserPet(id);
      console.log(response);
      return response;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return thunkAPI.rejectWithValue(error);
    }
  }
);
