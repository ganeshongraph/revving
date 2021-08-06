import React, { useState, useEffect, useRef } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useSnackbar, VariantType } from 'notistack';
import { Grid, Typography, InputLabel, TextField, Button, Box } from '@material-ui/core';
import AuthLayout from '../../components/AuthLayout';
import { DashboardWrrapper, ContentBoxWrap, WhiteBox, FormGroup, StyledButton, H1 } from './Styled';

// Props Interface
interface IProps {
  dispatch: Function;
  getBusinessReducer: {
    data: any;
    status: string;
    message: {
      data?: string;
    };
  };
  updateBusinessReducer: {
    data: any;
    status: string;
    message: {
      data?: string;
    };
  };
}

const BusinessDetails: React.FC<IProps> = ({
  dispatch,
  getBusinessReducer,
  updateBusinessReducer
}: IProps) => {
  const [business, setBusiness] = useState({
    name: '',
    regNumber: '',
    addressOne: '',
    addressTwo: '',
    city: '',
    postcode: '',
    country: ''
  });
  const [isEdit, setIsEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const eventClick = useRef({ value: '' });

  useEffect(() => {
    eventClick.current.value = 'getBusiness';
    dispatch({
      type: 'GET_BUSINESS'
    });
  }, [dispatch]);

  // Handling  customerUser Api suucess
  useEffect(() => {
    const handleSnack = (variant: VariantType) => {
      enqueueSnackbar(
        getBusinessReducer.message.data
          ? getBusinessReducer.message.data
          : getBusinessReducer.message,
        {
          variant
        }
      );
    };

    if (getBusinessReducer?.status === 'success' && eventClick.current.value === 'getBusiness') {
      eventClick.current.value = '';
      setBusiness({
        name: getBusinessReducer?.data?.name,
        regNumber: getBusinessReducer?.data?.reg_number,
        addressOne: getBusinessReducer?.data?.address_one,
        addressTwo: getBusinessReducer?.data?.address_two,
        city: getBusinessReducer?.data?.city,
        postcode: getBusinessReducer?.data?.postcode,
        country: getBusinessReducer?.data?.country
      });
      setIsEdit(false);
    }
    if (getBusinessReducer?.status === 'failure' && eventClick.current.value === 'getBusiness') {
      handleSnack('error');
      eventClick.current.value = '';
      setIsEdit(false);
    }
  }, [getBusinessReducer, enqueueSnackbar]);

  // Handling  update business Api suucess
  useEffect(() => {
    const handleSnack = (variant: VariantType) => {
      enqueueSnackbar(
        updateBusinessReducer.message.data
          ? updateBusinessReducer.message.data
          : updateBusinessReducer.message,
        {
          variant
        }
      );
    };

    if (
      updateBusinessReducer?.status === 'success' &&
      eventClick.current.value === 'updateBusiness'
    ) {
      eventClick.current.value = 'getBusiness';
      setIsLoading(false);
      dispatch({
        type: 'GET_BUSINESS'
      });
    }
    if (
      updateBusinessReducer?.status === 'failure' &&
      eventClick.current.value === 'updateBusiness'
    ) {
      handleSnack('error');
      eventClick.current.value = '';
    }
  }, [updateBusinessReducer, enqueueSnackbar, dispatch]);

  // Handle change
  const handleChange = (event: any) => {
    if (
      (event.target.name === 'postcode' || event.target.name === 'regNumber') &&
      isNaN(event.target.value)
    ) {
      return;
    }
    if (event?.target?.value?.length < 121)
      setBusiness({
        ...business,
        [event.target.name]: event.target.value.trim() ? event.target.value : ''
      });
  };

  // Handle change
  const handleSubmit = () => {
    eventClick.current.value = 'updateBusiness';
    setIsLoading(true);
    dispatch({
      type: 'UPDATE_BUSINESS',
      payload: business
    });
  };
  const Adobe_CaslonPro = createMuiTheme({
    typography: { fontFamily: ['Adobe_CaslonPro'].join(',') }
  });
  return (
    <AuthLayout>
      <DashboardWrrapper className='coommon-dashboardbg buss_body'>
        <ContentBoxWrap className='contentBoxW  paddbtm100'>
          <WhiteBox className='padding'>
            <ThemeProvider theme={Adobe_CaslonPro}>
              <H1>Business Details</H1>
            </ThemeProvider>
            <Grid container spacing={3} className='bottomContentBox'>
              <Grid item xs={12} sm={6}>
                <FormGroup className={isEdit ? 'FormBoxWrap' : 'disabled FormBoxWrap'}>
                  <InputLabel htmlFor='pay'>Registered name</InputLabel>
                  <TextField
                    name='name'
                    value={business.name}
                    id='outlined-basic'
                    placeholder='Pogo Limited'
                    variant='outlined'
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup
                  className={isEdit ? 'FormBoxWrap mrgtop60' : 'disabled FormBoxWrap mrgtop60'}
                >
                  <InputLabel htmlFor='pay'>Registered address</InputLabel>
                  <Typography className='font_csino'>Address line 1</Typography>
                  <TextField
                    name='addressOne'
                    value={business.addressOne}
                    id='outlined-basic'
                    placeholder='Level 4'
                    variant='outlined'
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup className={isEdit ? 'FormBoxWrap' : 'disabled FormBoxWrap'}>
                  <Typography className='font_csino'>Town/city</Typography>
                  <TextField
                    name='city'
                    value={business.city}
                    id='outlined-basic'
                    placeholder='London'
                    variant='outlined'
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup className={isEdit ? 'FormBoxWrap' : 'disabled FormBoxWrap'}>
                  <Typography className='font_csino'>Country</Typography>
                  <TextField
                    name='country'
                    value={business.country}
                    id='outlined-basic'
                    placeholder='United Kingdom'
                    variant='outlined'
                    onChange={handleChange}
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormGroup className={isEdit ? 'FormBoxWrap' : 'disabled FormBoxWrap'}>
                  <InputLabel htmlFor='pay'>Registration number</InputLabel>
                  <TextField
                    name='regNumber'
                    value={business.regNumber}
                    id='outlined-basic'
                    placeholder='4569340594'
                    variant='outlined'
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup
                  className={isEdit ? 'FormBoxWrap mrgtop60' : 'disabled FormBoxWrap mrgtop60'}
                >
                  <InputLabel htmlFor='pay' className='o-none'>
                    .
                  </InputLabel>
                  <Typography className='font_csino'>Address line 2</Typography>
                  <TextField
                    name='addressTwo'
                    id='outlined-basic'
                    placeholder='15 Golden Square'
                    variant='outlined'
                    value={business.addressTwo}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup className={isEdit ? 'FormBoxWrap' : 'disabled FormBoxWrap'}>
                  <Typography className='font_csino'>Postcode</Typography>
                  <TextField
                    name='postcode'
                    value={business.postcode}
                    id='outlined-basic'
                    placeholder='W1F 9JG'
                    variant='outlined'
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup
                  className={isEdit ? 'FormBoxWrap edit_buttonwrep' : 'FormBoxWrap edit_buttonwrep'}
                >
                  {!isEdit ? (
                    <Button variant='outlined' color='primary' onClick={() => setIsEdit(true)}>
                      Edit
                    </Button>
                  ) : (
                    <Box>
                      <StyledButton
                        variant='outlined'
                        color='primary'
                        className='downloadBtn'
                        onClick={() => handleSubmit()}
                      >
                        {isLoading ? 'Loading...' : 'Save Changes'}
                      </StyledButton>

                      <Link to='#' onClick={() => setIsEdit(false)}>
                        Cancel
                      </Link>
                    </Box>
                  )}
                </FormGroup>
              </Grid>
            </Grid>
          </WhiteBox>
        </ContentBoxWrap>
      </DashboardWrrapper>
    </AuthLayout>
  );
};

const mapStateToProps = (state: any) => ({
  getBusinessReducer: state.getBusinessReducer.data,
  updateBusinessReducer: state.updateBusinessReducer.data
});

export default connect(mapStateToProps)(BusinessDetails);
