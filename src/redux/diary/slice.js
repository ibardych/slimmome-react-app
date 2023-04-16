const { createSlice } = require('@reduxjs/toolkit');
const { diaryDayInfo, deleteProductThunk } = require('./operations');

const initialState = {
  dayInfo: null,
  selectedDate: null,
  isLoading: false,
  error: null,
};

const diarySlice = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    setSelectedDate(state, action) {
        state.selectedDate = action.payload;
    }
  },
  extraReducers: builder =>
    builder
      .addCase(diaryDayInfo.fulfilled, (state, action) => {
        state.dayInfo = action.payload;
        state.isLoading = false;
      })
      .addCase(diaryDayInfo.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(diaryDayInfo.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(deleteProductThunk.fulfilled, (state, action) => {
        state.dayInfo.eatenProducts = state.dayInfo.eatenProducts.filter(product => product.id !== action.payload.productId);
        state.dayInfo.daySummary = action.payload.data.newDaySummary;

      })
      .addCase(deleteProductThunk.pending, state => {
        // add loading field on delete product
      })
      .addCase(deleteProductThunk.rejected, (state, action) => {
        // add error on delete
      })
});

export const diaryReducer = diarySlice.reducer;

export const {setSelectedDate} = diarySlice.actions;
