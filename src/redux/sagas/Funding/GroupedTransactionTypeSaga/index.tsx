import { put, takeLatest, call } from 'redux-saga/effects';
import getApiCaller from '../../../getApiCaller';

const API_DATA = (action: any) => {
  const { currency = '', week = '', revenue = '' } = action.payload;
  return getApiCaller(
    `reporting/CustomerTransactionLedgerGroupedTransactionType/?week=${week}&currency=${currency}&revenue_source_name=${revenue}`,
    'get',
    true
  ).then((response) => response);
};

const that = this;

export const GROUPED_TRANSACTION_TYPE_SAGA = function* fetchUsers() {
  // eslint-disable-next-line
  yield takeLatest('GROUPED_TRANSACTION_TYPE', function* (action) {
    yield put({ type: 'GROUPED_TRANSACTION_TYPE_STARTED' });
    try {
      const DATA: typeof API_DATA = yield call(API_DATA.bind(that, action));
      // const DATA = yield call(API_DATA.bind(that, action));
      yield put({
        type: 'GROUPED_TRANSACTION_TYPE_SUCCESS',
        payload: { status: 'success', data: DATA }
      });
    } catch (error) {
      if (error.toString() === 'TypeError: Network request failed') {
        yield put({
          type: 'GROUPED_TRANSACTION_TYPE_NET_FAILED',
          payload: { status: 'failure', message: error.toString() }
        });
      } else {
        yield put({
          type: 'GROUPED_TRANSACTION_TYPE_FAILED',
          payload: { status: 'failure', message: error }
        });
      }
    }
  });
};
