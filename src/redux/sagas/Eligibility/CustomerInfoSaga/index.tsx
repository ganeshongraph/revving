import { put, takeLatest, call } from 'redux-saga/effects';
import postApiCaller from '../../../postApiCaller';

const API_DATA = (action: any) =>
  postApiCaller('accounts/CustomerUser/', 'post', action.payload, false, false).then(
    (response) => response
  );

const that = this;

export const SAVE_CUSTOMER_INFO_SAGA = function* fetchUsers() {
  // eslint-disable-next-line
  yield takeLatest('SAVE_CUSTOMER_INFO', function* (action) {
    yield put({ type: 'SAVE_CUSTOMER_INFO_STARTED' });
    try {
      const DATA: typeof API_DATA = yield call(API_DATA.bind(that, action));
      // const DATA = yield call(API_DATA.bind(that, action));
      yield put({
        type: 'SAVE_CUSTOMER_INFO_SUCCESS',
        payload: { status: 'success', data: DATA }
      });
    } catch (error) {
      if (error.toString() === 'TypeError: Network request failed') {
        yield put({
          type: 'SAVE_CUSTOMER_INFO_NET_FAILED',
          payload: { status: 'failure', message: error.toString() }
        });
      } else {
        yield put({
          type: 'SAVE_CUSTOMER_INFO_FAILED',
          payload: { status: 'failure', message: error }
        });
      }
    }
  });
};
