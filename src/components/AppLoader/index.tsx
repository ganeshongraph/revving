import React from 'react';
import { Typography } from '@material-ui/core';
import { MainContentBox, BoxWrap } from './Styled';

const AppLoader = () => (
  <>
    <MainContentBox>
      <BoxWrap>
        <div className='loader' />
        <Typography variant='h6'>One moment...</Typography>
        <Typography variant='body1'>We’re checking if you’re eligible.</Typography>
      </BoxWrap>
    </MainContentBox>
  </>
);

export default AppLoader;
