import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import {}
// const token = state => state.auth.token;
axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };


export const calculatorAnonim = createAsyncThunk(
  'calculator/calculatorAnonim',
  async (credentials, thunkAPI) => {
    console.log(credentials);
    try {

      const res = await axios.post('/daily-rate', credentials);
      return res.data;
    } catch (error) {
      console.log(error.message);
      console.log(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const calculatorLogIn = createAsyncThunk(
  'calculator/calculatorLogIn',
  async (id, credentials, thunkAPI) => {
    try {
      // setAuthHeader(token);
      // console.log(token);
      const res = await axios.post(`/daily-rate/${id}`, credentials);
      return res.data;
    } catch (error) {
      console.log(error.message);
      console.log(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


// export const refreshUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, { getState, rejectWithValue }) => {
//     const state = getState();

//     if (state.auth.token === null) {
//       return rejectWithValue('Unable to fetch user');
//     }

//     try {
//       setAuthHeader(state.auth.token);
//       const res = await axios.get('/auth/current');
//       return res.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

