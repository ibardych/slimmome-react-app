import styled from '@emotion/styled';
import grey_background from 'images/MainPageImgs/grey_background.png';
import strawberry from 'images/MainPageImgs/strawberry.png';
import banana from 'images/MainPageImgs/banana.png';
import leafs from 'images/MainPageImgs/leafs.png';

export const BacklogWrapper = styled.div`
  position: relative;
`;

export const Background = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  background: url(${grey_background}) no-repeat;
  width: 602px;
  height: 816px;
  background-size: cover;
`;

export const Srtawberry = styled.div`
  position: absolute;
    bottom: 65px;
    right: 36px;
  background: url(${strawberry}) no-repeat;
  width: 286px;
  height: 279px;
  background-size: cover;
`;

export const Banana = styled.div`
  position: absolute;
  right: 782px;
  bottom: 400px
  background: url(${banana}) no-repeat;
  width: 733px;
  height: 552px;
  background-size: cover;
`;
export const Leafs = styled.div`
  position: absolute;
  bottom: 30px;
  right: 339px;
  background: url(${leafs}) no-repeat;
  width: 746px;
  height: 846px;
  background-size: cover;
`;
