import React, { useState, useEffect } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
  // Grid,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  // Tooltip,
  Box,
  TableContainer,
  TablePagination,
  IconButton
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
// import InfoIcon from '@material-ui/icons/Info';
import AuthLayout from '../../components/AuthLayout';
import { DURATIONS } from '../../utils/Constant';
import {
  H1Documentation,
  DashboardWrrapper,
  ContentBoxWrap,
  WhiteBox,
  StyledTableBox,
  // StyledUl,
  // GreyBox,
  HeaderFillterUl
  // StyledTableHeader
  // StyledDialog,
  // FormGroup
} from './Styled';

const Documentation = () => {
  // const [age, setAge] = useState('');
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [weekly, setWeekly] = useState({
    documentationtype: '',
    week: ''
  });

  const documentation = useSelector((state: any) => state?.Documentation?.data);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('I am here -----------------');

    dispatch({
      type: 'GET_DOCUMENTATION',
      payload: { documentationtype: weekly?.documentationtype, week: weekly?.week }
    });
  }, [weekly, dispatch]);

  const handleWeeklyChange = (event: any, type: string) => {
    setWeekly({ ...weekly, [type]: event.target.value });
  };

  // const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  //   setAge(event.target.value as string);
  // };

  // eslint-disable-next-line no-console
  console.log('documentation -----------------------  ', documentation);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const Adobe_CaslonPro = createMuiTheme({
    typography: { fontFamily: ['Adobe_CaslonPro'].join(',') }
  });
  const month =
    documentation?.data?.results?.last_updated[5] === '0'
      ? documentation?.data?.results?.last_updated[6]
      : documentation?.data?.results?.last_updated[5] +
        documentation?.data?.results?.last_updated[6];
  const day =
    documentation?.data?.results?.last_updated[8] === '0'
      ? documentation?.data?.results?.last_updated[9]
      : documentation?.data?.results?.last_updated[8] +
        documentation?.data?.results?.last_updated[9];
  const year =
    documentation?.data?.results?.last_updated[0] +
    documentation?.data?.results?.last_updated[1] +
    documentation?.data?.results?.last_updated[2] +
    documentation?.data?.results?.last_updated[3];
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
  const monthname = monthNames[month];

  return (
    <>
      <AuthLayout>
        <DashboardWrrapper className='coommon-dashboardbg'>
          <ContentBoxWrap className='contentBoxW paddbtm100 doc_wrap'>
            <WhiteBox className='filterHeader'>
              <Typography className='date_update' variant='body1'>
                {`Updated ${day}-${monthname}-${year}`}
              </Typography>
              <ThemeProvider theme={Adobe_CaslonPro}>
                <H1Documentation>Documentation</H1Documentation>
              </ThemeProvider>
              <Box className='headerFBG'>
                <HeaderFillterUl>
                  <li>
                    <FormControl className=''>
                      <Select
                        value={weekly?.documentationtype}
                        onChange={(e) => handleWeeklyChange(e, 'documentationtype')}
                        displayEmpty
                        className=''
                        inputProps={{ 'aria-label': 'Without label' }}
                      >
                        <MenuItem value=''>
                          <em>All documents</em>
                        </MenuItem>
                        <MenuItem value='Advance Confermation'>Advance Confermation</MenuItem>
                        <MenuItem value='Collection Repayment'>Collection Repayment</MenuItem>
                      </Select>
                    </FormControl>
                  </li>
                  {/* <li>
                    <FormControl className=''>
                      <Select
                        value={age}
                        onChange={handleChange}
                        displayEmpty
                        className=''
                        inputProps={{ 'aria-label': 'Without label' }}
                      >
                        <MenuItem value=''>
                          <em>Source</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </li> */}
                  <li>
                    <FormControl className=''>
                      <Select
                        value={weekly?.week}
                        onChange={(e) => handleWeeklyChange(e, 'week')}
                        displayEmpty
                        className=''
                        inputProps={{ 'aria-label': 'Without label' }}
                      >
                        <MenuItem value=''>
                          <em>Period</em>
                        </MenuItem>
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
                <TableContainer className='documnt_table'>
                  <Table aria-label='simple table'>
                    <TableHead>
                      <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell align='left'>Document</TableCell>
                        <TableCell align='left'>Transaction Number</TableCell>
                        <TableCell align='left'>Export</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow key=''>
                        <TableCell align='left'>
                          <Box className='d-flex boxWrap'>
                            <Typography>23-Jan-21</Typography>
                          </Box>
                        </TableCell>
                        <TableCell align='left'>
                          <Box className='boxWrap'>
                            <Typography>Advance confirmation</Typography>
                          </Box>
                        </TableCell>
                        <TableCell align='left'>
                          <Box className='boxWrap'>3023948</Box>
                        </TableCell>
                        <TableCell align='left'>
                          <Box className='boxWrap'>
                            <IconButton>
                              <svg
                                width={22}
                                height={26}
                                viewBox='0 0 22 26'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  d='M1 21.5625V22.8958C1 24.0004 1.89543 24.8958 3 24.8958H19C20.1046 24.8958 21 24.0004 21 22.8958V21.5625'
                                  stroke='#706B6B'
                                  strokeWidth={2}
                                  strokeLinecap='round'
                                />
                                <path
                                  d='M17.6667 13.2299L11 19.8966M11 19.8966L4.33335 13.2299M11 19.8966L11 1.56326'
                                  stroke='#706B6B'
                                  strokeWidth={2}
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                />
                              </svg>
                            </IconButton>
                          </Box>
                        </TableCell>
                      </TableRow>
                      <TableRow key=''>
                        <TableCell align='left'>
                          <Box className='d-flex boxWrap'>
                            <Typography>23-Jan-21</Typography>
                          </Box>
                        </TableCell>
                        <TableCell align='left'>
                          <Box className='boxWrap'>
                            <Typography>Advance confirmation</Typography>
                          </Box>
                        </TableCell>
                        <TableCell align='left'>
                          <Box className='boxWrap'>3023948</Box>
                        </TableCell>
                        <TableCell align='left'>
                          <Box className='boxWrap'>
                            <IconButton>
                              <svg
                                width={22}
                                height={26}
                                viewBox='0 0 22 26'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  d='M1 21.5625V22.8958C1 24.0004 1.89543 24.8958 3 24.8958H19C20.1046 24.8958 21 24.0004 21 22.8958V21.5625'
                                  stroke='#706B6B'
                                  strokeWidth={2}
                                  strokeLinecap='round'
                                />
                                <path
                                  d='M17.6667 13.2299L11 19.8966M11 19.8966L4.33335 13.2299M11 19.8966L11 1.56326'
                                  stroke='#706B6B'
                                  strokeWidth={2}
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                />
                              </svg>
                            </IconButton>
                          </Box>
                        </TableCell>
                      </TableRow>
                      <TableRow key=''>
                        <TableCell align='left'>
                          <Box className='d-flex boxWrap'>
                            <Typography>23-Jan-21</Typography>
                          </Box>
                        </TableCell>
                        <TableCell align='left'>
                          <Box className='boxWrap'>
                            <Typography>Advance confirmation</Typography>
                          </Box>
                        </TableCell>
                        <TableCell align='left'>
                          <Box className='boxWrap'>3023948</Box>
                        </TableCell>
                        <TableCell align='left'>
                          <Box className='boxWrap'>
                            <IconButton>
                              <svg
                                width={22}
                                height={26}
                                viewBox='0 0 22 26'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  d='M1 21.5625V22.8958C1 24.0004 1.89543 24.8958 3 24.8958H19C20.1046 24.8958 21 24.0004 21 22.8958V21.5625'
                                  stroke='#706B6B'
                                  strokeWidth={2}
                                  strokeLinecap='round'
                                />
                                <path
                                  d='M17.6667 13.2299L11 19.8966M11 19.8966L4.33335 13.2299M11 19.8966L11 1.56326'
                                  stroke='#706B6B'
                                  strokeWidth={2}
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                />
                              </svg>
                            </IconButton>
                          </Box>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component='div'
                  count={2}
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

export default Documentation;
