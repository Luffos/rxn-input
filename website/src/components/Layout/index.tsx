import React, {memo} from 'react';
import TopNavBar from '../TopNavBar';

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
        <footer style={{width: `100%`, alignSelf: 'flex-end', backgroundColor: `gray`}}>
          <h1>Luffos</h1>
        </footer>
      </div>
    </>
  );
};

export default memo(Layout);
