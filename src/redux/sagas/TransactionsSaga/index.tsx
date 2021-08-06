import { put, takeLatest, call } from 'redux-saga/effects';
import getApiCaller from '../../getApiCaller';

const API_DATA = (action: any) => {
  const {
    week = 'last_4_weeks',
    transactionType = '',
    currency = '',
    source = '',
    page = 1,
    rowsPerPage = 10,
    orderBy = 'created_at',
    getCsv,
    getExcel,
    getPdf
  } = action.payload;
  return getApiCaller(
    `reporting/CustomerTransactionLedger/?currency=${currency}&transaction_type_multiple=repayment%2Csurplus_distribution%2Ccollection%2Cpurchase%2Cdepreciation&ordering=${orderBy}&week=${week}&transaction_type=${transactionType}&revenue_source_name=${source}&page=${page}&page_size=${rowsPerPage}&get_csv=${getCsv}&get_excel=${getExcel}&get_pdf=${getPdf}`,
    'get',
    true
  ).then((response) => response);
};

const that = this;

export const GET_TRANSACTION_LEDGER_SAGA = function* fetchUsers() {
  // eslint-disable-next-line
  yield takeLatest('GET_TRANSACTION_LEDGER', function* (action) {
    yield put({ type: 'GET_TRANSACTION_LEDGER_STARTED' });
    try {
      const DATA: typeof API_DATA = yield call(API_DATA.bind(that, action));
      // const DATA = yield call(API_DATA.bind(that, action));
      yield put({
        type: 'GET_TRANSACTION_LEDGER_SUCCESS',
        payload: { status: 'success', data: DATA }
      });
    } catch (error) {
      if (error.toString() === 'TypeError: Network request failed') {
        yield put({
          type: 'GET_TRANSACTION_LEDGER_NET_FAILED',
          payload: { status: 'failure', message: error.toString() }
        });
      } else {
        yield put({
          type: 'GET_TRANSACTION_LEDGER_FAILED',
          payload: { status: 'failure', message: error }
        });
      }
    }
  });
};
