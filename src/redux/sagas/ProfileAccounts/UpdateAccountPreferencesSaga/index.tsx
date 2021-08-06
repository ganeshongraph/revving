import { put, takeLatest, call } from 'redux-saga/effects';
import postApiCaller from '../../../postApiCaller';

const API_DATA = (action: any) => {
  const {
    emailNotifications,
    notifyAdvanceDeposit,
    notifyRepayment,
    notifyFeeAdjustments,
    notifyNewDocCreated
  } = action.payload;
  const body = {
    email_notifications: emailNotifications,
    notify_advance_deposit: notifyAdvanceDeposit,
    notify_repayment: notifyRepayment,
    notify_fee_adjustments: notifyFeeAdjustments,
    notify_new_doc_created: notifyNewDocCreated
  };

  return postApiCaller('reporting/UserSettings/', 'PATCH', body, true, false).then(
    (response) => response
  );
};

const that = this;

export const UPDATE_ACCOUNT_PREFERENCES_SAGA = function* fetchUsers() {
  // eslint-disable-next-line
  yield takeLatest('UPDATE_ACCOUNT_PREFERENCES', function* (action) {
    yield put({ type: 'UPDATE_ACCOUNT_PREFERENCES_STARTED' });
    try {
      const DATA: typeof API_DATA = yield call(API_DATA.bind(that, action));
      // const DATA = yield call(API_DATA.bind(that, action));
      yield put({
        type: 'UPDATE_ACCOUNT_PREFERENCES_SUCCESS',
        payload: { status: 'success', data: DATA }
      });
    } catch (error) {
      if (error.toString() === 'TypeError: Network request failed') {
        yield put({
          type: 'UPDATE_ACCOUNT_PREFERENCES_NET_FAILED',
          payload: { status: 'failure', message: error.toString() }
        });
      } else {
        yield put({
          type: 'UPDATE_ACCOUNT_PREFERENCES_FAILED',
          payload: { status: 'failure', message: error }
        });
      }
    }
  });
};
