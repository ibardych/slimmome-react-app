import styled from '@emotion/styled';
import { mediaSizes } from 'constants/media';
import imagetab from 'images/Sidebarimg/imgtab2x.png';

export const SidebarStyled = styled.div`
  padding-left: 20px;
  padding-right: 15px;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f0f1f3;
  margin: 0 -20px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    display: flex;
    padding-left: 32px;
    padding-bottom: 80px;
    padding-top: 80px;
    padding-right: 141px;
    margin: 0 -32px;

    background: url(${imagetab}) bottom right #f0f1f3 no-repeat;
    background-size: 335px 510px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    display: block;
    background: none;
    flex-basis: 40%;
    flex-grow: 0;
    flex-shrink: 0;
    margin: 0;
    margin-left: 124px;
  }

  & .summary {
    @media screen and (min-width: ${mediaSizes.desktop}) {
      margin-bottom: 60px;
    }

    @media screen and (min-width: ${mediaSizes.tablet}) {
      margin-right: auto;
    }
  }

  & .title {
    margin-bottom: 29px;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.2;
    color: #212121;

    @media screen and (min-width: ${mediaSizes.desktop}) {
      margin-bottom: 40px;
    }
  }

  & .item {
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.2;
    color: #9b9faa;

    display: flex;
    justify-content: space-between;
  }

  & .item:last-child {
    margin-bottom: 0;
  }

  & .listData {
    margin-bottom: 40px;

    display: flex;
    flex-direction: column;
    list-style: none;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      width: 255px;
    }

    @media screen and (min-width: ${mediaSizes.desktop}) {
      margin-bottom: 60px;
    }
  }

  & .title__name {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.2;
    color: #9b9faa;
  }
`;
