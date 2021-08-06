import { put, takeLatest, call } from 'redux-saga/effects';
import getApiCaller from '../../../getApiCaller';

const API_DATA = (action: any) =>
  // const { currency = '', week = 'last_4_weeks', revenue = '' } = action.payload;
  getApiCaller('reporting/LatestAdvances/', 'get', true).then((response) => response);
const that = this;

export const GET_LATEST_ADVANCED_SAGA = function* fetchUsers() {
  // eslint-disable-next-line
  yield takeLatest('GET_LATEST_ADVANCED', function* (action) {
    yield put({ type: 'GET_LATEST_ADVANCED_STARTED' });
    try {
      const DATA: typeof API_DATA = yield call(API_DATA.bind(that, action));
      // const DATA = yield call(API_DATA.bind(that, action));
      yield put({
        type: 'GET_LATEST_ADVANCED_SUCCESS',
        payload: { status: 'success', data: DATA }
      });
    } catch (error) {
      if (error.toString() === 'TypeError: Network request failed') {
        yield put({
          type: 'GET_LATEST_ADVANCED_NET_FAILED',
          payload: { status: 'failure', message: error.toString() }
        });
      } else {
        yield put({
          type: 'GET_LATEST_ADVANCED_FAILED',
          payload: { status: 'failure', message: error }
        });
      }
    }
  });
};
