import React, {memo} from 'react';
import TopNavBar from '../TopNavBar';

interface iProps {
  children?: any;
  TopBarSelected?: iTopBarSelected;
}

const Layout = ({children, TopBarSelected}: iProps) => {
  return (
    <>
      <TopNavBar TopBarSelected={TopBarSelected} />
      {children}
    </>
  );
};

export default memo(Layout);
