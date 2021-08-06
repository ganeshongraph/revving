import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box } from '@material-ui/core';
// eslint-disable-next-line import/no-relative-parent-imports
import rLogo from '../../assets/images/r-logo.svg';
import { HeaderWrapper, StyledLink, StyledLogin } from './Styled';

const Header = () => {
  const location = useLocation();

  return (
    <HeaderWrapper alignItems='center' justifyContent='space-between' display='flex'>
      <Link to=''>
        <img src={rLogo} alt='logo' className='headerLogo' />
      </Link>
      {location.pathname === '/' ? (
        <Box>
          <StyledLogin to='/login'>Log in</StyledLogin>
          <StyledLink to='/eligibility-check'>Apply Now</StyledLink>
        </Box>
      ) : (
        ''
      )}
    </HeaderWrapper>
  );
};

export default Header;
