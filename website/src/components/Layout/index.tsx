import React, {memo, useState, useEffect} from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import BreakPoints from '../../styles/theme/BreakPoints';
import MobileMenu from './MobileMenu';
import TopBar from './TopBar';

interface iProps {
  children?: JSX.Element;
}

const Layout = ({children}: iProps) => {
  const isDesktop = useMediaQuery(BreakPoints.up('sm'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (mobileMenuOpen) {
        document.documentElement.style.overflow = 'hidden';
      } else {
        document.documentElement.style.overflow = 'auto';
      }
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (isDesktop) {
      setMobileMenuOpen(false);
    }
  }, [isDesktop]);

  return (
    <>
      {mobileMenuOpen && (
        <MobileMenu
          setMobileMenuOpen={setMobileMenuOpen}
          SelectedPage={'test'}
        />
      )}
      <TopBar setMobileMenuOpen={setMobileMenuOpen} />
      {children}
    </>
  );
};

export {LayoutContent} from './styles';

export default Layout;
