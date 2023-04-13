import styled from '@emotion/styled';

export const Button = styled.button`
  font-size: 16px;
  padding: 8px 16px;
  color: #fff;
  border: none;
  background: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  &:hover {
  }

  &.totop {
    position: fixed;
    bottom: 30px;
    right: 30px;
    border-radius: 50px;
    font-size: 26px;
    width: 50px;
    height: 50px;
    padding: 0;

    & svg {
      position: relative;
      bottom: -2px;
    }

    &::before,
    &::after {
      display: none;
    }
  }
`;
