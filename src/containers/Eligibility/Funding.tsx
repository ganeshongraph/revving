/* eslint-disable @typescript-eslint/indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Grid, Slider, Theme, makeStyles } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip';
import {
  HeadingTypography,
  ContentWrap,
  ParagraphText,
  FormGroup,
  StyledButton,
  BtnGroup,
  NextBtn,
  ErrorText,
  EligiblityBoxWrap,
  DashboardWrrapper,
  ContentBoxWrap
} from './Styled';
import validationRules from './FundingValidate';
import { validate } from '../../utils/helper';

// Business interface
interface IFunding {
  [key: string]: string | boolean | number | number[];
  turnover: string;
  fundRevenue: number | number[];
}

// Props Interface
interface IProps {
  dispatch: Function;
  handleStepper: Function;
  businessType: {
    data: any;
    status: string;
    message: {
      data?: string;
    };
  };
  stepperReducer: {
    businessValue: any;
    fundingValue: any;
    contactValue: any;
    backgroundValue: any;
    revenueValue: any;
  };
}

const useStylesBootstrap = makeStyles((theme: Theme) => ({
  arrow: {
    color: '#262F3A'
  },
  tooltip: {
    backgroundColor: '#262F3A',
    fontSize: '1rem'
  }
}));

function BootstrapTooltip(props: TooltipProps) {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} enterTouchDelay={500} {...props} />;
}

// Initialise Slider default value
const marks = [
  {
    value: 0,
    label: '£0'
  },
  {
    value: 1000000,
    label: '£1,000,000+'
  }
];
const CustomerFunding: React.FC<IProps> = ({
  dispatch,
  handleStepper,
  businessType,
  stepperReducer
}: IProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [funding, setFunding] = useState<IFunding>({
    turnover: '',
    fundRevenue: 500000
  });
  const [error, setError] = useState<any>({});

  // Call business stats api
  useEffect(() => {
    dispatch({
      type: 'BUSINESS_STATS'
    });
  }, [dispatch]);

  // Handle Pre-populated
  useEffect(() => {
    if (stepperReducer?.fundingValue) {
      const { fundingValue } = stepperReducer;
      setFunding({ ...fundingValue });
    }
  }, [stepperReducer]);

  // Handle Option in business state
  const handleOptionSelected = (type: string, value: string | boolean) => {
    if (funding[type] === value) {
      setFunding({ ...funding, [type]: '' });
      setError({ ...error, [type]: `${type} is Required` });
    } else {
      if (Object.keys(error).includes(`${type}`)) {
        const newErrObj = { ...error };
        delete newErrObj[type];
        setError({ ...newErrObj });
      }
      setFunding({ ...funding, [type]: value });
    }
  };

  // Validation of user fields
  const handleValidate = () => {
    let validRes = { errors: {}, isValid: false };
    validRes = validate(funding, validationRules);
    setError(validRes.errors);
    return validRes.isValid;
  };

  // Handle Next btn click
  const handleNext = (value: string) => {
    if (handleValidate()) {
      window.scrollTo(0, 0);
      dispatch({
        type: 'SAVE_STEPPER',
        payload: {
          businessValue: stepperReducer.businessValue,
          fundingValue: funding,
          contactValue: stepperReducer.contactValue,
          backgroundValue: stepperReducer.backgroundValue,
          revenueValue: stepperReducer.revenueValue
        }
      });
      handleStepper(value);
    }
  };

  const handleSliderChange = (event: any, newValue: number | number[]) => {
    setFunding({ ...funding, fundRevenue: newValue as number });
  };

  const semiboldFont = createMuiTheme({
    typography: { fontFamily: ['Averta-Semibold'].join(',') }
  });

  const { turnover, fundRevenue } = funding;
  return (
    <DashboardWrrapper className='coommon-dashboardbg transactionBg'>
      <ContentBoxWrap className='contentBoxW'>
        <EligiblityBoxWrap>
          <ContentWrap>
            <ThemeProvider theme={semiboldFont}>
              <HeadingTypography variant='h4' align='left'>
                Tell us about your funding needs.
              </HeadingTypography>
            </ThemeProvider>
            <FormGroup className={error.turnover ? 'errorFormGroup' : ''}>
              <ThemeProvider theme={semiboldFont}>
                <ParagraphText variant='body2' align='left'>
                  What is your monthly turnover?
                </ParagraphText>
              </ThemeProvider>
              {error.turnover ? (
                <ErrorText>
                  <InfoIcon />
                  <ParagraphText className='errorText' variant='body2' align='left'>
                    Please select an option
                  </ParagraphText>
                </ErrorText>
              ) : (
                ''
              )}
              <BtnGroup>
                {businessType?.data?.TURNOVER
                  ? Object.keys(businessType?.data?.TURNOVER).map((data) => (
                      <StyledButton
                        variant='outlined'
                        className={funding.turnover === data ? 'active textNormal' : 'textNormal'}
                        onClick={() => handleOptionSelected('turnover', data)}
                        key={data}
                      >
                        {businessType.data.TURNOVER[data]}
                      </StyledButton>
                    ))
                  : ''}
              </BtnGroup>
            </FormGroup>
            <FormGroup className='rangeSlider'>
              <ThemeProvider theme={semiboldFont}>
                <ParagraphText variant='body2' align='left'>
                  Approximately how much revenue would you like to advance each month?
                </ParagraphText>
              </ThemeProvider>
              <Grid item xs={12} sm={10} md={6} className='arrow_slider'>
                <Slider
                  aria-label='custom thumb label'
                  value={funding.fundRevenue}
                  marks={marks}
                  valueLabelDisplay='on'
                  min={0}
                  max={1000000}
                  className='arrow_slider'
                  onChange={handleSliderChange}
                />
              </Grid>
            </FormGroup>

            <FormGroup className='nextBtn backBtn'>
              <NextBtn
                variant='outlined'
                size='large'
                className='back'
                onClick={() => handleStepper('business')}
              >
                Back
              </NextBtn>
              <BootstrapTooltip
                title={turnover ? '' : 'Please complete all questions on this page to continue'}
                placement='top-end'
              >
                <NextBtn
                  variant='outlined'
                  size='large'
                  onClick={() => handleNext('contact')}
                  isactive={!Object.keys(error).length && fundRevenue !== 0 && turnover !== ''}
                >
                  Next
                </NextBtn>
              </BootstrapTooltip>
            </FormGroup>
          </ContentWrap>
        </EligiblityBoxWrap>
      </ContentBoxWrap>
    </DashboardWrrapper>
  );
};

const mapStateToProps = (state: any) => ({
  businessType: state.businessType.data,
  stepperReducer: state.stepperReducer.data
});

export default connect(mapStateToProps)(CustomerFunding);
