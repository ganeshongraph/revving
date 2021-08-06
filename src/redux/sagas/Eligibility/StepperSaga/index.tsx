import { put, takeLatest } from 'redux-saga/effects';

export const SAVE_STEPPER_SAGA = function* fetchUsers() {
  // eslint-disable-next-line
  yield takeLatest('SAVE_STEPPER', function* (action: any) {
    yield put({ type: 'SAVE_STEPPER_STARTED' });
    try {
      const DATA = action.payload;
      // const DATA = yield call(API_DATA.bind(that, action));
      yield put({
        type: 'SAVE_STEPPER_SUCCESS',
        payload: { status: 'success', data: DATA }
      });
    } catch (error) {
      if (error.toString() === 'TypeError: Network request failed') {
        yield put({
          type: 'SAVE_STEPPER_NET_FAILED',
          payload: { status: 'failure', message: error.toString() }
        });
      } else {
        yield put({
          type: 'SAVE_STEPPER_FAILED',
          payload: { status: 'failure', message: error }
        });
      }
    }
  });
};
