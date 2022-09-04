import React, {memo} from 'react';
import TopNavBar from '../TopNavBar';

import Footer from '../Footer';

interface iProps {
  children?: any;
  TopBarSelected?: iTopBarSelected;
  PageMinHeight?: string;
  withoutDefaultFooter?: boolean;
}

const Layout = ({children, TopBarSelected, withoutDefaultFooter}: iProps) => {
  return (
    <>
      <div id="backgroundLayer"></div>
      <TopNavBar TopBarSelected={TopBarSelected} />
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{width: '100%', minHeight: '100vh'}}>{children}</div>
        {!withoutDefaultFooter && <Footer />}
      </div>
    </>
  );
};

export default memo(Layout);
