import { createSlice } from '@reduxjs/toolkit';
import { deletePet, getUserData } from './operations';

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

    //DELETE PET
    [deletePet.pending]: handlePending,
    [deletePet.fulfilled](state, action) {
      state.userInfo.userPets = state.userInfo.userPets.filter(
        ({ _id }) => _id !== action.payload.id
      );
      state.isLoading = false;
    },
    [deletePet.rejected]: handleRejected,
  },
});

export const userReducer = userSlice.reducer;
