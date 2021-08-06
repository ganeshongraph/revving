import { put, takeLatest, call } from 'redux-saga/effects';
import postApiCaller from '../../../postApiCaller';

const API_DATA = (action: any) =>
  postApiCaller('accounts/token/', 'post', action.payload, false, false).then(
    (response) => response
  );

const that = this;

export const LOGIN_USER_SAGA = function* fetchUsers() {
  // eslint-disable-next-line
  yield takeLatest('LOGIN_USER', function* (action) {
    yield put({ type: 'LOGIN_USER_STARTED' });
    try {
      const DATA: typeof API_DATA = yield call(API_DATA.bind(that, action));
      // const DATA = yield call(API_DATA.bind(that, action));
      yield put({
        type: 'LOGIN_USER_SUCCESS',
        payload: { status: 'success', data: DATA }
      });
    } catch (error) {
      if (error.toString() === 'TypeError: Network request failed') {
        yield put({
          type: 'LOGIN_USER_NET_FAILED',
          payload: { status: 'failure', message: error.toString() }
        });
      } else {
        yield put({
          type: 'LOGIN_USER_FAILED',
          payload: { status: 'failure', message: error }
        });
      }
    }
  });
};
