/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/indent */
import React, { useRef, useState, useEffect } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {
  Button,
  Tooltip,
  Theme,
  makeStyles,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  List,
  ListItem,
  Typography,
  TooltipProps,
  Collapse,
  Box,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  ListItemText,
  IconButton
  // TooltipProps
} from '@material-ui/core';
// import InfoIcon from '@material-ui/icons/Info';

import ScrollBar from 'react-perfect-scrollbar';
import AuthLayout from '../../components/AuthLayout';
import { ADVANCE_DURATIONS, STATUS_TYPE } from '../../utils/Constant';
import {
  H1,
  DashboardWrrapper,
  ContentBoxWrap,
  WhiteBox,
  HeaderFillterUl,
  StyledTableBox,
  ListStyled,
  ListItemStyled,
  DownloadBtnGroup,
  StyleTableCellCurrency
  // StyledTableHeader,
} from './Styled';
import iconQ from '../../assets/images/icon_q.png';

// const { DateRange } = require('react-date-range');
// import TableCurrency from './PortalFunding/TableRow';

const BootstrapTooltipDarkG = makeStyles((theme: Theme) => ({
  arrow: {
    color: '#262F3A'
  },
  tooltip: {
    backgroundColor: '#262F3A',
    fontSize: '1rem',
    color: '#fff'
  }
}));

function BootstrapTooltip(props: TooltipProps) {
  const classes = BootstrapTooltipDarkG();

  return <Tooltip arrow classes={classes} enterTouchDelay={500} {...props} />;
}

// Props Interface
interface IProps {
  dispatch: Function;
  selected: string;
  // handlePaginationAndUpdateList: Function;
  ReportingAdvanceLedger: {
    data: any;
    status: string;
  };
  RevenueSources: {
    data: any;
    status: string;
  };
  PerCollection: {
    data: any;
    state: string;
  };
  InvoiceLedger: {
    data: any;
    state: string;
  };
  AdvanceLedgerReducer: {
    data: any;
    status: string;
  };
}

const AdvanceLedger: React.FC<IProps> = ({
  dispatch,
  selected,
  AdvanceLedgerReducer,
  PerCollection,
  InvoiceLedger,
  ReportingAdvanceLedger,
  RevenueSources
}: // handlePaginationAndUpdateList
IProps) => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [open, setOpen] = useState(true);
  const [file, setFile] = useState(false);
  const [filter, setFilter] = useState(false);
  const [radioValue, setRadioValue] = useState('female');
  const [selectedMonthlyId, setSelectedMonthlyId] = useState('');
  const [selectedRevenueSource, setSelectedRevenueSource] = useState('');
  const [selectedRevenueCurrency, setSelectedRevenueCurrency] = useState('');
  const [showInnerTable, setShowInnerTable] = useState(false);
  const initialRender = useRef({ initial: true });
  const [showData, setShowData] = useState(false);
  const [getCsv, setGetCsv] = useState(false);
  const [getExcel, setGetExcel] = useState(false);
  const [getPdf, setGetPdf] = useState(false);
  // const [state, setState] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     key: 'selection'
  //   }
  // ]);
  // const [enableDateRange, setEnableDateRange] = useState(false);
  // const [advancesCurrency, setAdvancesCurrency] = useState({
  //   source: '',
  //   week: ''
  // });
  const [weekly, setWeekly] = useState({
    source: '',
    transactionType: '',
    week: ''
  });

  useEffect(() => {
    if (showData) {
      setTimeout(() => {
        setShowInnerTable(true);
      }, 1000);
      setShowData(false);
    }
  }, [InvoiceLedger, PerCollection, showData, showInnerTable]);

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

  const handleOpenRow = (itemRow: any, isOpen: boolean) => {
    setShowInnerTable(false);
    setSelectedMonthlyId(itemRow?.monthly_invoice_id);
    setSelectedRevenueSource(itemRow?.revenue_source);
    setSelectedRevenueCurrency(itemRow?.currency);
    // eslint-disable-next-line no-console
    console.log('open', isOpen);
    if (!isOpen) {
      setShowData(true);
      dispatch({
        type: 'GET_INVOICE_LEDGER',
        payload: {
          monthly_invoice_id: itemRow?.monthly_invoice_id,
          revenue_source: itemRow?.revenue_source,
          currency: itemRow?.currency,
          week: weekly.week,
          page: page + 1,
          orderBy: 'created_at'
        }
      });
      dispatch({
        type: 'GET_PERFORMANCE_COLLECTION',
        payload: {
          currency: itemRow?.currency,
          transactionType: weekly.transactionType,
          week: weekly.week,
          page: page + 1,
          monthlyId: itemRow?.monthly_invoice_id,
          revSourceId: itemRow?.revenue_source_uuid,
          orderBy: 'created_at'
        }
      });
    }

    // dispatch({
    //   type: 'GET_REPORTING_ADVANCE_LEDGER',
    //   payload: { currency: itemRow.name }
    // });
  };

  useEffect(() => {
    dispatch({ type: 'GET_REPORTING_ADVANCE_LEDGER' });
    dispatch({
      type: 'GET_ALL_REVENUE_SOURCES'
    });
  }, [dispatch]);

  useEffect(() => {
    dispatch({
      type: 'GET_REPORTING_ADVANCE_LEDGER',
      payload: {
        page: 1,
        revenue_source_name: weekly?.source,
        status: weekly?.transactionType,
        week: weekly?.week
      }
    });
  }, [dispatch, weekly]);

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
    setFile(!file);
  };

  useEffect(() => {
    dispatch({
      type: 'GET_REPORTING_ADVANCE_LEDGER',
      payload: {
        page,
        rowsPerPage,
        revenue_source_name: weekly?.source,
        status: weekly?.transactionType,
        week: weekly?.week,
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
    weekly.transactionType,
    weekly.week,
    weekly.source,
    getPdf,
    getExcel
  ]);

  // Export csv api response
  useEffect(() => {
    if (ReportingAdvanceLedger?.data?.data?.file_path && getCsv) {
      setGetCsv(false);
      window.location.href = ReportingAdvanceLedger?.data?.data?.file_path;
    }
    if (ReportingAdvanceLedger?.data?.data?.file_path && getExcel) {
      setGetExcel(false);
      window.location.href = ReportingAdvanceLedger?.data?.data?.file_path;
    }

    if (ReportingAdvanceLedger?.data?.data?.file_path && getPdf) {
      setTimeout(() => {
        const response = {
          file: ReportingAdvanceLedger?.data?.data?.file_path
        };
        window.open(response.file);
      }, 100);
      setGetPdf(false);
      // window.location.href = `https://api.revving.io${ReportingAdvanceLedger?.data?.data?.file_path}`;
    }
  }, [getCsv, ReportingAdvanceLedger, getExcel, getPdf]);

  // const handleAdvancesChange = (event: any, type: string) => {
  //   setAdvancesCurrency({ ...advancesCurrency, [type]: event.target.value });
  // };

  const handlePaginationAndUpdateList = (type: string, value: number) => {
    initialRender.current.initial = true;
    if (type === 'page') {
      dispatch({
        type: 'GET_REPORTING_ADVANCE_LEDGER',
        payload: {
          page: value + 1,
          rowsPerPage,
          revenue_source_name: weekly?.source,
          status: weekly?.transactionType,
          week: weekly?.week
        }
      });
      setPage(value);
    } else {
      dispatch({
        type: 'GET_REPORTING_ADVANCE_LEDGER',
        payload: {
          page: 1,
          rowsPerPage: value,
          revenue_source_name: weekly?.source,
          status: weekly?.transactionType,
          week: weekly?.week
        }
      });
      setPage(1);
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

  // eslint-disable-next-line no-console
  console.log('HIHIHIHIIHI hI hi RevenueSources ', RevenueSources?.data?.data?.results);
  const Adobe_CaslonPro = createMuiTheme({
    typography: { fontFamily: ['Adobe_CaslonPro'].join(',') }
  });
  const month =
    ReportingAdvanceLedger?.data?.data?.results?.last_updated[5] === '0'
      ? ReportingAdvanceLedger?.data?.data?.results?.last_updated[6]
      : ReportingAdvanceLedger?.data?.data?.results?.last_updated[5] +
        ReportingAdvanceLedger?.data?.data?.results?.last_updated[6];
  const day =
    ReportingAdvanceLedger?.data?.data?.results?.last_updated[8] === '0'
      ? ReportingAdvanceLedger?.data?.data?.results?.last_updated[9]
      : ReportingAdvanceLedger?.data?.data?.results?.last_updated[8] +
        ReportingAdvanceLedger?.data?.data?.results?.last_updated[9];
  const year =
    ReportingAdvanceLedger?.data?.data?.results?.last_updated[0] +
    ReportingAdvanceLedger?.data?.data?.results?.last_updated[1] +
    ReportingAdvanceLedger?.data?.data?.results?.last_updated[2] +
    ReportingAdvanceLedger?.data?.data?.results?.last_updated[3];
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
        <DashboardWrrapper className='coommon-dashboardbg advanceLedger'>
          <ContentBoxWrap className='contentBoxW'>
            <WhiteBox className='filterHeader'>
              <Typography variant='body1' className='date_update'>
                {`Updated ${day}-${monthname}-${year}`}
              </Typography>
              <ThemeProvider theme={Adobe_CaslonPro}>
                <H1>Advance Ledger</H1>
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
                        <MenuItem value=''>Status</MenuItem>
                        {STATUS_TYPE.map((curr: any) => (
                          <MenuItem key={curr.value} value={curr.value}>
                            {curr.name}
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
                  {/* <li>
                    {enableDateRange &&
                      <DateRange
                        editableDateInputs
                        onChange={(item : any) => {
                          // eslint-disable-next-line no-console
                          console.log('item----------------', item);
                          setState([item.selection]);
                        }}
                        moveRangeOnFirstSelection={false}
                        ranges={state}
                      />} 
                    {!enableDateRange && 
                    <MenuItem value='' onClick={() => setEnableDateRange(true)}>Custom Date</MenuItem>}
                  </li> */}
                </HeaderFillterUl>
              </Box>
              <StyledTableBox className='adv_table'>
                <TableContainer>
                  <Table aria-label='collapsible table'>
                    <TableHead>
                      <TableRow>
                        <TableCell align='left'>Status</TableCell>
                        <TableCell align='left'>Type</TableCell>
                        <TableCell align='left'>Rev Source</TableCell>
                        <TableCell align='left'>Currency</TableCell>
                        <TableCell align='left'>Period</TableCell>
                        <TableCell align='left' className='icon_wrap'>
                          Projected Amount
                          <BootstrapTooltip
                            title='projected amount of revenues generated in billing period.'
                            placement='top'
                          >
                            <img className='iconQ' src={iconQ} alt='iconQ' />
                          </BootstrapTooltip>
                        </TableCell>
                        <TableCell align='left'>Advanced Amount</TableCell>
                        <TableCell align='left'>Fee</TableCell>
                        <TableCell align='left'>Repayment Date</TableCell>
                        <TableCell align='left'>Invoice Date</TableCell>
                        <TableCell align='left'>Invoiced Amount</TableCell>
                        <TableCell align='left'>Invoice Number</TableCell>
                        <TableCell align='left'>Payment Ref</TableCell>
                        <TableCell align='left'>Fee Adjustment</TableCell>
                        <TableCell align='left'>Repaid</TableCell>
                        <TableCell align='left'>Outstanding</TableCell>
                        <TableCell align='left'>Collected</TableCell>
                        <TableCell align='left'>Surplus Distribution</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {ReportingAdvanceLedger?.data?.data?.results?.data.length
                        ? ReportingAdvanceLedger?.data?.data?.results?.data.map((data: any) => (
                            // eslint-disable-next-line react/jsx-indent
                            <>
                              <TableRow hover key={data.transaction_id}>
                                <TableCell align='left'>
                                  {data.status}
                                  <IconButton
                                    className='arrow'
                                    aria-label='expand row'
                                    size='small'
                                    onClick={() =>
                                      handleOpenRow(
                                        data,
                                        selectedMonthlyId === data?.monthly_invoice_id &&
                                          selectedRevenueSource === data?.revenue_source &&
                                          selectedRevenueCurrency === data?.currency &&
                                          showInnerTable
                                          ? true
                                          : false
                                      )
                                    }
                                  >
                                    {selectedMonthlyId === data?.monthly_invoice_id &&
                                    selectedRevenueSource === data?.revenue_source &&
                                    selectedRevenueCurrency === data?.currency &&
                                    showInnerTable ? (
                                      <KeyboardArrowUpIcon />
                                    ) : (
                                      <KeyboardArrowDownIcon />
                                    )}
                                  </IconButton>
                                </TableCell>
                                <TableCell align='left'>Full Period</TableCell>
                                <TableCell align='left'>{data.revenue_source}</TableCell>
                                <TableCell align='left'>{data.currency}</TableCell>
                                <TableCell align='left'>{data.period}</TableCell>
                                <TableCell align='left'>
                                  {Number(data.project_amount).toFixed(2)}
                                </TableCell>
                                <TableCell align='left'>
                                  {Number(data.advanced_amount).toFixed(2)}
                                </TableCell>
                                <TableCell align='left'>{Number(data.fee).toFixed(2)}</TableCell>
                                <TableCell align='left'>{data.repayment_date}</TableCell>
                                <TableCell align='left' />
                                <TableCell align='left' />
                                <TableCell align='left' />
                                <TableCell align='left' />
                                <TableCell align='left' />
                                <TableCell align='left'>
                                  {Number(data.fee_repayment).toFixed(2)}
                                </TableCell>
                                <TableCell align='left'>
                                  {Number(data.outstanding_amount).toFixed(2)}
                                </TableCell>
                                <TableCell align='left'>
                                  {Number(data.collected).toFixed(2)}
                                </TableCell>
                                <TableCell align='left'>
                                  {Number(data.surp_dist).toFixed(2)}
                                </TableCell>
                                {/* <TableCell align='center'>{data.sales_tax}</TableCell> */}
                              </TableRow>

                              <TableRow className='rowBg'>
                                <TableCell style={{ padding: 0 }} colSpan={6}>
                                  <Collapse
                                    in={
                                      selectedMonthlyId === data.monthly_invoice_id &&
                                      selectedRevenueSource === data.revenue_source &&
                                      selectedRevenueCurrency === data.currency
                                    }
                                    timeout='auto'
                                    unmountOnExit
                                  >
                                    <Table size='small' aria-label='purchases'>
                                      <TableBody>
                                        {showInnerTable && InvoiceLedger.data
                                          ? InvoiceLedger?.data?.data?.results?.map(
                                              /* eslint-disable */
                                              (item: any, i: number) => (
                                                <TableRow
                                                  className='data_currency table_body'
                                                  key={item.transaction_id}
                                                >
                                                  <TableCell align='left'>{item.status}</TableCell>
                                                  <StyleTableCellCurrency align='left'>
                                                    {`Advance ${i + 1}`}
                                                  </StyleTableCellCurrency>
                                                  <TableCell align='left'>
                                                    {item.revenue_source_name}
                                                  </TableCell>
                                                  <TableCell align='left'>
                                                    {item.currency}
                                                  </TableCell>
                                                  <TableCell align='left'>
                                                    {item.advance_date}
                                                  </TableCell>
                                                  <TableCell align='left'>
                                                    {Number(item.gross_revenue).toFixed(2)}
                                                  </TableCell>
                                                  <TableCell align='left'>
                                                    {Number(item.advance_amount).toFixed(2)}
                                                  </TableCell>
                                                  <TableCell align='left'>
                                                    {Number(item.fee_amount).toFixed(2)}
                                                  </TableCell>
                                                  <TableCell align='left'>
                                                    {item.expected_payment_date}
                                                  </TableCell>
                                                  <TableCell align='left'>-</TableCell>
                                                  <TableCell align='left'>-</TableCell>
                                                  <TableCell align='left'>-</TableCell>
                                                  <TableCell align='left'>-</TableCell>
                                                  <TableCell align='left'>
                                                    {Number(item.fee_adjustment).toFixed(2)}
                                                  </TableCell>
                                                  <TableCell align='left'>
                                                    {Number(item.fee_repayment).toFixed(2)}
                                                  </TableCell>
                                                  <TableCell align='left'>
                                                    {Number(item.outstanding_amount).toFixed(2)}
                                                  </TableCell>
                                                  <TableCell align='left'>-</TableCell>
                                                  <TableCell align='left'>-</TableCell>
                                                </TableRow>
                                                // eslint-disable-next-line @typescript-eslint/indent
                                              )
                                            )
                                          : null}
                                        {showInnerTable && PerCollection.data
                                          ? PerCollection?.data?.data?.results?.map(
                                              (item: any, i: number) => (
                                                <TableRow
                                                  className='data_currency table_body'
                                                  key={item.transaction_id}
                                                >
                                                  <TableCell align='left'>-</TableCell>
                                                  <StyleTableCellCurrency align='left'>
                                                    {`Collection ${i + 1}`}
                                                  </StyleTableCellCurrency>
                                                  <TableCell align='left'>
                                                    {item.revenue_source}
                                                  </TableCell>
                                                  <TableCell align='left'>
                                                    {item.currency}
                                                  </TableCell>
                                                  <TableCell align='left'>{item.date}</TableCell>
                                                  <TableCell align='left'>-</TableCell>
                                                  <TableCell align='left'>-</TableCell>
                                                  <TableCell align='left'>-</TableCell>
                                                  <TableCell align='left'>-</TableCell>
                                                  <TableCell align='left'>-</TableCell>
                                                  <TableCell align='left'>-</TableCell>
                                                  <TableCell align='left'>-</TableCell>
                                                  <TableCell align='left'>-</TableCell>
                                                  <TableCell align='left'>-</TableCell>
                                                  <TableCell align='left'>-</TableCell>
                                                  <TableCell align='left'>-</TableCell>
                                                  <TableCell align='left'>
                                                    {Number(item.amount).toFixed(2)}
                                                  </TableCell>
                                                  <TableCell align='left'>-</TableCell>
                                                </TableRow>
                                              )
                                            )
                                          : null}
                                      </TableBody>
                                    </Table>
                                  </Collapse>
                                </TableCell>
                              </TableRow>
                            </>
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

                  {ReportingAdvanceLedger?.data?.data?.results?.length ? (
                    <TablePagination
                      rowsPerPageOptions={[10, 25, 100]}
                      component='div'
                      count={ReportingAdvanceLedger?.data?.data?.count ?? 0}
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
  // AdvanceLedgerReducer: state.AdvanceLedgerReducer,
  ReportingAdvanceLedger: state.ReportingAdvanceLedger,
  InvoiceLedger: state?.InvoiceLedger,
  PerCollection: state?.PerformanceCollection,
  RevenueSources: state?.RevenueSources
});

export default connect(mapStateToProps)(AdvanceLedger);