import React from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Typography
  // FormControlLabel
  // InputBase
} from '@material-ui/core';
// import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
  HeadingTypography,
  MainContentBox,
  SidebarUl,
  ContentWrap,
  ParagraphText,
  FormGroup,
  // StyledButton,
  // BtnGroup,
  NextBtn,
  // StyledSvg,
  StyledTypography
} from './Styled';
import { CircleBorder, CircleUpperNonActiveBorder, SidebarWhiteBox } from '../Styled';
import Layout from '../../../components/Layout';

const EligibilityFromSubmission = () => (
  <>
    <Layout>
      <MainContentBox>
        <Grid container>
          <Grid item xs={12} sm={12} md={3}>
            <SidebarWhiteBox>
              <SidebarUl>
                <Typography variant='h6' align='left'>
                  Eligibility check
                </Typography>
                <li>
                  <Typography>
                    {/* <svg
                      width={32}
                      height={32}
                      viewBox='0 0 32 32'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='active'
                      style={{ marginRight: '15px' }}
                    >
                      <circle cx={16} cy={16} r={16} fill='#262F3A' />
                      <path
                        d='M7.38461 15.1788L12.7179 21.7429L24.2051 10.666'
                        stroke='white'
                        strokeWidth={2}
                        strokeLinecap='round'
                      />
                    </svg> */}
                    <CircleBorder
                      className='active'
                      //   onClick={() => handleStepper('business')
                      // }
                    />
                    <Link to='#'>About your business</Link>
                  </Typography>
                </li>
                <li style={{ marginTop: '50px' }}>
                  <Typography>
                    {/* <StyledSvg>
                      <svg
                        width={32}
                        height={32}
                        viewBox='0 0 32 32'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='active'
                      >
                        <circle cx={16} cy={16} r={16} fill='#262F3A' />
                        <path
                          d='M7.38461 15.1788L12.7179 21.7429L24.2051 10.666'
                          stroke='white'
                          strokeWidth={2}
                          strokeLinecap='round'
                        />
                      </svg>
                    </StyledSvg> */}
                    <CircleUpperNonActiveBorder
                      className='active'
                      // onClick={
                      //   businessValue && fundingValue
                      //     ? () => handleStepper('contact')
                      //     : () => handleStepper(stepper)
                      // }
                    />
                    <Link to='#'>Your funding needs</Link>
                  </Typography>
                </li>
                <li style={{ marginTop: '50px' }}>
                  <Typography>
                    {/* <StyledSvg>
                      <svg
                        width={32}
                        height={32}
                        viewBox='0 0 32 32'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='active'
                      >
                        <circle cx={16} cy={16} r={16} fill='#262F3A' />
                        <path
                          d='M7.38461 15.1788L12.7179 21.7429L24.2051 10.666'
                          stroke='white'
                          strokeWidth={2}
                          strokeLinecap='round'
                        />
                      </svg>
                    </StyledSvg> */}
                    <CircleUpperNonActiveBorder
                      className='active'
                      // onClick={
                      //   businessValue && fundingValue
                      //     ? () => handleStepper('contact')
                      //     : () => handleStepper(stepper)
                      // }
                    />
                    <Link to='#'>Your contact details</Link>
                  </Typography>
                </li>
                <li>
                  <StyledTypography>
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/warning.svg`}
                      alt='eligible error'
                    />
                    <Link to='#'>Not eligible</Link>
                  </StyledTypography>
                </li>
              </SidebarUl>
            </SidebarWhiteBox>
          </Grid>
          <Grid item xs={12} sm={12} md={9}>
            <ContentWrap>
              <HeadingTypography variant='h4' align='left'>
                We’re sorry, we can’t take this further.
              </HeadingTypography>

              <FormGroup>
                <ParagraphText className='sorryFurther' variant='body2' align='left'>
                  Thanks you for applying to Revving. We’re sorry to say that you don’t meet our
                  criteria at this time.
                </ParagraphText>
                <ParagraphText className='sorryFurther' variant='body2' align='left'>
                  Revving requires companies to have 6 months or more trading history and be
                  domiciled in Europe or the UK.
                </ParagraphText>
                <ParagraphText className='sorryFurther' variant='body2' align='left'>
                  {`We’re working hard to expand our offering and hope to help you in the future. You can
contact us on `}
                  <Link to='#'>info@revving.com </Link>
                  to find out more.
                  {' to find out more.'}
                </ParagraphText>
              </FormGroup>

              <FormGroup className='nextBtn backBtn'>
                <Link to='/' className='btnLink'>
                  <NextBtn variant='outlined' size='large' className='back backTohome'>
                    Back to homepage
                  </NextBtn>
                </Link>
              </FormGroup>
            </ContentWrap>
          </Grid>
        </Grid>
      </MainContentBox>
    </Layout>
  </>
);

export default EligibilityFromSubmission;
