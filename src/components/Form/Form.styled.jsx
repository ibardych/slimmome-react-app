import styled from '@emotion/styled';
import { mediaSizes } from 'constants/media';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

export const Caption = styled.p`
  margin: 0;
  margin-bottom: 55px;
  margin-right: auto;
  text-transform: uppercase;
  font-family: 'Verdana';
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: #fc842d;
`;

export const Label = styled.span`
  margin:0;
  margin-right: auto;
  font-family: 'Verdana'; 
  font-weight: 700; 
  font-size: 14px; 
  line-height: 1.2; 
  letter-spacing: 0.04em;  
  color: #9b9faa; 
`

export const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    flex-direction: row;
    gap: 32px;
  }
`