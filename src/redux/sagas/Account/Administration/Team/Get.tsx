import { put, takeLatest, call } from 'redux-saga/effects';
import getApiCaller from '../../../../getApiCaller';

const API_DATA = (action: any) => {
  const { page = 1 } = action.payload;
  return getApiCaller(`accounts/Team/?page=${page}`, 'get', true).then((response: any) => response);
};

const that = this;

export const GET_TEAM_SAGA = function* fetchUsers() {
  // eslint-disable-next-line
  yield takeLatest('GET_TEAM', function* (action) {
    yield put({ type: 'GET_TEAM_STARTED' });
    try {
      const DATA: typeof API_DATA = yield call(API_DATA.bind(that, action));
      // const DATA = yield call(API_DATA.bind(that, action));
      yield put({
        type: 'GET_TEAM_SUCCESS',
        payload: { status: 'success', data: DATA }
      });
    } catch (error) {
      if (error.toString() === 'TypeError: Network request failed') {
        yield put({
          type: 'GET_TEAM_NET_FAILED',
          payload: { status: 'failure', message: error.toString() }
        });
      } else {
        yield put({
          type: 'GET_TEAM_FAILED',
          payload: { status: 'failure', message: error }
        });
      }
    }
  });
};
