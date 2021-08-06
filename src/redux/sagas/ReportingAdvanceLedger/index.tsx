import { put, takeLatest, call } from 'redux-saga/effects';
import getApiCaller from '../../getApiCaller';
/*  eslint-disable */
const API_DATA = (action: any) => {
  const {
    revenue_source_name = '',
    page = 1,
    week,
    status,
    rowsPerPage = 10,
    getCsv,
    getPdf,
    getExcel
  } = action.payload;
  return getApiCaller(`reporting/AdvanceLedger/?revenue_source_name=${revenue_source_name}&week=${week}&status=${status}&page=${page}&page_size=${rowsPerPage}&get_csv=${getCsv}&get_excel=${getExcel}&get_pdf=${getPdf}`, 'get', true).then((response) => response);
};

const that = this;

export const GET_REPORTING_ADVANCE_LEDGER_SAGA = function* fetchUsers() {
  // eslint-disable-next-line
  yield takeLatest('GET_REPORTING_ADVANCE_LEDGER', function* (action) {
    yield put({ type: 'GET_REPORTING_ADVANCE_LEDGER_STARTED' });
    try {
      const DATA: typeof API_DATA = yield call(API_DATA.bind(that, action));
      // const DATA = yield call(API_DATA.bind(that, action));
      yield put({
        type: 'GET_REPORTING_ADVANCE_LEDGER_SUCCESS',
        payload: { status: 'success', data: DATA }
      });
    } catch (error) {
      if (error.toString() === 'TypeError: Network request failed') {
        yield put({
          type: 'GET_REPORTING_ADVANCE_LEDGER_NET_FAILED',
          payload: { status: 'failure', message: error.toString() }
        });
      } else {
        yield put({
          type: 'GET_REPORTING_ADVANCE_LEDGER_FAILED',
          payload: { status: 'failure', message: error }
        });
      }
    }
  });
};
