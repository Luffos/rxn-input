import React, {memo, useEffect} from 'react';
import {Link} from 'gatsby';
import GitHubIcon from '../../assets/github-icon.svg';
import KebabMenuIcon from '../../assets/kebab-menu-icon.svg';
import Logo from '../../assets/Logo.svg';

import * as style from './style.module.css';

interface iProps {
  TopBarSelected?: iTopBarSelected;
}

const TopNavBar = ({TopBarSelected}: iProps) => {
  return (
    <div style={{position: `fixed`, zIndex:2, top: 0, left: 0, width: `100vw` /*  backgroundColor: `rgba(0,0,0,0.5)` */}}>
      <div id={style.navBarContent}>
        <Link to={'/'}>
          <Logo width={190} style={{marginLeft: -9}} />
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

        <div id={style.rightItemsMobile}>
          <KebabMenuIcon style={{paddingLeft: 5}} id={style.navIcon} height={22} />
        </div>
      </div>
    </div>
  );
};

export default memo(TopNavBar);
