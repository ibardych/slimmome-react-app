import { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarIcon, CustomDatePicker, DatePickerContainer } from './DatePicker.styled';
import { useDispatch } from 'react-redux';
import { diaryDayInfo } from 'redux/diary/operations';
import { setSelectedDate } from 'redux/diary/slice';

const DatePicker = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    const date = startDate.toISOString().slice(0, 10);

    dispatch(diaryDayInfo(date));
    dispatch(setSelectedDate(date));
  }, [dispatch, startDate]);

  return (
    <DatePickerContainer>
      <CustomDatePicker
        id="date-picker"
        dateFormat="dd.MM.yyyy"
        selected={startDate}
        onChange={setStartDate}
        readonly
      />
      <label htmlFor="date-picker">
        <CalendarIcon color="#9B9FAA" />
      </label>
    </DatePickerContainer>
  );
};

export default DatePicker;
