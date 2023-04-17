const { createSlice } = require('@reduxjs/toolkit');
const {
  diaryDayInfo,
  deleteProductThunk,
  addProductThunk,
} = require('./operations');

const initialState = {
  dayInfo: null,
  selectedDate: null,
  isLoading: false,
  isDeleting: false,
  error: null,
};

const diarySlice = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    setSelectedDate(state, action) {
      state.selectedDate = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(addProductThunk.fulfilled, (state, action) => {
        state.dayInfo = action.payload.day;
        state.dayInfo.daySummary = action.payload.daySummary;
        state.isLoading = false;
      })
      .addCase(addProductThunk.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(addProductThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
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
        state.dayInfo.eatenProducts = state.dayInfo.eatenProducts.filter(
          product => product.id !== action.payload.productId
        );
        state.dayInfo.daySummary = action.payload.data.newDaySummary;
        state.isDeleting = false;
      })
      .addCase(deleteProductThunk.pending, state => {
        state.isDeleting = true;
      })
      .addCase(deleteProductThunk.rejected, (state, action) => {
        state.isDeleting = false;
      }),
});

export const diaryReducer = diarySlice.reducer;

export const { setSelectedDate } = diarySlice.actions;
