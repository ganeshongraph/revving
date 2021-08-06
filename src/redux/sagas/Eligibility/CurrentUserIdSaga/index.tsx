import { put, takeLatest } from 'redux-saga/effects';

export const CURRENT_USER_ID_SAGA = function* fetchUsers() {
  // eslint-disable-next-line
  yield takeLatest('CURRENT_USER_ID', function* (action: any) {
    yield put({ type: 'CURRENT_USER_ID_STARTED' });
    try {
      const DATA = action.payload;
      yield put({
        type: 'CURRENT_USER_ID_SUCCESS',
        payload: { status: 'success', data: DATA }
      });
    } catch (error) {
      if (error.toString() === 'TypeError: Network request failed') {
        yield put({
          type: 'CURRENT_USER_ID_NET_FAILED',
          payload: { status: 'failure', message: error.toString() }
        });
      } else {
        yield put({
          type: 'CURRENT_USER_ID_FAILED',
          payload: { status: 'failure', message: error }
        });
      }
    }
  });
};
