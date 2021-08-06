import React from 'react';
import { Link } from 'react-router-dom';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Grid, Typography, Slider, Box, Button } from '@material-ui/core';
import t1 from '../../assets/images/t-1.svg';
import t2 from '../../assets/images/t-2.svg';
import t3 from '../../assets/images/t-3.svg';
import pinkCheck from '../../assets/images/pinkCheck.svg';
import bussiness from '../../assets/images/bussiness.svg';
import circleC from '../../assets/images/circleC.svg';
import boxImg from '../../assets/images/boxImg.svg';
import revvingFlogo from '../../assets/images/revvingFlogo.svg';
import {
  HeadingTypography,
  MainContentBox,
  CustomContainer,
  ParagraphText,
  TreasuryContent,
  TreasuryButton,
  CustomUnorderlist,
  MuchBox,
  RevContentBox,
  AboutUs,
  TakeControl,
  Footer,
  OurSolution,
  ImgBox,
  HeroWrap
} from './Styled';
import Header from '../../components/Layout/Header';

const marks = [
  {
    value: 0,
    label: '£10,000'
  },
  {
    value: 100,
    label: '£100,000'
  }
];

function valuetext(value: number) {
  return `${value}°C`;
}

const Homepage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <>
      <Header />
      <MainContentBox>
        <HeroWrap>
          <CustomContainer className='Herowrap'>
            <HeadingTypography variant='h3' align='left'>
              Take control
            </HeadingTypography>
            <ParagraphText align='left'>
              Don’t wait for the money you’re owed, get paid today
            </ParagraphText>
            <Button variant='contained' color='primary'>
              Get started
            </Button>
          </CustomContainer>
        </HeroWrap>
        <CustomContainer className='TreasuryService'>
          <HeadingTypography variant='h4' align='center'>
            Treasury-as-a-service
          </HeadingTypography>
          <ParagraphText align='center'>
            We provide a suite of complimentary tools that allow companies operating in the digital
            economy to better manage their cash flow, foreign currency risk and collections and
            payments processes. We call our solution Treasury as a service (TaaS).
          </ParagraphText>
          <Grid container spacing={10}>
            <Grid item md={4} className='resCenter' justify='center'>
              <TreasuryContent>
                <img src={t1} alt='' />
                <HeadingTypography variant='h4' align='center'>
                  Accelerate payments
                </HeadingTypography>
                <ParagraphText align='center'>
                  Optimise working capital by instantly accessing your earned revenue in any
                  currency
                </ParagraphText>
                <TreasuryButton variant='contained' color='primary'>
                  Apply now
                </TreasuryButton>
              </TreasuryContent>
            </Grid>
            <Grid item md={4} className='resCenter' justify='center'>
              <TreasuryContent>
                <img src={t2} alt='' />
                <HeadingTypography variant='h4' align='center'>
                  Accelerate payments
                </HeadingTypography>
                <ParagraphText align='center'>
                  Optimise working capital by instantly accessing your earned revenue in any
                  currency
                </ParagraphText>
                <TreasuryButton variant='contained' color='primary'>
                  Apply now
                </TreasuryButton>
              </TreasuryContent>
            </Grid>
            <Grid item md={4} className='resCenter' justify='center'>
              <TreasuryContent>
                <img src={t3} alt='' />
                <HeadingTypography variant='h4' align='center'>
                  Accelerate payments
                </HeadingTypography>
                <ParagraphText align='center'>
                  Optimise working capital by instantly accessing your earned revenue in any
                  currency
                </ParagraphText>
                <TreasuryButton variant='contained' color='primary'>
                  Apply now
                </TreasuryButton>
              </TreasuryContent>
            </Grid>
          </Grid>
        </CustomContainer>
        <CustomContainer className='FlexibleWrap'>
          <HeadingTypography variant='h2' align='left'>
            Flexible funding that works for you
          </HeadingTypography>
          <Grid container spacing={6}>
            <Grid item md={4}>
              <CustomUnorderlist className='custList'>
                <li>
                  <img src={pinkCheck} alt='icon' />
                  <Typography>No equity, no security</Typography>
                </li>
                <li>
                  <img src={pinkCheck} alt='icon' />
                  <Typography>Improve earnings visibility</Typography>
                </li>
                <li>
                  <img src={pinkCheck} alt='icon' />
                  <Typography>Choose your currency</Typography>
                </li>
              </CustomUnorderlist>
            </Grid>
            <Grid item md={4}>
              <CustomUnorderlist className='custList'>
                <li>
                  <img src={pinkCheck} alt='icon' />
                  <Typography>Access real-time currency rates</Typography>
                </li>
                <li>
                  <img src={pinkCheck} alt='icon' />
                  <Typography>Secure certainty of income</Typography>
                </li>
                <li>
                  <img src={pinkCheck} alt='icon' />
                  <Typography>Generate cost savings</Typography>
                </li>
              </CustomUnorderlist>
            </Grid>
            <Grid item md={4}>
              <CustomUnorderlist className='custList'>
                <li>
                  <img src={pinkCheck} alt='icon' />
                  <Typography>Collect and pay in 29 currencies</Typography>
                </li>
                <li>
                  <img src={pinkCheck} alt='icon' />
                  <Typography>Easily move funds between accounts</Typography>
                </li>
                <li>
                  <img src={pinkCheck} alt='icon' />
                  <Typography>Save money on conversion fees</Typography>
                </li>
              </CustomUnorderlist>
            </Grid>
          </Grid>
        </CustomContainer>
        <OurSolution>
          <CustomContainer className='OurSolution'>
            <HeadingTypography variant='h4' align='left'>
              Our solution
            </HeadingTypography>
            <SlickSlider {...settings}>
              <div className='fullWidth'>
                <Grid container spacing={10}>
                  <Grid item md={6}>
                    <Typography variant='h5'>Accelerate payments</Typography>
                    <Typography>
                      Combining decades of experience in media, structured and corporate finance
                      with a flexible and tech-driven approach, Revving is committed to supporting
                      companies in the digital economy.
                    </Typography>
                    <Typography>
                      Our Treasury as a Service (TaaS) platform provides a suite of products and
                      tools that enable companies to streamline and improve the efficiency of their
                      finance and treasury activities.
                    </Typography>
                    <Typography>
                      We are backed by Vala Capital, an entrepreneur-led investment firm based in
                      London.
                    </Typography>
                  </Grid>
                  <Grid item md={6}>
                    <ImgBox className='box1' />
                  </Grid>
                </Grid>
              </div>
              <div className='fullWidth'>
                <Grid container spacing={10}>
                  <Grid item md={6}>
                    <Typography variant='h5'>Accelerate payments</Typography>
                    <Typography>
                      Combining decades of experience in media, structured and corporate finance
                      with a flexible and tech-driven approach, Revving is committed to supporting
                      companies in the digital economy.
                    </Typography>
                    <Typography>
                      Our Treasury as a Service (TaaS) platform provides a suite of products and
                      tools that enable companies to streamline and improve the efficiency of their
                      finance and treasury activities.
                    </Typography>
                    <Typography>
                      We are backed by Vala Capital, an entrepreneur-led investment firm based in
                      London.
                    </Typography>
                  </Grid>
                  <Grid item md={6}>
                    <ImgBox className='box1' />
                  </Grid>
                </Grid>
              </div>
              <div className='fullWidth'>
                <Grid container spacing={10}>
                  <Grid item md={6}>
                    <Typography variant='h5'>Accelerate payments</Typography>
                    <Typography>
                      Combining decades of experience in media, structured and corporate finance
                      with a flexible and tech-driven approach, Revving is committed to supporting
                      companies in the digital economy.
                    </Typography>
                    <Typography>
                      Our Treasury as a Service (TaaS) platform provides a suite of products and
                      tools that enable companies to streamline and improve the efficiency of their
                      finance and treasury activities.
                    </Typography>
                    <Typography>
                      We are backed by Vala Capital, an entrepreneur-led investment firm based in
                      London.
                    </Typography>
                  </Grid>
                  <Grid item md={6}>
                    <ImgBox className='box1' />
                  </Grid>
                </Grid>
              </div>
            </SlickSlider>
          </CustomContainer>
        </OurSolution>
        <CustomContainer className='HowitWorkWrap'>
          <HeadingTypography variant='h4' align='left'>
            How it works
          </HeadingTypography>
          <Grid container spacing={10}>
            <Grid item md={6}>
              <CustomUnorderlist className='custList'>
                <li>
                  <Typography variant='body1' className='circleBox'>
                    1
                  </Typography>
                  <div>
                    <Typography variant='h5'>Apply online in 5 minutes</Typography>
                    <Typography variant='body2'>
                      Tell us about your business and get a decision within 48 hours.
                    </Typography>
                  </div>
                </li>
                <li>
                  <Typography variant='body1' className='circleBox'>
                    2
                  </Typography>
                  <div>
                    <Typography variant='h5'>Connect your revenue accounts</Typography>
                    <Typography variant='body2'>
                      We display the value of receivables available to advance and our fees to
                      advance them.
                    </Typography>
                  </div>
                </li>
                <li>
                  <Typography variant='body1' className='circleBox'>
                    3
                  </Typography>
                  <div>
                    <Typography variant='h5'>Get funded</Typography>
                    <Typography variant='body2'>
                      Choose how muich you want and we transfer the funds to you within 3 business
                      days.
                    </Typography>
                  </div>
                </li>
                <li>
                  <Typography variant='body1' className='circleBox'>
                    4
                  </Typography>
                  <div>
                    <Typography variant='h5'>We’re paid when you are</Typography>
                    <Typography variant='body2'>
                      We collect our fixed fee when your revenue earnings are paid, not sooner.
                    </Typography>
                  </div>
                </li>
                <li>
                  <TreasuryButton variant='contained' color='primary'>
                    Get funded
                  </TreasuryButton>
                </li>
              </CustomUnorderlist>
            </Grid>
            <Grid item md={6}>
              <MuchBox className='MuchBox'>
                <Typography variant='h6'>How much do you want to advance?</Typography>
                <CustomUnorderlist className='custList'>
                  <li>
                    <Typography>Funding</Typography>
                    <div className='custSlider'>
                      <Slider
                        aria-label='custom thumb label'
                        getAriaValueText={valuetext}
                        defaultValue={20}
                        marks={marks}
                      />
                    </div>
                  </li>
                  <li className='d-flex'>
                    <Typography>Fixed fee*</Typography>
                    <Typography className='margin-right'>£3,000</Typography>
                  </li>
                  <li>
                    <Typography className='lstText'>
                      * We charge a fixed 10% fee on the amount we fund with no other hidden costs
                    </Typography>
                  </li>
                </CustomUnorderlist>
              </MuchBox>
            </Grid>
          </Grid>
        </CustomContainer>
        <CustomContainer className='JoinBusinesses'>
          <HeadingTypography variant='h4' align='left'>
            Join the businesses using our platform
          </HeadingTypography>
          <Grid container spacing={10}>
            <Grid item md={3}>
              <img src={bussiness} alt='bussiness' />
            </Grid>
            <Grid item md={9}>
              <CustomUnorderlist className='ulList'>
                <Typography>
                  We help businesses that operate online business models generating digital revenues
                  in any currency from eCommerce, SaaS, digital marketplaces and mobile apps. Apply
                  for funding today if your business:
                </Typography>
                <li>
                  <img src={circleC} alt='circleC' className='cicJB' />
                  <div>
                    <Typography variant='body2'>
                      is registered in the
                      <strong> United Kingdom</strong>
                    </Typography>
                  </div>
                </li>
                <li>
                  <img src={circleC} alt='circleC' className='cicJB' />
                  <div>
                    <Typography variant='body2'>
                      has been trading for more than
                      <strong> 6 months</strong>
                    </Typography>
                  </div>
                </li>
                <li>
                  <img src={circleC} alt='circleC' className='cicJB' />
                  <div>
                    <Typography variant='body2'>
                      earns at least £10,000 revenue
                      <strong> £10,000 revenue </strong>
                      per month
                    </Typography>
                  </div>
                </li>
              </CustomUnorderlist>
            </Grid>
          </Grid>
          <RevContentBox>
            <Typography variant='h4'>
              “Revving lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.”
            </Typography>
            <Typography variant='body2'>- Lorem Ipsum, Founder of Playworks</Typography>
          </RevContentBox>
          <Box style={{ textAlign: 'center' }}>
            <TreasuryButton variant='contained' color='primary'>
              Apply now
            </TreasuryButton>
          </Box>
        </CustomContainer>
        <AboutUs>
          <CustomContainer className='aboutUs'>
            <HeadingTypography variant='h4' align='left'>
              About us
            </HeadingTypography>
            <Grid container spacing={10}>
              <Grid item md={6}>
                <Typography>
                  Combining decades of experience in media, structured and corporate finance with a
                  flexible and tech-driven approach, Revving is committed to supporting companies in
                  the digital economy.
                </Typography>
                <Typography>
                  Our Treasury as a Service (TaaS) platform provides a suite of products and tools
                  that enable companies to streamline and improve the efficiency of their finance
                  and treasury activities.
                </Typography>
                <Typography>
                  We are backed by Vala Capital, an entrepreneur-led investment firm based in
                  London.
                </Typography>
              </Grid>
              <Grid item md={6}>
                <HeadingTypography variant='h4' align='left'>
                  Committed to supporting the digital economy
                </HeadingTypography>
              </Grid>
            </Grid>
            <Grid container spacing={10}>
              <Grid item md={4}>
                <Box>
                  <img src={boxImg} alt='circleC' />
                  <HeadingTypography variant='h4' align='left' className='h4h'>
                    Chris Pettit
                  </HeadingTypography>
                  <Typography className='cfWrap'>Co-founder</Typography>
                  <Typography variant='body2'>
                    Chris has over 20 years’ experience working as a financier, lawyer and
                    entrepreneur in the media sector on more than 100 film, TV, music and video game
                    deals.
                  </Typography>
                  <Typography variant='body2'>
                    He co-founded, ran and successfully exited production company Arise Pictures in
                    2018 and was a Senior Director in the corporate development team at Ingenious
                    Capital Management before founding Revving.
                  </Typography>
                  <Typography variant='body2'>
                    Chris was instrumental in the introduction of the film rebate scheme in
                    Mauritius.
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={4}>
                <Box>
                  <img src={boxImg} alt='circleC' />
                  <HeadingTypography variant='h4' align='left' className='h4h'>
                    David Mandeno
                  </HeadingTypography>
                  <Typography className='cfWrap'>Co-founder</Typography>
                  <Typography variant='body2'>
                    David has over 15 years’ experience in corporate finance and business strategy.
                    Most recently, David was part of the corporate development team at Ingenious
                    Capital Management where he was responsible for developing and executing new
                    investment strategies for the group.
                  </Typography>
                  <Typography variant='body2'>
                    Prior to this David worked for a UK private equity firm focused on investing
                    into high growth companies in emerging markets and as a strategy consultant
                    advising senior management teams in Europe and Australia.
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={4}>
                <Box>
                  <img src={boxImg} alt='circleC' />
                  <HeadingTypography variant='h4' align='left' className='h4h'>
                    Jasper Smith
                  </HeadingTypography>
                  <Typography className='cfWrap'>Director</Typography>
                  <Typography variant='body2'>
                    Jasper is an entrepreneur who has founded and invested in many companies in the
                    media, technology and engineering sectors.
                  </Typography>
                  <Typography variant='body2'>
                    Previous ventures include: Static2358, Electra Entertainment, Optimistic
                    Entertainment Plc, PlayJam, PlayStack and Arksen. He has generated a number of
                    highly successful exits, creating significant shareholder value along the way.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CustomContainer>
        </AboutUs>
        <TakeControl>
          <CustomContainer className='TakeControl'>
            <HeadingTypography variant='h4' align='center'>
              Take control today
            </HeadingTypography>
            <TreasuryButton variant='contained' color='primary'>
              Apply now
            </TreasuryButton>
          </CustomContainer>
        </TakeControl>
        <Footer>
          <CustomContainer className='Footer'>
            <Grid container spacing={10}>
              <Grid item md={8}>
                <img src={revvingFlogo} alt='revvingFlogo' className='revvingFlogo' />
                <CustomUnorderlist className='fleft'>
                  <Typography>Copyright ©Revving Ltd 2020. All rights reserved.</Typography>
                  <Box className='dfbox'>
                    <li>
                      <Link to=''>
                        <Typography variant='body2'>Privacy Policy</Typography>
                      </Link>
                    </li>
                    <li>
                      <Link to=''>
                        <Typography variant='body2'>Terms & conditions</Typography>
                      </Link>
                    </li>
                  </Box>
                </CustomUnorderlist>
              </Grid>
              <Grid item md={4}>
                <HeadingTypography variant='h4' align='right'>
                  Get in touch
                </HeadingTypography>
                <CustomUnorderlist className='socialLink'>
                  <li>
                    <Typography variant='body2'>s</Typography>
                  </li>
                  <li>
                    <Typography variant='body2'>s</Typography>
                  </li>
                  <li>
                    <Typography variant='body2'>s</Typography>
                  </li>
                </CustomUnorderlist>
              </Grid>
            </Grid>
          </CustomContainer>
        </Footer>
      </MainContentBox>
    </>
  );
};

export default Homepage;
