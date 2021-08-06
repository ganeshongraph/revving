import styled from 'styled-components';
import { Box } from '@material-ui/core';

export const MainContentBox = styled(Box)`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  background: aliceblue;
  z-index: 999;
`;

export const BoxWrap = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 48%;
  padding: 50px;
  text-align: center;
  background: #ffffff;
  border-radius: 10px;
`;
