import { put, takeLatest, call } from 'redux-saga/effects';
import getApiCaller from '../../getApiCaller';

const API_DATA = (action: any) => {
  const {
    monthlyId,
    currency = '',
    rowsPerPage = 1000,
    revSourceId,
    getCsv,
    getExcel,
    getPdf
  } = action.payload;
  return getApiCaller(
    `reporting/RevenueSourcePerformanceCollection/${monthlyId}/${revSourceId}/${currency}/?page_size=${rowsPerPage}&get_csv=${getCsv}&get_excel=${getExcel}&get_pdf=${getPdf}`,
    'get',
    true
  ).then((response) => response);
};

const that = this;

export const GET_PERFORMANCE_COLLECTION_SAGA = function* fetchUsers() {
  // eslint-disable-next-line
  yield takeLatest('GET_PERFORMANCE_COLLECTION', function* (action) {
    yield put({ type: 'GET_PERFORMANCE_COLLECTION_STARTED' });
    try {
      const DATA: typeof API_DATA = yield call(API_DATA.bind(that, action));
      // const DATA = yield call(API_DATA.bind(that, action));
      yield put({
        type: 'GET_PERFORMANCE_COLLECTION_SUCCESS',
        payload: { status: 'success', data: DATA }
      });
    } catch (error) {
      if (error.toString() === 'TypeError: Network request failed') {
        yield put({
          type: 'GET_PERFORMANCE_COLLECTION_NET_FAILED',
          payload: { status: 'failure', message: error.toString() }
        });
      } else {
        yield put({
          type: 'GET_PERFORMANCE_COLLECTION_FAILED',
          payload: { status: 'failure', message: error }
        });
      }
    }
  });
};
