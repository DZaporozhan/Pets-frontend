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

// // LOGIN
// export const login = createAsyncThunk(
//   'auth/login',
//   async (credentials, thunkAPI) => {
//     try {
//       const response = await api.login(credentials);

//       return response;
//     } catch ({ response }) {
//       const { status, data } = response;
//       const error = {
//         status,
//         message: data.message,
//       };
//       console.log(error);
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// // LOGOUT
// export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//   try {
//     await api.logout;
//   } catch ({ response }) {
//     const { status, data } = response;
//     const error = {
//       status,
//       message: data.message,
//     };
//     console.log(error);
//     return thunkAPI.rejectWithValue(error);
//   }
// });

// export const current = createAsyncThunk(
//   'auth/current',
//   async (_, { rejectWithValue, getState }) => {
//     try {
//       const { auth } = getState();

//       const result = await api.getCurrent(auth.token);
//       return result;
//     } catch ({ response }) {
//       const { status, data } = response;
//       const error = {
//         status,
//         message: data.message,
//       };
//       return rejectWithValue(error);
//     }
//   }
// );
