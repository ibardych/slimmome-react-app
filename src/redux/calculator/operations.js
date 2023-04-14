import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const calculatorAnonim = createAsyncThunk(
  'calculator/calculatorAnonim',
  async (credentials, thunkAPI) => {
    console.log(credentials);
    try {
      const res = await axios.post('/daily-rate', credentials);
      console.log(res.data);
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
  async ([id, data, token], thunkAPI) => {
    setAuthHeader(token);
    try {
      const res = await axios.post(`/daily-rate/${id}`, { ...data });
      return res.data;
    } catch (error) {
      // console.log(error.message);
      console.log(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


