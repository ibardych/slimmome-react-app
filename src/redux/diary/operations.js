import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const diaryDayInfo = createAsyncThunk(
  'diary/dayInfo',
  async (date, thunkApi) => {
    try {
      const response = await axios.post('/day/info', { date });

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteProductThunk = createAsyncThunk(
  'diary/deleteProduct',
  async ([eatenProductId, dayId], thunkApi) => {
    try {
      console.log({ dayId, eatenProductId });
      const response = await axios.delete('/day', {
        data: { dayId, eatenProductId },
      });

      return { data: response.data, productId: eatenProductId };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addProductThunk = createAsyncThunk(
  'diary/addProductThunk',
  async (body, thunkApi) => {
    try {
      const response = await axios.post('day', body);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
