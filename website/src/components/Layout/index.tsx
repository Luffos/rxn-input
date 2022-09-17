import React, {memo, useState} from 'react';
import {useEffect} from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import iSelectedPage from '../../interfaces/SelectedPage';
import BreakPoints from '../../styles/BreakPoints';
import MediaQueries from '../../styles/MediaQueries';
import MobileMenu from './MobileMenu';
import TopBar from './TopBar';

interface iProps {
  children?: any;
  SelectedPage?: iSelectedPage;
  MobileExtraTopBar?: JSX.Element;
}

const Layout = ({children, SelectedPage, MobileExtraTopBar}: iProps) => {
  const isDesktop = useMediaQuery(MediaQueries.isDesktop);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const childrenStyle: React.CSSProperties = {
    marginTop: '8rem',
    color: 'white',
    width: '100%',
    maxWidth: BreakPoints.maxWide,
    paddingLeft: isDesktop ? '2rem' : '1rem',
    paddingRight: isDesktop ? '2rem' : '1rem'
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (isDesktop) {
      setMobileMenuOpen(false);
    }
  }, [isDesktop]);

  return (
    <>
      <TopBar setMobileMenuOpen={setMobileMenuOpen} SelectedPage={SelectedPage} MobileExtraTopBar={MobileExtraTopBar} />
      {mobileMenuOpen && <MobileMenu setMobileMenuOpen={setMobileMenuOpen} SelectedPage={SelectedPage} />}
      <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
        <div style={childrenStyle}>{children}</div>
      </div>
    </>
  );
};

export default memo(Layout);
