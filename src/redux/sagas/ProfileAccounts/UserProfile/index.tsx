import { put, takeLatest, call } from 'redux-saga/effects';
import getApiCaller from '../../../getApiCaller';

const API_DATA = (action: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  action.payload;
  return getApiCaller('accounts/Profile/', 'get', true).then((response) => response);
};

const that = this;

export const GET_USER_PROFILE_DATA_SAGA = function* fetchUsers() {
  // eslint-disable-next-line
  yield takeLatest('GET_USER_PROFILE_DATA', function* (action) {
    yield put({ type: 'GET_USER_PROFILE_DATA_STARTED' });
    try {
      const DATA: typeof API_DATA = yield call(API_DATA.bind(that, action));
      // const DATA = yield call(API_DATA.bind(that, action));
      yield put({
        type: 'GET_USER_PROFILE_DATA_SUCCESS',
        payload: { status: 'success', data: DATA }
      });
    } catch (error) {
      if (error.toString() === 'TypeError: Network request failed') {
        yield put({
          type: 'GET_USER_PROFILE_DATA_NET_FAILED',
          payload: { status: 'failure', message: error.toString() }
        });
      } else {
        yield put({
          type: 'GET_USER_PROFILE_DATA_FAILED',
          payload: { status: 'failure', message: error }
        });
      }
    }
  });
};
