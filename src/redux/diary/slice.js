const { createSlice } = require('@reduxjs/toolkit');
const { diaryDayInfo } = require('./operations');

const initialState = {
  dayInfo: null,
  isLoading: false,
  error: null,
};

const diarySlice = createSlice({
  name: 'diary',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(diaryDayInfo.fulfilled, (state, action) => {
        state.dayInfo = action.payload;
        state.isLoading = false;
      })
      .addCase(diaryDayInfo.pending, (state, action) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(diaryDayInfo.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export const diaryReducer = diarySlice.reducer;
