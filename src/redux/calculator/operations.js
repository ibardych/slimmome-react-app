import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const calculatorAnonim = createAsyncThunk(
  'calculator/calculatorAnonim',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/daily-rate', credentials);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const calculatorLogIn = createAsyncThunk(
  'calculator/calculatorLogIn',
  async ([id, data, token], thunkAPI) => {
    setAuthHeader(token);
    try {
      const res = await axios.post(`/daily-rate/${id}`, { ...data });

      // const userResponse = await axios.get('/user');
      //return { user: userResponse.data, accessToken: res.data.accessToken };

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
