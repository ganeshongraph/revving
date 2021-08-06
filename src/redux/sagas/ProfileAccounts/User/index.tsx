import { put, takeLatest, call } from 'redux-saga/effects';
import postApiCaller from '../../../postApiCaller';

const API_DATA = (action: any) =>
  postApiCaller('accounts/user/', 'PATCH', action.payload, true, false).then(
    (response) => response
  );

const that = this;

export const SAVE_USER_DATA_SAGA = function* fetchUsers() {
  // eslint-disable-next-line
  yield takeLatest('SAVE_USER_DATA', function* (action) {
    yield put({ type: 'SAVE_USER_DATA_STARTED' });
    try {
      const DATA: typeof API_DATA = yield call(API_DATA.bind(that, action));
      // const DATA = yield call(API_DATA.bind(that, action));
      yield put({
        type: 'SAVE_USER_DATA_SUCCESS',
        payload: { status: 'success', data: DATA }
      });
    } catch (error) {
      if (error.toString() === 'TypeError: Network request failed') {
        yield put({
          type: 'SAVE_USER_DATA_NET_FAILED',
          payload: { status: 'failure', message: error.toString() }
        });
      } else {
        yield put({
          type: 'SAVE_USER_DATA_FAILED',
          payload: { status: 'failure', message: error }
        });
      }
    }
  });
};
