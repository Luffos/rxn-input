import React, {memo, useEffect, useState} from 'react';
import {FadeIn, SlideInUp} from 'react-animated-components';
import useMediaQuery from '../../hooks/useMediaQuery';
import TopNavBar from '../TopNavBar';

import * as style from './style.module.css';

interface iProps {
  children?: any;
  TopBarSelected?: iTopBarSelected;
  PageMinHeight?: string;
  withoutDefaultFooter?: boolean;
}

const Layout = ({children, TopBarSelected, withoutDefaultFooter}: iProps) => {
  const MQ_isDesktop = useMediaQuery('(min-width: 768px)');

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <div>
            
          </div>
          <ul>
            <li>Documentation</li>
            <li>Examples</li>
            <li>GitHub</li>
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
        {children}
      </div>
    </>
  );
};

export default memo(Layout);
