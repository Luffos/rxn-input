import {memo, useEffect} from 'react';
import useStyles from './styles';
import {Link, useLocation} from 'react-router-dom';

const TopNavBar = () => {
  const styles = useStyles();
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  });

  return (
    <div style={styles.topNavBarRoot}>
      <Link to={'/'} style={styles.topNavBarTitle}>
        RXN Input
      </Link>

      <Link to={'/docs'} style={{height: '100%', marginLeft: '5vmin'}}>
        <div style={location.pathname.toLowerCase() === '/docs' ? styles.navItem : {...styles.navItem, borderBottomColor: 'transparent'}}>
          <p style={location.pathname.toLowerCase() !== '/docs' ? styles.navItemText : {...styles.navItemText, color: '#00f4ff'}}>Documentation</p>
        </div>
      </Link>
    </div>
  );
};

export default memo(TopNavBar);
