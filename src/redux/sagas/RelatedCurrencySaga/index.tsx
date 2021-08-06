import { put, takeLatest, call } from 'redux-saga/effects';
import getApiCaller from '../../getApiCaller';

// const API_DATA = (action: any) =>
//   getApiCaller('reporting/CustomerTransactionLedger/', 'get', true).then((response) => response);

const API_DATA = (action: any) => {
  const { currency = '', page = 1, rowsPerPage = 1000, orderBy = 'created_at' } = action.payload;
  return getApiCaller(
    `reporting/CustomerTransactionLedger/?currency=${currency}&ordering=${orderBy}&page=${page}&page_size=${rowsPerPage}`,
    'get',
    true
  ).then((response) => response);
};

const that = this;

export const GET_RELATED_CURRENCY_SAGA = function* fetchUsers() {
  // eslint-disable-next-line
  yield takeLatest('GET_RELATED_CURRENCY', function* (action) {
    yield put({ type: 'GET_RELATED_CURRENCY_STARTED' });
    try {
      const DATA: typeof API_DATA = yield call(API_DATA.bind(that, action));
      // const DATA = yield call(API_DATA.bind(that, action));
      yield put({
        type: 'GET_RELATED_CURRENCY_SUCCESS',
        payload: { status: 'success', data: DATA }
      });
    } catch (error) {
      if (error.toString() === 'TypeError: Network request failed') {
        yield put({
          type: 'GET_RELATED_CURRENCY_NET_FAILED',
          payload: { status: 'failure', message: error.toString() }
        });
      } else {
        yield put({
          type: 'GET_RELATED_CURRENCY_FAILED',
          payload: { status: 'failure', message: error }
        });
      }
    }
  });
};
