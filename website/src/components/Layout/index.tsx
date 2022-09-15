/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {memo, useEffect, useState} from 'react';
import {Link} from 'gatsby';
import {FadeIn} from 'react-animated-components';
import useMediaQuery from '../../hooks/useMediaQuery';
import iTopBarSelected from '../../interfaces/TopBarSelected';
import TopNavBar from '../TopNavBar';

import * as style from './style.module.css';

interface iProps {
  children?: any;
  TopBarSelected?: iTopBarSelected;
  PageMinHeight?: string;
  withoutDefaultFooter?: boolean;
}

const Layout = ({children, TopBarSelected, withoutDefaultFooter}: iProps) => {
  const [renderChildren, setRenderChildren] = useState(false);

  const MQ_isDesktop = useMediaQuery('(min-width: 768px)');

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => setRenderChildren(true));

  useEffect(() => {
    if (mobileMenuOpen) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (MQ_isDesktop) {
      setMobileMenuOpen(false);
    }
  }, [MQ_isDesktop]);

  const MobileMenu = () => {
    return (
      <div id={style.MobileMenuWrapper}>
        <div id={style.MobileMenuContent}>
          <div></div>
          <ul>
            <li>
              <Link to={`/docs`}>Documentation</Link>
            </li>
            <li>
              <Link to={`/examples`}>Examples</Link>
            </li>
            <li>
              <a href="https://github.com/Luffos/rxn-input">GitHub</a>
            </li>
          </ul>
        </div>
        <FadeIn durationMs={100}>
          <div id={style.MobileMenuBackground} onClick={() => setMobileMenuOpen(false)} />
        </FadeIn>
      </div>
    );
  };

  return (
    <>
      {mobileMenuOpen && <MobileMenu />}
      <div style={{margin: `0 auto`, maxWidth: `110rem`, paddingLeft: 20, paddingRight: 20}}>
        <TopNavBar setMobileMenuOpen={setMobileMenuOpen} TopBarSelected={TopBarSelected} />
        {renderChildren && <>{children}</>}
      </div>
    </>
  );
};

export default memo(Layout);
