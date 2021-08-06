import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-relative-parent-imports
// import Sidebar from '../components/Sidebar';
// eslint-disable-next-line import/no-relative-parent-imports
// import Header from './Header';

export const MainContentWrap = styled.div`
  // margin-left: 260px;
  // width: calc(100% - 260px);
  vertical-align: top;
  flex: 1 1 auto;
  display: flex;
  position: relative;
  flex-direction: column;
  66
  // background: #f4f5fc;
  @media (max-width: 767px) {
    width: 100%;
    margin-left: 0px;
  }
`;

const Layout = ({ children }: { children: any }) => (
  <div id='main-wrapper'>
    <MainContentWrap>
      {/* <Header /> */}
      {children}
    </MainContentWrap>
  </div>
);

export default Layout;
