import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { useSnackbar, VariantType } from 'notistack';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';

import {
  Collapse,
  List,
  ListItem,
  Box,
  ListItemText,
  InputAdornment,
  Typography,
  OutlinedInput,
  FormControl,
  MenuItem,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
  IconButton,
  TextField,
  InputLabel,
  Grid,
  Checkbox
} from '@material-ui/core';
import { Visibility, VisibilityOff, ExpandLess, ExpandMore } from '@material-ui/icons';
import Switch from '@material-ui/core/Switch';
import { useHistory, Link } from 'react-router-dom';
import ScrollBar from 'react-perfect-scrollbar';
import validationRules from './UserDataValidation';
import PasswordValidationRules from './UserDataPasswordValidation';
import { validate } from '../../utils/helper';
import {
  H3,
  ImgHeader,
  StyledTypographyHelp,
  HeaderWrapper,
  Menulist,
  SubMenuD,
  FormGroup,
  StyledUL,
  BorderTop,
  StyledDialog,
  MobileHeader,
  CloseButton,
  ListStyled,
  ListItemStyled,
  MHeader,
  MenuIcon,
  ContentBox,
  ProfileMobile
} from './Styled';
import setting from '../../assets/images/settings.png';
import masterlogo from '../../assets/images/Revving_Master Logo.svg';

const AntSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 44,
      height: 24,
      padding: 0,
      display: 'flex',
      borderRadius: 14
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(20px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main
        }
      }
    },
    thumb: {
      width: 20,
      height: 20,
      boxShadow: 'none'
    },
    track: {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white
    },
    checked: {}
  })
)(Switch);

// Props Interface
interface IProps {
  dispatch: Function;
  loginReducer: {
    data: any;
    status: string;
    message: {
      data?: string;
    };
  };
  saveUserReducer: {
    data: any;
    status: string;
    message: {
      data?: string;
    };
  };
  userProfileReducer: {
    data: any;
    status: string;
    message: {
      data?: string;
    };
  };
  accountPreferencesReducer: {
    data: any;
    status: string;
    message: {
      data?: string;
    };
  };
  updateAccPreferencesReducer: {
    data: any;
    status: string;
    message: {
      data?: string;
    };
  };
  // HelpReducer: {
  //   inputText: any;
  // };
}

// User interface
interface IContact {
  [key: string]: string | number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const Header: React.FC<IProps> = ({
  // HelpReducer,
  dispatch,
  loginReducer,
  saveUserReducer,
  userProfileReducer,
  accountPreferencesReducer,
  updateAccPreferencesReducer
}: IProps) => {
  const [active, setActive] = useState(false);
  const [profileActive, setProfileActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [openTab, setOpenTab] = useState('');
  const [openPreferences, setOpenPreferences] = useState(false);
  const [activeTab, setActiveTab] = useState('');
  const [activeClass, setactiveClass] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);
  const [activePreferences, setActivePreferences] = useState(false);
  const [enableEditMobile, setEnableEditMobile] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [inputText, setInputText] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  const eventClick = useRef({ value: '' });
  const eventClickEmail = useRef({ value: '' });
  const [passwordObj, setConfirmObj] = useState<any>({
    confirm: false,
    password: false
  });
  const [preferences, setPreferences] = useState<any>({
    emailNotifications: false,
    notifyAdvanceDeposit: false,
    notifyRepayment: false,
    notifyFeeAdjustments: false,
    notifyNewDocCreated: false
  });

  const [isLoading, setIsLoading] = useState(false);

  const [userInfo, setUserInfo] = useState<IContact>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });
  const [error, setError] = useState<any>({});

  const history = useHistory();

  // const handleClickOpenHelp = () => {
  //   setOpenHelp(true);
  // };
  const handleHelpSubmit = (e: any) => {
    e.preventDefault();
    /*eslint-disable*/
    const body = {
      question: inputText
    };
    dispatch({ type: 'HELP_USER', payload: body });
    setInputText(' ');
  };
  useEffect(() => {
    const { location } = history;
    if (location.pathname.includes('account')) {
      setOpenTab('account');
    }
  }, [history]);

  useEffect(() => {
    eventClick.current.value = 'getProfile';
    eventClickEmail.current.value = 'isEmail';
    dispatch({
      type: 'GET_USER_PROFILE_DATA'
    });
    dispatch({
      type: 'GET_ACCOUNT_PREFERENCES'
    });
  }, [dispatch]);

  // Handle expand open
  const handleClick = (type: string) => {
    type !== openTab ? setOpenTab(type) : setOpenTab('');
  };

  // Handle sidebar click
  const handleSideBarClick = (ingestion: string) => {
    setActiveTab(ingestion);
    history.push(`/${ingestion}`);
  };

  const locationUrl = history.location.pathname;

  // handleHelpClick active
  const handlePreferences = () => {
    setProfileActive(false);
    setOpenPreferences(!openPreferences);
  };

  // handleHelpClick active
  const handleEdit = (e: any) => {
    e.preventDefault();
    setOpen(!open);
    setProfileActive(false);
  };

  // handleEditMobile active
  const handleEditMobile = (e: any) => {
    e.preventDefault();
    setEnableEditMobile(!enableEditMobile);
  };

  // handlePreferencesMobile active
  const handlePreferencesMobile = (e: any) => {
    e.preventDefault();
    setActivePreferences(!activePreferences);
  };

  const handleBackMobile = () => {
    setActive(false);
    setEnableEditMobile(false);
    setProfileActive(false);
    setActivePreferences(false);
  };

  // handleHelpClick active
  const handleHelpClick = (e: any) => {
    e.preventDefault();
    setProfileActive(false)
    setActive(!active);
  };

  // handleProfleClickMobile active
  const handleProfleClickMobile = (e: any) => {
    e.preventDefault();
    // console.log(profileActive);
    setProfileActive(!profileActive);
    setActive(false);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    setActive(false);
    setProfileActive(false);
    setOpen(false);
    setOpenPreferences(false);
    setOpenHelp(false);
  };

  const handleMenu = (event: React.MouseEvent<EventTarget>) => {
    setactiveClass(!activeClass);
  };

  // Handle password show toggle
  const handleClickShowPassword = (type: string) => {
    setConfirmObj({ ...passwordObj, [type]: !passwordObj[type] });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  // Handle onChange method
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {    
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
    // eslint-disable-next-line no-console
    // console.log('HHHHHH MMMM', event.target.name, event.target.value);
  };

  // Handle password onChange method
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>, enable: boolean) => {
    if(enable){
      setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
    }
    // eslint-disable-next-line no-console
    // console.log('HHHHHH MMMM', event.target.name);
  };

  // Validation of user fields
  const handleValidate = () => {
    const { password, passwordConfirm } = userInfo;
    let validRes = { errors: {}, isValid: false };
    validRes = validate(
      { ...userInfo },
      password || passwordConfirm ? PasswordValidationRules : validationRules
    );
    setError(validRes.errors);
    return validRes.isValid;
  };

  // Handle Next btn click
  const handleSubmit = () => {
    const { firstName, lastName, email, password } = userInfo;
    if (handleValidate()) {
      setIsLoading(true);
      eventClick.current.value = 'userUpdate';
      if (password) {
        dispatch({
          type: 'SAVE_USER_DATA',
          payload: {
            first_name: firstName,
            last_name: lastName,
            email,
            password
          }
        });
      } else {
        dispatch({
          type: 'SAVE_USER_DATA',
          payload: {
            first_name: firstName,
            last_name: lastName,
            email
          }
        });
      }
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.clear();
    history.push('/login');
  };

  // Handling  customerUser Api suucess
  useEffect(() => {
    const handleSnack = (variant: VariantType) => {
      enqueueSnackbar(
        saveUserReducer.message.data ? saveUserReducer.message.data : saveUserReducer.message,
        {
          variant
        }
      );
    };
    const handleSuccess = (variant: VariantType, msg: string) => {
      enqueueSnackbar(msg, {
        variant
      });
    };
    if (saveUserReducer?.status === 'success' && eventClick.current.value === 'userUpdate') {
      handleSuccess('success', 'User update sucessfully');
      setOpen(false);
      setIsLoading(false);
      eventClick.current.value = '';
      const { password } = userInfo;
      if (password) {
        localStorage.clear();
        history.push('/login');
      } else {
        eventClick.current.value = 'getProfile';
        dispatch({
          type: 'GET_USER_PROFILE_DATA'
        });
      }
    }
    if (saveUserReducer?.status === 'failure' && eventClick.current.value === 'userUpdate') {
      handleSnack('error');
      setIsLoading(false);
      eventClick.current.value = '';
    }
  }, [saveUserReducer, history, dispatch, enqueueSnackbar, userInfo]);

  // Handling  customerUser Api suucess
  useEffect(() => {
    const handleSnack = (variant: VariantType) => {
      enqueueSnackbar(
        userProfileReducer.message.data
          ? userProfileReducer.message.data
          : userProfileReducer.message,
        {
          variant
        }
      );
    };

    if (userProfileReducer?.status === 'success' && eventClick.current.value === 'getProfile') {
      setUserInfo({
        firstName: userProfileReducer?.data?.first_name,
        lastName: userProfileReducer?.data?.last_name,
        email: userProfileReducer?.data?.email,
        password: '',
        passwordConfirm: ''
      });
    }
    if (userProfileReducer?.status === 'failure' && eventClick.current.value === 'getProfile') {
      handleSnack('error');
      setIsLoading(false);
      eventClick.current.value = '';
    }
  }, [userProfileReducer, enqueueSnackbar, setUserInfo]);

  // Handling  get preferences
  useEffect(() => {
    const handleSnack = (variant: VariantType) => {
      enqueueSnackbar(
        accountPreferencesReducer.message.data
          ? accountPreferencesReducer.message.data
          : accountPreferencesReducer.message,
        {
          variant
        }
      );
    };

    if (
      accountPreferencesReducer?.status === 'success' &&
      eventClickEmail.current.value === 'isEmail'
    ) {
      setPreferences({
        emailNotifications: accountPreferencesReducer?.data?.email_notifications,
        notifyAdvanceDeposit: accountPreferencesReducer?.data?.notify_advance_deposit,
        notifyRepayment: accountPreferencesReducer?.data?.notify_repayment,
        notifyFeeAdjustments: accountPreferencesReducer?.data?.notify_fee_adjustments,
        notifyNewDocCreated: accountPreferencesReducer?.data?.notify_new_doc_created
      });
      eventClickEmail.current.value = '';
    }
    if (
      accountPreferencesReducer?.status === 'failure' &&
      eventClickEmail.current.value === 'isEmail'
    ) {
      handleSnack('error');
      eventClickEmail.current.value = '';
    }
  }, [accountPreferencesReducer, enqueueSnackbar]);

  // Handling  update preferences
  useEffect(() => {
    const handleSnack = (variant: VariantType) => {
      enqueueSnackbar(
        updateAccPreferencesReducer.message.data
          ? updateAccPreferencesReducer.message.data
          : updateAccPreferencesReducer.message,
        {
          variant
        }
      );
    };

    if (
      updateAccPreferencesReducer?.status === 'success' &&
      eventClickEmail.current.value === 'updatePreference'
    ) {
      eventClickEmail.current.value = 'isEmail';
      dispatch({
        type: 'GET_ACCOUNT_PREFERENCES'
      });
    }
    if (
      updateAccPreferencesReducer?.status === 'failure' &&
      eventClickEmail.current.value === 'updatePreference'
    ) {
      handleSnack('error');
      eventClickEmail.current.value = '';
    }
  }, [updateAccPreferencesReducer, enqueueSnackbar, dispatch]);

  // Handle Switch
  const handleNotification = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPreferences({ ...preferences, [event.target.name]: event.target.checked });
    eventClickEmail.current.value = 'updatePreference';
    dispatch({
      type: 'UPDATE_ACCOUNT_PREFERENCES',
      payload: { ...preferences, [event.target.name]: event.target.checked }
    });
  };

  return (
    <>
      <Box className={activeTab}>
        <MHeader>
          <Box className='logo_wrap'>
            <Link to='#' className='mob_logo'>
              <img src={masterlogo} alt='logo' />
            </Link>
            <MenuIcon className='menu_icon' onClick={handleMenu}>
              <svg
                width={27}
                height={20}
                viewBox='0 0 27 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <line
                  x1={1}
                  y1={1}
                  x2={26}
                  y2={1}
                  stroke='#3c3c3c'
                  strokeWidth={2}
                  strokeLinecap='round'
                />
                <line
                  x1={1}
                  y1={9}
                  x2={26}
                  y2={9}
                  stroke='#3c3c3c'
                  strokeWidth={2}
                  strokeLinecap='round'
                />
                <line
                  x1={1}
                  y1={17}
                  x2={26}
                  y2={17}
                  stroke='#3c3c3c'
                  strokeWidth={2}
                  strokeLinecap='round'
                />
              </svg>
            </MenuIcon>
          </Box>
          <Typography variant='h6'>Pogo Ltd.</Typography>
        </MHeader>

        <MobileHeader className={activeClass ? 'active' : ''}>
          <Box className='logo_wrap'>
            <Link to='#' className='mob_logo'>
              <img src={masterlogo} alt='logo' />
            </Link>
            <CloseButton className='menu_icon' onClick={handleMenu}>
              <svg
                width={22}
                height={22}
                viewBox='0 0 22 22'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M1 1L21 21' stroke='#3c3c3c' strokeWidth={2} strokeLinecap='round' />
                <path d='M21 1L1 21' stroke='#3c3c3c' strokeWidth={2} strokeLinecap='round' />
              </svg>
            </CloseButton>
          </Box>
          <Typography variant='h6'>Pogo Ltd.</Typography>
          <ScrollBar>
            <ListStyled aria-labelledby='nested-list-subheader'>
              <ListItem
                className={locationUrl.includes('funding') ? 'active' : ''}
                button
                onClick={() => handleSideBarClick('funding')}
              >
                <ListItemText primary='Funding' />
              </ListItem>
              <ListItem
                className={locationUrl.includes('advance-ledger') ? 'active' : ''}
                button
                onClick={() => handleSideBarClick('advance-ledger')}
              >
                <ListItemText primary='Advances' />
              </ListItem>
              <ListItem
                className={locationUrl.includes('transactions') ? 'active' : ''}
                button
                onClick={() => handleSideBarClick('transactions')}
              >
                <ListItemText primary='Transactions' />
              </ListItem>
              <ListItemStyled
                button
                onClick={() => handleClick('account')}
                className={locationUrl.includes('account') ? 'active' : ''}
              >
                <ListItemText primary='Account' />
                {openTab === 'account' ? <ExpandLess /> : <ExpandMore />}
              </ListItemStyled>
              <Collapse
                in={openTab === 'account'}
                timeout='auto'
                unmountOnExit
                className={openTab === 'account' ? 'activeBG' : ''}
              >
                <List component='div' disablePadding>
                  <ListItem
                    className={locationUrl.includes('integrations') ? 'active' : ''}
                    button
                    onClick={() => handleSideBarClick('account/integrations')}
                  >
                    <ListItemText primary='Integrations' />
                  </ListItem>

                  <ListItem
                    className={locationUrl.includes('fees') ? 'active' : ''}
                    button
                    onClick={() => handleSideBarClick('account/fees')}
                  >
                    <ListItemText primary='Fees' />
                  </ListItem>
                  <ListItem
                    className={locationUrl.includes('documentation') ? 'active' : ''}
                    button
                    onClick={() => handleSideBarClick('account/documentation')}
                  >
                    <ListItemText primary='Documentation' />
                  </ListItem>
                  <ListItem
                    className={locationUrl.includes('business-details') ? 'active' : ''}
                    button
                    onClick={() => handleSideBarClick('account/business-details')}
                  >
                    <ListItemText primary='Business details' />
                  </ListItem>
                  <ListItem
                    className={locationUrl.includes('administration') ? 'active' : ''}
                    button
                    onClick={() => handleSideBarClick('account/administration')}
                  >
                    <ListItemText primary='Administration' />
                  </ListItem>
                </List>
              </Collapse>
            </ListStyled>
          </ScrollBar>
          <Menulist className='mob_hdr_btm'>
            <li>
              <Link to='/' onClick={handleHelpClick}>
                <StyledTypographyHelp>Help</StyledTypographyHelp>
              </Link>
              <SubMenuD className={active ? 'active' : ''}>
                <Typography gutterBottom>
                  Please tell us how we can help you and we’ll get back to you as soon as possible.
                </Typography>
                <FormGroup>
                  <TextField
                    id='outlined-multiline-static'
                    multiline
                    rows={4}
                    // defaultValue='Default Value'
                    variant='outlined'
                    placeholder='Type here'
                  />
                </FormGroup>
                <StyledUL>
                  <div className='edit_buttonwrep'>
                    <Button variant='outlined' color='primary' className='downloadBtn'>
                      Add team member
                    </Button>
                    <Button onClick={handleClose} autoFocus>
                      Cancel
                    </Button>
                  </div>
                </StyledUL>
              </SubMenuD>
            </li>
            <li>
              <Link to='/' onClick={handleProfleClickMobile}>
                <ImgHeader src={setting} alt='setting' />
              </Link>
              <SubMenuD className={profileActive ? 'profileWrap active' : 'profileWrap'}>
                <Typography variant='h6'>
                  {userProfileReducer?.data?.first_name}
                  {/* {loginReducer?.data?.last_name} */}
                </Typography>
                <MenuItem onClick={handleEdit}>Edit profile</MenuItem>
                <MenuItem onClick={handlePreferences}>Preferences</MenuItem>
                <BorderTop />
                <MenuItem className='lastM' onClick={handleLogout}>
                  Logout
                </MenuItem>
              </SubMenuD>
            </li>
          </Menulist>
        </MobileHeader>
      </Box>
      <HeaderWrapper
        alignItems='center'
        justifyContent='space-between'
        display='flex'
        className='authHeader'
      >
        <Menulist>
          <li>
            <H3>Digital revenue on-demand</H3>
          </li>
          <li>
            <Link to='/' onClick={handleHelpClick}>
              <StyledTypographyHelp>Help</StyledTypographyHelp>
            </Link>
            <SubMenuD className={active ? 'active' : ''}>
              <Typography gutterBottom>
                Please tell us how we can help you and we’ll get back to you as soon as possible.
              </Typography>
              <FormGroup>
                <TextField
                  id='outlined-multiline-static'
                  multiline
                  rows={4}
                  // defaultValue='Default Value'
                  variant='outlined'
                  placeholder='Type here'
                  name='inputText'
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
              </FormGroup>
              <StyledUL>
                <div className='edit_buttonwrep'>
                  <Button
                    variant='outlined'
                    color='primary'
                    className='downloadBtn'
                    onClick={handleHelpSubmit}
                  >
                    Submit
                  </Button>
                  <Button onClick={handleClose} autoFocus className='btn_cncl'>
                    Cancel
                  </Button>
                </div>
              </StyledUL>
            </SubMenuD>
          </li>
          <li>
            <Link to='/' onClick={handleProfleClickMobile}>
              <ImgHeader src={setting} alt='setting' />
            </Link>
            <SubMenuD className={profileActive ? 'profileWrap active' : 'profileWrap'}>
              <Typography variant='h6'>
                {userProfileReducer?.data?.first_name}
                {/* {loginReducer?.data?.last_name} */}
              </Typography>
              <MenuItem onClick={handleEdit}>Edit profile</MenuItem>
              <MenuItem onClick={handlePreferences}>Preferences</MenuItem>
              <BorderTop />
              <MenuItem className='lastM' onClick={handleLogout}>
                Logout
              </MenuItem>
            </SubMenuD>
          </li>
        </Menulist>
      </HeaderWrapper>

      <StyledDialog
        className='modalDilog'
        open={open}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle id='responsive-dialog-title'>Edit profile</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <FormGroup>
              <InputLabel htmlFor='name'>First name</InputLabel>
              <TextField
                id='outlined-basic'
                variant='outlined'
                placeholder=''
                value={userInfo.firstName}
                onChange={handleChange}
                name='firstName'
                error={error.firstName ? true : false}
                helperText={error.firstName ? error.firstName : ''}
              />
            </FormGroup>
            <FormGroup>
              <InputLabel htmlFor='name'>Last name</InputLabel>
              <TextField
                id='outlined-basic'
                variant='outlined'
                placeholder=''
                value={userInfo.lastName}
                onChange={handleChange}
                name='lastName'
                error={error.firstName ? true : false}
                helperText={error.firstName ? error.firstName : ''}
              />
            </FormGroup>
            <FormGroup>
              <InputLabel htmlFor='name'>Email address</InputLabel>
              <TextField
                id='outlined-basic'
                variant='outlined'
                placeholder=''
                value={userInfo.email}
                onChange={handleChange}
                name='email'
                error={error.firstName ? true : false}
                helperText={error.firstName ? error.firstName : ''}
              />
            </FormGroup>
            <FormGroup>
              <InputLabel htmlFor='name'>Password</InputLabel>

              <FormControl variant='outlined'>
                <OutlinedInput
                  id='standard-adornment-password'
                  type={passwordObj.password ? 'text' : 'password'}
                  value={showPassword ? showPassword && userInfo.password : ""}
                  name='password'
                  onChange={(e : React.ChangeEvent<HTMLInputElement>) => handlePasswordChange(e, true)}
                  onClick={() => {
                    if(!showPassword)
                    setUserInfo({ ...userInfo, password: '' })
                    setShowPassword(true)
                  }}
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
                  error={error.password ? true : false}
                />
                {error.password ? <Typography>{error.password}</Typography> : ''}
              </FormControl>
            </FormGroup>
            <FormGroup>
              <InputLabel htmlFor='name'>Confirm Password</InputLabel>
              <FormControl variant='outlined'>
                <OutlinedInput
                  id='standard-adornment-password'
                  type={passwordObj.passwordConfirm ? 'text' : 'password'}
                  value={userInfo.passwordConfirm}
                  name='passwordConfirm'
                  // onChange={(e : React.ChangeEvent<HTMLInputElement>) => handlePasswordChange(e, true)}
                  placeholder='Enter password'
                  onChange={(e : React.ChangeEvent<HTMLInputElement>) => handlePasswordChange(e, true)}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={() => handleClickShowPassword('passwordConfirm')}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {passwordObj.passwordConfirm ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  error={error.passwordConfirm ? true : false}
                />
                {error.passwordConfirm ? <Typography>{error.passwordConfirm}</Typography> : ''}
              </FormControl>
            </FormGroup>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div className='edit_buttonwrep'>
            <Button
              variant='outlined'
              color='primary'
              className='downloadBtn'
              onClick={handleSubmit}
            >
              {isLoading ? '...' : 'Save changes'}
            </Button>
            <Button onClick={handleClose} autoFocus className='btn_cncl'>
              Cancel
            </Button>
          </div>
        </DialogActions>
        <IconButton className='cloSebtn' onClick={handleClose}>
          <svg
            width={22}
            height={22}
            viewBox='0 0 22 22'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M1 1L21 21' stroke='#706B6B' strokeWidth={2} strokeLinecap='round' />
            <path d='M21 1L1 21' stroke='#706B6B' strokeWidth={2} strokeLinecap='round' />
          </svg>
        </IconButton>
      </StyledDialog>
      <StyledDialog
        className='modalDilog Preferences'
        open={openPreferences}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle id='responsive-dialog-title'>Preferences</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <FormGroup>
              <Grid container spacing={3} alignItems='flex-start'>
                <Grid item xs={12} sm={10}>
                  <InputLabel className='lableText' htmlFor='name'>
                    Email notifications
                  </InputLabel>
                  <Typography variant='body1'>Email notifications are turned on</Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <AntSwitch
                    checked={preferences.emailNotifications}
                    onChange={handleNotification}
                    name='emailNotifications'
                  />
                  {/* <div className='switch switch--horizontal'>
                    <input id='radio-a' type='radio' name='first-switch' />
                    <input id='radio-b' type='radio' name='first-switch' />
                    <span className='toggle-outside'>
                      <span className='toggle-inside' />
                    </span>
                  </div> */}
                </Grid>
              </Grid>
            </FormGroup>
            <FormGroup className='mt'>
              <InputLabel className='lableText' htmlFor='name'>
                Notify me about
              </InputLabel>
              <StyledUL className='pList'>
                <li>
                  <Checkbox
                    checked={preferences.notifyAdvanceDeposit}
                    name='notifyAdvanceDeposit'
                    color='default'
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                    onChange={handleNotification}
                  />
                  <Typography variant='body2'>Advances deposited in my account</Typography>
                </li>
                <li>
                  <Checkbox
                    checked={preferences.notifyRepayment}
                    name='notifyRepayment'
                    color='default'
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                    onChange={handleNotification}
                  />
                  <Typography variant='body2'>Repayments made to Revving</Typography>
                </li>
                <li>
                  <Checkbox
                    checked={preferences.notifyFeeAdjustments}
                    name='notifyFeeAdjustments'
                    color='default'
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                    onChange={handleNotification}
                  />
                  <Typography variant='body2'>Fee adjustments</Typography>
                </li>
                <li>
                  <Checkbox
                    name='notifyNewDocCreated'
                    checked={preferences.notifyNewDocCreated}
                    color='default'
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                    onChange={handleNotification}
                  />
                  <Typography variant='body2'>New documents created</Typography>
                </li>
              </StyledUL>
            </FormGroup>
          </DialogContentText>
        </DialogContent>
        <IconButton className='cloSebtn' onClick={handleClose}>
          <svg
            width={22}
            height={22}
            viewBox='0 0 22 22'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M1 1L21 21' stroke='#706B6B' strokeWidth={2} strokeLinecap='round' />
            <path d='M21 1L1 21' stroke='#706B6B' strokeWidth={2} strokeLinecap='round' />
          </svg>
        </IconButton>
      </StyledDialog>

      <StyledDialog
        className='modalDilog helpDialog'
        open={openHelp}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogContent>
          <DialogContentText>
            <FormGroup>
              <Typography gutterBottom>
                Please tell us how we can help you and we’ll get back to you as soon as possible.
              </Typography>
            </FormGroup>
            <FormGroup className='DeleteDilogText'>
              <TextField
                id='outlined-multiline-static'
                multiline
                rows={4}
                // defaultValue='Default Value'
                variant='outlined'
                placeholder='Type here'
              />
            </FormGroup>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div className='edit_buttonwrep'>
            <Button
              variant='outlined'
              color='primary'
              className='downloadBtn'
              onClick={handleClose}
            >
              Submit
            </Button>
            <Button onClick={handleClose} autoFocus>
              Cancel
            </Button>
          </div>
        </DialogActions>
      </StyledDialog>

      <ProfileMobile className={profileActive ? 'active' : ''}>
        <Button onClick={handleBackMobile}>
          <svg width={9} viewBox='0 0 10 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M9 1L2 8L9 15' stroke='#262F3A' strokeWidth={2} strokeLinecap='round' />
          </svg>
          &nbsp; Back
        </Button>
        <ContentBox className=''>
          <Typography variant='h6'>John Doe</Typography>
          <MenuItem onClick={handleEditMobile}>Edit profile</MenuItem>
          <MenuItem onClick={handlePreferencesMobile}>Preferences</MenuItem>
          <BorderTop />
          <MenuItem className='lastM' onClick={(e: React.MouseEvent<EventTarget>) => {
            handleLogout()
            handleClose(e)
            }}>
            Logout
          </MenuItem>
        </ContentBox>
      </ProfileMobile>

      <ProfileMobile className={enableEditMobile ? 'active' : ''}>
        <Button onClick={handleBackMobile}>
          <svg width={9} viewBox='0 0 10 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M9 1L2 8L9 15' stroke='#262F3A' strokeWidth={2} strokeLinecap='round' />
          </svg>
          &nbsp; Back
        </Button>
        <ContentBox className=''>
          <Typography variant='h6'>Edit Profile</Typography>
          <Box className='formGC'>
            <FormGroup>
              <InputLabel htmlFor='name'>First name</InputLabel>
              <TextField id='outlined-basic' variant='outlined' placeholder=''
              value={userInfo.firstName}
              onChange={handleChange}
              name='firstName'
              error={error.firstName ? true : false}
              helperText={error.firstName ? error.firstName : ''}
              />
            </FormGroup>
            <FormGroup>
              <InputLabel htmlFor='name'>Last name</InputLabel>
              <TextField id='outlined-basic' variant='outlined' placeholder=''
              value={userInfo.lastName}
              onChange={handleChange}
              name='lastName'
              error={error.firstName ? true : false}
              helperText={error.firstName ? error.firstName : ''}              />
            </FormGroup>
            <FormGroup>
              <InputLabel htmlFor='name'>Email address</InputLabel>
              <TextField id='outlined-basic' variant='outlined' placeholder=''
              value={userInfo.email}
              onChange={handleChange}
              name='email'
              error={error.firstName ? true : false}
              helperText={error.firstName ? error.firstName : ''}
              />
            </FormGroup>
            <FormGroup>
              <InputLabel htmlFor='name'>Password</InputLabel>
              <FormControl variant='outlined'>
                <OutlinedInput
                  id='standard-adornment-password'
                  // type={passwordObj.password ? 'text' : 'password'}
                  // value={userInfo.password}
                  name='password'
                  type={passwordObj.password ? 'text' : 'password'}
                  value={showPassword ? showPassword && userInfo.password : ""}
                  // onChange={handlePasswordChange}
                  placeholder='Enter password'
                  onChange={(e : React.ChangeEvent<HTMLInputElement>) => handlePasswordChange(e, true)}
                  onClick={() => {
                    if(!showPassword)
                    setUserInfo({ ...userInfo, password: '' })
                    setShowPassword(true)
                  }}
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
                  error={error.password ? true : false}
                />
              </FormControl>
            </FormGroup>
            <FormGroup>
              <InputLabel htmlFor='name'>Confirm Password</InputLabel>
              <FormControl variant='outlined'>
                <OutlinedInput
                  id='standard-adornment-password'
                  // type={passwordObj.password ? 'text' : 'password'}
                  // value={userInfo.password}
                  name='passwordConfirm'
                  type={passwordObj.passwordConfirm ? 'text' : 'password'}
                  value={userInfo.passwordConfirm}
                  // onChange={handlePasswordChange}
                  placeholder='Enter password'
                  onChange={(e : React.ChangeEvent<HTMLInputElement>) => handlePasswordChange(e, true)}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={() => handleClickShowPassword('passwordConfirm')}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {passwordObj.passwordConfirm ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  error={error.passwordConfirm ? true : false}
                />
              </FormControl>
            </FormGroup>
            <FormGroup>
              <div className='edit_buttonwrep'>
                <Button
                  variant='outlined'
                  color='primary'
                  className='downloadBtn'
                  onClick={handleSubmit}
                >
                  {isLoading ? 'Save changes' : 'Save changes'}
                </Button>
                <Button onClick={handleBackMobile} autoFocus className='btn_cncl'>
                  Cancel
                </Button>
              </div>
            </FormGroup>
          </Box>
        </ContentBox>
      </ProfileMobile>
      <ProfileMobile className={activePreferences ? 'active' : ''}>
        <Button onClick={handleBackMobile}>
          <svg width={9} viewBox='0 0 10 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M9 1L2 8L9 15' stroke='#262F3A' strokeWidth={2} strokeLinecap='round' />
          </svg>
          &nbsp; Back
        </Button>
        <ContentBox>
          <Typography variant='h6'>Preferences</Typography>
          <Box className='formGC'>
            <FormGroup>
              <Grid container spacing={3} alignItems='flex-start'>
                <Grid item xs={9} sm={10} className='smF'>
                  <InputLabel className='lableText' htmlFor='name'>
                    Email notifications
                  </InputLabel>
                  <Typography variant='body1'>Email notifications are turned on</Typography>
                </Grid>
                <Grid item xs={3} sm={2}>
                  <AntSwitch
                    checked={preferences.emailNotifications}
                    onChange={handleNotification}
                    name='emailNotifications'
                  />
                  {/* <div className='switch switch--horizontal'>
                    <input id='radio-a' type='radio' name='first-switch' />
                    <input id='radio-b' type='radio' name='first-switch' />
                    <span className='toggle-outside'>
                      <span className='toggle-inside' />
                    </span>
                  </div> */}
                </Grid>
              </Grid>
            </FormGroup>
            <FormGroup className='mt'>
              <InputLabel className='lableText' htmlFor='name'>
                Notify me about
              </InputLabel>
              <StyledUL className='mp pList'>
                <li>
                  <Checkbox
                    checked={preferences.notifyAdvanceDeposit}
                    name='notifyAdvanceDeposit'
                    color='default'
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                    onChange={handleNotification}
                  />
                  <Typography variant='body2'>Advances deposited in my account</Typography>
                </li>
                <li>
                  <Checkbox
                    checked={preferences.notifyRepayment}
                    name='notifyRepayment'
                    color='default'
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                    onChange={handleNotification}
                  />
                  <Typography variant='body2'>Repayments made to Revving</Typography>
                </li>
                <li>
                  <Checkbox
                    checked={preferences.notifyFeeAdjustments}
                    name='notifyFeeAdjustments'
                    color='default'
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                    onChange={handleNotification}
                  />
                  <Typography variant='body2'>Fee adjustments</Typography>
                </li>
                <li>
                  <Checkbox
                    checked={preferences.notifyNewDocCreated}
                    name='notifyNewDocCreated'
                    color='default'
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                    onChange={handleNotification}
                  />
                  <Typography variant='body2'>New documents created</Typography>
                </li>
              </StyledUL>
            </FormGroup>
          </Box>
        </ContentBox>
      </ProfileMobile>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  loginReducer: state.login.data,
  userProfileReducer: state.userProfileReducer.data,
  saveUserReducer: state.saveUserReducer.data,
  accountPreferencesReducer: state.accountPreferencesReducer.data,
  updateAccPreferencesReducer: state.updateAccPreferencesReducer.data
});

export default connect(mapStateToProps)(Header);
