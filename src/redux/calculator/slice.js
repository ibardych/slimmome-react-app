import { createSlice } from '@reduxjs/toolkit';
import { calculatorAnonim } from './operations';

const initialState = {
    dailyRate: null,
    notAllowedProducts: [],
    isLoading: false,
    error: null,
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(calculatorAnonim.fulfilled, (state, action) => {
        state.dailyRate = action.payload.dailyRate;
        state.notAllowedProducts = action.payload.notAllowedProducts;
        state.isLoading = false;
      })
      .addCase(calculatorAnonim.pending, state => {
        state.isLoading = true;
      })
      .addCase(calculatorAnonim.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const calculatorReducer = calculatorSlice.reducer;
