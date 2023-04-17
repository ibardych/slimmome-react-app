import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';
import { colors } from 'constants';
import { mediaSizes } from 'constants/media';
import { AiOutlineCalendar } from 'react-icons/ai';

export const CustomDatePicker = styled(DatePicker)`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #212121;
  border: none;
  width: 120px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 34px;
    line-height: 41px;
    width: 225px;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;

  &:hover,
  &:focus {
    svg,
    input {
      outline: none;
      fill: ${colors.color1};
      color: ${colors.color1};
    }
  }
`;
export const CalendarIcon = styled(AiOutlineCalendar)`
  width: 20px;
  height: 20px;
  margin-left: 20px;
  cursor: pointer;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 25px;
    height: 25px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 25px;
    height: 25px;
  }
`;
