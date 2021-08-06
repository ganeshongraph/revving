import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';

export const HeaderWrapper = styled(Box)`
  background: rgb(60, 60, 60);
  padding: 10px 30px;
  color: #fff;
  .headerLogo {
    @media (max-width: 767px) {
      height: 38px;
    }
  }
`;

export const StyledLink = styled(Link)`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  background: #ffbc3d;
  border-radius: 5px;
  padding: 12px 16px;
  color: #fff;
  text-decoration: none;
  @media (max-width: 767px) {
    padding: 6px 9px;
  }
`;

export const StyledLogin = styled(Link)`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  color: #fff;
  text-decoration: none;
  margin-right: 25px;
`;
