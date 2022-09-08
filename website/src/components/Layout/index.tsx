import React, {memo} from 'react';
import TopNavBar from '../TopNavBar';

interface iProps {
  children?: any;
  TopBarSelected?: iTopBarSelected;
  PageMinHeight?: string;
  withoutDefaultFooter?: boolean;
}

const Layout = ({children, TopBarSelected, withoutDefaultFooter}: iProps) => {
  return (
    <div style={{margin:`0 auto`, maxWidth: `110rem`, paddingLeft:20, paddingRight:20}}>
      <TopNavBar TopBarSelected={TopBarSelected} />
      {children}
    </div>
  );
};

export default memo(Layout);
