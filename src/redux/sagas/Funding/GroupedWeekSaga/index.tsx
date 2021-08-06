import { put, takeLatest, call } from 'redux-saga/effects';
import getApiCaller from '../../../getApiCaller';

const API_DATA = (action: any) => {
  const { currency = '', week = 'last_4_weeks', revenue = '' } = action.payload;
  return getApiCaller(
    `reporting/CustomerTransactionLedgerGroupedWeek/?week=${week}&currency=${currency}&revenue_source_name=${revenue}`,
    'get',
    true
  ).then((response) => response);
};

const that = this;

export const GROUPED_WEEK_SAGA = function* fetchUsers() {
  // eslint-disable-next-line
  yield takeLatest('GROUPED_WEEK', function* (action) {
    yield put({ type: 'GROUPED_WEEK_STARTED' });
    try {
      const DATA: typeof API_DATA = yield call(API_DATA.bind(that, action));
      // const DATA = yield call(API_DATA.bind(that, action));
      yield put({
        type: 'GROUPED_WEEK_SUCCESS',
        payload: { status: 'success', data: DATA }
      });
    } catch (error) {
      if (error.toString() === 'TypeError: Network request failed') {
        yield put({
          type: 'GROUPED_WEEK_NET_FAILED',
          payload: { status: 'failure', message: error.toString() }
        });
      } else {
        yield put({
          type: 'GROUPED_WEEK_FAILED',
          payload: { status: 'failure', message: error }
        });
      }
    }
  });
};
