import { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { CustomDatePicker } from './DatePicker.styled';
import axios from 'axios';

const DatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    const fetchData = async () => {
      const dataToSend = { date: startDate.toISOString().slice(0, 10) };
      try {
        await axios.post(
          'https://slimmom-backend.goit.global/day/info',
          dataToSend
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [startDate]);

  const handleDateChange = date => {
    setStartDate(date);
  };

  return <CustomDatePicker selected={startDate} onChange={handleDateChange} />;
};

export default DatePicker;
