import { createSlice } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
// import { useDispatch } from 'react-redux';
import {
  addPet,
  deletePet,
  getUserData,
  updateAvatar,
  updateImage,
  updateUserInfo,
} from './operations';

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
    // GET USER Info
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

    //UPDATE PET IMG
    [updateImage.pending]: handlePending,
    [updateImage.fulfilled](state, action) {
      const pet = state.userInfo.userPets.find(
        ({ _id }) => _id === action.payload.id
      );
      if (!pet) {
        Notify.failure('Ooops! Something goes wrong. Please, reload the page.');
      } else pet.imageURL = action.payload.imageURL;
      state.isLoading = false;
    },
    [updateImage.rejected]: handleRejected,

    //UPDATE USER Avatar
    [updateAvatar.pending]: handlePending,
    [updateAvatar.fulfilled](state, action) {
      const user = state.userInfo;
      if (!user) {
        Notify.failure('Ooops! Something goes wrong. Please, reload the page.');
      } else user.imageURL = action.payload.imageURL;
      state.isLoading = false;
    },
    [updateAvatar.rejected]: handleRejected,

    //Update User Info
    [updateUserInfo.pending]: handlePending,
    [updateUserInfo.fulfilled](state, action) {
      const user = state.userInfo;
      if (!user) {
        Notify.failure('Ooops! Something goes wrong. Please, reload the page.');
      } else user.userInfo = action.payload.userInfo;
      state.isLoading = false;
    },
    [updateUserInfo.rejected]: handleRejected,
  },
});

export const userReducer = userSlice.reducer;
