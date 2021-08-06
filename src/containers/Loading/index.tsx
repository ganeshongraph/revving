/* eslint-disable react/require-default-props */
import React from 'react';
import { Typography } from '@material-ui/core';
import { MainContentBox, BoxWrap } from './Styled';

// Props Interface
interface IProps {
  head?: string;
  body?: string;
}

const Loading: React.FC<IProps> = ({ head, body }: IProps) => (
  <>
    <MainContentBox>
      <BoxWrap>
        <div className='loader' />
        <Typography variant='h6'>{head ?? 'Loading...'}</Typography>
        <Typography variant='body1'>{body ?? ''}</Typography>
      </BoxWrap>
    </MainContentBox>
  </>
);

export default Loading;
