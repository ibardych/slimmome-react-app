import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';
import { colors } from 'constants';

export const CustomDatePicker = styled(DatePicker)`
  border: 2px solid ${colors.color2};
  border-radius: 5px;
  padding: 10px;
  font-size: 20px;
  color: #212121;

  &:hover,
  &:focus {
    outline: none;
    border-color: ${colors.color1};
  }
`;
