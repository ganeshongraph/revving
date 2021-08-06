import { put, takeLatest, call } from 'redux-saga/effects';
import getApiCaller from '../../../../getApiCaller';

const API_DATA = (action: any) =>
  getApiCaller('accounts/MyCustomerUserapi/', 'get', true).then((response) => response);

const that = this;

export const GET_BUSINESS_SAGA = function* fetchUsers() {
  // eslint-disable-next-line
  yield takeLatest('GET_BUSINESS', function* (action) {
    yield put({ type: 'GET_BUSINESS_STARTED' });
    try {
      const DATA: typeof API_DATA = yield call(API_DATA.bind(that, action));
      // const DATA = yield call(API_DATA.bind(that, action));
      yield put({
        type: 'GET_BUSINESS_SUCCESS',
        payload: { status: 'success', data: DATA }
      });
    } catch (error) {
      if (error.toString() === 'TypeError: Network request failed') {
        yield put({
          type: 'GET_BUSINESS_NET_FAILED',
          payload: { status: 'failure', message: error.toString() }
        });
      } else {
        yield put({
          type: 'GET_BUSINESS_FAILED',
          payload: { status: 'failure', message: error }
        });
      }
    }
  });
};
