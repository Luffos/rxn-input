import React, { memo } from "react";
import TopBar from "./TopBar";

interface iProps {
  children: JSX.Element;
}

const Layout = ({ children }: iProps) => {
  return (
    <>
      <TopBar />
      {children}
    </>
  );
};

export {LayoutContent} from './styles';

export default Layout;
