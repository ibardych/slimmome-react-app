import { createSlice } from '@reduxjs/toolkit';
import { fetchProductsList } from './operations';

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: {
    [fetchProductsList.pending](state, action) {
      state.isLoading = true;
    },

    [fetchProductsList.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.products = action.payload;
    },
    [fetchProductsList.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const productsReducer = productsSlice.reducer;
