import styled from '@emotion/styled';
import { colors } from 'constants';

export const FooterStyled = styled.footer`
  /* position: fixed; */
  width: 100%;
  left: 0;
  bottom: 0;
  padding-top: 15px;
  padding-bottom: 15px;

  & ul {
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    color: ${colors.color4};
    opacity: 0.8;
  }

  & li {
    font-size: 14px;
    display: flex;
    align-items: center;
    color: ${colors.color5};

    &:not(:last-child) {
      padding-right: 10px;
      border-right: 1px solid ${colors.color5};
    }
  }

  & .icon {
    margin-left: 8px;
    height: 20px;
    fill: ${colors.color1};
    width: 18px;
  }
`;
