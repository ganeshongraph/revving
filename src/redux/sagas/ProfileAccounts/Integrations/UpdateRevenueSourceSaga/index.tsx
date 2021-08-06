import { put, takeLatest, call } from 'redux-saga/effects';
import postApiCaller from '../../../../postApiCaller';

const API_DATA = (action: any) => {
  const { id, name, currency } = action.payload;
  const body = {
    name,
    currency
  };
  return postApiCaller(`accounts/CustomerRevenueSource/${id}`, 'PATCH', body, true, false).then(
    (response) => response
  );
};

const that = this;

export const UPDATE_REVENUE_SOURCE_SAGA = function* fetchUsers() {
  // eslint-disable-next-line
  yield takeLatest('UPDATE_REVENUE_SOURCE', function* (action) {
    yield put({ type: 'UPDATE_REVENUE_SOURCE_STARTED' });
    try {
      const DATA: typeof API_DATA = yield call(API_DATA.bind(that, action));
      // const DATA = yield call(API_DATA.bind(that, action));
      yield put({
        type: 'UPDATE_REVENUE_SOURCE_SUCCESS',
        payload: { status: 'success', data: DATA }
      });
    } catch (error) {
      if (error.toString() === 'TypeError: Network request failed') {
        yield put({
          type: 'UPDATE_REVENUE_SOURCE_NET_FAILED',
          payload: { status: 'failure', message: error.toString() }
        });
      } else {
        yield put({
          type: 'UPDATE_REVENUE_SOURCE_FAILED',
          payload: { status: 'failure', message: error }
        });
      }
    }
  });
};
