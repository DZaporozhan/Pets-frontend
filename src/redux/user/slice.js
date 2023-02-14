import { createSlice } from '@reduxjs/toolkit';
import { addPet, deletePet, getUserData } from './operations';

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

    //ADD PET
    [addPet.pending]: handlePending,
    [addPet.fulfilled](state, action) {
      state.userInfo.userPets = [action.payload, ...state.userInfo.userPets];
      state.isLoading = false;
    },
    [addPet.rejected]: handleRejected,

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
