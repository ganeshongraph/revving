/* eslint-disable react/require-default-props */
import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import {
  MainSuccessContainer,
  EligibilityMainWrapBox,
  BoxWrap,
  FormGroup,
  NextBtn
} from './Styled';

const CustomerSuccess = () => (
  <EligibilityMainWrapBox>
    <MainSuccessContainer>
      <BoxWrap className='endWerBox' style={{ width: '1080px' }}>
        <div className='' />
        <Typography variant='h4'>We’ve got your application!</Typography>
        <Typography variant='body1'>
          We’re looking through it now. A member of our team will get back to you within 3 business
          days.
        </Typography>
        <FormGroup>
          <Link to='/' className='btnLink'>
            <NextBtn className='back backTohome'>Back to homepage</NextBtn>
          </Link>
        </FormGroup>
      </BoxWrap>
    </MainSuccessContainer>
  </EligibilityMainWrapBox>
);

export default CustomerSuccess;
