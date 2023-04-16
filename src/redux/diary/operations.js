import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const diaryDayInfo = createAsyncThunk(
  'diary/dayInfo',
  async (date, thunkApi) => {
    const dataToSend = { date: date.toISOString().slice(0, 10) };
    try {
      const response = await axios.post('/day/info', dataToSend);

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
