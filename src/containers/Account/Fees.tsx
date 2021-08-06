import React, { useEffect } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Box,
  makeStyles,
  Theme
} from '@material-ui/core';
import { TooltipProps } from '@material-ui/core/Tooltip';

// import InfoIcon from '@material-ui/icons/Info';
import AuthLayout from '../../components/AuthLayout';
import {
  H1,
  DashboardWrrapper,
  ContentBoxWrap,
  WhiteBox
  // StyledDialog,
  // FormGroup
  // HeaderFillterUl,
  // StyledTableBox
} from './Styled';
import iconQ from '../../assets/images/icon_q.png';

const useStylesBootstrap = makeStyles((theme: Theme) => ({
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
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} enterTouchDelay={500} {...props} />;
}

// Props Interface
interface IProps {
  dispatch: Function;
  feeReducer: {
    data: any;
    status: string;
  };
}

const Fees: React.FC<IProps> = ({ dispatch, feeReducer }: IProps) => {
  useEffect(() => {
    // GET_FEE api calling
    dispatch({
      type: 'GET_FEE'
      // payload: { page: 1, rowsPerPage: 10, orderBy: 'created_at' }
    });
  }, [dispatch]);
  const Adobe_CaslonPro = createMuiTheme({
    typography: { fontFamily: ['Adobe_CaslonPro'].join(',') }
  });
  return (
    <>
      <AuthLayout>
        <DashboardWrrapper className='coommon-dashboardbg fees_body'>
          <ContentBoxWrap className='contentBoxW paddbtm100'>
            <WhiteBox className='padding amountTransaction'>
              <ThemeProvider theme={Adobe_CaslonPro}>
                <H1>Commercial Terms</H1>
              </ThemeProvider>
              <Box className='mob_tab_scrl'>
                <Table aria-label='simple table'>
                  <TableHead>
                    <TableRow>
                      <TableCell align='left'>Revenue Source</TableCell>
                      <TableCell align='left'>Maximum Advance</TableCell>
                      <TableCell align='left'>Fee</TableCell>
                      <TableCell className='icon_wrap' align='left'>
                        Fee Type
                        <BootstrapTooltip
                          title='Variable: we adjust the final advance fee owed based on the actual repayment date. Fixed: we charge the same fee regardless of the actual repayment date.'
                          placement='top'
                        >
                          <img className='iconQ' src={iconQ} alt='iconQ' />
                        </BootstrapTooltip>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {feeReducer?.data?.data.map((item: any) => (
                      <TableRow key=''>
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
                            <Typography>{item.name}</Typography>
                          </Box>
                        </TableCell>
                        <TableCell align='left'>
                          <Box className='boxWrap'>
                            <Typography>{`${item.max_advance}%`}</Typography>
                          </Box>
                        </TableCell>
                        <TableCell align='left'>
                          <Box className='boxWrap'>{`${item.daily_advance_fee}%`}</Box>
                        </TableCell>
                        <TableCell align='left'>
                          <Box className='boxWrap'>
                            {`${item?.fee_setting
                              ?.substring(0, 1)
                              ?.toUpperCase()}${item?.fee_setting?.substring(1)}`}
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </WhiteBox>
          </ContentBoxWrap>
        </DashboardWrrapper>
      </AuthLayout>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  feeReducer: state.feeReducer
});

export default connect(mapStateToProps)(Fees);
