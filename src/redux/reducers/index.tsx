import { combineReducers } from 'redux';
import login from './Login/loginReducer';
import businessType from './Eligibility/BusinessTypeReducer';
import stepperReducer from './Eligibility/SaveStepperReducer';
import customerInfoReducer from './Eligibility/CustomerInfoReducer';
import createCustomerReducer from './Eligibility/CreateCustomerReducer';
import updateCustomerReducer from './Eligibility/UpdateCustomerReducer';
import bulkCreateRevenueReducer from './Eligibility/BulkCreateRevenueReducer';
import currentUserIdReducer from './Eligibility/CurrentUserIdReducer';
import sendSmsReducer from './Sms/SmsReducer';
import transactionLedgerReducer from './Transactions';
import groupedRevenueReducer from './Funding/GroupedRevenueReducer';
import groupedCurrencyReducer from './Funding/GroupedCurrencyReducer';
import groupedTypeReducer from './Funding/GroupTransTypeReducer';
import groupedTransWeekReducer from './Funding/GroupedTransWeekReducer';
import relatedCurrencyReducer from './RelatedCurrency';
import saveUserReducer from './ProfileAccounts/UserReducer';
import userProfileReducer from './ProfileAccounts/UserProfile';
import lastestAdvancesReducer from './Funding/LatestAdvances';
import feeReducer from './Account/FeeReducer';
// import saveUserReducer from './Accounts/UserReducer';
// import userProfileReducer from './Accounts/UserProfile';
import accountPreferencesReducer from './ProfileAccounts/GetAccountPreferencesReducer';
import updateAccPreferencesReducer from './ProfileAccounts/UpdateAccPreferencesReducer';
import getRevenueSourceReducer from './ProfileAccounts/Integrations/GetRevenueSourcesReducer';
import addRevenueSourceReducer from './ProfileAccounts/Integrations/AddRevenueSourceReducer';
import updateRevenueSourceReducer from './ProfileAccounts/Integrations/UpdateRevenueSourceReducer';
import deleteRevenueSourceReducer from './ProfileAccounts/Integrations/DeleteRevenueSourceReducer';
import getBusinessReducer from './ProfileAccounts/Business/GetBusinessReducer';
import updateBusinessReducer from './ProfileAccounts/Business/UpdateBusinessReducer';
import IntegrationsReducer from './Account/IntegrationsReducer';
import AdvanceLedgerReducer from './AdvanceLedger';
import ReportingAdvanceLedger from './ReportingAdvanceLedger';
import InvoiceLedger from './InvoiceLedger';
import PerformanceCollection from './PerformanceCollection';
import HelpReducer from './Help/HelpReducer';
import RevenueSources from './ReportingAdvanceLedger/RevenueSources';
import getgroupedarrowdata from './Funding/FundingArrowReducer';
import AddTeam from './Account/Administration/Team/Add';
import GetTeam from './Account/Administration/Team/Get';
import RemoveTeam from './Account/Administration/Team/Remove';
import GetOwner from './Account/Administration/Owner/Get';

import Documentation from './Documentation';

const appReducer = combineReducers({
  getgroupedarrowdata,
  login,
  businessType,
  sendSmsReducer,
  stepperReducer,
  customerInfoReducer,
  createCustomerReducer,
  updateCustomerReducer,
  bulkCreateRevenueReducer,
  currentUserIdReducer,
  transactionLedgerReducer,
  groupedRevenueReducer,
  groupedCurrencyReducer,
  groupedTypeReducer,
  groupedTransWeekReducer,
  relatedCurrencyReducer,
  saveUserReducer,
  userProfileReducer,
  lastestAdvancesReducer,
  feeReducer,
  accountPreferencesReducer,
  updateAccPreferencesReducer,
  getRevenueSourceReducer,
  addRevenueSourceReducer,
  updateRevenueSourceReducer,
  deleteRevenueSourceReducer,
  updateBusinessReducer,
  getBusinessReducer,
  IntegrationsReducer,
  AdvanceLedgerReducer,
  ReportingAdvanceLedger,
  InvoiceLedger,
  PerformanceCollection,
  HelpReducer,
  RevenueSources,
  AddTeam,
  RemoveTeam,
  Documentation,
  GetTeam,
  GetOwner
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'CLEAR_STATE') {
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
