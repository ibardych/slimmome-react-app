import styled from '@emotion/styled';
import { mediaSizes } from 'constants/media';

export const SidebarStyled = styled.div`
  font-family: 'Verdana';
  background-color: #f0f1f3;
  padding-left: 20px;
  padding-right: 15px;
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    display: flex;
    padding-left: 32px;
    padding-bottom: 80px;
    padding-top: 80px;
    padding-right: 141px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 517px;
    display: block;
    padding-left: 106px;
    padding-bottom: 166px;
    padding-right: 123px;
    padding-top: 292px;
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
