import React, {memo} from 'react';
import TopNavBar from '../TopNavBar';

const Layout = ({children}: any) => {
  return (
    <>
      <TopNavBar />
      {children}
    </>
  );
};

export default memo(Layout);
