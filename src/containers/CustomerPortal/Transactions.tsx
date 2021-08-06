import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
  Button,
  // Tooltip,
  // Theme,
  makeStyles,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  List,
  ListItem,
  Typography,
  Collapse,
  Box,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  ListItemText,
  // TooltipProps,
  AccordionDetails,
  AccordionSummary,
  Accordion
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import { useSnackbar } from 'notistack';

// import InfoIcon from '@material-ui/icons/Info';

import ScrollBar from 'react-perfect-scrollbar';
import AuthLayout from '../../components/AuthLayout';
import { ADVANCE_DURATIONS, TRANSACTIONS_TYPE, CURRENCY_OPTIONS } from '../../utils/Constant';
import {
  StylesTableCell,
  H1,
  StyleTableCell,
  DashboardWrrapper,
  ContentBoxWrap,
  WhiteBox,
  HeaderFillterUl,
  StyledTableBox,
  ListStyled,
  ListItemStyled,
  DownloadBtnGroup
  // StyledTableHeader,
} from './Styled';
// import TableCurrency from './PortalFunding/TableRow';

// const BootstrapTooltipDarkG = makeStyles((theme: Theme) => ({
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
//   const classes = BootstrapTooltipDarkG();

//   return <Tooltip arrow classes={classes} {...props} />;
// }

// Props Interface
interface IProps {
  dispatch: Function;
  // handlePaginationAndUpdateList: Function;
  transactionLedgerReducer: {
    data: any;
    status: string;
    message: {
      data?: string;
    };
  };
  RevenueSources: {
    data: any;
    status: string;
  };
}
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));
const Transactions: React.FC<IProps> = ({
  dispatch,
  transactionLedgerReducer,
  RevenueSources
}: // handlePaginationAndUpdateList
IProps) => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [open, setOpen] = useState(true);
  const [file, setFile] = useState(false);
  const [filter, setFilter] = useState(false);
  const [radioValue, setRadioValue] = useState('female');
  const initialRender = useRef({ initial: true });
  const [getCsv, setGetCsv] = useState(false);
  const [getExcel, setGetExcel] = useState(false);
  const [getPdf, setGetPdf] = useState(false);
  // const { enqueueSnackbar } = useSnackbar();
  // const eventClick = useRef({ value: '' });

  // const [advancesCurrency, setAdvancesCurrency] = useState({
  //   source: '',
  //   week: ''
  // });

  const [weekly, setWeekly] = useState({
    currency: '',
    transactionType: '',
    source: '',
    week: ''
  });
  useEffect(() => {
    dispatch({
      type: 'GET_ALL_REVENUE_SOURCES'
    });
  }, [dispatch]);
  useEffect(() => {
    dispatch({
      type: 'GET_TRANSACTION_LEDGER',
      payload: {
        currency: weekly.currency,
        transactionType: weekly.transactionType,
        week: weekly.week,
        source: weekly.source,
        page: page + 1,
        rowsPerPage,
        orderBy: 'created_at',
        getCsv,
        getPdf,
        getExcel
      }
    });
  }, [
    dispatch,
    page,
    getCsv,
    rowsPerPage,
    weekly.currency,
    weekly.transactionType,
    weekly.week,
    weekly.source,
    getPdf,
    getExcel
  ]);

  const handleWeeklyChange = (event: any, type: string) => {
    setWeekly({ ...weekly, [type]: event.target.value });
  };

  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue((event.target as HTMLInputElement).value);
  };

  const handleClick = () => {
    setOpen(!open);
  };
  const handleFilter = () => {
    setFilter(!filter);
  };

  const handleChangeFile = () => {
    setFile(true);
    setGetCsv(false);
    setGetExcel(false);
    setGetPdf(false);
  };

  const handleExcel = () => {
    setFile(false);
    setGetExcel(true);
  };

  const handleCsv = () => {
    setFile(false);
    setGetCsv(true);
  };

  const handlePdf = () => {
    setFile(false);
    setGetPdf(true);
  };

  // const handleAdvancesChange = (event: any, type: string) => {
  //   setAdvancesCurrency({ ...advancesCurrency, [type]: event.target.value });
  // };

  const handlePaginationAndUpdateList = (type: string, value: number) => {
    initialRender.current.initial = true;
    if (type === 'page') {
      dispatch({
        type: 'GET_TRANSACTION_LEDGER',
        payload: {
          page: value + 1,
          rowsPerPage
        }
      });
      setPage(value);
    } else {
      dispatch({
        type: 'GET_TRANSACTION_LEDGER',
        payload: {
          page: 1,
          rowsPerPage: value
        }
      });
      setPage(0);
      setRowsPerPage(value);
    }
    setTimeout(() => {
      initialRender.current.initial = false;
    }, 500);
  };

  // Handle Page change
  const handleChangePage = (event: unknown, newPage: number) => {
    handlePaginationAndUpdateList('page', newPage);
  };

  // Handle Row per page change handler
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    handlePaginationAndUpdateList('rowsPerpage', parseInt(event.target.value, 10));
  };

  // Export csv api response
  useEffect(() => {
    if (transactionLedgerReducer?.data?.data?.file_path && getCsv) {
      setGetCsv(false);
      window.location.href = transactionLedgerReducer?.data?.data?.file_path;
    }
    if (transactionLedgerReducer?.data?.data?.file_path && getExcel) {
      setGetExcel(false);
      window.location.href = transactionLedgerReducer?.data?.data?.file_path;
    }

    if (transactionLedgerReducer?.data?.data?.file_path && getPdf) {
      setTimeout(() => {
        const response = {
          file: transactionLedgerReducer?.data?.data?.file_path
        };
        window.open(response.file);
      }, 100);
      setGetPdf(false);
      // window.location.href = `https://api.revving.io${transactionLedgerReducer?.data?.data?.file_path}`;
    }
  }, [getCsv, transactionLedgerReducer, getExcel, getPdf]);

  const semiboldFont = createMuiTheme({
    typography: { fontFamily: ['Averta-Semibold'].join(',') }
  });
  // eslint-disable-next-line no-console
  console.log('HIHIHIHIIHI hI hi RevenueSources ', RevenueSources);
  const Adobe_CaslonPro = createMuiTheme({
    typography: { fontFamily: ['Adobe_CaslonPro'].join(',') }
  });
  const month =
    transactionLedgerReducer?.data?.data?.results?.last_updated[5] === '0'
      ? transactionLedgerReducer?.data?.data?.results?.last_updated[6]
      : transactionLedgerReducer?.data?.data?.results?.last_updated[5] +
        transactionLedgerReducer?.data?.data?.results?.last_updated[6];
  const day =
    transactionLedgerReducer?.data?.data?.results?.last_updated[8] === '0'
      ? transactionLedgerReducer?.data?.data?.results?.last_updated[9]
      : transactionLedgerReducer?.data?.data?.results?.last_updated[8] +
        transactionLedgerReducer?.data?.data?.results?.last_updated[9];
  const year =
    transactionLedgerReducer?.data?.data?.results?.last_updated[0] +
    transactionLedgerReducer?.data?.data?.results?.last_updated[1] +
    transactionLedgerReducer?.data?.data?.results?.last_updated[2] +
    transactionLedgerReducer?.data?.data?.results?.last_updated[3];
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  const monthname = monthNames[month - 1];

  return (
    <>
      <AuthLayout>
        <DashboardWrrapper className='coommon-dashboardbg transactionBg'>
          <ContentBoxWrap className='contentBoxW'>
            <Box className='mobileTable'>
              <WhiteBox className='mobWhteBox'>
                <Typography variant='body1' align='right' className='date_update'>
                  {`Updated ${day}-${monthname}-${year}`}
                </Typography>
                <ThemeProvider theme={Adobe_CaslonPro}>
                  <H1 className='headingTextB'>Transaction History</H1>
                </ThemeProvider>
                <Box
                  alignItems='center'
                  display='flex'
                  justifyContent='space-between'
                  className='downloadFile'
                >
                  <DownloadBtnGroup>
                    <Button
                      variant='outlined'
                      color='primary'
                      className='downloadBtn'
                      onClick={handleChangeFile}
                    >
                      <svg
                        width={17}
                        viewBox='0 0 14 17'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M1 14V14C1 15.1046 1.89543 16 3 16H11C12.1046 16 13 15.1046 13 14V14'
                          stroke='#706B6B'
                          strokeWidth={2}
                          strokeLinecap='round'
                        />
                        <path
                          d='M11 9.00085L7 13.0009M7 13.0009L3 9.00085M7 13.0009L7 2.00085'
                          stroke='#706B6B'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                      &nbsp; Download
                    </Button>
                    <ul className={file ? 'downloadList active' : 'downloadList'}>
                      <li>
                        <Typography onClick={handleExcel}>Excel</Typography>
                      </li>
                      <li>
                        <Typography onClick={handleCsv}>CSV</Typography>
                      </li>
                      <li>
                        <Typography onClick={handlePdf}>PDF</Typography>
                      </li>
                    </ul>
                  </DownloadBtnGroup>
                </Box>
              </WhiteBox>
              <WhiteBox className='mobWhteBox marginTop mob_box_new'>
                <Box>
                  <Typography variant='body1' className='date_new'>
                    2-Feb-2021
                  </Typography>
                </Box>
                <TableContainer>
                  <Table aria-label='collapsible table'>
                    <TableHead>
                      <TableRow>
                        <StylesTableCell align='left'>Type</StylesTableCell>
                        <StylesTableCell align='left'>Revenue Source</StylesTableCell>
                        <StylesTableCell align='left'>Amount</StylesTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {transactionLedgerReducer?.data?.data?.results?.data?.length
                        ? transactionLedgerReducer.data.data.results?.data?.map((data: any) => (
                            // eslint-disable-next-line react/jsx-indent
                            <TableRow hover key={data.transaction_id}>
                              <StyleTableCell className='transaction_type' align='left'>
                                <ThemeProvider theme={semiboldFont}>
                                  {data.transaction_type}
                                </ThemeProvider>
                              </StyleTableCell>
                              <StyleTableCell className='color_brown'>
                                <ThemeProvider theme={semiboldFont}>
                                  {data.revenue_source_name}
                                </ThemeProvider>
                              </StyleTableCell>
                              <StyleTableCell align='left'>{data.currency}</StyleTableCell>
                              <StyleTableCell
                                color='blue'
                                className={data._amount[0] === '-' ? 'red' : 'blue'}
                                align='left'
                              >
                                {data.currency === 'GBP' ? (
                                  <ThemeProvider theme={semiboldFont}>
                                    {`£${data?._amount}`}
                                  </ThemeProvider>
                                ) : (
                                  <ThemeProvider theme={semiboldFont}>
                                    {`$${data?._amount}`}
                                  </ThemeProvider>
                                )}
                              </StyleTableCell>
                              {/* <TableCell align='center'>{data.sales_tax}</TableCell> */}
                            </TableRow>
                            // eslint-disable-next-line @typescript-eslint/indent
                          ))
                        : null}
                    </TableBody>
                  </Table>
                </TableContainer>
              </WhiteBox>
              <WhiteBox className='mobWhteBox marginTop mob_box_new'>
                <Accordion>
                  <AccordionSummary
                    className='first_aco'
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                  >
                    <Typography className={classes.heading}>All Transactions</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {TRANSACTIONS_TYPE.map((curr: any) => (
                      <MenuItem
                        key={curr?.value}
                        value={curr.value}
                        onClick={(e) => setWeekly({ ...weekly, transactionType: curr?.value })}
                      >
                        <Typography key={curr?.value}>{curr.name}</Typography>
                      </MenuItem>
                    ))}
                    {/* <Typography>GBP</Typography>
                    <Typography>USD</Typography>
                    <Typography>CAD</Typography>
                    <Typography>AUD</Typography> */}
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    className='scnd_aco'
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel2a-content'
                    id='panel2a-header'
                  >
                    <Typography className={classes.heading}>Currencies</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {CURRENCY_OPTIONS.map((dur: any) => (
                      <MenuItem
                        key={dur.value}
                        value={dur.value}
                        onClick={(e) => setWeekly({ ...weekly, currency: dur?.value })}
                      >
                        <Typography>{dur.name}</Typography>
                      </MenuItem>
                    ))}
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    className='scnd_aco'
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel3a-content'
                    id='panel3a-header'
                  >
                    <Typography className={classes.heading}>Source</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {RevenueSources?.data?.data?.results.map((dur: any) => (
                      <MenuItem
                        key={dur.name}
                        value={dur.name}
                        onClick={(e) => setWeekly({ ...weekly, source: dur?.value })}
                      >
                        <Typography>{dur.name}</Typography>
                      </MenuItem>
                    ))}
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    className='scnd_aco'
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel3a-content'
                    id='panel3a-header'
                  >
                    <Typography className={classes.heading}>Period</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {ADVANCE_DURATIONS.map((dur: any) => (
                      <MenuItem
                        key={dur.name}
                        value={dur.name}
                        onClick={(e) => setWeekly({ ...weekly, week: dur?.value })}
                      >
                        <Typography>{dur.name}</Typography>
                      </MenuItem>
                    ))}
                  </AccordionDetails>
                </Accordion>
              </WhiteBox>
            </Box>
            <WhiteBox className='deskTableB filterHeader'>
              <Typography variant='body1' className='date_update'>
                {`Updated ${day}-${monthname}-${year}`}
              </Typography>
              <ThemeProvider theme={Adobe_CaslonPro}>
                <H1 className='headingTextB'>Transaction history</H1>
              </ThemeProvider>
              <Box className='headerFBG'>
                <Box className='headerFBGMobile'>
                  <Box onClick={handleFilter}>
                    <svg
                      width={16}
                      height={15}
                      viewBox='0 0 16 15'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <line y1='1.5' x2={16} y2='1.5' stroke='white' />
                      <line y1='7.5' x2={16} y2='7.5' stroke='white' />
                      <line y1='13.5' x2={16} y2='13.5' stroke='white' />
                      <rect x={11} width={3} height={3} rx={1} fill='white' />
                      <rect x={2} y={6} width={3} height={3} rx={1} fill='white' />
                      <rect x={11} y={12} width={3} height={3} rx={1} fill='white' />
                    </svg>
                  </Box>
                  {filter ? (
                    <Box className='mobFilter'>
                      <ListStyled aria-labelledby='nested-list-subheader'>
                        <ListItemStyled button onClick={handleClick}>
                          <ListItemText primary='All currencies' />
                          {open ? (
                            <svg
                              width={10}
                              height={7}
                              viewBox='0 0 10 7'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M4.20759 0.529366C4.6079 0.00935787 5.3921 0.00935769 5.79241 0.529365L8.95678 4.64001C9.46297 5.29757 8.99421 6.25 8.16437 6.25H1.83563C1.00579 6.25 0.537025 5.29757 1.04322 4.64001L4.20759 0.529366Z'
                                fill='#262F3A'
                              />
                            </svg>
                          ) : (
                            <svg
                              width={10}
                              height={7}
                              viewBox='0 0 10 7'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M4.20759 6.47063C4.6079 6.99064 5.3921 6.99064 5.79241 6.47063L8.95678 2.35999C9.46297 1.70243 8.99421 0.75 8.16437 0.75H1.83563C1.00579 0.75 0.537025 1.70243 1.04322 2.35999L4.20759 6.47063Z'
                                fill='#262F3A'
                              />
                            </svg>
                          )}
                        </ListItemStyled>
                        <Collapse in={open} timeout='auto' unmountOnExit>
                          <List component='div' disablePadding>
                            <ListItem button className='s'>
                              <RadioGroup
                                aria-label='All currencies'
                                name='All currencies1'
                                value={radioValue}
                                onChange={handleChangeRadio}
                                className='fixedHeight'
                              >
                                <ScrollBar>
                                  <FormControlLabel
                                    value='All currencies'
                                    control={<Radio />}
                                    label='All currencies'
                                  />
                                  <FormControlLabel value='USD' control={<Radio />} label='USD' />
                                  <FormControlLabel value='GBP' control={<Radio />} label='GBP' />
                                  <FormControlLabel value='EUR' control={<Radio />} label='EUR' />
                                </ScrollBar>
                              </RadioGroup>
                            </ListItem>
                          </List>
                        </Collapse>
                      </ListStyled>
                      <ListStyled aria-labelledby='nested-list-subheader'>
                        <ListItemStyled button onClick={handleClick}>
                          <ListItemText primary='All currencies' />
                          {open ? (
                            <svg
                              width={10}
                              height={7}
                              viewBox='0 0 10 7'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M4.20759 0.529366C4.6079 0.00935787 5.3921 0.00935769 5.79241 0.529365L8.95678 4.64001C9.46297 5.29757 8.99421 6.25 8.16437 6.25H1.83563C1.00579 6.25 0.537025 5.29757 1.04322 4.64001L4.20759 0.529366Z'
                                fill='#262F3A'
                              />
                            </svg>
                          ) : (
                            <svg
                              width={10}
                              height={7}
                              viewBox='0 0 10 7'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M4.20759 6.47063C4.6079 6.99064 5.3921 6.99064 5.79241 6.47063L8.95678 2.35999C9.46297 1.70243 8.99421 0.75 8.16437 0.75H1.83563C1.00579 0.75 0.537025 1.70243 1.04322 2.35999L4.20759 6.47063Z'
                                fill='#262F3A'
                              />
                            </svg>
                          )}
                        </ListItemStyled>
                        <Collapse in={open} timeout='auto' unmountOnExit>
                          <List component='div' disablePadding>
                            <ListItem button className='s'>
                              <RadioGroup
                                aria-label='All currencies'
                                name='All currencies1'
                                value={radioValue}
                                onChange={handleChangeRadio}
                                className='fixedHeight'
                              >
                                <ScrollBar>
                                  <FormControlLabel
                                    value='All currencies'
                                    control={<Radio />}
                                    label='All currencies'
                                  />
                                  <FormControlLabel value='USD' control={<Radio />} label='USD' />
                                  <FormControlLabel value='GBP' control={<Radio />} label='GBP' />
                                  <FormControlLabel value='EUR' control={<Radio />} label='EUR' />
                                  <FormControlLabel value='USD' control={<Radio />} label='USD' />
                                  <FormControlLabel value='GBP' control={<Radio />} label='GBP' />
                                  <FormControlLabel value='EUR' control={<Radio />} label='EUR' />
                                </ScrollBar>
                              </RadioGroup>
                            </ListItem>
                          </List>
                        </Collapse>
                      </ListStyled>
                    </Box>
                  ) : (
                    ''
                  )}
                </Box>
                <HeaderFillterUl>
                  <li>
                    <FormControl className=''>
                      <Select
                        value={weekly.transactionType}
                        onChange={(e) => handleWeeklyChange(e, 'transactionType')}
                        displayEmpty
                        className=''
                        name='transactionType'
                        inputProps={{ 'aria-label': 'Without label' }}
                      >
                        <MenuItem value=''>All transactions</MenuItem>
                        {TRANSACTIONS_TYPE.map((curr: any) => (
                          <MenuItem key={curr?.value} value={curr.value}>
                            {curr.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </li>
                  <li>
                    <FormControl className=''>
                      <Select
                        value={weekly.currency}
                        onChange={(e) => handleWeeklyChange(e, 'currency')}
                        displayEmpty
                        className=''
                        name='currency'
                        inputProps={{ 'aria-label': 'Without label' }}
                      >
                        <MenuItem value=''>All currencies</MenuItem>
                        {CURRENCY_OPTIONS.map((dur: any) => (
                          <MenuItem key={dur.value} value={dur.value}>
                            {dur.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </li>
                  <li>
                    <FormControl className=''>
                      <Select
                        value={weekly?.source}
                        onChange={(e) => handleWeeklyChange(e, 'source')}
                        displayEmpty
                        className=''
                        name='source'
                        inputProps={{ 'aria-label': 'Without label' }}
                      >
                        <MenuItem value=''>Source</MenuItem>
                        {RevenueSources?.data?.data?.results.map((dur: any) => (
                          <MenuItem key={dur.name} value={dur.name}>
                            {dur.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </li>
                  <li>
                    <FormControl className=''>
                      <Select
                        value={weekly.week}
                        onChange={(e) => handleWeeklyChange(e, 'week')}
                        displayEmpty
                        className=''
                        name='week'
                        inputProps={{ 'aria-label': 'Without label' }}
                      >
                        <MenuItem value=''>Period</MenuItem>
                        {ADVANCE_DURATIONS.map((dur: any) => (
                          <MenuItem key={dur.value} value={dur.value}>
                            {dur.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </li>
                </HeaderFillterUl>
              </Box>
              <StyledTableBox>
                <TableContainer>
                  <Table aria-label='collapsible table'>
                    <TableHead>
                      <TableRow>
                        <StylesTableCell align='left'>Date</StylesTableCell>
                        <StylesTableCell align='left'>Type</StylesTableCell>
                        <StylesTableCell align='left'>Revenue Source</StylesTableCell>
                        <StylesTableCell align='left'>Payment Reference</StylesTableCell>
                        <StylesTableCell align='left'>Currency</StylesTableCell>
                        <StylesTableCell align='left'>Amount</StylesTableCell>
                        <StylesTableCell align='left'>Payment Id</StylesTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {transactionLedgerReducer?.data?.data?.results?.data?.length
                        ? transactionLedgerReducer.data.data.results?.data.map((data: any) => (
                            // eslint-disable-next-line react/jsx-indent
                            <TableRow hover key={data.transaction_id}>
                              <StyleTableCell className='color_brown' align='left'>
                                <ThemeProvider theme={semiboldFont}>
                                  {data.event_date}
                                </ThemeProvider>
                              </StyleTableCell>
                              <StyleTableCell className='transaction_type' align='left'>
                                <ThemeProvider theme={semiboldFont}>
                                  {data.transaction_type}
                                </ThemeProvider>
                              </StyleTableCell>
                              <StyleTableCell className='color_brown'>
                                <ThemeProvider theme={semiboldFont}>
                                  {data.revenue_source_name}
                                </ThemeProvider>
                              </StyleTableCell>
                              <StyleTableCell align='left'>{data.payment_reference}</StyleTableCell>
                              <StyleTableCell align='left'>{data.currency}</StyleTableCell>
                              <StyleTableCell
                                /* eslint no-underscore-dangle: 0 */
                                /* eslint-disable */
                                className={data._amount[0] === '-' ? 'red' : 'blue'}
                                align='left'
                              >
                                {data.currency === 'GBP' ? (
                                  <ThemeProvider theme={semiboldFont}>
                                    {`£${data?._amount}`}
                                  </ThemeProvider>
                                ) : (
                                  <ThemeProvider theme={semiboldFont}>
                                    {`$${data?._amount}`}
                                  </ThemeProvider>
                                )}
                              </StyleTableCell>
                              <StyleTableCell
                                className='transaction_id'
                                color='#c5c5c5'
                                align='left'
                              >
                                <ThemeProvider theme={semiboldFont}>
                                  {data.transaction_id}
                                </ThemeProvider>
                              </StyleTableCell>
                              {/* <TableCell align='center'>{data.sales_tax}</TableCell> */}
                            </TableRow>
                            // eslint-disable-next-line @typescript-eslint/indent
                          ))
                        : null}
                    </TableBody>
                  </Table>
                </TableContainer>
                <Box
                  alignItems='center'
                  display='flex'
                  justifyContent='space-between'
                  className='downloadFile'
                >
                  <DownloadBtnGroup>
                    <Button
                      variant='outlined'
                      color='primary'
                      className='downloadBtn'
                      onClick={handleChangeFile}
                    >
                      Download
                    </Button>
                    <ul className={file ? 'downloadList active' : 'downloadList'}>
                      <li>
                        <Typography onClick={handleExcel}>Excel</Typography>
                      </li>
                      <li>
                        <Typography onClick={handleCsv}>CSV</Typography>
                      </li>
                      <li>
                        <Typography onClick={handlePdf}>PDF</Typography>
                      </li>
                    </ul>
                  </DownloadBtnGroup>

                  {transactionLedgerReducer?.data?.data?.results?.length ? (
                    <TablePagination
                      rowsPerPageOptions={[10, 25, 100]}
                      component='div'
                      count={transactionLedgerReducer.data.data.count}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      onChangePage={handleChangePage}
                      onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                  ) : (
                    ''
                  )}
                </Box>
              </StyledTableBox>
            </WhiteBox>
          </ContentBoxWrap>
        </DashboardWrrapper>
      </AuthLayout>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  transactionLedgerReducer: state.transactionLedgerReducer,
  RevenueSources: state?.RevenueSources
});

export default connect(mapStateToProps)(Transactions);
