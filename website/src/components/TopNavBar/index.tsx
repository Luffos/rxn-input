import React, {memo, useEffect, useState} from 'react';
import {Link} from 'gatsby';
import GitHubIcon from '../../assets/github-icon.svg';
import KebabMenuIcon from '../../assets/kebab-menu-icon.svg';
import Logo from '../../assets/Logo.svg';

import * as style from './style.module.css';
import useScrollPosition from '../../hooks/useScrollPosition';
import useMediaQuery from '../../hooks/useMediaQuery';

interface iProps {
  TopBarSelected?: iTopBarSelected;
  setMobileMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const TopNavBar = ({TopBarSelected, setMobileMenuOpen}: iProps) => {
  const MQ_isDesktop = useMediaQuery('(min-width: 768px)');
  const sY = useScrollPosition();

  return (
    <>
      <div id={style.navBarRoot} style={{position: `fixed`, zIndex: 2, top: 0, left: 0, width: `100vw`, backgroundColor: sY > 5 ? `#0b0921e6` : 'transparent'}}>
        <div id={style.navBarContent}>
          <Link to={'/'}>
            <Logo id={style.logo} height={MQ_isDesktop ? 60 : 55} style={{marginLeft: MQ_isDesktop ? -30 : -35}} />
          </Link>

          <div id={style.rightItemsDesktop}>
            <Link to={`/docs`} data-currentpage={TopBarSelected === 'DOCS'} className={style.navItem}>
              DOCUMENTATION
            </Link>

            <Link to={`/examples`} data-currentpage={TopBarSelected === 'EXAMPLES'} className={style.navItem}>
              EXAMPLES
            </Link>

            <a style={{display: `flex`, justifyContent: `center`, alignItems: `center`}} href="https://github.com/Luffos/rxn-input">
              <GitHubIcon height={30} id={style.navIcon} />
            </a>
          </div>

          <div onClick={() => setMobileMenuOpen?.(true)} id={style.rightItemsMobile}>
            <KebabMenuIcon style={{paddingLeft: 5}} id={style.navIcon} height={22} />
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(TopNavBar);
