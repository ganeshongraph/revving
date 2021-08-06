import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Dashboard from '../CustomerPortal/PortalFunding/PortalFunding';

// Props Interface
interface IProps {
  loginData: {
    message: {
      data?: string;
    };
    data: any;
    status: string;
  };
}

const Landing: React.FC<IProps> = ({ loginData }: IProps) => {
  const [isAuth, setIsAuthenticated] = useState(false);

  // Handle updated data from send sms api
  useEffect(() => {
    if (loginData?.status === 'success') {
      const { approved, eligible } = loginData.data;
      if (approved && eligible) {
        setIsAuthenticated(true);
      }
    }
  }, [loginData]);
  // eslint-disable-next-line no-console

  return <>{isAuth ? <Dashboard /> : <div />}</>;
  // return <Dashboard />;
};

const mapStateToProps = (state: any) => ({
  loginData: state.login.data
});

export default connect(mapStateToProps)(Landing);
