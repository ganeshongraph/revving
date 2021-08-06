import { put, takeLatest, call } from 'redux-saga/effects';
import getApiCaller from '../../../getApiCaller';

const API_DATA = (action: any) =>
  getApiCaller('accounts/AnswerOptions/', 'get', false).then((response) => response);

const that = this;

export const BUSINESS_STATS_SAGA = function* fetchUsers() {
  // eslint-disable-next-line
  yield takeLatest('BUSINESS_STATS', function* (action) {
    yield put({ type: 'BUSINESS_STATS_STARTED' });
    try {
      const DATA: typeof API_DATA = yield call(API_DATA.bind(that, action));
      // const DATA = yield call(API_DATA.bind(that, action));
      yield put({
        type: 'BUSINESS_STATS_SUCCESS',
        payload: { status: 'success', data: DATA }
      });
    } catch (error) {
      if (error.toString() === 'TypeError: Network request failed') {
        yield put({
          type: 'BUSINESS_STATS_NET_FAILED',
          payload: { status: 'failure', message: error.toString() }
        });
      } else {
        yield put({
          type: 'BUSINESS_STATS_FAILED',
          payload: { status: 'failure', message: error }
        });
      }
    }
  });
};
