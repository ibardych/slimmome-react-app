import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProductsList = createAsyncThunk(
  'dropdown/productsList',
  async (search, thunkAPI) => {
    if (!search) {
      throw new Error('Search parameter is required');
    }
    try {
      const response = await axios.get('/product', {
        params: { search },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
