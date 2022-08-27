import React, {memo, useEffect} from 'react';
import {Link} from 'gatsby';
import githubIcon from '../../assets/github-icon.svg';

import * as style from './style.module.css';

interface iProps {
  TopBarSelected?: iTopBarSelected;
}

const TopNavBar = ({TopBarSelected}: iProps) => {
  return (
    <div id={style.topNavBarRoot}>
      <Link to={'/'} id={style.topNavBarTitle}>
        RXN Input
      </Link>

      <Link to={'/docs'} style={{height: '100%', marginLeft: '5vmin'}}>
        <div data-currentpage={TopBarSelected === 'DOCS'} id={style.navItem}>
          <p>Documentation</p>
        </div>
      </Link>

      <Link to={'/examples'} style={{height: '100%', marginRight: '2.5vmin'}}>
        <div data-currentpage={TopBarSelected === 'EXAMPLES'} id={style.navItem}>
          <p>Examples</p>
        </div>
      </Link>

      <div style={{marginLeft: 'auto'}}>
        <a id={style.githubIcon} style={{display: 'flex', height: '100%', alignSelf: 'center', justifyContent: `center`, alignItems: 'center', marginRight: `2.5vmin`}} href="https://github.com/Luffos/rxn-input">
          <img style={{pointerEvents: 'none', width: '3vmin', aspectRatio: `1`}} src={`${githubIcon}`} />
        </a>
      </div>
    </div>
  );
};

export default memo(TopNavBar);
