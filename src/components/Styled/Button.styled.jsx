import styled from '@emotion/styled';

export const Button = styled.button`
  font-size: 16px;
  background-color: #3c61c6;
  padding: 8px 16px;
  color: #fff;
  border: none;

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
