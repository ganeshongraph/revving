/* eslint-disable @typescript-eslint/indent */
/* eslint-disable react/jsx-indent */
import React, { useState, useEffect, useRef } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  // Tooltip,
  Box,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
  IconButton,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select
  // makeStyles,
  // Theme
} from '@material-ui/core';
import { connect } from 'react-redux';
// import { TooltipProps } from '@material-ui/core/Tooltip';
import { useSnackbar, VariantType } from 'notistack';
// import InfoIcon from '@material-ui/icons/Info';
import AuthLayout from '../../components/AuthLayout';
import {
  H1,
  StyleTypography,
  Img,
  DashboardWrrapper,
  ContentBoxWrap,
  WhiteBox,
  StyledDialog,
  FormGroup
  // HeaderFillterUl,
  // StyledTableBox
} from './Styled';
import { CURRENCY_OPTIONS } from '../../utils/Constant';
import approved from '../../assets/images/Confirmed.png';
import pending from '../../assets/images/Pending.png';
import edit from '../../assets/images/Edit.png';
import remove from '../../assets/images/Remove.png';
// const useStylesBootstrap = makeStyles((theme: Theme) => ({
//   arrow: {
//     color: '#262F3A'
//   },
//   tooltip: {
//     backgroundColor: '#262F3A',
//     fontSize: '1rem',
//     color: '#fff'
//   }
// }));

// function BootstrapTooltip(props: TooltipProps) {
//   const classes = useStylesBootstrap();

//   return <Tooltip arrow classes={classes} {...props} />;
// }

// Props Interface
interface IProps {
  dispatch: Function;
  IntegrationsReducer: {
    data: any;
    status: string;
    message: {
      data?: string;
    };
  };
  getRevenueSourceReducer: {
    data: any;
    status: string;
    message: {
      data?: string;
    };
  };
  addRevenueSourceReducer: {
    data: any;
    status: string;
    message: {
      data?: string;
    };
  };
  updateRevenueSourceReducer: {
    data: any;
    status: string;
    message: {
      data?: string;
    };
  };
  deleteRevenueSourceReducer: {
    data: any;
    status: string;
    message: {
      data?: string;
    };
  };
}

const Integrations: React.FC<IProps> = ({
  dispatch,
  IntegrationsReducer,
  getRevenueSourceReducer,
  addRevenueSourceReducer,
  updateRevenueSourceReducer,
  deleteRevenueSourceReducer
}: IProps) => {
  const [open, setOpen] = useState(false);
  // const [revenue, setRevenue] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [revenueObj, setRevenueObj] = useState<any>({ name: '', currency: '' });
  const { enqueueSnackbar } = useSnackbar();
  const eventClick = useRef({ value: '' });

  useEffect(() => {
    eventClick.current.value = 'getRevenues';
    dispatch({
      type: 'GET_REVENUE_SOURCES'
    });
  }, [dispatch]);

  useEffect(() => {
    dispatch({
      type: 'GET_MY_CUSTOMER_USER'
    });
  }, [dispatch]);

  // Handling  get revenue source Api suucess
  useEffect(() => {
    const handleSnack = (variant: VariantType) => {
      enqueueSnackbar(
        getRevenueSourceReducer.message.data
          ? getRevenueSourceReducer.message.data
          : getRevenueSourceReducer.message,
        {
          variant
        }
      );
    };

    if (
      getRevenueSourceReducer?.status === 'success' &&
      eventClick.current.value === 'getRevenues'
    ) {
      eventClick.current.value = '';
      setOpen(false);
      setIsEdit(false);
      setRevenueObj({ name: '', currency: '' });
      setOpenDelete(false);
    }
    if (
      getRevenueSourceReducer?.status === 'failure' &&
      eventClick.current.value === 'getRevenues'
    ) {
      handleSnack('error');
      eventClick.current.value = '';
    }
  }, [enqueueSnackbar, getRevenueSourceReducer]);

  // Handling  add revenue source Api suucess
  useEffect(() => {
    const handleSnack = (variant: VariantType) => {
      enqueueSnackbar(
        addRevenueSourceReducer.message.data
          ? addRevenueSourceReducer.message.data
          : addRevenueSourceReducer.message,
        {
          variant
        }
      );
    };

    if (
      addRevenueSourceReducer?.status === 'success' &&
      eventClick.current.value === 'addRevenues'
    ) {
      eventClick.current.value = 'getRevenues';
      dispatch({
        type: 'GET_REVENUE_SOURCES'
      });
    }
    if (
      addRevenueSourceReducer?.status === 'failure' &&
      eventClick.current.value === 'addRevenues'
    ) {
      handleSnack('error');
      eventClick.current.value = '';
    }
  }, [enqueueSnackbar, addRevenueSourceReducer, dispatch]);

  // Handling  update revenue source Api suucess
  useEffect(() => {
    const handleSnack = (variant: VariantType) => {
      enqueueSnackbar(
        updateRevenueSourceReducer.message.data
          ? updateRevenueSourceReducer.message.data
          : updateRevenueSourceReducer.message,
        {
          variant
        }
      );
    };

    if (
      updateRevenueSourceReducer?.status === 'success' &&
      eventClick.current.value === 'updateRevenues'
    ) {
      eventClick.current.value = 'getRevenues';
      dispatch({
        type: 'GET_REVENUE_SOURCES'
      });
    }
    if (
      updateRevenueSourceReducer?.status === 'failure' &&
      eventClick.current.value === 'updateRevenues'
    ) {
      handleSnack('error');
      eventClick.current.value = '';
    }
  }, [enqueueSnackbar, updateRevenueSourceReducer, dispatch]);

  // Handling  delete revenue source Api suucess
  useEffect(() => {
    const handleSnack = (variant: VariantType) => {
      enqueueSnackbar(
        deleteRevenueSourceReducer.message.data
          ? deleteRevenueSourceReducer.message.data
          : deleteRevenueSourceReducer.message,
        {
          variant
        }
      );
    };

    if (
      deleteRevenueSourceReducer?.status === 'success' &&
      eventClick.current.value === 'deletRevenues'
    ) {
      eventClick.current.value = 'getRevenues';
      dispatch({
        type: 'GET_REVENUE_SOURCES'
      });
    }
    if (
      deleteRevenueSourceReducer?.status === 'failure' &&
      eventClick.current.value === 'deletRevenues'
    ) {
      handleSnack('error');
      eventClick.current.value = '';
    }
  }, [enqueueSnackbar, deleteRevenueSourceReducer, dispatch]);

  const handleChange = (event: any) => {
    setRevenueObj({
      ...revenueObj,
      [event.target.name]: event.target.value
    });
  };

  const handleClickOpen = (id: string) => {
    const isEditObj = getRevenueSourceReducer?.data?.results.find((r: any) => r.uuid === id);
    setRevenueObj(isEditObj);
    setIsEdit(true);
    setOpen(true);
  };

  // const handleClickRevenue = () => {
  //   setRevenue(true);
  // };

  const handleClickOpenDelete = (id: string) => {
    setOpenDelete(true);
    const isDeleteObj = getRevenueSourceReducer?.data?.results.find((r: any) => r.uuid === id);
    setRevenueObj(isDeleteObj);
  };

  const handleClose = () => {
    setOpen(false);
    setIsEdit(false);
    setRevenueObj({ name: '', currency: '' });
    setOpenDelete(false);
    // setRevenue(false);
  };

  // Handle Edit Revenue
  const handleRevenueSubmit = () => {
    if (isEdit) {
      eventClick.current.value = 'updateRevenues';
      dispatch({
        type: 'UPDATE_REVENUE_SOURCE',
        payload: {
          name: revenueObj.name,
          currency: revenueObj.currency,
          id: revenueObj.uuid
        }
      });
    } else {
      eventClick.current.value = 'addRevenues';
      dispatch({
        type: 'ADD_REVENUE_SOURCE',
        payload: {
          ...revenueObj
        }
      });
    }
  };

  // HandleDeleteConfirm
  const handleDeleteRevenue = () => {
    eventClick.current.value = 'deletRevenues';
    dispatch({
      type: 'DELETE_REVENUE_SOURCE',
      payload: {
        id: revenueObj.uuid
      }
    });
  };

  // eslint-disable-next-line no-console
  console.log('GET_MY_CUSTOMER_USER ', IntegrationsReducer?.data);
  const Adobe_CaslonPro = createMuiTheme({
    typography: { fontFamily: ['Adobe_CaslonPro'].join(',') }
  });
  return (
    <>
      <AuthLayout>
        <DashboardWrrapper className='coommon-dashboardbg integrationsBg'>
          <ContentBoxWrap className='contentBoxW'>
            <WhiteBox className='padding amountTransaction'>
              <ThemeProvider theme={Adobe_CaslonPro}>
                <H1>Approved Revenue Sources</H1>
              </ThemeProvider>
              <StyleTypography variant='body1' gutterBottom>
                You can add or remove your revenue sources.
              </StyleTypography>
              <StyleTypography variant='body1' gutterBottom className='approvedbody'>
                All changes wil take effect from the beginning of next month.
              </StyleTypography>
              <Box className='mob_tab_scrl'>
                <Table aria-label='simple table' className='errorTable'>
                  <TableHead>
                    <TableRow>
                      <TableCell>Revenue Source</TableCell>
                      <TableCell align='left'>
                        Currency
                        {/* <BootstrapTooltip
                        title='The currency the revenue source pays out in.'
                        placement='top'
                      >
                        <svg
                          width={21}
                          height={22}
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
                      </BootstrapTooltip> */}
                      </TableCell>
                      <TableCell align='left'>Status</TableCell>
                      <TableCell align='center'>Edit</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {getRevenueSourceReducer?.data?.results?.length
                      ? getRevenueSourceReducer?.data?.results.map((data: any) => (
                          <TableRow key={data.uuid} className='errorRow'>
                            <TableCell align='left' className='errorTablecell'>
                              <Box className='d-flex boxWrap'>
                                <svg
                                  width={44}
                                  viewBox='0 0 44 40'
                                  fill='none'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <rect
                                    x={2}
                                    y={8}
                                    width={30}
                                    height={30}
                                    fill='white'
                                    stroke='#262F3A'
                                    strokeWidth={4}
                                  />
                                  <circle
                                    cx={29}
                                    cy={15}
                                    r={13}
                                    fill='white'
                                    stroke='#262F3A'
                                    strokeWidth={4}
                                  />
                                </svg>
                                <Typography>{data?.name}</Typography>
                              </Box>
                            </TableCell>
                            <TableCell align='left'>
                              <Box className='d-flex boxWrap'>
                                <Typography className='color_grey'>{data?.currency}</Typography>
                              </Box>
                            </TableCell>
                            <TableCell align='left'>
                              <Box className='d-flex boxWrap'>
                                {data.status === 'approved' ? (
                                  <Img src={approved} alt='approved' />
                                ) : (
                                  ''
                                )}
                                {data.status === 'pending' ? (
                                  <Img src={pending} alt='pending' />
                                ) : (
                                  ''
                                )}
                                <Typography>{data.status}</Typography>
                              </Box>
                            </TableCell>
                            <TableCell align='center'>
                              <Box className='d-flex boxWrap iconsWrap'>
                                <Img
                                  src={edit}
                                  alt='edit'
                                  onClick={() => handleClickOpen(data.uuid)}
                                />
                                <Img
                                  src={remove}
                                  alt='remove'
                                  onClick={() => handleClickOpenDelete(data.uuid)}
                                />
                                {/* <IconButton
                                onClick={() => handleClickOpen(data.uuid)}
                                className='btnIcon'
                              >
                                <svg
                                  width={22}
                                  height={20}
                                  viewBox='0 0 22 20'
                                  fill='none'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <line
                                    x1='2.6048'
                                    y1='19.5'
                                    x2='20.5522'
                                    y2='19.5'
                                    stroke='#FFBC3D'
                                    strokeLinecap='round'
                                  />
                                  <path
                                    d='M14.8865 0.707107L18.6453 4.46594L6.84832 16.2629L2.77625 16.5762L3.08949 12.5041L14.8865 0.707107Z'
                                    fill='white'
                                    stroke='#FFBC3D'
                                  />
                                  <line
                                    x1='12.2627'
                                    y1='4.11129'
                                    x2='15.24'
                                    y2='7.08858'
                                    stroke='#FFBC3D'
                                  />
                                  <line
                                    x1='3.33085'
                                    y1='13.0449'
                                    x2='6.30814'
                                    y2='16.0222'
                                    stroke='#FFBC3D'
                                  />
                                </svg>
                              </IconButton> */}
                                {/* <IconButton
                                onClick={() => handleClickOpenDelete(data.uuid)}
                                className='btnIcon'
                              >
                                <svg
                                  width={17}
                                  height={20}
                                  viewBox='0 0 17 20'
                                  fill='none'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <rect
                                    x='1.96313'
                                    y='4.88672'
                                    width='12.1723'
                                    height='14.6116'
                                    rx='0.5'
                                    fill='white'
                                    stroke='#C8D1D8'
                                  />
                                  <rect
                                    x='3.91565'
                                    y='0.5'
                                    width='8.26937'
                                    height='2.41503'
                                    rx='0.5'
                                    fill='white'
                                    stroke='#C8D1D8'
                                  />
                                  <line
                                    x1='5.79932'
                                    y1='8.30469'
                                    x2='5.79932'
                                    y2='16.0862'
                                    stroke='#C8D1D8'
                                    strokeLinecap='round'
                                  />
                                  <line
                                    x1='8.30701'
                                    y1='8.30469'
                                    x2='8.30701'
                                    y2='16.0862'
                                    stroke='#C8D1D8'
                                    strokeLinecap='round'
                                  />
                                  <line
                                    x1='10.8117'
                                    y1='8.30469'
                                    x2='10.8117'
                                    y2='16.0862'
                                    stroke='#C8D1D8'
                                    strokeLinecap='round'
                                  />
                                  <rect
                                    x='0.5'
                                    y='2.9375'
                                    width='15.0994'
                                    height='1.92717'
                                    rx='0.5'
                                    fill='white'
                                    stroke='#C8D1D8'
                                  />
                                </svg>
                              </IconButton> */}
                              </Box>
                            </TableCell>
                            {/* <Typography className='errorRowContent'>
                            <svg
                              width={32}
                              height={34}
                              viewBox='0 0 32 34'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M16.866 1.5C16.6874 1.1906 16.3573 1 16 1C15.6427 1 15.3126 1.1906 15.134 1.5L1.27757 25.5C1.09894 25.8094 1.09894 26.1906 1.27757 26.5C1.4562 26.8094 1.78633 27 2.14359 27H29.8564C30.2137 27 30.5438 26.8094 30.7224 26.5C30.9011 26.1906 30.9011 25.8094 30.7224 25.5L16.866 1.5Z'
                                fill='white'
                                stroke='#FFBC3D'
                                strokeWidth={2}
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <circle cx={16} cy={21} r={2} fill='#FFBC3D' />
                              <line
                                x1={16}
                                y1={8}
                                x2={16}
                                y2={17}
                                stroke='#FFBC3D'
                                strokeWidth={2}
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </svg>
                            Change request submitted and will take effect from the beginning of next
                            month.
                          </Typography> */}
                          </TableRow>
                        ))
                      : ''}
                  </TableBody>
                </Table>
              </Box>
              <Button variant='outlined' className='addBTN' onClick={() => setOpen(true)}>
                + Request New Revenue Source
              </Button>
            </WhiteBox>
          </ContentBoxWrap>

          {/* <DashboardWrrapper className='coommon-dashboardbg'>
          <ContentBoxWrap className='contentBoxW'>
            <Typography variant='h5' gutterBottom>
              Linked accounting software
            </Typography>
            <WhiteBox className='padding amountTransaction LinkedAC'>
              <Table aria-label='simple table' className='SimpleTable'>
                <TableBody>
                  <TableRow key={IntegrationsReducer?.data?.uuid}>
                    <TableCell align='left'>
                      <Box className='d-flex boxWrap'>
                        <svg
                          width={44}
                          viewBox='0 0 44 40'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect
                            x={2}
                            y={8}
                            width={30}
                            height={30}
                            fill='white'
                            stroke='#262F3A'
                            strokeWidth={4}
                          />
                          <circle
                            cx={29}
                            cy={15}
                            r={13}
                            fill='white'
                            stroke='#262F3A'
                            strokeWidth={4}
                          />
                        </svg>
                        <Typography>{IntegrationsReducer?.data?.name}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell align='left'>
                      <Box className='d-flex boxWrap'>
                        <Img src={approved} alt='connected' /> */}
          {/* <svg
                          width={32}
                          height={32}
                          viewBox='0 0 32 32'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle cx={16} cy={16} r={16} fill='#262F3A' />
                          <path
                            d='M7.38464 15.1808L12.718 21.7449L24.2052 10.668'
                            stroke='white'
                            strokeWidth={2}
                            strokeLinecap='round'
                          />
                        </svg> */}
          {/* <Typography>Connected</Typography>
                      </Box>
                    </TableCell>
                    <TableCell align='left'>
                      <Box className='d-flex boxWrap iconsWrap'>
                        <IconButton className='btnIcon'>Edit</IconButton>
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </WhiteBox>
          </ContentBoxWrap>
        </DashboardWrrapper> */}
          <ContentBoxWrap className='contentBoxW paddtop0 paddbtm100'>
            <WhiteBox className='padding amountTransaction'>
              <ThemeProvider theme={Adobe_CaslonPro}>
                <H1> Linked Accounting Software</H1>
              </ThemeProvider>
              <Box className='mob_tab_scrl'>
                <Table aria-label='simple table' className='errorTable'>
                  <TableHead>
                    <TableRow>
                      <TableCell>Software</TableCell>
                      <TableCell align='left'>Status</TableCell>
                      <TableCell align='center'>Edit</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {getRevenueSourceReducer?.data?.results?.length
                      ? getRevenueSourceReducer?.data?.results.map((data: any) => (
                          <TableRow key={data.uuid} className='errorRow'>
                            <TableCell align='left' className='errorTablecell'>
                              <Box className='d-flex boxWrap'>
                                <svg
                                  width={44}
                                  viewBox='0 0 44 40'
                                  fill='none'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <rect
                                    x={2}
                                    y={8}
                                    width={30}
                                    height={30}
                                    fill='white'
                                    stroke='#262F3A'
                                    strokeWidth={4}
                                  />
                                  <circle
                                    cx={29}
                                    cy={15}
                                    r={13}
                                    fill='white'
                                    stroke='#262F3A'
                                    strokeWidth={4}
                                  />
                                </svg>
                                <Typography>{data?.name}</Typography>
                              </Box>
                            </TableCell>
                            <TableCell align='left'>
                              <Box className='d-flex boxWrap'>
                                {data.status === 'approved' ? (
                                  <Img src={approved} alt='approved' />
                                ) : (
                                  ''
                                )}
                                {data.status === 'pending' ? (
                                  <Img src={pending} alt='pending' />
                                ) : (
                                  ''
                                )}
                                <Typography>
                                  {IntegrationsReducer?.data?.accounting_cr_status}
                                </Typography>
                              </Box>
                            </TableCell>
                            <TableCell align='left'>
                              <Box className='d-flex boxWrap iconsWrap'>
                                <Img
                                  src={edit}
                                  alt='edit'
                                  onClick={() => handleClickOpen(data.uuid)}
                                />
                                <Img
                                  src={remove}
                                  alt='remove'
                                  onClick={() => handleClickOpenDelete(data.uuid)}
                                />
                                {/* <IconButton
                                onClick={() => handleClickOpen(data.uuid)}
                                className='btnIcon'
                              >
                                <svg
                                  width={22}
                                  height={20}
                                  viewBox='0 0 22 20'
                                  fill='none'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <line
                                    x1='2.6048'
                                    y1='19.5'
                                    x2='20.5522'
                                    y2='19.5'
                                    stroke='#FFBC3D'
                                    strokeLinecap='round'
                                  />
                                  <path
                                    d='M14.8865 0.707107L18.6453 4.46594L6.84832 16.2629L2.77625 16.5762L3.08949 12.5041L14.8865 0.707107Z'
                                    fill='white'
                                    stroke='#FFBC3D'
                                  />
                                  <line
                                    x1='12.2627'
                                    y1='4.11129'
                                    x2='15.24'
                                    y2='7.08858'
                                    stroke='#FFBC3D'
                                  />
                                  <line
                                    x1='3.33085'
                                    y1='13.0449'
                                    x2='6.30814'
                                    y2='16.0222'
                                    stroke='#FFBC3D'
                                  />
                                </svg>
                              </IconButton> */}
                                {/* <IconButton
                                onClick={() => handleClickOpenDelete(data.uuid)}
                                className='btnIcon'
                              >
                                <svg
                                  width={17}
                                  height={20}
                                  viewBox='0 0 17 20'
                                  fill='none'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <rect
                                    x='1.96313'
                                    y='4.88672'
                                    width='12.1723'
                                    height='14.6116'
                                    rx='0.5'
                                    fill='white'
                                    stroke='#C8D1D8'
                                  />
                                  <rect
                                    x='3.91565'
                                    y='0.5'
                                    width='8.26937'
                                    height='2.41503'
                                    rx='0.5'
                                    fill='white'
                                    stroke='#C8D1D8'
                                  />
                                  <line
                                    x1='5.79932'
                                    y1='8.30469'
                                    x2='5.79932'
                                    y2='16.0862'
                                    stroke='#C8D1D8'
                                    strokeLinecap='round'
                                  />
                                  <line
                                    x1='8.30701'
                                    y1='8.30469'
                                    x2='8.30701'
                                    y2='16.0862'
                                    stroke='#C8D1D8'
                                    strokeLinecap='round'
                                  />
                                  <line
                                    x1='10.8117'
                                    y1='8.30469'
                                    x2='10.8117'
                                    y2='16.0862'
                                    stroke='#C8D1D8'
                                    strokeLinecap='round'
                                  />
                                  <rect
                                    x='0.5'
                                    y='2.9375'
                                    width='15.0994'
                                    height='1.92717'
                                    rx='0.5'
                                    fill='white'
                                    stroke='#C8D1D8'
                                  />
                                </svg>
                              </IconButton> */}
                              </Box>
                            </TableCell>
                            {/* <Typography className='errorRowContent'>
                            <svg
                              width={32}
                              height={34}
                              viewBox='0 0 32 34'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M16.866 1.5C16.6874 1.1906 16.3573 1 16 1C15.6427 1 15.3126 1.1906 15.134 1.5L1.27757 25.5C1.09894 25.8094 1.09894 26.1906 1.27757 26.5C1.4562 26.8094 1.78633 27 2.14359 27H29.8564C30.2137 27 30.5438 26.8094 30.7224 26.5C30.9011 26.1906 30.9011 25.8094 30.7224 25.5L16.866 1.5Z'
                                fill='white'
                                stroke='#FFBC3D'
                                strokeWidth={2}
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <circle cx={16} cy={21} r={2} fill='#FFBC3D' />
                              <line
                                x1={16}
                                y1={8}
                                x2={16}
                                y2={17}
                                stroke='#FFBC3D'
                                strokeWidth={2}
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </svg>
                            Change request submitted and will take effect from the beginning of next
                            month.
                          </Typography> */}
                          </TableRow>
                        ))
                      : ''}
                  </TableBody>
                </Table>
              </Box>
              {/* <Button variant='outlined' className='addBTN' onClick={() => setOpen(true)}>
                + Request new revenue source
              </Button> */}
            </WhiteBox>
          </ContentBoxWrap>
          {/* <DashboardWrrapper className='coommon-dashboardbg'>
          <ContentBoxWrap className='contentBoxW'>
            <Typography variant='h5' gutterBottom>
              Linked accounting software
            </Typography>
            <WhiteBox className='padding amountTransaction LinkedAC'>
              <Table aria-label='simple table' className='SimpleTable'>
                <TableBody>
                  <TableRow key={IntegrationsReducer?.data?.uuid}>
                    <TableCell align='left'>
                      <Box className='d-flex boxWrap'>
                        <svg
                          width={44}
                          viewBox='0 0 44 40'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect
                            x={2}
                            y={8}
                            width={30}
                            height={30}
                            fill='white'
                            stroke='#262F3A'
                            strokeWidth={4}
                          />
                          <circle
                            cx={29}
                            cy={15}
                            r={13}
                            fill='white'
                            stroke='#262F3A'
                            strokeWidth={4}
                          />
                        </svg>
                        <Typography>{IntegrationsReducer?.data?.name}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell align='left'>
                      <Box className='d-flex boxWrap'>
                        <Img src={approved} alt='connected' /> */}
          {/* <svg
                          width={32}
                          height={32}
                          viewBox='0 0 32 32'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle cx={16} cy={16} r={16} fill='#262F3A' />
                          <path
                            d='M7.38464 15.1808L12.718 21.7449L24.2052 10.668'
                            stroke='white'
                            strokeWidth={2}
                            strokeLinecap='round'
                          />
                        </svg> */}
          {/* <Typography>Connected</Typography>
                      </Box>
                    </TableCell>
                    <TableCell align='left'>
                      <Box className='d-flex boxWrap iconsWrap'>
                        <IconButton className='btnIcon'>Edit</IconButton>
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </WhiteBox>
          </ContentBoxWrap>
        </DashboardWrrapper> */}
        </DashboardWrrapper>
      </AuthLayout>
      <StyledDialog
        className='modalDilog'
        open={open}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle id='responsive-dialog-title'>
          {isEdit ? 'Edit a revenue source' : 'Connect a revenue source'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <FormGroup>
              <InputLabel htmlFor='name'>Name of revenue source</InputLabel>
              <Typography>
                What is the name of the revenue source from which you want to advance funds?
              </Typography>
              <TextField
                name='name'
                value={revenueObj?.name}
                id='outlined-basic'
                variant='outlined'
                placeholder='Google pay'
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup className='halfWidthS'>
              <InputLabel htmlFor='pay'>Pay out currency </InputLabel>
              <Typography>What is the pay out currency?</Typography>
              <FormControl className='' variant='outlined'>
                <Select
                  name='currency'
                  labelId='demo-controlled-open-select-label'
                  id='demo-controlled-open-select'
                  value={revenueObj?.currency}
                  onChange={handleChange}
                  label='Please Select'
                >
                  {CURRENCY_OPTIONS.map((cur: any) => (
                    <MenuItem key={cur.value} value={cur.value}>
                      {cur.name}
                    </MenuItem>
                  ))}
                </Select>
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
              onClick={handleRevenueSubmit}
            >
              {isEdit ? 'Request Changes' : 'Submit changes'}
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
      {/* <StyledDialog
        className='modalDilog'
        open={open}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle id='responsive-dialog-title'>Edit a revenue source</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <FormGroup>
              <InputLabel htmlFor='name'>Name of revenue source</InputLabel>
              <TextField id='outlined-basic' variant='outlined' />
            </FormGroup>
            <FormGroup className='halfWidthS'>
              <InputLabel htmlFor='pay'>Pay out currency </InputLabel>
              <Typography>What is the pay out currency?</Typography>
              <FormControl className='' variant='outlined'>
                <Select
                  labelId='demo-controlled-open-select-label'
                  id='demo-controlled-open-select'
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </FormGroup>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' autoFocus color='primary'>
            Request changes
          </Button>
          <Button onClick={handleClose} autoFocus>
            Cancel
          </Button>
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
      </StyledDialog> */}
      <StyledDialog
        className='modalDilog DeleteDilog'
        open={openDelete}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle id='responsive-dialog-title'>Delete a revenue source</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <FormGroup className='DeleteDilogText'>
              <Typography>You are about to delete the following revenue source:</Typography>
            </FormGroup>
            <FormGroup className='DeleteDilogText'>
              <Typography variant='body2'>{revenueObj?.name}</Typography>
            </FormGroup>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div className='edit_buttonwrep'>
            <Button
              variant='outlined'
              color='primary'
              className='downloadBtn'
              onClick={handleDeleteRevenue}
            >
              Confirm
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
    </>
  );
};

const mapStateToProps = (state: any) => ({
  getRevenueSourceReducer: state.getRevenueSourceReducer.data,
  addRevenueSourceReducer: state.addRevenueSourceReducer.data,
  updateRevenueSourceReducer: state.updateRevenueSourceReducer.data,
  deleteRevenueSourceReducer: state.deleteRevenueSourceReducer.data,
  IntegrationsReducer: state.IntegrationsReducer.data
});

export default connect(mapStateToProps)(Integrations);
