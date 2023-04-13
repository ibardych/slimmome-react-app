import { createSlice } from '@reduxjs/toolkit';
// import { register, logIn, logout } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    //redusers
  },
});

export const authReducer = authSlice.reducer;
