import { put, takeLatest, call } from 'redux-saga/effects';
import getApiCaller from '../../../../getApiCaller';

const API_DATA = (action: any) =>
  getApiCaller('accounts/CustomerRevenueSource/', 'get', true).then((response) => response);

const that = this;

export const GET_REVENUE_SOURCES_SAGA = function* fetchUsers() {
  // eslint-disable-next-line
  yield takeLatest('GET_REVENUE_SOURCES', function* (action) {
    yield put({ type: 'GET_REVENUE_SOURCES_STARTED' });
    try {
      const DATA: typeof API_DATA = yield call(API_DATA.bind(that, action));
      // const DATA = yield call(API_DATA.bind(that, action));
      yield put({
        type: 'GET_REVENUE_SOURCES_SUCCESS',
        payload: { status: 'success', data: DATA }
      });
    } catch (error) {
      if (error.toString() === 'TypeError: Network request failed') {
        yield put({
          type: 'GET_REVENUE_SOURCES_NET_FAILED',
          payload: { status: 'failure', message: error.toString() }
        });
      } else {
        yield put({
          type: 'GET_REVENUE_SOURCES_FAILED',
          payload: { status: 'failure', message: error }
        });
      }
    }
  });
};
