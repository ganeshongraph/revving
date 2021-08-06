import { put, takeLatest, call } from 'redux-saga/effects';
import getApiCaller from '../../getApiCaller';

const API_DATA = (action: any) => {
  const { documentationtype = '', week = '', page = 1 } = action.payload;
  return getApiCaller(
    `reporting/Documentation/?documentation_type=${documentationtype}&week=${week}&page=${page}`,
    'get',
    true
  ).then((response: any) => response);
};

const that = this;

export const GET_DOCUMENTATION_SAGA = function* fetchUsers() {
  // eslint-disable-next-line
  yield takeLatest('GET_DOCUMENTATION', function* (action) {
    yield put({ type: 'GET_DOCUMENTATION_STARTED' });
    try {
      const DATA: typeof API_DATA = yield call(API_DATA.bind(that, action));
      // const DATA = yield call(API_DATA.bind(that, action));
      yield put({
        type: 'GET_DOCUMENTATION_SUCCESS',
        payload: { status: 'success', data: DATA }
      });
    } catch (error) {
      if (error.toString() === 'TypeError: Network request failed') {
        yield put({
          type: 'GET_DOCUMENTATION_NET_FAILED',
          payload: { status: 'failure', message: error.toString() }
        });
      } else {
        yield put({
          type: 'GET_DOCUMENTATION_FAILED',
          payload: { status: 'failure', message: error }
        });
      }
    }
  });
};
