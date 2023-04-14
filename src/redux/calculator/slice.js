import { createSlice } from '@reduxjs/toolkit';
import { calculatorAnonim, calculatorLogIn } from './operations';

const initialState = {
    id: null,
    dailyRate: null,
    notAllowedProducts: [],
    summaries: [],
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
      })
      .addCase(calculatorLogIn.fulfilled, (state, action) => {
        state.dailyRate = action.payload.dailyRate;
        state.notAllowedProducts = action.payload.notAllowedProducts;
        state.isLoading = false;
      })
      .addCase(calculatorLogIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(calculatorLogIn.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const calculatorReducer = calculatorSlice.reducer;
// calculatorLogIn