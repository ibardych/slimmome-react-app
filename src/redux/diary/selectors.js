export const selectEatenProducts = state =>
  state.diary.dayInfo?.eatenProducts ?? [];

export const selectSelectedDate = state => state.diary.selectedDate;

export const selectDaySummary = state =>
  state.diary.dayInfo?.daySummary || state.diary?.dayInfo; //

export const selectEatenProductsLoading = state => state.diary.isLoading;

export const selectDayId = state => state.diary.dayInfo?.id;

export const selectIsLoading = state => state.diary.isLoading;

export const selectIsDeleting = state => state.diary.isDeleting;
