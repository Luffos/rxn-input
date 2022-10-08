import React, { useState, useEffect} from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import iSelectedPage from '../../interfaces/SelectedPage';
import BreakPoints from '../../styles/theme/BreakPoints';
import MobileMenu from './MobileMenu';
import TopBar from './TopBar';

interface iProps {
  children?: JSX.Element;
  SelectedPage?: iSelectedPage;
}

const Layout = ({children, SelectedPage}: iProps) => {
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
          SelectedPage={SelectedPage}
        />
      )}
      <TopBar setMobileMenuOpen={setMobileMenuOpen} SelectedPage={SelectedPage} />
      {children}
    </>
  );
};

export {LayoutContent} from './styles';

export default Layout;
