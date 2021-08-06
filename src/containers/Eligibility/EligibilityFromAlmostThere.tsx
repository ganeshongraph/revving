/* eslint-disable @typescript-eslint/indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useSnackbar, VariantType } from 'notistack';
import { TooltipProps } from '@material-ui/core/Tooltip';
import { ThemeProvider, createMuiTheme, createStyles, withStyles } from '@material-ui/core/styles';
import {
  Tooltip,
  Theme,
  makeStyles,
  Grid,
  // Typography,
  FormControl,
  // TextFieldProps,
  // TextField,
  OutlinedInput,
  InputLabel,
  Select,
  MenuItem,
  // Checkbox,
  InputBase,
  Box,
  IconButton
  // FormControlLabel
  // InputBase,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import ControlPointIcon from '@material-ui/icons/ControlPoint';
import InfoIcon from '@material-ui/icons/Info';
import {
  HeadingTypography,
  ContentWrap,
  ParagraphText,
  FormGroup,
  StyledButton,
  BtnGroup,
  EligiblityBoxWrap
} from './FinalStyled';
import {
  StyledOutlinedInput,
  NextBtn,
  DashboardWrrapper,
  ContentBoxWrap,
  ErrorText
} from './Styled';
import validationRules from './RevenueValidate';
import { validate } from '../../utils/helper';
import { CURRENCY_OPTIONS } from '../../utils/Constant';

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '16px 26px 16px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
      }
    }
  })
)(InputBase);

// Props Interface
interface IProps {
  dispatch: Function;
  handleStepper: Function;
  handleCustomerUpdate: Function;
  revenue: {
    revenueSources: [
      {
        name: string;
        currency: string;
        revenue: any;
        duration: string;
      }
    ];
    accountingSoftware: string;
    other: string;
  };
  setRevenue: Function;
  customSoftware: string;
  setCustomSoftware: Function;
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

const EligibilityFromAlmostThere: React.FC<IProps> = ({
  dispatch,
  businessType,
  handleStepper,
  stepperReducer,
  handleCustomerUpdate,
  customSoftware,
  setCustomSoftware,
  revenue,
  setRevenue
}: IProps) => {
  // const [revenue, setRevenue] = useState<any>({
  //   revenueSources: [{ name: '', currency: '', revenue: '', duration: '' }],
  //   accountingSoftware: '',
  //   other: ''
  // });
  // const [customSoftware, setCustomSoftware] = useState<string>('');
  const [revenueStats, setRevenueStats] = useState<any>({ duration: [] });
  const [error, setError] = useState<any>({});
  const [sourceList, setSourceList] = useState<any>([
    { name: '', currency: '', revenue: '', duration: '' }
  ]);
  const { enqueueSnackbar } = useSnackbar();
  const eventClick = useRef({ value: '' });

  // Handle initial load
  useEffect(() => {
    eventClick.current.value = 'initialLoad';
  }, []);

  useEffect(() => {
    setSourceList(revenue?.revenueSources);
  }, [revenue?.revenueSources]);

  // Handle Prepopulated
  useEffect(() => {
    if (stepperReducer?.revenueValue) {
      const { revenueValue } = stepperReducer;
      setRevenue({ ...revenueValue });
      setSourceList(revenueValue.revenueSources);
      setCustomSoftware(revenueValue.other);
    }
  }, [stepperReducer, setRevenue, setCustomSoftware]);

  // Handle Prepopulated
  // useEffect(() => {
  //   if (stepperReducer?.businessValue) {
  //     const { revenueValue } = stepperReducer;
  //     setRevenue({ ...revenueValue });
  //     sourceList(revenueValue?.revenueSources);
  //     setCustomSoftware(revenueValue?.other);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [stepperReducer]);

  // Handling  BusinessType Api suucess
  useEffect(() => {
    const handleSnack = (variant: VariantType) => {
      enqueueSnackbar(
        businessType.message.data ? businessType.message.data : businessType.message,
        {
          variant
        }
      );
    };
    if (businessType?.status === 'success' && eventClick.current.value === 'initialLoad') {
      let newArray: any = [];
      if (
        businessType?.data?.REVENUE_SOURCE_DURATION &&
        Object.keys(businessType?.data?.REVENUE_SOURCE_DURATION).length
      ) {
        Object.keys(businessType?.data?.REVENUE_SOURCE_DURATION).map((data) => {
          newArray = [
            ...newArray,
            { name: businessType?.data?.REVENUE_SOURCE_DURATION[data], value: data }
          ];
          return '';
        });
      }

      setRevenueStats({ duration: [...newArray] });
      eventClick.current.value = '';
    }
    if (businessType?.status === 'failure' && eventClick.current.value === 'initialLoad') {
      handleSnack('error');
      eventClick.current.value = '';
    }
    eventClick.current.value = '';
  }, [businessType, enqueueSnackbar]);

  const handleChange = (event: any, index: number) => {
    const newArr = [...sourceList];
    newArr[index][event.target.name] = event.target.value;
    setSourceList([...newArr]);
    setRevenue({ ...revenue, revenueSources: [...newArr] });
  };

  // Handle Option in business state
  const handleOptionSelected = (type: string, value: any | boolean) => {
    if (type === 'accountingSoftware' && value !== 'other') {
      setCustomSoftware('');
    }
    if ((revenue?.accountingSoftware === value || revenue?.other === value) && value !== 'other') {
      setRevenue({ ...revenue, [type]: '' });
      setError({ ...error, [type]: `${type} is Required` });
    } else {
      if (Object.keys(error).includes(`${type}`)) {
        const newErrObj = { ...error };
        delete newErrObj[type];
        setError({ ...newErrObj });
      }
      setRevenue({ ...revenue, [type]: value });
    }
  };

  // Handle Custom accounting software
  const handleCustomChange = (e: any) => {
    setCustomSoftware(e.target.value);
    setRevenue({ ...revenue, other: e.target.value });
  };

  // Validation of revenue fields
  const handleValidate = () => {
    let validRes = { errors: {}, isValid: false };
    validRes = validate(revenue, validationRules);
    let count = 0;
    while (count < revenue?.revenueSources?.length) {
      //
      if (
        !revenue?.revenueSources?.[count]?.name ||
        !revenue?.revenueSources?.[count]?.currency ||
        !revenue?.revenueSources?.[count]?.revenue ||
        !revenue?.revenueSources?.[count]?.duration
      ) {
        validRes.errors = { ...validRes.errors, revenueSources: 'Please select an option' };
        validRes.isValid = false;
      }
      if (isNaN(revenue?.revenueSources?.[count]?.revenue)) {
        validRes.errors = { ...validRes.errors, revenueSources: 'number' };
        validRes.isValid = false;
      }
      count += 1;
    }
    setError(validRes.errors);
    return validRes.isValid;
  };

  // Handle Next btn click
  const handleSubmit = () => {
    if (handleValidate()) {
      window.scrollTo(0, 0);
      dispatch({
        type: 'SAVE_STEPPER',
        payload: {
          businessValue: stepperReducer.businessValue,
          fundingValue: stepperReducer.fundingValue,
          contactValue: stepperReducer.contactValue,
          backgroundValue: stepperReducer.backgroundValue,
          revenueValue: { ...revenue }
        }
      });
      handleCustomerUpdate(revenue);
    }
  };

  // Handle Add Revenue
  const handleAddrevenue = () => {
    /*eslint-disable*/
    console.log('dfdf');
    setSourceList([...sourceList, { name: '', currency: '', revenue: '', duration: '' }]);
  };

  // Handle Select
  const handleSelect = (e: any, type: string, index: number) => {
    const newArr = [...sourceList];
    newArr[index][type] = e.target.value;
    setSourceList([...newArr]);
  };

  // Handle Delete Revenue Source
  const handleRevenueSourceDelete = (index: number) => {
    const newArr = [...sourceList];
    newArr.splice(index, 1);
    setSourceList([...newArr]);
    setRevenue({ ...revenue, revenueSources: [...newArr] });
  };
  const { accountingSoftware } = revenue;

  const semiboldFont = createMuiTheme({
    typography: { fontFamily: ['Averta-Semibold'].join(',') }
  });

  const onBlur = useCallback(() => {
    if (revenue?.revenueSources?.[0]?.revenue) {
      if (isNaN(revenue?.revenueSources?.[0]?.revenue)) {
        setError((e: any) => ({
          ...e,
          revenueSources: 'number',
          isValid: false
        }));
      } else {
        setError((e: any) => ({ ...e, revenueSources: '', isValid: false }));
      }
    }
  }, [revenue?.revenueSources]);

  let revenueSourcesError = false, count = 0;
  while (count < revenue?.revenueSources?.length){
    // 
    if (
      !revenue?.revenueSources?.[count]?.name ||
      !revenue?.revenueSources?.[count]?.currency ||
      !revenue?.revenueSources?.[count]?.revenue ||
      !revenue?.revenueSources?.[count]?.duration
    ) {
      revenueSourcesError = true
    }
    count++;
  }
  

  return (
    <DashboardWrrapper className='coommon-dashboardbg transactionBg'>
      <ContentBoxWrap className='contentBoxW'>
        <EligiblityBoxWrap>
          <ContentWrap>
            <ThemeProvider theme={semiboldFont}>
              <HeadingTypography variant='h4' align='left'>
                Almost there!
              </HeadingTypography>
            </ThemeProvider>
            <FormGroup
              className={
                error?.revenueSources &&
                (revenueSourcesError ||
                  error?.revenueSources === 'number')
                  ? 'errorFormGroup inputFormWrap'
                  : 'inputFormWrap'
              }
            >
              <ThemeProvider theme={semiboldFont}>
                <ParagraphText variant='body2' align='left' style={{ marginBottom: '20px' }}>
                  Please list your top revenue sources (5 largest or 80% of your revenue).
                  <BootstrapTooltip
                    title='A revenue source is an online platform or customer that your business is generating revenue from.'
                    placement='top-end'
                  >
                    <svg
                      width='18'
                      height='18'
                      viewBox='0 0 21 22'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <circle cx='10.5' cy='11.5' r='10.5' fill='#A8A8A8' />
                      <path
                        d='M9.62661 8.58H10.9706V16H9.62661V8.58ZM10.2986 7.152C10.0373 7.152 9.81795 7.068 9.64061 6.9C9.47261 6.732 9.38861 6.52667 9.38861 6.284C9.38861 6.04133 9.47261 5.836 9.64061 5.668C9.81795 5.49067 10.0373 5.402 10.2986 5.402C10.5599 5.402 10.7746 5.486 10.9426 5.654C11.1199 5.81267 11.2086 6.01333 11.2086 6.256C11.2086 6.508 11.1199 6.72267 10.9426 6.9C10.7746 7.068 10.5599 7.152 10.2986 7.152Z'
                        fill='white'
                      />
                    </svg>
                  </BootstrapTooltip>
                </ParagraphText>
              </ThemeProvider>
              {error?.revenueSources &&
              (
                error?.revenueSources === 'number' ||
                revenueSourcesError) ? (
                <ErrorText>
                  <InfoIcon />
                  <ParagraphText className='errorText' variant='body2' align='left'>
                    {error?.revenueSources === 'number'
                      ? 'Please input numbers only'
                      : 'Please select an option'}
                  </ParagraphText>
                </ErrorText>
              ) : (
                ''
              )}
              <Grid container spacing={3} className='flexCustom deks_contant'>
                <Grid item xs={12} sm={2} />
                <Grid item xs={12} sm={12}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={2} />
                    <Grid item xs={12} sm={3}>
                      <ThemeProvider theme={semiboldFont}>
                        <ParagraphText variant='h3' align='left' className='darkGreyColor'>
                          Revenue Source
                        </ParagraphText>
                      </ThemeProvider>
                      <ParagraphText variant='body1' align='left' className='visibilityHidden'>
                        Please enter the average monthly revenue over the last 3 months
                      </ParagraphText>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <ThemeProvider theme={semiboldFont}>
                        <ParagraphText variant='h3' align='left' className='darkGreyColor'>
                          Monthly Revenue
                        </ParagraphText>
                      </ThemeProvider>
                      <ParagraphText variant='body1' align='left'>
                        Please enter the average monthly revenue over the last 3 months
                      </ParagraphText>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <ThemeProvider theme={semiboldFont}>
                        <ParagraphText variant='h3' align='left' className='darkGreyColor'>
                          Duration
                        </ParagraphText>
                      </ThemeProvider>
                      <ParagraphText variant='body1' align='left'>
                        Please select how long you’ve been working with this revenue source
                      </ParagraphText>
                    </Grid>
                  </Grid>
                  {sourceList.length
                    ? sourceList.map((source: any, index: any) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <Grid container spacing={3} key={index} alignItems='center'>
                          <Grid item xs={12} sm={2}>
                            <ThemeProvider theme={semiboldFont}>
                              <ParagraphText variant='body2' align='left' className='emptyInput'>
                                {`Source ${index + 1}`}
                              </ParagraphText>
                            </ThemeProvider>
                          </Grid>
                          <Grid item xs={12} sm={3}>
                            <FormControl variant='outlined'>
                              <InputLabel htmlFor='component-outlined'>Name</InputLabel>
                              <OutlinedInput
                                id='component-outlined-name'
                                value={source.name}
                                name='name'
                                onChange={(e) => handleChange(e, index)}
                                label='Name'
                                placeholder='Enter name'
                              />
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} sm={3}>
                            <FormControl className='formGroup' variant='outlined'>
                              <Box className='dek_wdth enterRevenue'>
                                <InputLabel htmlFor='component-outlined'>Enter revenue</InputLabel>
                                <OutlinedInput
                                  className='dek_wdth100'
                                  id='component-outlined-revenue'
                                  value={source.revenue}
                                  name='revenue'
                                  label='Enter revenue'
                                  onChange={(e) => handleChange(e, index)}
                                  placeholder='Enter revenue'
                                  onBlur={() => {
                                    onBlur();
                                  }}
                                />
                              </Box>
                              <Box style={{ position: 'relative' }}>
                                <InputLabel
                                  style={{ position: 'absolute', top: '0px', right: '0px' }}
                                  id='demo-simple-select-outlined-label'
                                >
                                  {/* CUR */}
                                </InputLabel>
                                <Select
                                  labelId='demo-simple-select-label-currency'
                                  id='demo-simple-select-currency'
                                  value={source.currency}
                                  name='currency'
                                  input={<BootstrapInput />}
                                  onChange={(e) => handleSelect(e, 'currency', index)}
                                >
                                  {CURRENCY_OPTIONS.map((data) => (
                                    <MenuItem key={data.value} value={data.value}>
                                      {data.name}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </Box>
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} sm={3}>
                            <FormControl variant='outlined'>
                              <InputLabel id='demo-simple-select-outlined-label'>
                                Please select
                              </InputLabel>
                              <Select
                                labelId='demo-customized-select-label-duration'
                                id='demo-customized-select-duration'
                                value={source.duration}
                                name='duration'
                                onChange={(e) => handleSelect(e, 'duration', index)}
                                label='Please select'
                              >
                                {revenueStats?.duration.length
                                  ? revenueStats?.duration.map((dur: any) => (
                                      <MenuItem key={dur.value} value={dur.value}>
                                        {dur.name}
                                      </MenuItem>
                                    ))
                                  : ''}
                              </Select>
                            </FormControl>
                          </Grid>
                          {sourceList.length > 1 ? (
                            <IconButton
                              aria-label='delete'
                              onClick={() => handleRevenueSourceDelete(index)}
                            >
                              <DeleteIcon />
                            </IconButton>
                          ) : (
                            ''
                          )}
                        </Grid>
                      ))
                    : ''}
                </Grid>
              </Grid>
              {sourceList.length
                ? sourceList?.map((source: any, index: any) => (
                    <Grid container spacing={3} key={source} className='flexCustom mob_contant'>
                      <Grid item xs={12} sm={2} />
                      <Grid item xs={12} sm={12}>
                        <Grid container spacing={3} alignItems='flex-end'>
                          <Grid item xs={12} sm={12}>
                            <ThemeProvider theme={semiboldFont}>
                              <ParagraphText variant='body2' align='left' className='emptyInput'>
                                {`Source ${index + 1}`}
                              </ParagraphText>
                            </ThemeProvider>
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <ThemeProvider theme={semiboldFont}>
                              <ParagraphText variant='h3' align='left' className='darkGreyColor'>
                                Revenue Source
                              </ParagraphText>
                            </ThemeProvider>
                            <ParagraphText
                              variant='body1'
                              align='left'
                              className='visibilityHidden'
                            >
                              Please enter the average monthly revenue over the last 3 months
                            </ParagraphText>
                            <FormControl variant='outlined'>
                              <InputLabel htmlFor='component-outlined'>Name</InputLabel>
                              <OutlinedInput
                                id='component-outlined-name'
                                value={source.name}
                                name='name'
                                onChange={(e) => handleChange(e, index)}
                                label='Name'
                                placeholder='Enter platform name'
                              />
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <ThemeProvider theme={semiboldFont}>
                              <ParagraphText variant='h3' align='left' className='darkGreyColor'>
                                Monthly Revenue
                              </ParagraphText>
                            </ThemeProvider>
                            <ParagraphText variant='body1' align='left'>
                              Please enter the average monthly revenue over the last 3 months
                            </ParagraphText>
                            <FormControl className='formGroup customInput'>
                              <Box className='mob_wdth'>
                                <OutlinedInput
                                  className='wdth100'
                                  id='component-outlined-revenue'
                                  value={source.revenue}
                                  name='revenue'
                                  onChange={(e) => handleChange(e, index)}
                                  placeholder='Revenue'
                                />
                              </Box>
                              <Box style={{ position: 'relative' }}>
                                <InputLabel
                                  style={{ position: 'absolute', top: '0px', right: '0px' }}
                                  id='demo-simple-select-outlined-label'
                                >
                                  {/* CUR */}
                                </InputLabel>
                                <Select
                                  labelId='demo-simple-select-label-currency'
                                  id='demo-simple-select-currency'
                                  value={source.currency ?? ''}
                                  name='currency'
                                  input={<BootstrapInput />}
                                  onChange={(e) => handleSelect(e, 'currency', index)}
                                >
                                  {CURRENCY_OPTIONS.map((data) => (
                                    <MenuItem key={data.value} value={data.value}>
                                      {data.name}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </Box>
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <ThemeProvider theme={semiboldFont}>
                              <ParagraphText variant='h3' align='left' className='darkGreyColor'>
                                Duration
                              </ParagraphText>
                            </ThemeProvider>
                            <ParagraphText variant='body1' align='left'>
                              Please select Average monthly revenue over last 3 months
                            </ParagraphText>
                            <FormControl variant='outlined'>
                              <InputLabel id='demo-simple-select-outlined-label'>
                                Please select
                              </InputLabel>
                              <Select
                                labelId='demo-customized-select-label-duration'
                                id='demo-customized-select-duration'
                                value={source.duration ?? ''}
                                name='duration'
                                onChange={(e) => handleSelect(e, 'duration', index)}
                                label='Please select'
                              >
                                {revenueStats?.duration.length
                                  ? revenueStats?.duration.map((dur: any) => (
                                      <MenuItem key={dur.value} value={dur.value}>
                                        {dur.name}
                                      </MenuItem>
                                    ))
                                  : ''}
                              </Select>
                            </FormControl>
                            {sourceList.length > 1 ? (
                              <IconButton
                                aria-label='delete'
                                onClick={() => handleRevenueSourceDelete(index)}
                              >
                                <DeleteIcon />
                              </IconButton>
                            ) : (
                              ''
                            )}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))
                : ''}
            </FormGroup>
            <FormGroup className='inputFormWrap'>
              <ThemeProvider theme={semiboldFont}>
                <ParagraphText variant='body2' align='left'>
                  <Link to='#' className='addRevenueBtn' onClick={handleAddrevenue}>
                    + Add another revenue source
                  </Link>
                </ParagraphText>
              </ThemeProvider>
            </FormGroup>
            <FormGroup className={error.accountingSoftware ? 'errorFormGroup' : ''}>
              <ThemeProvider theme={semiboldFont}>
                <ParagraphText variant='body2' align='left' className='mb_bottom'>
                  What accounting software do you use?
                </ParagraphText>
              </ThemeProvider>
              {error.accountingSoftware ? (
                <ErrorText>
                  <InfoIcon />
                  <ParagraphText className='errorText' variant='body2' align='left'>
                    Please select an option
                  </ParagraphText>
                </ErrorText>
              ) : (
                ''
              )}
              <BtnGroup className='marginLeft'>
                {businessType?.data?.ACCOUNTING_SOFTWARE
                  ? Object.keys(businessType?.data?.ACCOUNTING_SOFTWARE).map((data) => (
                      <StyledButton
                        variant='outlined'
                        className={revenue.accountingSoftware === data ? 'active' : ''}
                        onClick={() => handleOptionSelected('accountingSoftware', data)}
                        key={data}
                      >
                        {businessType.data.ACCOUNTING_SOFTWARE[data]}
                      </StyledButton>
                    ))
                  : ''}
                <StyledButton
                  variant='outlined'
                  startIcon={<ControlPointIcon />}
                  className={revenue.accountingSoftware === 'other ' ? 'active ' : ''}
                  onClick={() => handleOptionSelected('accountingSoftware', 'other')}
                >
                  {revenue.accountingSoftware !== 'other' ? (
                    'Other'
                  ) : (
                    <StyledOutlinedInput
                      className='custInputButton'
                      id='component-outlined'
                      value={customSoftware}
                      name='customSoftware'
                      onChange={(e) => handleCustomChange(e)}
                      label=''
                      placeholder='Enter accounting software here'
                    />
                  )}
                </StyledButton>
              </BtnGroup>
            </FormGroup>
            <FormGroup className='nextBtn backBtn'>
              <NextBtn
                variant='outlined'
                size='large'
                className='back'
                onClick={() => handleStepper('background')}
              >
                Back
              </NextBtn>
              <BootstrapTooltip
                title={
                  !revenue.accountingSoftware ||
                  !revenue?.revenueSources?.[0]?.name ||
                  !revenue?.revenueSources?.[0]?.currency ||
                  !revenue?.revenueSources?.[0]?.revenue ||
                  !revenue?.revenueSources?.[0]?.duration
                    ? 'Please complete all questions on this page to continue'
                    : ''
                }
                placement='top-end'
              >
                <NextBtn
                  variant='outlined'
                  size='large'
                  isactive={!Object.keys(error).length && accountingSoftware !== ''}
                  onClick={() => handleSubmit()}
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

export default connect(mapStateToProps)(EligibilityFromAlmostThere);
