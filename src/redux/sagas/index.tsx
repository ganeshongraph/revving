import { all } from 'redux-saga/effects';
import { LOGIN_USER_SAGA } from './Login/loginSaga';
import { BUSINESS_STATS_SAGA } from './Eligibility/BusinessTypeSaga';
import { SAVE_STEPPER_SAGA } from './Eligibility/StepperSaga';
import { CURRENT_USER_ID_SAGA } from './Eligibility/CurrentUserIdSaga';
import { SAVE_CUSTOMER_INFO_SAGA } from './Eligibility/CustomerInfoSaga';
import { CREATE_CUSTOMER_SAGA } from './Eligibility/CreateUserSaga';
import { UPDATE_CUSTOMER_INFO_SAGA } from './Eligibility/UpdateCustomerInfoSaga';
import { BULK_CREATE_REVENUE_SAGA } from './Eligibility/BulkCreateRevenueSaga';
import { SEND_SMS_SAGA } from './Sms/SendSmsSaga';
import { GET_TRANSACTION_LEDGER_SAGA } from './TransactionsSaga';
import { GET_GROUPED_REVENUE_SAGA } from './Funding/GroupedRevenueSourcesSaga';
import { GET_GROUPED_CURRENCY_SAGA } from './Funding/GroupedCurrencySaga';
import { GROUPED_TRANSACTION_TYPE_SAGA } from './Funding/GroupedTransactionTypeSaga';
import { GROUPED_WEEK_SAGA } from './Funding/GroupedWeekSaga';
import { GET_RELATED_CURRENCY_SAGA } from './RelatedCurrencySaga';
import { SAVE_USER_DATA_SAGA } from './ProfileAccounts/User';
import { GET_USER_PROFILE_DATA_SAGA } from './ProfileAccounts/UserProfile';
import { GET_LATEST_ADVANCED_SAGA } from './Funding/LatestAdvances';
import { GET_FEE_SAGA } from './Account/FeeSaga';
// import { SAVE_USER_DATA_SAGA } from './Accounts/User';
// import { GET_USER_PROFILE_DATA_SAGA } from './Accounts/UserProfile';
import { GET_ACCOUNT_PREFERENCES_SAGA } from './ProfileAccounts/GetAccountPreferencesSaga';
import { UPDATE_ACCOUNT_PREFERENCES_SAGA } from './ProfileAccounts/UpdateAccountPreferencesSaga';
import { GET_REVENUE_SOURCES_SAGA } from './ProfileAccounts/Integrations/GetRevenueSourcesSaga';
import { UPDATE_REVENUE_SOURCE_SAGA } from './ProfileAccounts/Integrations/UpdateRevenueSourceSaga';
import { DELETE_REVENUE_SOURCE_SAGA } from './ProfileAccounts/Integrations/DeleteRevenueSourceSaga';
import { ADD_REVENUE_SOURCE_SAGA } from './ProfileAccounts/Integrations/AddRevenueSourceSaga';
import { GET_BUSINESS_SAGA } from './ProfileAccounts/Business/GetBusinessSaga';
import { UPDATE_BUSINESS_SAGA } from './ProfileAccounts/Business/UpdateBusinessSaga';
import { GET_MY_CUSTOMER_USER_SAGA } from './Account/Integrations';
import { GET_ADVANCE_LEDGER_SAGA } from './AdvanceLedger';
import { GET_REPORTING_ADVANCE_LEDGER_SAGA } from './ReportingAdvanceLedger';
import { GET_INVOICE_LEDGER_SAGA } from './InvoiceLedger';
import { GET_PERFORMANCE_COLLECTION_SAGA } from './PerformanceCollection';
import { HELP_USER_SAGA } from './Help/HelpSaga';
import { GET_ALL_REVENUE_SOURCES_SAGA } from './ReportingAdvanceLedger/RevenueSources';
import { GET_GROUPED_ARROW_DATA_SAGA } from './Funding/FundingArrowSaga';
import { GET_ADD_TEAM_SAGA } from './Account/Administration/Team/Add';
import { GET_TEAM_SAGA } from './Account/Administration/Team/Get';
import { GET_REMOVE_TEAM_SAGA } from './Account/Administration/Team/Remove';
import { GET_UPDATE_OWNER_SAGA } from './Account/Administration/Owner/Update';
import { GET_DOCUMENTATION_SAGA } from './Documentation';
// Wrap all sagas in a container
const rootSaga = function* rootSaga() {
  yield all([
    SEND_SMS_SAGA(),
    LOGIN_USER_SAGA(),
    BUSINESS_STATS_SAGA(),
    SAVE_STEPPER_SAGA(),
    SAVE_CUSTOMER_INFO_SAGA(),
    CREATE_CUSTOMER_SAGA(),
    UPDATE_CUSTOMER_INFO_SAGA(),
    BULK_CREATE_REVENUE_SAGA(),
    CURRENT_USER_ID_SAGA(),
    GET_TRANSACTION_LEDGER_SAGA(),
    GET_GROUPED_REVENUE_SAGA(),
    GET_GROUPED_CURRENCY_SAGA(),
    GROUPED_TRANSACTION_TYPE_SAGA(),
    GROUPED_WEEK_SAGA(),
    GET_RELATED_CURRENCY_SAGA(),
    SAVE_USER_DATA_SAGA(),
    GET_USER_PROFILE_DATA_SAGA(),
    GET_LATEST_ADVANCED_SAGA(),
    GET_FEE_SAGA(),
    GET_ACCOUNT_PREFERENCES_SAGA(),
    UPDATE_ACCOUNT_PREFERENCES_SAGA(),
    GET_REVENUE_SOURCES_SAGA(),
    UPDATE_REVENUE_SOURCE_SAGA(),
    DELETE_REVENUE_SOURCE_SAGA(),
    ADD_REVENUE_SOURCE_SAGA(),
    GET_BUSINESS_SAGA(),
    UPDATE_BUSINESS_SAGA(),
    GET_MY_CUSTOMER_USER_SAGA(),
    GET_ADVANCE_LEDGER_SAGA(),
    GET_REPORTING_ADVANCE_LEDGER_SAGA(),
    GET_INVOICE_LEDGER_SAGA(),
    GET_PERFORMANCE_COLLECTION_SAGA(),
    HELP_USER_SAGA(),
    GET_ALL_REVENUE_SOURCES_SAGA(),
    GET_GROUPED_ARROW_DATA_SAGA(),
    GET_ADD_TEAM_SAGA(),
    GET_REMOVE_TEAM_SAGA(),
    GET_UPDATE_OWNER_SAGA(),
    GET_DOCUMENTATION_SAGA(),
    GET_TEAM_SAGA()
  ]);
};

export default rootSaga;
