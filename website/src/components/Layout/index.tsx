import React, {memo} from 'react';
import TopNavBar from '../TopNavBar';

import Footer from '../Footer';

interface iProps {
  children?: any;
  TopBarSelected?: iTopBarSelected;
  PageHeight?: string;
}

const Layout = ({children, TopBarSelected, PageHeight}: iProps) => {
  return (
    <>
      <TopNavBar TopBarSelected={TopBarSelected} />
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{width: '100%', height: PageHeight || '100vh'}}>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default memo(Layout);
