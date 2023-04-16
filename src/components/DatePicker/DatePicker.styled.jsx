import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';

export const CustomDatePicker = styled(DatePicker)`
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 10px;
  font-size: 20px;
  color: #212121;

  &:hover,
  &:focus {
    outline: none;
    border-color: #fc842d;
    box-shadow: 1px 1px 1px 1px #fc842d;
  }
`;
