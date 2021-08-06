import { put, takeLatest, call } from 'redux-saga/effects';
import postApiCaller from '../../../postApiCaller';

const API_DATA = (action: any) =>
  postApiCaller('accounts/Sendsms/', 'post', action.payload, false, false).then(
    (response) => response
  );

const that = this;

export const SEND_SMS_SAGA = function* fetchUsers() {
  // eslint-disable-next-line
  yield takeLatest('SEND_SMS', function* (action) {
    yield put({ type: 'SEND_SMS_STARTED' });
    try {
      const DATA: typeof API_DATA = yield call(API_DATA.bind(that, action));
      // const DATA = yield call(API_DATA.bind(that, action));
      yield put({
        type: 'SEND_SMS_SUCCESS',
        payload: { status: 'success', data: DATA }
      });
    } catch (error) {
      if (error.toString() === 'TypeError: Network request failed') {
        yield put({
          type: 'SEND_SMS_NET_FAILED',
          payload: { status: 'failure', message: error.toString() }
        });
      } else {
        yield put({
          type: 'SEND_SMS_FAILED',
          payload: { status: 'failure', message: error }
        });
      }
    }
  });
};
