import React, { useState, useEffect, KeyboardEvent, useRef } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import { blue } from '@material-ui/core/colors';
import { useSnackbar, VariantType } from 'notistack';
import { connect } from 'react-redux';
import validationRules from './loginValidate';
import otpValidateRules from './MobileOtpValidate';
import { validate } from '../../utils/helper';

// User form style theme object
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: '#fff',
    boxShadow: 'none',
    border: '1px solid #3c3c3c',
    borderRadius: 4,
    '&:hover': {
      backgroundColor: '#fff',
      boxShadow: 'none'
    }
  },
  btnWrapper: {
    position: 'relative'
  },
  buttonProgress: {
    color: blue[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  }
}));

// Props Interface
interface IProps {
  dispatch: Function;
  loginData: {
    message: {
      data?: string;
    };
    status: string;
  };
  sendSmsReducer: {
    message: {
      data?: string;
    };
    status: string;
  };
  history: {
    push: Function;
  };
}

// Error Interface
interface IError {
  username?: string;
  password?: string;
  otp?: string;
}

const SignIn: React.FC<IProps> = ({ dispatch, loginData, history, sendSmsReducer }: IProps) => {
  const [error, setError] = useState<IError>({});
  const [loading, setLoading] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const [state, setState] = useState({
    username: '',
    password: '',
    otp: ''
  });
  const eventClick = useRef({ value: '' });
  const { enqueueSnackbar } = useSnackbar();

  // Handle updated data from send sms api
  useEffect(() => {
    const handleSnack = (variant: VariantType) => {
      enqueueSnackbar(
        sendSmsReducer.message.data ? sendSmsReducer.message.data : sendSmsReducer.message,
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
    if (sendSmsReducer?.status === 'success') {
      if (eventClick.current.value === 'send_sms') {
        eventClick.current.value = '';
        setLoading(false);
        setLogin(true);
      } else if (eventClick.current.value === 'resend-otp') {
        handleSuccess('success', 'Login security code Sent');
        eventClick.current.value = '';
      }
    }
    if (sendSmsReducer?.status === 'failure') {
      if (eventClick.current.value === 'send_sms') {
        handleSnack('error');
        eventClick.current.value = '';
        setLoading(false);
      } else if (eventClick.current.value === 'resend-otp') {
        handleSnack('error');
        eventClick.current.value = '';
      }
    }
  }, [sendSmsReducer, history, enqueueSnackbar]);

  // Handle updated data from send sms api
  useEffect(() => {
    const handleSnack = (variant: VariantType) => {
      enqueueSnackbar(loginData.message.data ? loginData.message.data : loginData.message, {
        variant
      });
    };
    if (loginData?.status === 'success' && eventClick.current.value === 'verify_otp') {
      history.push('/funding');
      eventClick.current.value = '';
      setLoading(false);
    }
    if (loginData?.status === 'failure' && eventClick.current.value === 'verify_otp') {
      handleSnack('error');
      eventClick.current.value = '';
      setLoading(false);
    }
  }, [loginData, history, enqueueSnackbar]);

  const classes = useStyles();

  // Handle On Change
  const hancleChange = (e: any) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  // Validation of user fields
  const handleValidate = (type: string) => {
    let validRes = { errors: {}, isValid: false };
    if (type === 'login') {
      validRes = validate(state, validationRules);
      setError(validRes.errors);
    } else {
      validRes = validate(state, otpValidateRules);
      setError(validRes.errors);
    }
    return validRes.isValid;
  };

  // Handle Enter key event
  const handleEnterKey = (event: KeyboardEvent, type: string) => {
    if (event.key === 'Enter') {
      const { username, password, otp } = state;
      if (handleValidate(type)) {
        setLoading(true);
        if (type === 'login') {
          eventClick.current.value = 'send_sms';
          if (type === 'login') {
            username &&
              password &&
              dispatch({
                type: 'SEND_SMS',
                payload: {
                  username,
                  password
                }
              });
          }
        } else {
          eventClick.current.value = 'verify_otp';
          if (type === 'otp') {
            username &&
              password &&
              otp &&
              dispatch({
                type: 'LOGIN_USER',
                payload: {
                  username,
                  password,
                  otp
                }
              });
          }
        }
      }
    }
  };

  // Handle Login submit button
  const handleLogin = () => {
    const { username, password } = state;
    if (handleValidate('login')) {
      eventClick.current.value = 'send_sms';
      setLoading(true);
      username &&
        password &&
        dispatch({
          type: 'SEND_SMS',
          payload: {
            username,
            password
          }
        });
    }
  };
  // Handle Login submit button
  const handleResendOtp = () => {
    const { username, password } = state;
    eventClick.current.value = 'resend-otp';
    username &&
      password &&
      dispatch({
        type: 'SEND_SMS',
        payload: {
          username,
          password
        }
      });
  };

  // Handle verify otp submit button
  const handleVerifyOtp = () => {
    const { username, password, otp } = state;
    if (handleValidate('otp')) {
      eventClick.current.value = 'verify_otp';
      setLoading(true);
      username &&
        password &&
        otp &&
        dispatch({
          type: 'LOGIN_USER',
          payload: {
            username,
            password,
            otp
          }
        });
    }
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box className={classes.paper}>
        {!isLogin ? (
          <>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Sign in
            </Typography>
            <form className={classes.form} noValidate={false}>
              <TextField
                variant='outlined'
                margin='normal'
                fullWidth
                id='user'
                label='Username'
                name='username'
                autoComplete='username'
                autoFocus
                onChange={(e) => hancleChange(e)}
                error={error.username ? true : false}
                helperText={error.username ? error.username : ''}
                onKeyPress={(e) => handleEnterKey(e, 'login')}
              />
              <TextField
                variant='outlined'
                margin='normal'
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                onChange={(e) => hancleChange(e)}
                error={error.password ? true : false}
                helperText={error.password ? error.password : ''}
                onKeyPress={(e) => handleEnterKey(e, 'login')}
              />
              <Box className={classes.btnWrapper}>
                <Button
                  type='button'
                  fullWidth
                  variant='contained'
                  color='primary'
                  disabled={loading}
                  className={classes.submit}
                  onClick={() => handleLogin()}
                >
                  Sign In
                </Button>
                {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
              </Box>
              <Grid container>
                <Grid item xs>
                  <Link href='#' variant='body2'>
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
            </form>
          </>
        ) : (
          <>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Login security code
            </Typography>
            <form className={classes.form} noValidate={false}>
              <TextField
                variant='outlined'
                margin='normal'
                fullWidth
                id='user-otp'
                label='Login security code'
                name='otp'
                autoComplete='otp'
                autoFocus
                value={state.otp}
                onChange={(e) => hancleChange(e)}
                error={error.otp ? true : false}
                helperText={error.otp ? error.otp : ''}
                onKeyPress={(e) => handleEnterKey(e, 'otp')}
              />
              <Typography
                component='h6'
                variant='body1'
                align='right'
                style={{ cursor: 'pointer' }}
                onClick={() => handleResendOtp()}
              >
                Resend
              </Typography>
              <Box className={classes.btnWrapper}>
                <Button
                  type='button'
                  fullWidth
                  variant='contained'
                  color='primary'
                  disabled={loading}
                  className={classes.submit}
                  onClick={() => handleVerifyOtp()}
                >
                  Verify login security code
                </Button>
                {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
              </Box>
            </form>
          </>
        )}
      </Box>
    </Container>
  );
};

const mapStateToProps = (state: any) => ({
  loginData: state.login.data,
  sendSmsReducer: state.sendSmsReducer.data
});

export default connect(mapStateToProps)(SignIn);
