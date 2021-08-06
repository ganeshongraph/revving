/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Typography, createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import { useSnackbar, VariantType } from 'notistack';
import {
  MainContentBox,
  SidebarUl,
  CircleBorder,
  // CircularUpperActive,
  CircleUpperNonActiveBorder,
  // StyledSvg,
  EligibilityMainWrapBox,
  SideBarLogo,
  SidebarWhiteBox
} from './Styled';
import AboutBusiness from './AboutBusiness';
import CustomerFunding from './Funding';
import CustomerContact from './CustomerContact';
import CustomerBackground from './CustomerBackground';
import EligibilityFromAlmostThere from './EligibilityFromAlmostThere';
import CustomerInEligible from './EligibilityFail';
import CustomerCompleteSuccess from './CustomerSuccess';
import Layout from '../../components/Layout';
import Loader from '../Loading';
import ExitIntent from '../../utils/exitPop';
import ExitIntentModal from './ExitIntentModal';

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
  businessType: {
    data: any;
    status: string;
    message: {
      data?: string;
    };
  };
  customerInfoReducer: {
    data: any;
    status: string;
    message: {
      data?: string;
    };
  };
  createCustomerReducer: {
    data: any;
    status: string;
    message: {
      data?: string;
    };
  };
  updateCustomerReducer: {
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
  currentUserIdReducer: {
    id: any;
  };
}
const CustomerSection: React.FC<IProps> = ({
  dispatch,
  businessType,
  stepperReducer,
  customerInfoReducer,
  createCustomerReducer,
  currentUserIdReducer,
  updateCustomerReducer
}: IProps) => {
  const [stepper, setStepper] = useState<string>('business');
  const [showPopup, setShowPopup] = useState(false);
  const [enablePopup, setEnablePopup] = useState(false);
  const [initialLoading, setInitialLoading] = useState<boolean>(true);
  const [disablePopup, setDisablePopup] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();
  const [customSoftware, setCustomSoftware] = useState<string>('');
  const [revenue, setRevenue] = useState<any>({
    revenueSources: [{ name: '', currency: '', revenue: '', duration: '' }],
    accountingSoftware: '',
    other: ''
  });
  const eventClick = useRef({ value: '' });
  const [contact, setContact] = useState<IContact>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    passwordConfirm: ''
  });

  const [areaPinCode, setAreaPinCode] = useState('');

  useEffect(() => {
    const removeExitIntent = ExitIntent({
      threshold: 30,
      eventThrottle: 100,
      onExitIntent: () => {
        if (!disablePopup && enablePopup) {
          if (eventClick?.current?.value !== 'complete_customer_form') setShowPopup(true);
        } else {
          setTimeout(() => {
            setDisablePopup(false);
          }, 5000);
        }
      }
    });
    return () => {
      removeExitIntent();
    };
  });

  // Call business stats api
  useEffect(() => {
    dispatch({
      type: 'BUSINESS_STATS'
    });
  }, [dispatch]);

  // Call business stats api
  useEffect(() => {
    setTimeout(() => {
      setInitialLoading(false);
    }, 1000);
  }, []);

  // Handling  customerUser Api suucess
  useEffect(() => {
    const handleSnack = (variant: VariantType) => {
      enqueueSnackbar(
        customerInfoReducer.message.data
          ? customerInfoReducer.message.data
          : customerInfoReducer.message,
        {
          variant
        }
      );
    };
    if (customerInfoReducer?.status === 'success' && eventClick.current.value === 'customerUser') {
      const { contactValue } = stepperReducer;
      const { firstName, lastName, email, phone, password, areaCode } = contactValue;
      eventClick.current.value = 'createUser';
      dispatch({
        type: 'CURRENT_USER_ID',
        payload: {
          id: customerInfoReducer.data.uuid
        }
      });
      dispatch({
        type: 'CREATE_CUSTOMER',
        payload: {
          first_name: firstName,
          last_name: lastName,
          password,
          email,
          phone: `${areaCode}${phone}`,
          details: customerInfoReducer.data.uuid
        }
      });
    }
    if (customerInfoReducer?.status === 'failure' && eventClick.current.value === 'customerUser') {
      handleSnack('error');
      eventClick.current.value = '';
      setInitialLoading(false);
    }
  }, [customerInfoReducer, dispatch, enqueueSnackbar, stepperReducer]);

  // Handling  customer update Api suucess
  useEffect(() => {
    const handleSnack = (variant: VariantType) => {
      enqueueSnackbar(
        updateCustomerReducer.message.data
          ? updateCustomerReducer.message.data
          : updateCustomerReducer.message,
        {
          variant
        }
      );
    };
    if (updateCustomerReducer?.status === 'success' && eventClick.current.value === 'updateUser') {
      dispatch({
        type: 'CLEAR_STATE'
      });
      setInitialLoading(false);
      eventClick.current.value = 'complete_customer_form';
      setDisablePopup(true);
      setEnablePopup(true);
    }
    if (updateCustomerReducer?.status === 'failure' && eventClick.current.value === 'updateUser') {
      handleSnack('error');
      eventClick.current.value = '';
      setInitialLoading(false);
    }
  }, [updateCustomerReducer, dispatch, enqueueSnackbar, stepperReducer]);

  // Handling  create user Api suucess
  useEffect(() => {
    const handleSnack = (variant: VariantType) => {
      enqueueSnackbar(
        createCustomerReducer.message.data
          ? createCustomerReducer.message.data
          : createCustomerReducer.message,
        {
          variant
        }
      );
    };
    if (createCustomerReducer?.status === 'success' && eventClick.current.value === 'createUser') {
      if (createCustomerReducer?.data?.eligible) {
        setStepper('background');
        eventClick.current.value = '';
      } else {
        dispatch({
          type: 'CLEAR_STATE'
        });
        setDisablePopup(true);
        setEnablePopup(false);
        eventClick.current.value = 'eligible_failure';
      }
      setInitialLoading(false);
    }
    if (createCustomerReducer?.status === 'failure' && eventClick.current.value === 'createUser') {
      handleSnack('error');
      eventClick.current.value = '';
      setInitialLoading(false);
    }
  }, [createCustomerReducer, dispatch, enqueueSnackbar]);

  // Handle stepper
  const handleStepper = (value: string) => {
    setStepper(value);
  };

  // Handle eligibility check
  const handleEligibilityCheck = () => {
    eventClick.current.value = 'customerUser';
    const { businessValue, fundingValue } = stepperReducer;
    const { registered_in, sector, other, type, duration, otherType } = businessValue;
    const { turnover, fundRevenue } = fundingValue;
    setInitialLoading(true);
    dispatch({
      type: 'SAVE_CUSTOMER_INFO',
      payload: {
        registered_in,
        business_type: type === 'other' ? otherType : type,
        trading_duration: duration,
        turnover,
        revenue_advance: fundRevenue,
        sector: sector === 'other' ? other : sector
      }
    });
  };

  // Handle update Customer
  const handleCustomerUpdate = (revenues: any) => {
    eventClick.current.value = 'updateUser';
    const { backgroundValue } = stepperReducer;
    const { accountingSoftware, other, revenueSources } = revenues;
    const { businessName, registrationNo, website, employees } = backgroundValue;
    const { id } = currentUserIdReducer;
    setInitialLoading(true);
    dispatch({
      type: 'UPDATE_CUSTOMER_INFO',
      payload: {
        id,
        userDetails: {
          customer: {
            name: businessName
          },
          details: {
            reg_number: registrationNo,
            website,
            employees,
            accounting: accountingSoftware === 'other' ? other : accountingSoftware
          },
          Revenue_sources: [...revenueSources]
        }
      }
    });
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setDisablePopup(true);
  };

  const semiboldFont = createMuiTheme({
    typography: { fontFamily: ['Averta-Semibold'].join(',') }
  });

  const { businessValue, fundingValue } = stepperReducer;
  return (
    <EligibilityMainWrapBox className='autoHeight'>
      <ExitIntentModal show={showPopup} handleClosePopup={handleClosePopup} />
      {initialLoading ? (
        eventClick.current.value === 'createUser' || eventClick.current.value === 'updateUser' ? (
          <Loader
            head='One moment... '
            body={
              eventClick.current.value === 'updateUser'
                ? 'We’re processing your application'
                : 'We’re checking if you’re eligible.'
            }
          />
        ) : (
          <Loader head='Your journey begins' body='in just a moment...' />
        )
      ) : eventClick.current.value === 'eligible_failure' ? (
        <CustomerInEligible />
      ) : eventClick.current.value === 'complete_customer_form' ? (
        <CustomerCompleteSuccess />
      ) : (
        <Layout>
          <MainContentBox>
            <SidebarWhiteBox>
              <SideBarLogo>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/Revving_Master-Logo.svg`}
                  alt='logo'
                  className='sidebarLogoImg'
                />
              </SideBarLogo>
              <ThemeProvider theme={semiboldFont}>
                <Typography variant='h6' align='left' className='sedebarHeadT'>
                  Eligibility check
                </Typography>
              </ThemeProvider>
              <SidebarUl className='eligibilityChecked'>
                {/* Stepper for About Business Details */}
                <li className='listActive'>
                  <Typography>
                    {/* {stepper === 'business' ? (
                          <CircleBorder
                            className='active'
                            onClick={() => handleStepper('business')}
                          />
                        ) : (
                          <CircleBorder
                            className='active'
                            onClick={() => handleStepper('business')}
                          />
                        )} */}
                    <CircleBorder className='active' onClick={() => handleStepper('business')} />
                    <Link
                      to='#'
                      onClick={
                        businessValue && stepper !== 'background' && stepper !== 'revenue'
                          ? () => handleStepper('business')
                          : () => handleStepper(stepper)
                      }
                    >
                      About your business
                    </Link>
                  </Typography>
                </li>

                {/* Stepper for Customer Funding Details */}
                <li className={`${stepper === 'business' ? '' : 'listActive'}`}>
                  <Typography>
                    {stepper === 'funding' ? (
                      <CircleUpperNonActiveBorder
                        className='active'
                        onClick={
                          businessValue
                            ? () => handleStepper('funding')
                            : () => handleStepper(stepper)
                        }
                      />
                    ) : stepper === 'business' ? (
                      <CircleUpperNonActiveBorder
                        onClick={
                          businessValue
                            ? () => handleStepper('funding')
                            : () => handleStepper(stepper)
                        }
                      />
                    ) : (
                      <>
                        <CircleUpperNonActiveBorder
                          className='active'
                          onClick={
                            businessValue
                              ? () => handleStepper('funding')
                              : () => handleStepper(stepper)
                          }
                        />
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
                      </>
                    )}
                    <Link
                      to='#'
                      onClick={
                        businessValue && stepper !== 'background' && stepper !== 'revenue'
                          ? () => handleStepper('funding')
                          : () => handleStepper(stepper)
                      }
                    >
                      Your funding needs
                    </Link>
                  </Typography>
                </li>

                {/* Stepper for Customer Contact Details */}
                <li
                  className={`${
                    stepper === 'business' || stepper === 'funding' ? '' : 'listActive'
                  }`}
                >
                  <Typography>
                    {stepper === 'contact' ? (
                      <CircleUpperNonActiveBorder
                        className='active'
                        onClick={
                          businessValue && fundingValue
                            ? () => handleStepper('contact')
                            : () => handleStepper(stepper)
                        }
                      />
                    ) : stepper === 'business' || stepper === 'funding' ? (
                      <CircleUpperNonActiveBorder
                        onClick={
                          businessValue && fundingValue
                            ? () => handleStepper('contact')
                            : () => handleStepper(stepper)
                        }
                      />
                    ) : (
                      <>
                        <CircleUpperNonActiveBorder
                          className='active'
                          onClick={
                            businessValue && fundingValue
                              ? () => handleStepper('contact')
                              : () => handleStepper(stepper)
                          }
                        />
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
                      </>
                    )}
                    <Link
                      to='#'
                      onClick={
                        businessValue &&
                        fundingValue &&
                        stepper !== 'background' &&
                        stepper !== 'revenue'
                          ? () => handleStepper('funding')
                          : () => handleStepper(stepper)
                      }
                    >
                      Your contact details
                    </Link>
                  </Typography>
                </li>
              </SidebarUl>
              {stepper !== 'business' && stepper !== 'funding' && stepper !== 'contact' ? (
                <>
                  <Typography variant='h6' align='left' className='padd10'>
                    You’re eligible!
                  </Typography>
                  <ThemeProvider theme={semiboldFont}>
                    <Typography variant='h6' align='left' className='sedebarHeadT'>
                      Submit application
                    </Typography>
                  </ThemeProvider>
                  {/* Stepper for Business background */}
                  <SidebarUl className='eligibilityChecked'>
                    <li className='listActive'>
                      <Typography>
                        {stepper !== 'business' &&
                        stepper !== 'funding' &&
                        stepper !== 'contact' &&
                        stepper === 'background' ? (
                          <CircleBorder
                            className='active'
                            onClick={() => handleStepper('background')}
                          />
                        ) : (
                          <>
                            <CircleBorder
                              className='active'
                              onClick={() => handleStepper('background')}
                            />
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
                          </>
                        )}
                        <Link to='#' onClick={() => handleStepper('background')}>
                          Business background
                        </Link>
                      </Typography>
                    </li>
                    {/* Stepper for Revenue sources */}
                    <li
                      className={`${
                        stepper !== 'business' &&
                        stepper !== 'funding' &&
                        stepper !== 'contact' &&
                        stepper !== 'background' &&
                        stepper === 'revenue'
                          ? 'listActive'
                          : ''
                      }`}
                    >
                      <Typography>
                        {stepper !== 'business' &&
                        stepper !== 'funding' &&
                        stepper !== 'contact' &&
                        stepper !== 'background' &&
                        stepper === 'revenue' ? (
                          <CircleUpperNonActiveBorder
                            className='active'
                            onClick={
                              businessValue
                                ? () => handleStepper('revenue')
                                : () => handleStepper(stepper)
                            }
                          />
                        ) : // <CircleUpperNonActiveBorder
                        // className='active'
                        //   onClick={
                        //     businessValue
                        //       ? () => handleStepper('revenue')
                        //       : () => handleStepper(stepper)
                        //   }
                        // />
                        stepper !== 'business' &&
                          stepper !== 'funding' &&
                          stepper !== 'contact' &&
                          stepper !== 'revenue' &&
                          stepper === 'background' ? (
                          <CircleUpperNonActiveBorder
                            // className='active'
                            onClick={
                              businessValue
                                ? () => handleStepper('revenue')
                                : () => handleStepper(stepper)
                            }
                          />
                        ) : (
                          <>
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
                            <CircleBorder
                              // className='active'
                              onClick={
                                businessValue
                                  ? () => handleStepper('revenue')
                                  : () => handleStepper(stepper)
                              }
                            />
                          </>
                        )}
                        <Link
                          to='#'
                          onClick={
                            businessValue
                              ? () => handleStepper('revenue')
                              : () => handleStepper(stepper)
                          }
                        >
                          Revenue sources
                        </Link>
                      </Typography>
                    </li>
                  </SidebarUl>
                </>
              ) : (
                ''
              )}
            </SidebarWhiteBox>
            {stepper === 'business' ? (
              <AboutBusiness setEnablePopup={setEnablePopup} handleStepper={handleStepper} />
            ) : (
              ''
            )}
            {stepper === 'funding' ? <CustomerFunding handleStepper={handleStepper} /> : ''}
            {stepper === 'contact' ? (
              <CustomerContact
                handleStepper={handleStepper}
                handleEligibilityCheck={handleEligibilityCheck}
                contact={contact}
                setContact={setContact}
                setAreaCode={setAreaPinCode}
                areaCode={areaPinCode}
              />
            ) : (
              ''
            )}
            {stepper === 'background' ? (
              <CustomerBackground handleStepper={handleStepper} businessType={businessType} />
            ) : (
              ''
            )}
            {stepper === 'revenue' ? (
              <EligibilityFromAlmostThere
                handleStepper={handleStepper}
                handleCustomerUpdate={handleCustomerUpdate}
                customSoftware={customSoftware}
                setCustomSoftware={setCustomSoftware}
                revenue={revenue}
                setRevenue={setRevenue}
              />
            ) : (
              ''
            )}
          </MainContentBox>
        </Layout>
      )}
    </EligibilityMainWrapBox>
  );
};

const mapStateToProps = (state: any) => ({
  businessType: state.businessType.data,
  stepperReducer: state.stepperReducer.data,
  customerInfoReducer: state.customerInfoReducer.data,
  createCustomerReducer: state.createCustomerReducer.data,
  currentUserIdReducer: state.currentUserIdReducer.data,
  updateCustomerReducer: state.updateCustomerReducer.data
});

export default connect(mapStateToProps)(CustomerSection);
