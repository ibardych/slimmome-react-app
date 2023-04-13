import styled from '@emotion/styled';

export const Button = styled.button`
  font-size: 16px;
  padding: 13px 0;
  color: #fff;
  border: none;
  background: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  &.login-orange {
    width: 181px;
    height: 44px;
    padding: 13px 0;
  }
  &.login-white {
    width: 181px;
    height: 44px;
    padding: 13px 0;
    background: #fff;
    color: #fc842d;
    border: 2px solid #fc842d;
    box-shadow: none;
  }
  &.start {
    width: 210px;
    height: 43px;
    padding: 13px 0;
  }
  &.add-product {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
  &:hover {
    animation: jelly 0.5s;
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
  @keyframes jelly {
    25% {
      transform: scale(0.9, 1.1);
    }

    50% {
      transform: scale(1.1, 0.9);
    }

    75% {
      transform: scale(0.95, 1.05);
    }
  }
`;
