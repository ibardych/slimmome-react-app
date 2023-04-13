import styled from '@emotion/styled';
import { mediaSizes } from 'constants';

export const ButtonDiary = styled.button`
  width: 48px;
  height: 48px;
  background: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 50%;
  border: none;
  margin-left: 0px;
  margin-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${mediaSizes.mobile}) {
    margin-left: 0px;
    margin-top: 60px;
  }
  @media screen and (min-width: ${mediaSizes.tablet}) {
    margin-left: 87px;
    margin-top: 0px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    flex-direction: row;
    margin-left: 60px;
    margin-top: 0px;
  }
`;
