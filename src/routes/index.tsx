import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import requireAuth from '../hoc/withAuth';
import Loader from '../containers/Loading';

const Login = lazy(() => import('../containers/SignIn'));
const Landing = lazy(() => import('../containers/Landing'));
const Eligibility = lazy(() => import('../containers/Eligibility'));
const Homepage = lazy(() => import('../containers/Homepage'));
const Transactions = lazy(() => import('../containers/CustomerPortal/Transactions'));
const AdvanceLedger = lazy(() => import('../containers/CustomerPortal/AdvanceLedger'));
const Integrations = lazy(() => import('../containers/Account/Integrations'));
const Fees = lazy(() => import('../containers/Account/Fees'));
const Documentation = lazy(() => import('../containers/Account/Documentation'));
const BusinessDetails = lazy(() => import('../containers/Account/BusinessDetails'));
const Administration = lazy(() => import('../containers/Account/Administration'));
const PageNotFound = lazy(() => import('../containers/PageNotFound'));

const Routes = () => {
  const isOwner = localStorage.getItem('owner');
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          {/*  Public Route  */}
          <Route exact path='/' component={Homepage} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/eligibility-check' component={Eligibility} />

          {/*  Auth Route  */}
          <Route exact path='/funding' component={requireAuth(Landing)} />
          <Route exact path='/transactions' component={requireAuth(Transactions)} />
          <Route exact path='/advance-ledger' component={requireAuth(AdvanceLedger)} />
          <Route exact path='/account/integrations' component={requireAuth(Integrations)} />
          <Route exact path='/account/fees' component={requireAuth(Fees)} />
          <Route exact path='/account/documentation' component={requireAuth(Documentation)} />
          <Route exact path='/account/business-details' component={requireAuth(BusinessDetails)} />
          {isOwner === 'true' && (
            <Route exact path='/account/administration' component={requireAuth(Administration)} />
          )}
          {/*  Page not found Route  */}
          <Route path='*' component={PageNotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routes;
