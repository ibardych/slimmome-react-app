import styled from '@emotion/styled';
import { BsFillEyeFill } from 'react-icons/bs';
import { BsFillEyeSlashFill } from 'react-icons/bs';

export const ShowPasswordButton = styled.button`
  position: absolute;
  top: 22px;
  left: 210px;
  border: none;
  background-color: transparent;
  padding: 5px;
  cursor: pointer;
  //   pointer-events: none;
`;
export const ShowIcon = styled(BsFillEyeFill)`
  width: 14px;
  height: 12 px;
  fill: rgba(0, 0, 0, 1);
`;

export const HideIcon = styled(BsFillEyeSlashFill)`
  width: 14px;
  height: 12 px;
  fill: rgba(0, 0, 0, 0.3);
`;
