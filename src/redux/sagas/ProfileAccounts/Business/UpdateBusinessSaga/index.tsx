import { put, takeLatest, call } from 'redux-saga/effects';
import postApiCaller from '../../../../postApiCaller';

const API_DATA = (action: any) => {
  const { name, regNumber, addressOne, addressTwo, city, postcode, country } = action.payload;
  const body = {
    name,
    reg_number: regNumber,
    address_one: addressOne,
    address_two: addressTwo,
    city,
    postcode,
    country
  };

  return postApiCaller('accounts/MyCustomerUserapi/', 'PATCH', body, true, false).then(
    (response) => response
  );
};

const that = this;

export const UPDATE_BUSINESS_SAGA = function* fetchUsers() {
  // eslint-disable-next-line
  yield takeLatest('UPDATE_BUSINESS', function* (action) {
    yield put({ type: 'UPDATE_BUSINESS_STARTED' });
    try {
      const DATA: typeof API_DATA = yield call(API_DATA.bind(that, action));
      // const DATA = yield call(API_DATA.bind(that, action));
      yield put({
        type: 'UPDATE_BUSINESS_SUCCESS',
        payload: { status: 'success', data: DATA }
      });
    } catch (error) {
      if (error.toString() === 'TypeError: Network request failed') {
        yield put({
          type: 'UPDATE_BUSINESS_NET_FAILED',
          payload: { status: 'failure', message: error.toString() }
        });
      } else {
        yield put({
          type: 'UPDATE_BUSINESS_FAILED',
          payload: { status: 'failure', message: error }
        });
      }
    }
  });
};
