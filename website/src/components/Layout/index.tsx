import React, {memo} from 'react';
import TopNavBar from '../TopNavBar';
import Wave from 'react-wavify';

import * as style from './style.module.css';

interface iProps {
  children?: any;
  TopBarSelected?: iTopBarSelected;
}

const Layout = ({children, TopBarSelected}: iProps) => {
  return (
    <>
      <TopNavBar TopBarSelected={TopBarSelected} />
      <div style={{display: 'flex', flexDirection: 'column'}}>
        {children}
        <footer id={style.footer}>
          <div style={{height: 15}}>
            <Wave options={{speed: 0.5}} fill="rgba(255,255,255,0.01)" id={style.wave}></Wave>
          </div>
          <div style={{width: `100%`, textAlign: 'center'}}>
            <h5 style={{color: 'white', margin: 15, padding: 0}}>Made with ❤️ by Luffos Inc.</h5>
          </div>
        </footer>
      </div>
    </>
  );
};

export default memo(Layout);
