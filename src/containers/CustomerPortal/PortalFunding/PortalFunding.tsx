/* eslint-disable react/jsx-indent */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable @typescript-eslint/indent */
import React, { useState, useEffect } from 'react';
// import { Doughnut, Bar } from 'react-chartjs-2';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip as ReTooltip,
  // Legend,
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer
} from 'recharts';
import { useSelector, useDispatch } from 'react-redux';
import { TooltipProps } from '@material-ui/core/Tooltip';
// import ScrollBar from 'react-perfect-scrollbar';
import {
  Theme,
  makeStyles,
  Typography,
  Grid,
  Button,
  Box,
  // InputLabel,
  MenuItem,
  FormControl,
  // FormHelperText,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip
  // Collapse,
  // IconButton,
} from '@material-ui/core';
import getSymbolFromCurrency from 'currency-symbol-map';

// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import AuthLayout from '../../../components/AuthLayout';
import {
  DashboardWrrapper,
  ContentBoxWrap,
  WhiteBox,
  GreyBox,
  HeaderFillterUl,
  StyledUl,
  StyledTableBox,
  StyledTableHeader,
  NumberList
} from '../Styled';
import { CURRENCY_OPTIONS, DURATIONS } from '../../../utils/Constant';
import TableCurrency from './TableRow';
import iconQ from '../../../assets/images/icon_q.png';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  price: number
) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 }
    ]
  };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5)
];

const useStylesBootstrap = makeStyles((theme: Theme) => ({
  arrow: {
    color: '#E8E8E8'
  },
  tooltip: {
    backgroundColor: '#E8E8E8',
    fontSize: '1rem',
    color: '#706B6B'
  }
}));

function BootstrapTooltip(props: TooltipProps) {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} enterTouchDelay={500} {...props} />;
}

const useStylesBootstrapDark = makeStyles((theme: Theme) => ({
  arrow: {
    color: '#C0C0C0'
  },
  tooltip: {
    backgroundColor: '#C0C0C0',
    fontSize: '1rem',
    color: '#fff'
  }
}));

function BootstrapTooltipDark(props: TooltipProps) {
  const classes = useStylesBootstrapDark();

  return <Tooltip arrow classes={classes} enterTouchDelay={500} {...props} />;
}

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

// function BootstrapTooltipTheme(props: TooltipProps) {
//   const classes = BootstrapTooltipDarkG();

//   return <Tooltip arrow classes={classes} {...props} />;
// }

// const options = {
//   legend: {
//     display: false
//   },
//   tooltips: {
//     enabled: true
//   },
//   width: '400',
//   height: '400',
//   responsive: true,
//   maintainAspectRatio: false
// };

interface IProps {
  name: string;
  value: number;
  disp: string;
}

const PortalFunding: React.FC = () => {
  const defaultCurrency = localStorage.getItem('default_currency');
  const dispatch = useDispatch();
  const [revenue, setRevenue] = useState({
    currency: defaultCurrency ?? '',
    week: ''
  });
  const [weekly, setWeekly] = useState({
    currency: defaultCurrency ?? '',
    week: 'last_4_weeks'
  });
  const [advancesCurrency, setAdvancesCurrency] = useState({
    currency: defaultCurrency ?? '',
    week: ''
  });
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selected, setSelected] = React.useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [doughnutData, setDoughnutData] = useState(Array<IProps>());

  const groupedRevenueReducer = useSelector((state: any) => state?.groupedRevenueReducer?.data);
  const groupedTransWeekReducer = useSelector((state: any) => state?.groupedTransWeekReducer?.data);
  const groupedCurrencyReducer = useSelector((state: any) => state?.groupedCurrencyReducer?.data);
  const groupedTypeReducer = useSelector((state: any) => state?.groupedTypeReducer?.data);
  const latestAdvanceLedger = useSelector((state: any) => state?.lastestAdvancesReducer?.data);
  /*eslint-disable*/
  console.log('ram', groupedCurrencyReducer?.data?.last_updated);
  Object(groupedTypeReducer);
  // console.log('ream', );
  // const [open, setOpen] = React.useState(false);
  // console.log('ram', groupedTypeReducer?.data?.data?.repayment);
  useEffect(() => {
    // GET_TRANSACTION_LEDGER api calling
    dispatch({
      type: 'GET_LATEST_ADVANCED'
      // payload: { page: 1, rowsPerPage: 10, orderBy: 'created_at' }
    });
  }, [dispatch]);

  useEffect(() => {
    dispatch({
      type: 'GROUPED_TRANSACTION_TYPE',
      payload: { currency: weekly.currency, week: weekly.week }
    });
  }, [dispatch, weekly.currency, weekly.week]);

  useEffect(() => {
    dispatch({
      type: 'GET_GROUPED_REVENUE',
      payload: { currency: revenue.currency, week: revenue.week }
    });
  }, [dispatch, revenue.currency, revenue.week]);

  useEffect(() => {
    dispatch({
      type: 'GROUPED_WEEK',
      payload: { currency: weekly.currency, week: weekly.week }
    });
  }, [dispatch, weekly.currency, weekly.week]);

  useEffect(() => {
    dispatch({
      type: 'GET_GROUPED_CURRENCY',
      payload: { currency: advancesCurrency.currency, week: advancesCurrency.week }
    });
  }, [dispatch, advancesCurrency.currency, advancesCurrency.week]);

  const handleChange = (event: any, type: string) => {
    setRevenue({ ...revenue, [type]: event.target.value });
  };

  const handleWeeklyChange = (event: any, type: string) => {
    setWeekly({ ...weekly, [type]: event.target.value });
  };

  const handleAdvancesChange = (event: any, type: string) => {
    setAdvancesCurrency({ ...advancesCurrency, [type]: event.target.value });
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    groupedRevenueReducer?.data?.data.length
      ? groupedRevenueReducer?.data?.data?.reduce(
          (dougnut: Array<IProps>, rev: any, index: number) => {
            dougnut = [
              ...dougnut,
              {
                name: rev.revenue_source_name,
                value: rev.total_amount,
                disp: rev?.total_amount_disp
              }
            ];
            if (index === groupedRevenueReducer?.data?.data?.length - 1) {
              setDoughnutData(dougnut);
            }
            return dougnut;
          },
          []
        )
      : setDoughnutData([]);

    // let doughnutLabels: any[] = [];
    // let doughnutValue: any[] = [];
    // let doughnutValueColor: any[] = [];
    // let doughnutData: any[] = [];
    // groupedRevenueReducer?.data?.data.length &&
    //   groupedRevenueReducer.data.data.map((rev: any) => {
    //     doughnutData = [...doughnutData, { name: rev.revenue_source_name, value: rev.total_amount }];
    // doughnutLabels = [...doughnutLabels, `${rev.revenue_source_name}`];
    // doughnutValue = [...doughnutValue, `${rev.total_amount}`];
    // doughnutValueColor = [
    //   ...doughnutValueColor,
    //   // eslint-disable-next-line no-bitwise
    //   `#${((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')}`
    // ];
    // return '';
  }, [groupedRevenueReducer]);

  // const doughnutData = {
  //   labels: doughnutLabels,
  //   datasets: [
  //     {
  //       label: 'Revenue Source',
  //       data: doughnutValue,
  //       backgroundColor: doughnutValueColor,
  //       hoverOffset: 40
  //     }
  //   ]
  // };

  // Bar chart options
  // let barLabels: any[] = [];
  let barData: any[] = [];
  // let barDataColor: any[] = [];
  groupedTransWeekReducer?.data?.data?.length &&
    // eslint-disable-next-line array-callback-return
    groupedTransWeekReducer?.data?.data?.map((rev: any) => {
      barData = [
        ...barData,
        { name: `Week ${rev.week}`, amount: rev.amount, disp: rev?.amount_disp }
      ];
      // barLabels = [...barLabels, `Week ${rev.week}`];
      // barData = [...barData, rev.amount];
      // barDataColor = [
      //   ...barDataColor,
      //   // eslint-disable-next-line no-bitwise
      //   `#${((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')}`
      // ];
      // return '';
    });
  // const data = [
  //   {
  //     name: 'Week A',
  //     uv: 4000,
  //     amt: 2400
  //   },
  //   {
  //     name: 'Week B',
  //     uv: 3000,
  //     amt: 2210
  //   },
  //   {
  //     name: 'Week C',
  //     uv: 2000,
  //     amt: 2290
  //   },
  //   {
  //     name: 'Week D',
  //     uv: 3908,
  //     amt: 2000
  //   },
  //   {
  //     name: 'Week E',
  //     uv: 4800,
  //     amt: 2181
  //   },
  //   {
  //     name: 'Week F',
  //     uv: 3800,
  //     amt: 2500
  //   },
  //   // {
  //   //   name: 'Week G',
  //   //   uv: 3490,
  //   //   amt: 2100
  //   // },
  //   // {
  //   //   name: 'Week H',
  //   //   uv: 1490,
  //   //   amt: 1100
  //   // },
  //   // {
  //   //   name: 'Week H',
  //   //   uv: 2170,
  //   //   amt: 1500
  //   // }
  // ];

  const config = {
    data: barData,
    options: {
      legend: {
        display: false
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              drawBorder: false,
              display: false
            },
            ticks: {
              display: false
            }
          }
        ],
        xAxes: [
          {
            gridLines: {
              drawOnChartArea: false
            }
          }
        ]
      },
      width: '1000',
      height: '400',
      responsive: true,
      maintainAspectRatio: false
    }
  };

  // Handle Selected
  const handleSelected = (name: string) => {
    setSelected(name);
  };

  // eslint-disable-next-line no-console
  console.log('HHHHHH NNNN lastestAdvancesReducer?.data?.data', latestAdvanceLedger?.data?.data);

  // const barColors = ['#1f77b4', '#ff7f0e', '#2ca02c'];

  const COLORS = [{ start: 'rgba(253,213,194,1)', end: 'rgba(250,153,151,1)' }];

  // const data = [
  //   { name: 'Group A', value: 400 },
  //   { name: 'Group B', value: 300 },
  //   { name: 'Group C', value: 300 },
  //   { name: 'Group D', value: 200 }
  // ];

  // eslint-disable-next-line no-console
  console.log(window.screen.width);

  let innerWeidth = 40;
  let outerRadius = 100,
    width = '10px';

  if (window.screen.width > 1300) {
    innerWeidth = 70;
    outerRadius = 150;
    width = '13px';
  }
  if (window.screen.width > 1920) {
    innerWeidth = 75;
    outerRadius = 170;
    width = '15px';
  }
  if (window.screen.width > 1800) {
    innerWeidth = 85;
    outerRadius = 190;
    width = '16px';
  }
  if (window.screen.width > 2200) {
    innerWeidth = 110;
    outerRadius = 260;
    width = '20px';
  }

  if (window.screen.width < 768) {
    innerWeidth = 35;
    outerRadius = 90;
    width = '9px';
  }

  const renderActiveShape = (props: any) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      disp
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + (window.screen.width < 768 ? 2 : 10)) * cos;
    const sy = cy + (outerRadius + (window.screen.width < 768 ? 2 : 10)) * sin;
    const mx = cx + (outerRadius + (window.screen.width < 768 ? 5 : 30)) * cos;
    const my = cy + (outerRadius + (window.screen.width < 768 ? 5 : 30)) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * (window.screen.width < 768 ? 2 : 22);
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <text
          style={{ fontSize: width }}
          x={cx}
          y={cy}
          dy={window.screen.width < 768 ? 4 : 8}
          textAnchor='middle'
          fill={'black'}
        >
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill='none' />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke='none' />
        <text
          style={{ fontSize: width }}
          x={ex + (cos >= 0 ? 1 : -1) * (window.screen.width < 768 ? 5 : 12)}
          y={ey}
          textAnchor={textAnchor}
          fill='#333'
        >
          {`${disp}`}
        </text>
        <text
          style={{ fontSize: width }}
          x={ex + (cos >= 0 ? 1 : -1) * (window.screen.width < 768 ? 5 : 12)}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill='#999'
        >
          {`${(percent * 100).toFixed(2)}%`}
        </text>
      </g>
    );
  };

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }: {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
    index: number;
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill='white'
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline='central'
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  const month =
    groupedRevenueReducer?.data?.last_updated[5] === '0'
      ? groupedRevenueReducer?.data?.last_updated[6]
      : groupedRevenueReducer?.data?.last_updated[5] + groupedRevenueReducer?.data?.last_updated[6];
  const day =
    groupedRevenueReducer?.data?.last_updated[8] === '0'
      ? groupedRevenueReducer?.data?.last_updated[9]
      : groupedRevenueReducer?.data?.last_updated[8] + groupedRevenueReducer?.data?.last_updated[9];
  const year =
    groupedRevenueReducer?.data?.last_updated[0] +
    groupedRevenueReducer?.data?.last_updated[1] +
    groupedRevenueReducer?.data?.last_updated[2] +
    groupedRevenueReducer?.data?.last_updated[3];
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
  const month1 =
    groupedCurrencyReducer?.data?.last_updated[5] === '0'
      ? groupedCurrencyReducer?.data?.last_updated[6]
      : groupedCurrencyReducer?.data?.last_updated[5] +
        groupedCurrencyReducer?.data?.last_updated[6];
  const day1 =
    groupedCurrencyReducer?.data?.last_updated[8] === '0'
      ? groupedCurrencyReducer?.data?.last_updated[9]
      : groupedCurrencyReducer?.data?.last_updated[8] +
        groupedCurrencyReducer?.data?.last_updated[9];
  const year1 =
    groupedCurrencyReducer?.data?.last_updated[0] +
    groupedCurrencyReducer?.data?.last_updated[1] +
    groupedCurrencyReducer?.data?.last_updated[2] +
    groupedCurrencyReducer?.data?.last_updated[3];
  const monthname1 = monthNames[month1 - 1];
  // console.log("groupedTypeReducer----------------------", groupedTypeReducer, getSymbolFromCurrency('GBP'));

  return (
    <>
      <AuthLayout>
        <DashboardWrrapper className='coommon-dashboardbg'>
          {/* <Breadcumb breadCrumb={{ page: 'Dashboard', data: ['Dashboard'] }} /> */}
          <ContentBoxWrap className='contentBoxW'>
            <WhiteBox className='padding_fund'>
              <Box className='d-flexInfo'>
                <Grid container spacing={3} className='bottomContentBox content_wrap'>
                  <Grid item xs={12} sm={4} lg={4} className='left_content'>
                    <Typography variant='h1' gutterBottom>
                      Your latest
                      <span>advances</span>
                    </Typography>
                    <p> A total of</p>
                    <Typography variant='h1' gutterBottom className='purple_heading'>
                      {getSymbolFromCurrency(latestAdvanceLedger?.data?.orignal_currency)}
                      {latestAdvanceLedger?.data?.orignal_amount}
                    </Typography>
                    <p>
                      was deposited into your
                      <span>advance accounts on</span>
                      7th February 2021.
                      <BootstrapTooltip
                        title='This is an approximate value base in today’s exchange rate'
                        placement='top'
                      >
                        <img className='iconQ' src={iconQ} alt='iconQ' />
                      </BootstrapTooltip>
                    </p>
                  </Grid>
                  <Grid item xs={12} sm={8} lg={8}>
                    <Box className='right_content'>
                      <GreyBox className='greyBoxContent list mt'>
                        <NumberList>
                          <Box className={latestAdvanceLedger?.data?.data?.length > 4 ? 'scroll' : ''}>
                            {latestAdvanceLedger?.data?.data?.map((item: any) => (
                              <li key={item.name}>
                                <div className='psr'>
                                  {/* {item.name === 'GBP' ?
                                  <Typography variant='h5' className='psr'>
                                     £
                                  </Typography>:<Typography variant='h5' className='psr'>
                                    $
                                  </Typography>
                                  } */}
                                  <Typography variant='h5' className='psr'>
                                    {getSymbolFromCurrency(item?.name)}
                                  </Typography>
                                  <Typography variant='body2' className='psa'>
                                    {item.name}
                                  </Typography>
                                </div>
                                <h1>{getSymbolFromCurrency(item?.name)}</h1>
                                <Typography variant='h6'>{item?.amount}</Typography>
                              </li>
                            ))}
                          </Box>
                        </NumberList>
                      </GreyBox>
                      <Box className='funds_btn'>
                        <Button variant='outlined' color='primary' className='downloadBtn'>
                          Access your funds
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </WhiteBox>
          </ContentBoxWrap>
          <ContentBoxWrap className='contentBoxW mob_paddt0 paddt0'>
            <WhiteBox className='filterHeader padding_fund'>
              <Typography className='date_update' variant='body1'>
                {`Updated ${day}-${monthname}-${year}`}
              </Typography>
              <Box className='headerFBG'>
                <Grid container spacing={3} className='bottomContentBox content_wrap'>
                  <Grid item xs={12} sm={4} lg={4} className='left_content'>
                    <HeaderFillterUl>
                      <li>
                        <FormControl className=''>
                          <Select
                            value={revenue.currency}
                            onChange={(e) => {
                              handleChange(e, 'currency');
                              handleWeeklyChange(e, 'currency');
                            }}
                            displayEmpty
                            className=''
                            name='currency'
                            inputProps={{ 'aria-label': 'Without label' }}
                          >
                            <MenuItem value=''>All currencies</MenuItem>
                            {CURRENCY_OPTIONS?.map((curr: any) => (
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
                            value={revenue.week}
                            onChange={(e) => {
                              handleChange(e, 'week');
                              handleWeeklyChange(e, 'week');
                            }}
                            displayEmpty
                            className=''
                            name='week'
                            inputProps={{ 'aria-label': 'Without label' }}
                          >
                            <MenuItem value=''>All</MenuItem>
                            {DURATIONS?.map((dur: any) => (
                              <MenuItem key={dur.value} value={dur.value}>
                                {dur.name}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </li>
                    </HeaderFillterUl>
                    <Typography variant='h5' gutterBottom>
                      Advances by
                      <span>revenue source</span>
                    </Typography>
                    <StyledUl className='adv_list_wrap'>
                      <li>
                        <Typography variant='body1' gutterBottom>
                          % of all advances
                        </Typography>
                        <BootstrapTooltipDark
                          title='as % of total advances across all currencies'
                          placement='top-end'
                        >
                          <Typography variant='h6' gutterBottom>
                            {groupedTypeReducer?.data?.percent_of_all_advances}%
                          </Typography>
                        </BootstrapTooltipDark>
                      </li>
                      <li>
                        <Typography variant='body1' gutterBottom>
                          Total advanced
                        </Typography>
                        <BootstrapTooltipDark
                          title='as % of total advances across all currencies'
                          placement='top-end'
                        >
                          <Typography variant='h6' gutterBottom>
                            {getSymbolFromCurrency(revenue?.currency) ??
                              getSymbolFromCurrency(defaultCurrency ?? 'USD')}
                            {groupedTypeReducer?.data?.disp?.purchase}
                          </Typography>
                        </BootstrapTooltipDark>
                      </li>
                      <li>
                        <Typography variant='body1' gutterBottom>
                          Total repaid
                        </Typography>
                        <BootstrapTooltipDark
                          title='as % of total advances across all currencies'
                          placement='top-end'
                        >
                          <Typography variant='h6' gutterBottom>
                            {getSymbolFromCurrency(revenue?.currency) ??
                              getSymbolFromCurrency(defaultCurrency ?? 'USD')}
                            {groupedTypeReducer?.data?.disp.repayment}
                          </Typography>
                        </BootstrapTooltipDark>
                      </li>
                      <li>
                        <Typography variant='body1' gutterBottom>
                          Total Revving fees
                        </Typography>
                        <BootstrapTooltipDark
                          title='as % of total advances across all currencies'
                          placement='top-end'
                        >
                          <Typography variant='h6' gutterBottom>
                            {getSymbolFromCurrency(revenue?.currency) ??
                              getSymbolFromCurrency(defaultCurrency ?? 'USD')}
                            {groupedTypeReducer?.data?.disp.fee}
                          </Typography>
                        </BootstrapTooltipDark>
                      </li>

                      {/* <li> */}
                      {/* <Typography variant='h6'>$126,503.21</Typography> */}
                      {/* <BootstrapTooltipDark
                          title='as % of total advances across all currencies'
                          placement='top-end'
                        >
                          <Typography variant='body1' gutterBottom>
                            --%
                          </Typography>
                        </BootstrapTooltipDark> */}
                      {/* </li> */}
                      {/* <li>
                          <Typography variant='body1' gutterBottom>
                            Total &nbsp;
                          </Typography>
                          <Typography variant='h6' gutterBottom>
                          </Typography>
                        </li>
                         */}
                      {/* <li>
                          <Typography variant='body1' gutterBottom>
                            Total advanced
                          </Typography>
                          <Typography variant='body1' gutterBottom>
                            $ --jjjj
                          </Typography>
                        </li>
                        <li>
                          <Typography variant='body1' gutterBottom>
                            Total repaid
                          </Typography>
                          <Typography variant='body1' gutterBottom>
                            $ --
                          </Typography>
                        </li>
                        <li>
                          <Typography variant='body1' gutterBottom>
                            Total Revving fees
                          </Typography>
                          <Typography variant='body1' gutterBottom>
                            $ --
                          </Typography>
                        </li> */}
                    </StyledUl>
                    <p className='font_18'>
                      <BootstrapTooltip
                        title='Variable: we adjust the final advance fee owed based on the actual repayment date. Fixed: we charge the same fee regardless of the actual repayment date.'
                        placement='top'
                      >
                        <img className='iconQ' src={iconQ} alt='iconQ' />
                      </BootstrapTooltip>
                      When
                      <span className='font_bold'>all currencies</span>
                      is selected, the approximate total value of advances
                      <span>
                        across all currencies will be displayed in your chosen reporting currency,
                      </span>
                      <span>
                        based on today’s foreign exchange rate. If a currency is selected, only the
                      </span>
                      revenue sources that pay out in that currency will be displayed.
                    </p>
                  </Grid>
                  <Grid item xs={12} sm={8} lg={8}>
                    <Box className='right_content right_graph'>
                      <ResponsiveContainer width='100%' height='100%'>
                        <PieChart>
                          <defs>
                            {doughnutData.map((entry, index) => (
                              <linearGradient
                                key={`${entry.name}-${entry.value}`}
                                id={`myGradient${index}`}
                              >
                                <stop offset='0%' stopColor={COLORS[index % COLORS.length].start} />
                                <stop offset='100%' stopColor={COLORS[index % COLORS.length].end} />
                              </linearGradient>
                            ))}
                          </defs>
                          <Pie
                            activeIndex={activeIndex}
                            activeShape={renderActiveShape}
                            data={doughnutData}
                            // label={renderCustomizedLabel}
                            cx='55%'
                            cy='50%'
                            width={100}
                            innerRadius={innerWeidth}
                            outerRadius={outerRadius}
                            dataKey='value'
                            // labelLine
                            blendStroke
                            paddingAngle={3}
                            onMouseEnter={onPieEnter}
                          >
                            {doughnutData.map((entry, index) => (
                              <Cell
                                fontSize={30}
                                strokeWidth={2}
                                style={{ fontSize: width }}
                                key={`cell-${entry.name}-${entry.value}`}
                                fill={`url(#myGradient${index})`}
                              />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              {/* <Grid container spacing={3} alignItems='center' className='bottomContentBox'>
                <Grid item xs={12} sm={6}>
                  <BootstrapTooltip
                    title='Total value of advances across all currencies in your reporting currency, based on today’s exchange rate. '
                    placement='bottom-start'
                  >
                    <Typography variant='h6' gutterBottom className='dottedbBorder'>
                      All currencies
                    </Typography>
                  </BootstrapTooltip>
                  <Typography variant='body1' gutterBottom>
                    Advances from 28-Dec 2020 to 22-Jan 2021
                  </Typography>
                  <GreyBox className='circleBox greyBoxContent list mt'>
                  </GreyBox>
                </Grid>
              </Grid> */}
            </WhiteBox>
          </ContentBoxWrap>
          <ContentBoxWrap className='contentBoxW mob_paddt0 paddt0'>
            <WhiteBox className='filterHeader cstm_height wkly_adv_wrap'>
              <Typography className='date_update' variant='body1'>
                {`Updated ${day}-${monthname}-${year}`}
              </Typography>
              <Box className='headerFBG weekly_adv'>
                <Grid container spacing={3} className='bottomContentBox content_wrap'>
                  <Grid item xs={12} sm={6} lg={4} className='left_content'>
                    <Typography variant='h1' gutterBottom>
                      Weekly advances
                    </Typography>
                    <HeaderFillterUl>
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
                            {CURRENCY_OPTIONS?.map((curr: any) => (
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
                            value={weekly.week}
                            onChange={(e) => handleWeeklyChange(e, 'week')}
                            displayEmpty
                            className=''
                            name='week'
                            inputProps={{ 'aria-label': 'Without label' }}
                          >
                            {DURATIONS?.map((dur: any) => (
                              <MenuItem key={dur.value} value={dur.value}>
                                {dur.name}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </li>
                    </HeaderFillterUl>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={4} className='left_content wkly_rgt'>
                    {/* <BootstrapTooltip
                      title='Total value of advances across all currencies in your reporting currency, based on today’s exchange rate. '
                      placement='bottom-start'
                    >
                      <Typography variant='h6' gutterBottom className='dottedbBorder'>
                        All currencies
                      </Typography>
                    </BootstrapTooltip> */}
                    {/* <Typography variant='body1' gutterBottom>
                      Advances from 28-Dec 2020 to 22-Jan 2021
                    </Typography> */}
                    <StyledUl>
                      <li>
                        <Typography variant='body1' gutterBottom>
                          % of all advances
                        </Typography>
                        <BootstrapTooltipDark
                          title='as % of total advances across all currencies'
                          placement='top-end'
                        >
                          <Typography variant='h6' gutterBottom>
                            {groupedTypeReducer?.data?.percent_of_all_advances}%
                          </Typography>
                        </BootstrapTooltipDark>
                      </li>
                      <li>
                        <Typography variant='body1' gutterBottom>
                          Total advanced
                        </Typography>
                        <BootstrapTooltipDark
                          title='as % of total advances across all currencies'
                          placement='top-end'
                        >
                          <Typography variant='h6' gutterBottom>
                            {getSymbolFromCurrency(weekly?.currency) ??
                              getSymbolFromCurrency(defaultCurrency ?? 'USD')}
                            {groupedTypeReducer?.data?.disp?.purchase}
                          </Typography>
                        </BootstrapTooltipDark>
                      </li>
                      <li>
                        <Typography variant='body1' gutterBottom>
                          Total Repaid
                        </Typography>
                        <BootstrapTooltipDark
                          title='as % of total advances across all currencies'
                          placement='top-end'
                        >
                          <Typography variant='h6' gutterBottom>
                            {getSymbolFromCurrency(weekly?.currency) ??
                              getSymbolFromCurrency(defaultCurrency ?? 'USD')}
                            {groupedTypeReducer?.data?.disp?.repayment}
                          </Typography>
                        </BootstrapTooltipDark>
                      </li>
                      <li>
                        <Typography variant='body1' gutterBottom>
                          Total Revving fees
                        </Typography>
                        <BootstrapTooltipDark
                          title='as % of total advances across all currencies'
                          placement='top-end'
                        >
                          <Typography variant='h6' gutterBottom>
                            {getSymbolFromCurrency(weekly?.currency) ??
                              getSymbolFromCurrency(defaultCurrency ?? 'USD')}
                            {groupedTypeReducer?.data?.disp?.fee}
                          </Typography>
                        </BootstrapTooltipDark>
                      </li>
                      {/* {groupedTypeReducer?.data?.data.map((item: any) => (
                        <li key={item.transaction_type}>
                          <Typography variant='body1' gutterBottom>
                            {`Total ${item.transaction_type}`}
                          </Typography>
                          <Typography variant='h6' gutterBottom>
                            {`$${item.total_amount}`}
                          </Typography>
                        </li>
                      ))} */}
                      {/* <li>
                    <Typography variant='body1' gutterBottom>
                      % of all advances
                    </Typography>
                    <BootstrapTooltipDark
                      title='as % of total advances across all currencies'
                      placement='top-end'
                    >
                      <Typography variant='body1' gutterBottom>
                        --%
                      </Typography>
                    </BootstrapTooltipDark>
                  </li>
                  <li>
                    <Typography variant='body1' gutterBottom>
                      Total advanced
                    </Typography>
                    <Typography variant='body1' gutterBottom>
                      $ --
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='body1' gutterBottom>
                      Total repaid
                    </Typography>
                    <Typography variant='body1' gutterBottom>
                      $ --
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='body1' gutterBottom>
                      Total Revving fees
                    </Typography>
                    <Typography variant='body1' gutterBottom>
                      $ --
                    </Typography>
                  </li> */}
                    </StyledUl>
                  </Grid>
                </Grid>
              </Box>
              <Grid container spacing={3} className='bottomContentBox'>
                <Grid item xs={12} sm={6} lg={12} md={12} className='mobpadd20'>
                  <ResponsiveContainer width='100%' height={300}>
                    <BarChart
                      {...config}
                      data={barData}
                      margin={{
                        top: 5,
                        right: 10,
                        left: 10,
                        bottom: 5
                      }}
                    >
                      {/* <CartesianGrid strokeDasharray="3 3" /> */}
                      <defs>
                        <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
                          <stop offset='5%' stopColor='rgba(160,164,247, 1)' />
                          <stop offset='95%' stopColor='rgba(181,202,245,1)' />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey='name' />
                      <YAxis hide />
                      <ReTooltip />
                      {/* <Legend /> */}
                      {/* <Bar dataKey="pv" fill="#8884d8" radius={[10, 10, 10, 10]} /> */}
                      <Bar dataKey='amount' fill='url(#colorUv)' radius={[10, 10, 10, 10]} />
                      {/* <Bar dataKey="sv" fill="#23ca9d" radius={[10, 10, 10, 10]} /> */}
                      {/* <Bar
                    dataKey="Week"
                    fill="#colorUv"
                    stroke="#000000"
                    strokeWidth={1}
                /> */}
                    </BarChart>
                  </ResponsiveContainer>
                </Grid>
              </Grid>

              {/* <Grid item xs={12} sm={12}>
                </Grid> */}
            </WhiteBox>
          </ContentBoxWrap>

          <ContentBoxWrap className='contentBoxW mob_content paddt0'>
            <WhiteBox className='filterHeader cstm_height adv_cry_wrap'>
              <Typography className='date_update' variant='body1'>
                {`Updated ${day1}-${monthname1}-${year1}`}
              </Typography>
              <Box className='adv_curncy_wrap'>
                <Typography variant='h1' gutterBottom>
                  Advances by currency
                </Typography>
                <HeaderFillterUl>
                  {/* <li>
                    <FormControl className=''>
                      <Select
                        value={advancesCurrency.currency}
                        onChange={(e) => handleAdvancesChange(e, 'currency')}
                        displayEmpty
                        className=''
                        name='currency'
                        inputProps={{ 'aria-label': 'Without label' }}
                      >
                        <MenuItem value=''>All currency</MenuItem>
                        {CURRENCY_OPTIONS?.map((curr: any) => (
                          <MenuItem key={curr.value} value={curr.value}>
                            {curr.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </li> */}
                  <li>
                    <FormControl className=''>
                      <Select
                        value={advancesCurrency.week}
                        onChange={(e) => handleAdvancesChange(e, 'week')}
                        displayEmpty
                        className=''
                        name='week'
                        inputProps={{ 'aria-label': 'Without label' }}
                      >
                        <MenuItem value=''>All</MenuItem>
                        {DURATIONS?.map((dur: any) => (
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
                <StyledTableHeader>
                  <Box className='titleH'>
                    <Typography className='con_hndg'>Consolidated view</Typography>
                  </Box>
                  <Table className='dollerHeader' stickyHeader aria-label='sticky table'>
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          {
                            groupedCurrencyReducer?.data?.data.find((r: any) => r.name === selected)
                              ?.name
                          }
                        </TableCell>
                        <TableCell>
                          {`${
                            getSymbolFromCurrency(advancesCurrency?.currency) ??
                            getSymbolFromCurrency(defaultCurrency ?? 'USD')
                          }${groupedCurrencyReducer?.data?.consolidated_disp?.purchase}`}
                          {
                            groupedCurrencyReducer?.data?.data.find((r: any) => r.name === selected)
                              ?.data?.advance
                          }
                        </TableCell>
                        <TableCell>
                          {`${
                            getSymbolFromCurrency(advancesCurrency?.currency) ??
                            getSymbolFromCurrency(defaultCurrency ?? 'USD')
                          }${groupedCurrencyReducer?.data?.consolidated_disp?.repayment}`}
                          {
                            groupedCurrencyReducer?.data?.data.find((r: any) => r.name === selected)
                              ?.data?.repayment
                          }
                        </TableCell>
                        <TableCell>
                          {`${
                            getSymbolFromCurrency(advancesCurrency?.currency) ??
                            getSymbolFromCurrency(defaultCurrency ?? 'USD')
                          }${groupedCurrencyReducer?.data?.consolidated_disp?.outstanding}`}
                          {
                            groupedCurrencyReducer?.data?.data.find((r: any) => r.name === selected)
                              ?.data?.fee
                          }
                        </TableCell>
                        <TableCell>
                          {`${
                            getSymbolFromCurrency(advancesCurrency?.currency) ??
                            getSymbolFromCurrency(defaultCurrency ?? 'USD')
                          }${groupedCurrencyReducer?.data?.consolidated_disp?.fee}`}
                          {
                            groupedCurrencyReducer?.data?.data.find((r: any) => r.name === selected)
                              ?.data?.fee
                          }
                        </TableCell>
                        <TableCell />
                      </TableRow>
                    </TableHead>
                  </Table>
                </StyledTableHeader>
                <TableContainer>
                  <Table aria-label='collapsible table' className='currency_table'>
                    <TableHead>
                      <TableRow>
                        <TableCell align='left'>Currency</TableCell>
                        <TableCell align='left'>Advanced</TableCell>
                        <TableCell align='left'>Repaid</TableCell>
                        <TableCell align='left'>Outstanding</TableCell>
                        <TableCell align='left'>Fees</TableCell>
                        <TableCell className='text_center' align='center'>
                          Revenue Source
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody className='text_center'>
                      {groupedCurrencyReducer?.data?.data.length &&
                        groupedCurrencyReducer?.data?.data?.map((item: any) => {
                          console.log('item', item);
                          return (
                            <>
                              <TableCurrency
                                item={item}
                                week={advancesCurrency?.week}
                                handleSelected={handleSelected}
                                selected={selected}
                              />
                            </>
                          );
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component='div'
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                />
              </StyledTableBox>
            </WhiteBox>
          </ContentBoxWrap>
        </DashboardWrrapper>
      </AuthLayout>
    </>
  );
};

// const mapStateToProps = (state: any) => {
//   // eslint-disable-next-line no-console
// https:// meet.google.com/adt-qwyd-jjihttps://meet.google.com/adt-qwyd-jji//   console.log('state --------------------  ', state);

//   return ({
//   groupedRevenueReducer: state.groupedRevenueReducer.data,
//   groupedTransWeekReducer: state.groupedTransWeekReducer.data,
//   groupedCurrencyReducer: state.groupedCurrencyReducer.data,
//   groupedTypeReducer: state.groupedTypeReducer.data,
//   lastestAdvancesReducer: state.lastestAdvancesReducer.data
// })
// ;
// };

export default PortalFunding;