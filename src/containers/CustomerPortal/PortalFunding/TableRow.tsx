import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableRow, Collapse, IconButton } from '@material-ui/core';
import { connect } from 'react-redux';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import getSymbolFromCurrency from 'currency-symbol-map';
import { StyleTableCellCurrency } from '../Styled';

// Props Interface
interface IProps {
  item: any;
  dispatch: Function;
  selected: string;
  handleSelected: Function;
  week: string;
  // eslint-disable-next-line react/require-default-props
  transactionDataReducer: {
    data: any;
    status: string;
  };
  getgroupedarrowdata: {
    data: any;
    status: string;
  };
}

const TableCurrency: React.FC<IProps> = ({
  getgroupedarrowdata,
  item,
  dispatch,
  selected,
  week,
  handleSelected,
  transactionDataReducer
}: IProps) => {
  const [showGroupedTable, setShowGroupedTable] = useState(false);
  const [showData, setShowData] = useState(false);
  const [currency, setCurrency] = useState(null);

  useEffect(() => {
    if (showData) {
      setTimeout(() => {
        setShowGroupedTable(true);
      }, 1000);
      setShowData(false);
    }
  }, [getgroupedarrowdata, showData, showGroupedTable]);

  useEffect(() => {
    dispatch({
      type: 'GET_GROUPED_ARROW_DATA',
      payload: { week, currency }
    });

    // dispatch({
    //   type: 'GET_TRANSACTION_LEDGER',
    //   payload: {
    //     currency: itemRow.name,
    //     fee: itemRow?.data?.fee,
    //     outstanding: itemRow?.data?.outstanding,
    //     repayment: itemRow?.data?.repayment,
    //     purchase: itemRow?.data?.purchase
    //   }
    // });
  }, [week, currency, dispatch, item]);

  const handleOpenRow = (itemRow: any, isOpen: boolean) => {
    handleSelected(item.name);
    setShowGroupedTable(false);
    if (!isOpen) {
      setShowData(true);
      setCurrency(itemRow.name);
      dispatch({ type: 'GET_GROUPED_ARROW_DATA', payload: { currency: itemRow.name, week } });

      dispatch({
        type: 'GET_TRANSACTION_LEDGER',
        payload: {
          currency: itemRow.name,
          fee: itemRow?.data?.fee,
          outstanding: itemRow?.data?.outstanding,
          repayment: itemRow?.data?.repayment,
          purchase: itemRow?.data?.purchase
        }
      });
    }
  };
  // eslint-disable-next-line no-console
  // console.log('getSymbolFromCurrency', getSymbolFromCurrency, item, getgroupedarrowdata);
  return (
    <>
      {/* {item.name === 'GBP' ? (
        <TableRow hover className='table_body'>
          <StyleTableCellCurrency align='left'>{item.name}</StyleTableCellCurrency>
          <TableCell align='left'>{`£${item.disp.purchase}`}</TableCell>
          <TableCell align='left'>{`£${item.disp.repayment}`}</TableCell>
          <TableCell align='left'>{`£${item.disp.outstanding}`}</TableCell>
          <TableCell align='left'>{`£${item.disp.fee}`}</TableCell>
          <TableCell align='center'>
            <IconButton
              className='arrow'
              aria-label='expand row'
              size='small'
              onClick={() =>
                handleOpenRow(item, selected === item.name && showGroupedTable ? true : false)
              }
            >
              {selected === item.name && showGroupedTable ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </IconButton>
          </TableCell>
        </TableRow>
      ) : (
        <TableRow hover className='table_body'>
          <StyleTableCellCurrency align='left'>{item.name}</StyleTableCellCurrency>
          <TableCell align='left'>{`$${item.disp.purchase}`}</TableCell>
          <TableCell align='left'>{`$${item.disp.repayment}`}</TableCell>
          <TableCell align='left'>{`$${item.disp.outstanding}`}</TableCell>
          <TableCell align='left'>{`$${item.disp.fee}`}</TableCell>
          <TableCell align='center'>
            <IconButton
              className='arrow'
              aria-label='expand row'
              size='small'
              onClick={() =>
                handleOpenRow(item, selected === item.name && showGroupedTable ? true : false)
              }
            >
              {selected === item.name && showGroupedTable ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </IconButton>
          </TableCell>
        </TableRow>
      )} */}
      <TableRow hover className='table_body'>
        <StyleTableCellCurrency align='left'>{item.name}</StyleTableCellCurrency>
        <TableCell align='left'>
          {`${getSymbolFromCurrency(item?.name ?? 'USD')}${item.disp.purchase}`}
        </TableCell>
        <TableCell align='left'>
          {`${getSymbolFromCurrency(item?.name ?? 'USD')}${item.disp.repayment}`}
        </TableCell>
        <TableCell align='left'>
          {`${getSymbolFromCurrency(item?.name ?? 'USD')}${item.disp.outstanding}`}
        </TableCell>
        <TableCell align='left'>
          {`${getSymbolFromCurrency(item?.name ?? 'USD')}${item.disp.fee}`}
        </TableCell>
        <TableCell align='center'>
          <IconButton
            className='arrow'
            aria-label='expand row'
            size='small'
            onClick={() =>
              handleOpenRow(item, selected === item.name && showGroupedTable ? true : false)
            }
          >
            {selected === item.name && showGroupedTable ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow className='rowBg'>
        <TableCell style={{ padding: 0 }} colSpan={6}>
          <Collapse in={selected === item.name} timeout='auto' unmountOnExit>
            <Table size='small' aria-label='purchases'>
              {/* {item.name === 'GBP' ? (
                <TableBody>
                  {showGroupedTable && getgroupedarrowdata?.data
                    ? getgroupedarrowdata?.data?.data?.map((data: any) => (
                        // eslint-disable-next-line react/jsx-indent
                        <TableRow className='data_currency table_body' key={data.transaction_id}>
                          <StyleTableCellCurrency align='left'>{data.name}</StyleTableCellCurrency>
                          <TableCell align='left'>{`£${data.disp.purchase}`}</TableCell>
                          <TableCell align='left'>{`£${data.disp.repayment}`}</TableCell>
                          <TableCell align='left'>{`£${data.disp.outstanding}`}</TableCell>
                          <TableCell align='left'>{`£${data.disp.fee}`}</TableCell>
                          <TableCell align='left' />
                        </TableRow>
                        // eslint-disable-next-line @typescript-eslint/indent
                      ))
                    : null}
                </TableBody>
              ) : (
                <TableBody>
                  {showGroupedTable && getgroupedarrowdata?.data
                    ? getgroupedarrowdata?.data?.data.map((data: any) => (
                        // eslint-disable-next-line react/jsx-indent
                        <TableRow className='data_currency table_body' key={data.transaction_id}>
                          <StyleTableCellCurrency align='left'>{data.name}</StyleTableCellCurrency>
                          <TableCell align='left'>{`$${data.disp.purchase}`}</TableCell>
                          <TableCell align='left'>{`$${data.disp.repayment}`}</TableCell>
                          <TableCell align='left'>{`$${data.disp.outstanding}`}</TableCell>
                          <TableCell align='left'>{`$${data.disp.fee}`}</TableCell>
                          <TableCell align='left' />
                        </TableRow>
                        // eslint-disable-next-line @typescript-eslint/indent
                      ))
                    : null}
                </TableBody>
              )} */}
              <TableBody>
                {showGroupedTable && getgroupedarrowdata?.data
                  ? getgroupedarrowdata?.data?.data?.map((data: any) => (
                      // eslint-disable-next-line react/jsx-indent
                      <TableRow className='data_currency table_body' key={data.transaction_id}>
                        <StyleTableCellCurrency align='left'>{data.name}</StyleTableCellCurrency>
                        <TableCell align='left'>
                          {`${getSymbolFromCurrency(item?.name ?? 'USD')}${data.disp.purchase}`}
                        </TableCell>
                        <TableCell align='left'>
                          {`${getSymbolFromCurrency(item?.name ?? 'USD')}${data.disp.repayment}`}
                        </TableCell>
                        <TableCell align='left'>
                          {`${getSymbolFromCurrency(item?.name ?? 'USD')}${data.disp.outstanding}`}
                        </TableCell>
                        <TableCell align='left'>
                          {`${getSymbolFromCurrency(item?.name ?? 'USD')}${data.disp.fee}`}
                        </TableCell>
                        <TableCell align='left' />
                        {/* <TableCell align='left'>{data.transaction_id}</TableCell> */}
                      </TableRow>
                      // eslint-disable-next-line @typescript-eslint/indent
                    ))
                  : null}
              </TableBody>
            </Table>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  transactionDataReducer: state.transactionLedgerReducer,
  getgroupedarrowdata: state.getgroupedarrowdata
});

export default connect(mapStateToProps)(TableCurrency);
