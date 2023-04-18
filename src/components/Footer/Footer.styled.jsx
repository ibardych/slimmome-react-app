import styled from '@emotion/styled';
import { mediaSizes } from 'constants';
import { colors } from 'constants';
import { transition } from 'helpers';

export const FooterStyled = styled.footer`
  /* position: fixed; */
  width: 100%;
  left: 0;
  bottom: 0;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-top: 100px;
  margin-bottom: 10px;

  @media screen and (min-width: ${mediaSizes.desktop}) {
    margin-top: 200px;
  }

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

  & .teamname {
    cursor: pointer;
    color: ${colors.color1};
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 1);
    ${transition('color')}
    padding: 1px 3px;

    &:hover {
      color: ${colors.color1};
    }
  }
`;

export const Team = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 20px 0;
  width: 100%;
  background-color: #262b38;
  text-align: center;
  opacity: 0;
  pointer-events: none;
  ${transition('opacity')}

  &.opened {
    opacity: 1;
    pointer-events: all;
  }

  & img {
    display: inline;
    max-width: 100%;
    width: 500px;
  }
  & svg {
    position: absolute;
    top: 30px;
    right: 30px;
    width: 30px;
    height: 30px;
    fill: rgba(255, 255, 255, 0.3);
    cursor: pointer;
    ${transition('fill')}

    &:hover {
      fill: rgba(255, 255, 255, 0.6);
    }
  }
`;
