import { useEffect, useRef, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import {
  CalendarIcon,
  CustomDatePicker,
  DatePickerContainer,
} from './DatePicker.styled';
import { useDispatch, useSelector } from 'react-redux';
import { diaryDayInfo } from 'redux/diary/operations';
import { setSelectedDate } from 'redux/diary/slice';
import { selectUser } from 'redux/auth/selectors';

const DatePicker = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());

  const daysProduct = useSelector(selectUser);

  const isFirstLoad = useRef(false);

  useEffect(() => {
    if (!isFirstLoad.current) {
      isFirstLoad.current = true;
      return;
    }

    const date = startDate.toISOString().slice(0, 10);

    dispatch(diaryDayInfo(date));
    dispatch(setSelectedDate(date));
  }, [dispatch, startDate]);

  const dateProduct = () => {
    return [
      {
        'curent-day': [new Date()],
      },
      {
        'product-days': daysProduct.days
          ? daysProduct.days.map(day => new Date(day.date))
          : [],
      },
    ];
  };

  return (
    <DatePickerContainer>
      <CustomDatePicker
        id="date-picker"
        dateFormat="dd.MM.yyyy"
        selected={startDate}
        onChange={setStartDate}
        readonly
        highlightDates={dateProduct()}
      />
      <label htmlFor="date-picker">
        <CalendarIcon color="#9B9FAA" />
      </label>
    </DatePickerContainer>
  );
};

export default DatePicker;
