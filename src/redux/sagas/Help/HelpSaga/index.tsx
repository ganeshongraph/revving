import { put, takeLatest, call } from 'redux-saga/effects';
import postApiCaller from '../../../postApiCaller';

const API_DATA = (action: any) =>
  postApiCaller('accounts/Help/', 'post', action.payload, true, false).then((response) => response);

const that = this;

export const HELP_USER_SAGA = function* fetchUsers() {
  // eslint-disable-next-line
  yield takeLatest('HELP_USER', function* (action) {
    yield put({ type: 'HELP_USER_STARTED' });
    try {
      const DATA: typeof API_DATA = yield call(API_DATA.bind(that, action));
      // const DATA = yield call(API_DATA.bind(that, action));
      yield put({
        type: 'HELP_USER_SUCCESS',
        payload: { status: 'success', data: DATA }
      });
    } catch (error) {
      if (error.toString() === 'TypeError: Network request failed') {
        yield put({
          type: 'HELP_USER_NET_FAILED',
          payload: { status: 'failure', message: error.toString() }
        });
      } else {
        yield put({
          type: 'HELP_USER_FAILED',
          payload: { status: 'failure', message: error }
        });
      }
    }
  });
};
