import React, {memo} from 'react';
import TopNavBar from '../TopNavBar';

import Footer from '../Footer';

interface iProps {
  children?: any;
  TopBarSelected?: iTopBarSelected;
}

const Layout = ({children, TopBarSelected}: iProps) => {
  return (
    <>
      <TopNavBar TopBarSelected={TopBarSelected} />
      <div style={{display: 'flex', flexDirection: 'column'}}>
        {children}
        <Footer />
      </div>
    </>
  );
};

export default memo(Layout);
