import { put, takeLatest, call } from 'redux-saga/effects';
import postApiCaller from '../../../../postApiCaller';

const API_DATA = (action: any) =>
  // const { currency = '', week = 'last_4_weeks', revenue = '' } = action.payload;
  postApiCaller('accounts/Team/', 'post', action.payload, true, false).then((response) => response);
const that = this;

export const GET_ADD_TEAM_SAGA = function* fetchUsers() {
  // eslint-disable-next-line
  yield takeLatest('GET_ADD_TEAM', function* (action) {
    yield put({ type: 'GET_ADD_TEAM_STARTED' });
    try {
      const DATA: typeof API_DATA = yield call(API_DATA.bind(that, action));
      // const DATA = yield call(API_DATA.bind(that, action));
      yield put({
        type: 'GET_ADD_TEAM_SUCCESS',
        payload: { status: 'success', data: DATA }
      });
    } catch (error) {
      if (error.toString() === 'TypeError: Network request failed') {
        yield put({
          type: 'GET_ADD_TEAM_NET_FAILED',
          payload: { status: 'failure', message: error.toString() }
        });
      } else {
        yield put({
          type: 'GET_ADD_TEAM_FAILED',
          payload: { status: 'failure', message: error }
        });
      }
    }
  });
};
