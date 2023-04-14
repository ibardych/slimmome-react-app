import styled from '@emotion/styled';
import { Triangle } from 'react-loader-spinner';

export const LoaderStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255 255 255 / 65%);
`;

export const LoaderContainer = styled.div`
  position: relative;
  height: 100px;
  width: 100px;
`;

export const StyledTriangle = styled(Triangle)`
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const StrawberryImg = styled.img`
  width: 50px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-55%, -18%);
  max-width: initial;
`;