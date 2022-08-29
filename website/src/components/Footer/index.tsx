import React, {memo} from 'react';
import Wave from 'react-wavify';
import useUnits, {vmin} from 'rxn-units';
import * as style from './style.module.css';

const Footer = () => {
  const {vmin} = useUnits();

  return (
    <footer id={style.footer}>
      <div style={{height: vmin(2)}}>
        <Wave options={{speed: 0.5}} fill="rgba(255,255,255,0.01)" id={style.wave}></Wave>
      </div>
      <div style={{display: 'flex', width: `100%`, textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>
        <h5 style={{color: 'white', margin: 0, padding: 0, fontSize: vmin(2), marginBottom: vmin(2)}}>Made with ❤️ by Luffos Inc.</h5>
      </div>
    </footer>
  );
};

export default memo(Footer);
