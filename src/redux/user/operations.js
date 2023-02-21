import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/api/user';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

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
      Notify.error(data.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Add Pet
export const addPet = createAsyncThunk(
  'user/addPet',
  async (data, thunkAPI) => {
    try {
      const response = await api.addUserPet(data);
      return response;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      Notify.error(data.message);
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
      Notify.success(response.message);
      console.log(response);
      return response;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      Notify.error(data.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Update Pet Image
export const updateImage = createAsyncThunk(
  'user/updateImage',
  async ({ id, file }, thunkAPI) => {
    try {
      const response = await api.updatePetData(id, file);
      Notify.success(response.message);
      return response;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      Notify.error(data.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Update User Avatar
export const updateAvatar = createAsyncThunk(
  'user/updateAvatar',
  async ({ file }, thunkAPI) => {
    try {
      const response = await api.updateUserData(file);
      Notify.success('You have changed your avatar');
      return response;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      Notify.error(data.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Update User Avatar
export const updateUserInfo = createAsyncThunk(
  'user/updateUserInfo',
  async ({ value }, thunkAPI) => {
    try {
      const response = await api.updateUserData(value);
      Notify.success('You have changed your data');
      return response;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      Notify.error(data.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
