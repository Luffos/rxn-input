import {memo, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import style from './style.module.css';

const TopNavBar = () => {
  const location = useLocation();

  return (
    <div id={style.topNavBarRoot}>
      <Link to={'/'} id={style.topNavBarTitle}>
        RXN Input
      </Link>

      <Link to={'/docs'} style={{height: '100%', marginLeft: '5vmin'}}>
        <div
          data-currentpage={`${location.pathname}`.toLowerCase() === '/docs'}
          id={style.navItem}>
          <p>Documentation</p>
        </div>
      </Link>
    </div>
  );
};

export default memo(TopNavBar);
