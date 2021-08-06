import { put, takeLatest, call } from 'redux-saga/effects';
import postApiCaller from '../../../postApiCaller';

const API_DATA = (action: any) =>
  postApiCaller('accounts/create/', 'post', action.payload, false, false).then(
    (response) => response
  );

const that = this;

export const CREATE_CUSTOMER_SAGA = function* fetchUsers() {
  // eslint-disable-next-line
  yield takeLatest('CREATE_CUSTOMER', function* (action) {
    yield put({ type: 'CREATE_CUSTOMER_STARTED' });
    try {
      const DATA: typeof API_DATA = yield call(API_DATA.bind(that, action));
      // const DATA = yield call(API_DATA.bind(that, action));
      yield put({
        type: 'CREATE_CUSTOMER_SUCCESS',
        payload: { status: 'success', data: DATA }
      });
    } catch (error) {
      if (error.toString() === 'TypeError: Network request failed') {
        yield put({
          type: 'CREATE_CUSTOMER_NET_FAILED',
          payload: { status: 'failure', message: error.toString() }
        });
      } else {
        yield put({
          type: 'CREATE_CUSTOMER_FAILED',
          payload: { status: 'failure', message: error }
        });
      }
    }
  });
};
