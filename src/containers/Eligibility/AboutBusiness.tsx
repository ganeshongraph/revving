/* eslint-disable @typescript-eslint/indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { TextField, Theme, makeStyles } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import InfoIcon from '@material-ui/icons/Info';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useSnackbar, VariantType } from 'notistack';
import {
  HeadingTypography,
  ContentWrap,
  ParagraphText,
  FormGroup,
  StyledButton,
  BtnGroup,
  NextBtn,
  StyledOutlinedInput,
  ErrorText,
  EligiblityBoxWrap,
  DashboardWrrapper,
  ContentBoxWrap
} from './Styled';
import validationRules from './EligibilityValidate';
import { validate } from '../../utils/helper';

// Business interface
interface IBusiness {
  [key: string]: string | boolean;
  registered_in: string;
  type: string;
  duration: string;
  sector: string;
  other: string;
}

// Props Interface
interface IProps {
  dispatch: Function;
  handleStepper: Function;
  setEnablePopup: Function;
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

const AboutBusiness: React.FC<IProps> = ({
  dispatch,
  businessType,
  handleStepper,
  setEnablePopup,
  stepperReducer
}: IProps) => {
  const [business, setBusiness] = useState<IBusiness>({
    registered_in: '',
    type: '',
    duration: '',
    sector: '',
    other: '',
    otherType: ''
  });
  const [customSector, setCustomSector] = useState<string>('');
  const [customType, setCustomType] = useState<string>('');
  const [error, setError] = useState<any>({});
  const [registerCountry, setRegisteredCountry] = useState<any>([]);
  const { enqueueSnackbar } = useSnackbar();
  const eventClick = useRef({ value: '' });

  // Handle initial load
  useEffect(() => {
    eventClick.current.value = 'initialLoad';
  }, []);

  // Handle Prepopulated
  useEffect(() => {
    if (stepperReducer?.businessValue) {
      const { businessValue } = stepperReducer;
      setBusiness({ ...businessValue });
      setCustomSector(businessValue.other);
      setCustomType(businessValue.otherType);
    }
  }, [stepperReducer]);

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
        businessType?.data?.REGISTERED_IN &&
        Object.keys(businessType?.data?.REGISTERED_IN).length
      ) {
        Object.keys(businessType?.data?.REGISTERED_IN).map((data) => {
          newArray = [...newArray, { name: businessType?.data?.REGISTERED_IN[data], value: data }];
          return '';
        });
        newArray = [...newArray, { name: 'Other', value: 'other' }];
      }

      setRegisteredCountry(newArray);
      eventClick.current.value = '';
    }
    if (businessType?.status === 'failure' && eventClick.current.value === 'initialLoad') {
      handleSnack('error');
      eventClick.current.value = '';
    }
    eventClick.current.value = '';
  }, [businessType, enqueueSnackbar]);

  // Handle Option in business state
  const handleOptionSelected = (type: string, value: string | boolean) => {
    setEnablePopup(true);
    if (type === 'sector' && value !== 'other') {
      setCustomSector('');
    }
    if (type === 'type' && value !== 'other') {
      setCustomType('');
    }
    if (business[type] === value && value !== 'other') {
      setBusiness({ ...business, [type]: '' });
      setError({ ...error, [type]: `${type} is Required` });
    } else {
      if (Object.keys(error).includes(`${type}`)) {
        const newErrObj = { ...error };
        delete newErrObj[type];
        setError({ ...newErrObj });
      }
      setBusiness({ ...business, [type]: value });
    }
  };

  // Handle Custome Sector
  const handleChange = (e: any) => {
    setCustomSector(e.target.value);
    setBusiness({ ...business, other: e.target.value });
  };

  // Handle Custome Sector
  const handleChangeType = (e: any) => {
    setCustomType(e.target.value);
    setBusiness({ ...business, otherType: e.target.value });
  };

  // Validation of user fields
  const handleValidate = () => {
    let validRes = { errors: {}, isValid: false };
    validRes = validate(business, validationRules);
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
          businessValue: business,
          fundingValue: stepperReducer.fundingValue,
          contactValue: stepperReducer.contactValue,
          backgroundValue: stepperReducer.backgroundValue,
          revenueValue: stepperReducer.revenueValue
        }
      });
      handleStepper('funding');
    }
  };

  const semiboldFont = createMuiTheme({
    typography: { fontFamily: ['Averta-Semibold'].join(',') }
  });

  const { registered_in, type, duration, sector } = business;
  // eslint-disable-next-line no-console
  console.log('bussiness----------------- ', business);

  return (
    <DashboardWrrapper className='coommon-dashboardbg transactionBg'>
      <ContentBoxWrap className='contentBoxW'>
        <EligiblityBoxWrap>
          <ContentWrap className='cstm_mrg'>
            <ThemeProvider theme={semiboldFont}>
              <HeadingTypography variant='h4' align='left'>
                Tell us about your business.
              </HeadingTypography>
            </ThemeProvider>
            <FormGroup
              className={
                !business?.registered_in && error.registered_in ? 'demo errorFormGroup' : 'demo'
              }
            >
              <ThemeProvider theme={semiboldFont}>
                <ParagraphText className='mob_margb' variant='body2' align='left'>
                  Where is your business registered?
                </ParagraphText>
              </ThemeProvider>
              {!business?.registered_in && error.registered_in ? (
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
                <Autocomplete
                  className='custInputSize autoComplete'
                  value={registerCountry?.find((r: any) => r.value === business.registered_in)}
                  getOptionLabel={(option: { value: any; name: any }) => option?.value}
                  onChange={(event: any, value: any) => {
                    //  setBusiness({ ...business, registered_in: newInputValue });
                  }}
                  debug
                  inputValue={business.registered_in}
                  onInputChange={(event, newInputValue) => {
                    setBusiness({ ...business, registered_in: newInputValue });
                  }}
                  id='Country_code_2'
                  options={registerCountry}
                  style={{ width: 320 }}
                  renderInput={(params) => (
                    <TextField {...params} label='Select country' variant='outlined' />
                  )}
                />
                {/* <Autocomplete
              id='Country code'
              value={registerCountry?.find((r: any) => r.value === business.registered_in).value}
              options={registerCountry}
              getOptionLabel={(option: { value: any; name: any }) => option?.value}
              getOptionSelected={(option: { value: any }, value: { value: any }) => {
                // setBusiness({ ...business, registered_in: option.value });
                option.value === value.value && handleAutoComplete(value.value);
                return option.value === value.value;
              }}
              style={{ width: 320 }}
              renderOption={(option) => (
                <>
                  <span>{`${option.name}`}</span>
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
                  label='Country'
                  variant='outlined'
                  value={(e: any) => {}}
                  onChange={(e) => handleInputChange(e)}
                  placeholder='Select your country'
                />
              )}
            /> */}
                {/* <StyledButton
              variant='outlined'
              className={business.registered_in === true ? 'active' : ''}
              onClick={() => handleOptionSelected('registered_in', true)}
            >
              Yes
            </StyledButton>
            <StyledButton
              variant='outlined'
              className={business.registered_in === false ? 'active' : ''}
              onClick={() => handleOptionSelected('registered_in', false)}
            >
              No
            </StyledButton> */}
              </BtnGroup>
            </FormGroup>
            <FormGroup className={error.type ? 'demo errorFormGroup' : 'demo'}>
              <ThemeProvider theme={semiboldFont}>
                <ParagraphText variant='body2' align='left'>
                  What type of business do you have?
                </ParagraphText>
              </ThemeProvider>
              {error.type ? (
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
                {businessType?.data?.BUSINESS_TYPE
                  ? Object.keys(businessType?.data?.BUSINESS_TYPE).map((data) => (
                      // <ThemeProvider theme={semiboldFont} key={data}>
                      // </ThemeProvider>
                      <StyledButton
                        variant='outlined'
                        className={business.type === data ? 'arrowBtn active' : 'arrowBtn'}
                        onClick={() => handleOptionSelected('type', data)}
                        key={data}
                      >
                        {businessType.data.BUSINESS_TYPE[data]}
                      </StyledButton>
                    ))
                  : ''}
                <StyledButton
                  variant='outlined'
                  startIcon={<ControlPointIcon />}
                  className={business.type === 'other otherBox' ? 'active' : 'otherBox'}
                  onClick={() => handleOptionSelected('type', 'other')}
                >
                  {business.type !== 'other' ? (
                    'Other'
                  ) : (
                    <StyledOutlinedInput
                      id='component-outlined'
                      value={customType}
                      name='customType'
                      onChange={(e) => handleChangeType(e)}
                      label=''
                      placeholder='Enter business type here'
                    />
                  )}
                </StyledButton>
              </BtnGroup>
            </FormGroup>
            <FormGroup className={error.duration ? 'demo errorFormGroup' : 'demo'}>
              <ThemeProvider theme={semiboldFont}>
                <ParagraphText variant='body2' align='left'>
                  How long has the business been trading?
                </ParagraphText>
              </ThemeProvider>
              {error.duration ? (
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
                {businessType?.data?.TRADE_DURATION
                  ? Object.keys(businessType?.data?.TRADE_DURATION).map((data) => (
                      <StyledButton
                        variant='outlined'
                        className={business.duration === data ? 'active' : ''}
                        onClick={() => handleOptionSelected('duration', data)}
                        key={data}
                      >
                        {businessType.data.TRADE_DURATION[data]}
                      </StyledButton>
                    ))
                  : ''}
              </BtnGroup>
            </FormGroup>
            <FormGroup className={error.sector ? 'demo errorFormGroup' : 'demo'}>
              <ThemeProvider theme={semiboldFont}>
                <ParagraphText variant='body2' align='left'>
                  What best describes the sector in which your business operates?
                </ParagraphText>
              </ThemeProvider>
              {error.sector ? (
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
                {businessType?.data?.SECTOR
                  ? Object.keys(businessType?.data?.SECTOR).map((data) => (
                      <StyledButton
                        variant='outlined'
                        className={business.sector === data ? 'active' : ''}
                        onClick={() => handleOptionSelected('sector', data)}
                        key={data}
                      >
                        {businessType.data.SECTOR[data]}
                      </StyledButton>
                    ))
                  : ''}
                <StyledButton
                  variant='outlined'
                  startIcon={<ControlPointIcon />}
                  className={business.sector === 'other otherBox' ? 'active' : 'otherBox'}
                  onClick={() => handleOptionSelected('sector', 'other')}
                >
                  {business.sector !== 'other' ? (
                    'Other'
                  ) : (
                    <StyledOutlinedInput
                      className='custInputSize'
                      id='component-outlined'
                      value={customSector}
                      name='customSector'
                      onChange={(e) => handleChange(e)}
                      label=''
                      placeholder='Enter sector here'
                    />
                  )}
                </StyledButton>
              </BtnGroup>
            </FormGroup>
            <FormGroup className='nextBtn'>
              <BootstrapTooltip
                title={
                  !business?.registered_in ||
                  !business.type ||
                  !business.duration ||
                  !business.sector
                    ? 'Please complete all questions on this page to continue'
                    : ''
                }
                placement='top-end'
              >
                <NextBtn
                  variant='outlined'
                  size='large'
                  onClick={() => handleNext('funding')}
                  isactive={
                    !Object.keys(error).length &&
                    registered_in !== '' &&
                    type !== '' &&
                    duration !== '' &&
                    sector !== ''
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
  businessType: state.businessType.data,
  stepperReducer: state.stepperReducer.data
});

export default connect(mapStateToProps)(AboutBusiness);
