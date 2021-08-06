/* eslint-disable @typescript-eslint/indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { useState, useEffect } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
  Grid,
  FormControl,
  // TextFieldProps,
  // TextField,
  OutlinedInput,
  InputLabel,
  Theme,
  makeStyles
} from '@material-ui/core';
import { connect } from 'react-redux';
import InfoIcon from '@material-ui/icons/Info';
// import ControlPointIcon from '@material-ui/icons/ControlPoint';
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
import validationRules from './BackgroundValidate';
import { validate } from '../../utils/helper';

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

// Business interface
interface IBackground {
  [key: string]: string | boolean;
  businessName: string;
  registrationNo: string;
  website: string;
  employees: string;
}

const CustomerEligibilityCheck: React.FC<IProps> = ({
  dispatch,
  businessType,
  handleStepper,
  stepperReducer
}: IProps) => {
  const [background, setBackground] = useState<IBackground>({
    businessName: '',
    registrationNo: '',
    website: '',
    employees: ''
  });
  const [error, setError] = useState<any>({});

  // Handle Pre-populated
  useEffect(() => {
    if (stepperReducer?.backgroundValue) {
      const { backgroundValue } = stepperReducer;
      setBackground({ ...backgroundValue });
    }
  }, [stepperReducer]);

  // Handle onChange method
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== '') {
      setBackground({ ...background, [event.target.name]: event.target.value });
      if (Object.keys(error).includes(`${event.target.name}`)) {
        const newErrObj = { ...error };
        delete newErrObj[event.target.name];
        setError({ ...newErrObj });
      }
    } else {
      setBackground({ ...background, [event.target.name]: '' });
      setError({ ...error, [event.target.name]: `${event.target.name} is Required` });
    }
  };

  // Validation of user fields
  const handleValidate = () => {
    let validRes = { errors: {}, isValid: false };
    validRes = validate(background, validationRules);
    setError(validRes.errors);
    return validRes.isValid;
  };

  // Handle Option in business state
  const handleOptionSelected = (type: string, value: string | boolean) => {
    if (background[type] === value && value !== 'other') {
      setBackground({ ...background, [type]: '' });
      setError({ ...error, [type]: `${type} is Required` });
    } else {
      if (Object.keys(error).includes(`${type}`)) {
        const newErrObj = { ...error };
        delete newErrObj[type];
        setError({ ...newErrObj });
      }
      setBackground({ ...background, [type]: value });
    }
  };

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

  // Handle Next btn click
  const handleNext = (value: string) => {
    window.scrollTo(0, 0);
    if (handleValidate()) {
      dispatch({
        type: 'SAVE_STEPPER',
        payload: {
          businessValue: stepperReducer.businessValue,
          fundingValue: stepperReducer.fundingValue,
          contactValue: stepperReducer.contactValue,
          backgroundValue: background,
          revenueValue: stepperReducer.revenueValue
        }
      });

      handleStepper(value);
    }
  };
  const semiboldFont = createMuiTheme({
    typography: { fontFamily: ['Averta-Semibold'].join(',') }
  });
  const { businessName, registrationNo, website, employees } = background;
  return (
    <DashboardWrrapper className='coommon-dashboardbg transactionBg'>
      <ContentBoxWrap className='contentBoxW'>
        <EligiblityBoxWrap>
          <ContentWrap>
            <ThemeProvider theme={semiboldFont}>
              <HeadingTypography variant='h4' align='left'>
                You’re eligible! Start your application.
              </HeadingTypography>
            </ThemeProvider>
            <FormGroup
              className={error.businessName ? 'inputFormWrap errorFormGroup' : 'inputFormWrap'}
            >
              <ThemeProvider theme={semiboldFont}>
                <ParagraphText variant='body2' align='left'>
                  What is the registered name of your business?
                </ParagraphText>
              </ThemeProvider>
              {error.businessName ? (
                <ErrorText>
                  <InfoIcon />
                  <ParagraphText className='errorText' variant='body2' align='left'>
                    Please select an option
                  </ParagraphText>
                </ErrorText>
              ) : (
                ''
              )}
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={7} lg={5}>
                  <FormControl variant='outlined'>
                    <InputLabel htmlFor='component-outlined'>Business name</InputLabel>
                    <OutlinedInput
                      id='component-outlined-businessName'
                      value={background.businessName}
                      name='businessName'
                      onChange={handleChange}
                      label='Business name'
                      placeholder='Enter business name'
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </FormGroup>
            <FormGroup
              className={error.registrationNo ? 'inputFormWrap errorFormGroup' : 'inputFormWrap'}
            >
              <ThemeProvider theme={semiboldFont}>
                <ParagraphText variant='body2' align='left'>
                  What is your business registration number? (Leave bank if not applicable)
                </ParagraphText>
              </ThemeProvider>
              {!background.registrationNo && error.registrationNo ? (
                <ErrorText>
                  <InfoIcon />
                  <ParagraphText className='errorText' variant='body2' align='left'>
                    Please select an option
                  </ParagraphText>
                </ErrorText>
              ) : (
                ''
              )}
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={7} lg={5}>
                  <FormControl variant='outlined'>
                    <InputLabel htmlFor='component-outlined'>Registration number</InputLabel>
                    <OutlinedInput
                      id='component-outlined-registrationNo'
                      value={background.registrationNo}
                      name='registrationNo'
                      onChange={handleChange}
                      label='Registration number'
                      placeholder='Enter business registration number'
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </FormGroup>
            <FormGroup className={error.website ? 'inputFormWrap errorFormGroup' : 'inputFormWrap'}>
              <ThemeProvider theme={semiboldFont}>
                <ParagraphText variant='body2' align='left'>
                  What is the business website address? (Leave blank if not applicable)
                </ParagraphText>
              </ThemeProvider>
              {!background.website && error.website ? (
                <ErrorText>
                  <InfoIcon />
                  <ParagraphText className='errorText' variant='body2' align='left'>
                    Please select an option
                  </ParagraphText>
                </ErrorText>
              ) : (
                ''
              )}
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={7} lg={5}>
                  <FormControl variant='outlined'>
                    <InputLabel htmlFor='component-outlined'>Business website</InputLabel>
                    <OutlinedInput
                      id='component-outlined-website'
                      value={background.website}
                      name='website'
                      onChange={handleChange}
                      label='Business website'
                      placeholder='Enter URL'
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </FormGroup>
            <FormGroup className={error.employees ? 'errorFormGroup' : ''}>
              <ThemeProvider theme={semiboldFont}>
                <ParagraphText variant='body2' align='left'>
                  How many full-time employees does the business have, excluding directors?
                </ParagraphText>
              </ThemeProvider>
              {error.employees ? (
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
                {businessType?.data?.EMPLOYEES
                  ? Object.keys(businessType?.data?.EMPLOYEES).map((data) => (
                      <StyledButton
                        variant='outlined'
                        className={background.employees === data ? 'active' : ''}
                        onClick={() => handleOptionSelected('employees', data)}
                        key={data}
                      >
                        {businessType.data.EMPLOYEES[data]}
                      </StyledButton>
                    ))
                  : ''}
              </BtnGroup>
            </FormGroup>
            <FormGroup className='nextBtn'>
              <BootstrapTooltip
                title={
                  !background.employees || !background.businessName
                    ? 'Please complete all questions on this page to continue'
                    : ''
                }
                placement='top-end'
              >
                <NextBtn
                  variant='outlined'
                  size='large'
                  onClick={() => handleNext('revenue')}
                  isactive={
                    !Object.keys(error).length &&
                    businessName !== '' &&
                    registrationNo !== '' &&
                    website !== '' &&
                    employees !== ''
                  }
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
  stepperReducer: state.stepperReducer.data
});

export default connect(mapStateToProps)(CustomerEligibilityCheck);
