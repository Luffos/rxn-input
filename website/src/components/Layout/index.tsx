import React, {memo} from 'react';
import {LayoutContentInner, LayoutContentWrapper} from './styles';
import TopBar from './TopBar';

interface iProps {
  children: JSX.Element;
}

const Layout = ({children}: iProps) => {
  return (
    <>
      <TopBar />
      {children}
    </>
  );
};

export const LayoutContent = ({children}: iProps) => {
  return (
    <LayoutContentWrapper>
      <LayoutContentInner>{children}</LayoutContentInner>
    </LayoutContentWrapper>
  );
};

export default Layout;
