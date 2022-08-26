import React, {memo, useEffect} from 'react';
import {Link} from 'gatsby';

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

      <Link to={'/examples'} style={{height: '100%', marginLeft: '2.5vmin'}}>
        <div data-currentpage={TopBarSelected === 'EXAMPLES'} id={style.navItem}>
          <p>Examples</p>
        </div>
      </Link>

      {/* <div style={{height: '100%', marginLeft: '2.5vmin', color: 'wheat'}}>GitHub</div> */}
    </div>
  );
};

export default memo(TopNavBar);
