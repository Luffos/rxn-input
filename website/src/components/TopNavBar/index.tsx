import React, {memo, useEffect} from 'react';
import {Link} from 'gatsby';

import * as style from './style.module.css';

const TopNavBar = () => {
  const pathname = typeof window !== 'undefined' ? window.location.pathname.toLowerCase().replace(/\/+$/, '') : '';

  return (
    <div id={style.topNavBarRoot}>
      <Link to={'/'} id={style.topNavBarTitle}>
        RXN Input
      </Link>

      <Link to={'/docs'} style={{height: '100%', marginLeft: '5vmin'}}>
        <div data-currentpage={pathname === '/docs'} id={style.navItem}>
          <p>Documentation</p>
        </div>
      </Link>
    </div>
  );
};

export default memo(TopNavBar);
