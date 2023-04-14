import styled from '@emotion/styled';
import { colors } from 'constants';

export const MessageStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  & div {
    color: #333;
    border-radius: 5px;
    padding: 8px 24px;
    border: 1px solid ${colors.color1};
    font-size: 18px;
  }
`;
