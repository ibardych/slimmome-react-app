import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, register } from 'redux/auth/operations';

const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    isLoading: false,
  },
  extraReducers: builder => {
    builder.addCase(register.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, state => {
      state.isLoading = false;
    });
    builder.addCase(register.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(logIn.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(logIn.fulfilled, state => {
      state.isLoading = false;
    });
    builder.addCase(logIn.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(logOut.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(logOut.fulfilled, state => {
      state.isLoading = false;
    });
    builder.addCase(logOut.rejected, state => {
      state.isLoading = false;
    });
  },
});

export const loadingReducer = loadingSlice.reducer;
