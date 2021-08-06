import { put, takeLatest, call } from 'redux-saga/effects';
import getApiCaller from '../../getApiCaller';

const API_DATA = (action: any) => {
  const {
    monthly_invoice_id,
    rowsPerPage = 1000,
    revenue_source,
    currency = '',
    getCsv,
    getExcel,
    getPdf
  } = action.payload;
  return getApiCaller(
    `reporting/InvoiceLedger/?invoice__monthly_invoice__monthly_invoice_id=${monthly_invoice_id}&invoice__revenue_source__master__name=${revenue_source}&invoice__currency=${currency}&page_size=${rowsPerPage}&get_csv=${getCsv}&get_excel=${getExcel}&get_pdf=${getPdf}`,
    'get',
    true
  ).then((response) => response);
};

const that = this;

export const GET_INVOICE_LEDGER_SAGA = function* fetchUsers() {
  // eslint-disable-next-line
  yield takeLatest('GET_INVOICE_LEDGER', function* (action) {
    yield put({ type: 'GET_INVOICE_LEDGER_STARTED' });
    try {
      const DATA: typeof API_DATA = yield call(API_DATA.bind(that, action));
      // const DATA = yield call(API_DATA.bind(that, action));
      yield put({
        type: 'GET_INVOICE_LEDGER_SUCCESS',
        payload: { status: 'success', data: DATA }
      });
    } catch (error) {
      if (error.toString() === 'TypeError: Network request failed') {
        yield put({
          type: 'GET_INVOICE_LEDGER_NET_FAILED',
          payload: { status: 'failure', message: error.toString() }
        });
      } else {
        yield put({
          type: 'GET_INVOICE_LEDGER_FAILED',
          payload: { status: 'failure', message: error }
        });
      }
    }
  });
};
