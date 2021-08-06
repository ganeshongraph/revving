import { put, takeLatest, call } from 'redux-saga/effects';
import getApiCaller from '../../getApiCaller';

const API_DATA = (action: any) => {
  const {
    week = 'last_4_weeks',
    transactionType = '',
    currency = '',
    page = 1,
    rowsPerPage = 1000,
    orderBy = 'created_at',
    getCsv,
    getExcel,
    getPdf
  } = action.payload;
  return getApiCaller(
    `reporting/RevenueSourcePerformance/?currency=${currency}&ordering=${orderBy}&week=${week}&transactionType=${transactionType}&page=${page}&page_size=${rowsPerPage}&get_csv=${getCsv}&get_excel=${getExcel}&get_pdf=${getPdf}`,
    'get',
    true
  ).then((response) => response);
};

const that = this;

export const GET_ADVANCE_LEDGER_SAGA = function* fetchUsers() {
  // eslint-disable-next-line
  yield takeLatest('GET_ADVANCE_LEDGER', function* (action) {
    yield put({ type: 'GET_ADVANCE_LEDGER_STARTED' });
    try {
      const DATA: typeof API_DATA = yield call(API_DATA.bind(that, action));
      // const DATA = yield call(API_DATA.bind(that, action));
      yield put({
        type: 'GET_ADVANCE_LEDGER_SUCCESS',
        payload: { status: 'success', data: DATA }
      });
    } catch (error) {
      if (error.toString() === 'TypeError: Network request failed') {
        yield put({
          type: 'GET_ADVANCE_LEDGER_NET_FAILED',
          payload: { status: 'failure', message: error.toString() }
        });
      } else {
        yield put({
          type: 'GET_ADVANCE_LEDGER_FAILED',
          payload: { status: 'failure', message: error }
        });
      }
    }
  });
};
