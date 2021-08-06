/* eslint-disable no-lonely-if */
/* eslint-disable @typescript-eslint/indent */
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Grid,
  FormControl,
  // TextFieldProps,
  // TextField,
  OutlinedInput,
  TextField,
  Checkbox,
  FilledTextFieldProps,
  OutlinedTextFieldProps,
  StandardTextFieldProps,
  InputAdornment,
  IconButton,
  Theme,
  makeStyles
  // FormControlLabel
  // InputBase
} from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import {
  HeadingTypography,
  ContentWrap,
  ParagraphText,
  FormGroup,
  EligiblityBoxWrap,
  // StyledButton,
  // BtnGroup,
  NextBtn,
  StyledErrorText,
  DashboardWrrapper,
  ContentBoxWrap
} from './Styled';
import { COUNTRY_CODE } from '../../utils/Constant';
import validationRules from './CustomerValidate';
import { validate } from '../../utils/helper';

// Business interface
interface IContact {
  [key: string]: string | number;
  firstName: string;
  lastName: string;
  email: string;
  phone: number | string;
  password: string;
  passwordConfirm: string;
}

// Props Interface
interface IProps {
  dispatch: Function;
  handleStepper: Function;
  handleEligibilityCheck: Function;
  stepperReducer: {
    businessValue: any;
    fundingValue: any;
    contactValue: any;
    backgroundValue: any;
    revenueValue: any;
  };
  contact: IContact;
  setContact: Function;
  areaCode: string;
  setAreaCode: Function;
}

const CustomerContact: React.FC<IProps> = ({
  dispatch,
  handleStepper,
  stepperReducer,
  handleEligibilityCheck,
  contact,
  setContact,
  areaCode,
  setAreaCode
}: IProps) => {
  const [checked, setChecked] = useState(false);
  // const [contact, setContact] = useState<IContact>({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   phone: '',
  //   password: '',
  //   passwordConfirm: ''
  // });
  const [error, setError] = useState<any>({});
  const [passwordCheckArr, setPasswordCheckArr] = useState<any>([]);
  const [passwordObj, setConfirmObj] = useState<any>({
    confirm: false,
    password: false
  });
  const isInitial = useRef({ value: true });

  // Handle Prepopulated
  useEffect(() => {
    if (stepperReducer?.contactValue) {
      const { contactValue } = stepperReducer;
      setContact({ ...contactValue });
      setAreaCode(contactValue.areaCode);
      setPasswordCheckArr(['uppercase', 'lowercase', 'numeric', 'special', 'length']);
    }
  }, [stepperReducer, setContact, setAreaCode]);

  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  // Handle onChange method
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event) setContact({ ...contact, [event.target.name]: event.target.value });
  };

  // Handle password onChange method
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newArr = [...passwordCheckArr];
    const pwd = new RegExp('^(?=.*[A-Z])');
    if (pwd.test(event.target.value)) {
      if (!newArr.includes('uppercase')) {
        newArr = [...newArr, 'uppercase'];
      }
    } else {
      if (newArr.includes('uppercase')) {
        const index = newArr.indexOf('uppercase');
        newArr.splice(index, 1);
      }
    }
    if (event.target.value.match(/[a-z]/)) {
      if (!newArr.includes('lowercase')) {
        newArr = [...newArr, 'lowercase'];
      }
    } else {
      if (newArr.includes('lowercase')) {
        const index = newArr.indexOf('lowercase');
        newArr.splice(index, 1);
      }
    }
    const pwd2 = new RegExp('^(?=.*[0-9])');
    if (pwd2.test(event.target.value)) {
      if (!newArr.includes('numeric')) {
        newArr = [...newArr, 'numeric'];
      }
    } else {
      if (newArr.includes('numeric')) {
        const index = newArr.indexOf('numeric');
        newArr.splice(index, 1);
      }
    }
    const pwd3 = new RegExp('^(?=.*[@$!%*#?&£])');
    if (pwd3.test(event.target.value)) {
      if (!newArr.includes('special')) {
        newArr = [...newArr, 'special'];
      }
    } else {
      if (newArr.includes('special')) {
        const index = newArr.indexOf('special');
        newArr.splice(index, 1);
      }
    }
    if (event.target.value.length > 11) {
      if (!newArr.includes('length')) {
        newArr = [...newArr, 'length'];
      }
    } else {
      if (newArr.includes('length')) {
        const index = newArr.indexOf('length');
        newArr.splice(index, 1);
      }
    }
    if (event) setContact({ ...contact, [event.target.name]: event.target.value });
    setPasswordCheckArr([...newArr]);
  };

  // Validation of user fields
  const handleValidate = () => {
    let validRes = { errors: {}, isValid: false };
    validRes = validate({ ...contact, areaCode }, validationRules);
    setError(validRes.errors);
    // eslint-disable-next-line no-console
    console.log('validate-------------', validRes);
    return validRes.isValid;
  };

  // Handle Input change phone code
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAreaCode('');
  };

  // Handle Next btn click
  const handleSubmit = () => {
    // eslint-disable-next-line no-console
    console.log('I am here -------------');

    isInitial.current.value = false;
    if (handleValidate() && checked) {
      window.scrollTo(0, 0);
      const { firstName, lastName, email, phone, password } = contact;
      const isCheck =
        !Object.keys(error).length &&
        areaCode !== '' &&
        firstName !== '' &&
        lastName !== '' &&
        email !== '' &&
        phone !== '' &&
        password !== '' &&
        checked &&
        passwordCheckArr.length === 5;
      if (isCheck) {
        dispatch({
          type: 'SAVE_STEPPER',
          payload: {
            businessValue: stepperReducer.businessValue,
            fundingValue: stepperReducer.fundingValue,
            contactValue: { ...contact, areaCode },
            backgroundValue: stepperReducer.backgroundValue,
            revenueValue: stepperReducer.revenueValue
          }
        });
        handleEligibilityCheck();
      }
    }
  };

  // Handle password show toggle
  const handleClickShowPassword = (type: string) => {
    setConfirmObj({ ...passwordObj, [type]: !passwordObj[type] });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const semiboldFont = createMuiTheme({
    typography: { fontFamily: ['Averta-Semibold'].join(',') }
  });

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

  let contactError = false;
  let contactHelper = '';
  if (!contact.phone && error.phone) {
    contactError = true;
    contactHelper = error.phone;
  }
  if (contact.phone && error.phone) {
    contactError = true;
    contactHelper = error.phone;
  }

  // eslint-disable-next-line no-console
  console.log('contact----------------', contact, error);

  const { firstName, lastName, email, phone, password } = contact;
  return (
    <DashboardWrrapper className='coommon-dashboardbg transactionBg'>
      <ContentBoxWrap className='contentBoxW'>
        <EligiblityBoxWrap>
          <ContentWrap>
            <ThemeProvider theme={semiboldFont}>
              <HeadingTypography variant='h4' align='left'>
                How can we reach you?
              </HeadingTypography>
            </ThemeProvider>

            <FormGroup className='inputFormWrap'>
              <ThemeProvider theme={semiboldFont}>
                <ParagraphText variant='body2' align='left'>
                  What is your name?
                </ParagraphText>
              </ThemeProvider>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6} lg={4}>
                  <FormControl variant='outlined'>
                    {/* <InputLabel htmlFor='component-outlined'>First name</InputLabel> */}
                    <TextField
                      variant='outlined'
                      id='component-outlined-firstname'
                      value={contact.firstName}
                      name='firstName'
                      onChange={handleChange}
                      label='First name'
                      placeholder='Enter first name'
                      error={!contact.firstName && error.firstName ? true : false}
                      helperText={!contact.firstName && error.firstName ? error.firstName : ''}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <FormControl variant='outlined'>
                    {/* <InputLabel htmlFor='component-outlined'>Last name</InputLabel> */}
                    <TextField
                      variant='outlined'
                      id='component-outlined-lastname'
                      value={contact.lastName}
                      name='lastName'
                      onChange={handleChange}
                      label='Last name'
                      placeholder='Enter last name'
                      error={!contact.lastName && error.lastName ? true : false}
                      helperText={!contact.lastName && error.lastName ? error.lastName : ''}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </FormGroup>
            <FormGroup className='inputFormWrap'>
              <ThemeProvider theme={semiboldFont}>
                <ParagraphText variant='body2' align='left'>
                  What is your email address?
                </ParagraphText>
              </ThemeProvider>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={10} md={6} lg={4}>
                  <FormControl variant='outlined'>
                    {/* <InputLabel htmlFor='component-outlined'>Email</InputLabel> */}
                    <TextField
                      variant='outlined'
                      id='component-outlined-email'
                      value={contact.email}
                      name='email'
                      onChange={handleChange}
                      label='Email'
                      placeholder='Enter email address'
                      error={!contact.email && error.email ? true : false}
                      helperText={!contact.email && error.email ? error.email : ''}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </FormGroup>
            <FormGroup className='inputFormWrap'>
              <ThemeProvider theme={semiboldFont}>
                <ParagraphText variant='body2' align='left'>
                  What is your phone number?
                </ParagraphText>
              </ThemeProvider>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={11} lg={4}>
                  <FormControl variant='outlined' className='fmAutoComplete mobw100'>
                    <Autocomplete
                      id='Country_code'
                      value={COUNTRY_CODE.find((r) => r?.dial_code === areaCode)}
                      options={COUNTRY_CODE}
                      getOptionLabel={(option: { name: any; dial_code: any; flag: any }) =>
                        `${option?.flag} ${option?.name} ${option?.dial_code}`
                      }
                      onInputChange={(event, newInputValue) => {
                        if (!newInputValue && event) setAreaCode('');
                        if (newInputValue && event) setAreaCode(`+${newInputValue.split('+')[1]}`);
                      }}
                      getOptionSelected={(
                        option: { dial_code: any },
                        value: { dial_code: any }
                      ) => {
                        if (option.dial_code === value?.dial_code) setAreaCode(value?.dial_code);
                        return option.dial_code === value?.dial_code;
                      }}
                      style={{ width: 'auto' }}
                      renderOption={(option) => (
                        <>
                          <span>{`${option?.flag}  ${option?.name}  ${option?.dial_code}`}</span>
                        </>
                      )}
                      renderInput={(
                        params:
                          | (JSX.IntrinsicAttributes & StandardTextFieldProps)
                          | (JSX.IntrinsicAttributes & FilledTextFieldProps)
                          | (JSX.IntrinsicAttributes & OutlinedTextFieldProps)
                      ) => (
                        <TextField
                          {...params}
                          label='Country code'
                          variant='outlined'
                          name='areaCode'
                          value={(e: any) => {}}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            handleInputChange(e);
                          }}
                          error={!areaCode && error.areaCode ? true : false}
                          helperText={!areaCode && error.areaCode ? error.areaCode : ''}
                        />
                      )}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={10} lg={4}>
                  <FormControl variant='outlined'>
                    {/* <InputLabel htmlFor='component-outlined'>Number</InputLabel> */}
                    <TextField
                      variant='outlined'
                      id='component-outlined-phone'
                      value={contact.phone}
                      name='phone'
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        handleChange(event);
                        if (event?.target?.value) setError({ ...error, phone: '' });
                      }}
                      label='Number'
                      placeholder='Enter number'
                      error={contactError}
                      helperText={contactHelper}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </FormGroup>
            <FormGroup className='inputFormWrap'>
              <ThemeProvider theme={semiboldFont}>
                <ParagraphText variant='body2' align='left'>
                  Create a password to save and submit your application.
                </ParagraphText>
              </ThemeProvider>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={10} md={6} lg={4}>
                  <FormControl variant='outlined' className='mrg_lft20'>
                    <OutlinedInput
                      id='standard-adornment-password'
                      type={passwordObj.password ? 'text' : 'password'}
                      value={contact.password}
                      name='password'
                      onChange={handlePasswordChange}
                      placeholder='Enter password'
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton
                            aria-label='toggle password visibility'
                            onClick={() => handleClickShowPassword('password')}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {passwordObj.password ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                      error={!contact.password && error.password ? true : false}
                    />
                    {!contact.password && error.password ? (
                      <StyledErrorText className='font_pass'>{error?.password}</StyledErrorText>
                    ) : (
                      ''
                    )}
                  </FormControl>
                </Grid>
              </Grid>
            </FormGroup>
            <FormGroup className='inputFormWrap'>
              {/* <ParagraphText variant='body2' align='left'>
            Please confirm password.
          </ParagraphText>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={5}>
              <FormControl variant='outlined'>
                <OutlinedInput
                  id='standard-adornment-password'
                  type={passwordObj.confirm ? 'text' : 'password'}
                  value={contact.passwordConfirm}
                  name='passwordConfirm'
                  onChange={handleChange}
                  placeholder='Enter confirm password'
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={() => handleClickShowPassword('confirm')}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {passwordObj.confirm ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  error={error.passwordConfirm ? true : false}
                />
                {error.passwordConfirm ? (
                  <StyledErrorText>{error?.passwordConfirm}</StyledErrorText>
                ) : (
                  ''
                )}
              </FormControl>
            </Grid>
          </Grid> */}
              <ParagraphText variant='body2' align='left'>
                Your password must contain:
              </ParagraphText>
              <FormControl className='agreeChecked'>
                <Checkbox
                  checked={passwordCheckArr.includes('length')}
                  color='secondary'
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  // disabled
                />
                <ParagraphText className='smallRT' variant='body2' align='left'>
                  at least 12 characters
                </ParagraphText>
              </FormControl>
              <FormControl className='agreeChecked'>
                <Checkbox
                  checked={passwordCheckArr.includes('numeric')}
                  color='secondary'
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  // disabled
                />
                <ParagraphText className='smallRT' variant='body2' align='left'>
                  at least 1 number
                </ParagraphText>
              </FormControl>
              <FormControl className='agreeChecked'>
                <Checkbox
                  checked={passwordCheckArr.includes('lowercase')}
                  color='secondary'
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  // disabled
                />
                <ParagraphText className='smallRT' variant='body2' align='left'>
                  a lower case character
                </ParagraphText>
              </FormControl>
              <FormControl className='agreeChecked'>
                <Checkbox
                  checked={passwordCheckArr.includes('uppercase')}
                  color='secondary'
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  // disabled
                />
                <ParagraphText className='smallRT' variant='body2' align='left'>
                  a upper case character
                </ParagraphText>
              </FormControl>
              <FormControl className='agreeChecked'>
                <Checkbox
                  checked={passwordCheckArr.includes('special')}
                  color='secondary'
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  // disabled
                />
                <ParagraphText className='smallRT' variant='body2' align='left'>
                  a special character
                </ParagraphText>
              </FormControl>
            </FormGroup>
            <FormGroup className='inputFormWrap'>
              <FormControl className='agreeChecked mob_agree'>
                <Checkbox
                  checked={checked}
                  color='default'
                  onChange={handleChecked}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <ParagraphText className='smallRT' variant='body2' align='left'>
                  I agree to Revving’s&nbsp;
                  <Link to='#' className='tcl'>
                    Terms & Conditions
                  </Link>
                </ParagraphText>
              </FormControl>
              {!checked && !isInitial.current.value ? (
                <StyledErrorText className='mrgleft15 custmML'>
                  Please accept the terms and conditions.
                </StyledErrorText>
              ) : (
                ''
              )}
            </FormGroup>
            <FormGroup className='nextBtn backBtn'>
              <NextBtn
                variant='outlined'
                size='large'
                className='back'
                onClick={() => handleStepper('funding')}
              >
                Back
              </NextBtn>
              <BootstrapTooltip
                title={
                  !contact?.firstName ||
                  !contact?.lastName ||
                  !contact?.email ||
                  !contact?.phone ||
                  !contact?.password ||
                  !areaCode
                    ? 'Please complete all questions on this page to continue'
                    : ''
                }
                placement='top-end'
              >
                <NextBtn
                  variant='outlined'
                  size='large'
                  isactive={
                    !Object.keys(error).length &&
                    areaCode !== '' &&
                    firstName !== '' &&
                    lastName !== '' &&
                    email !== '' &&
                    phone !== '' &&
                    password !== '' &&
                    checked &&
                    passwordCheckArr.length === 5
                  }
                  onClick={() => handleSubmit()}
                >
                  Submit
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

export default connect(mapStateToProps)(CustomerContact);
