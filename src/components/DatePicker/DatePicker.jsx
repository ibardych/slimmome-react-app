import { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { CustomDatePicker } from './DatePicker.styled';
import { useDispatch } from 'react-redux';
import { diaryDayInfo } from 'redux/diary/operations';

const DatePicker = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    dispatch(diaryDayInfo(startDate));
  }, [dispatch, startDate]);

  const handleDateChange = date => {
    setStartDate(date);
  };

  return <CustomDatePicker selected={startDate} onChange={handleDateChange} />;
};

export default DatePicker;
