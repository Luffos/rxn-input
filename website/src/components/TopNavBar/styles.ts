import React from 'react';

const useStyles = () => {
  return {
    topNavBarRoot: {
      margin: 0,
      width: '100%',
      backgroundColor: '#20232a',
      padding: 0,
      display: 'flex',
      flexDirection: 'row',
      userSelect: 'none'
    } as React.CSSProperties,

    topNavBarTitle: {
      padding: '1.5vmin',
      color: 'white',
      letterSpacing: '0.1vmin',
      margin: 0,
      fontWeight: 700,
      fontSize: '2vmin'
    } as React.CSSProperties,

    navItem: {
      height: '100%',
      display: 'flex',
      textDecoration: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomColor: '#00f4ff',
      borderBottomWidth: '0.55vmin',
      borderBottomStyle: 'solid',
    } as React.CSSProperties,

    navItemText: {
      padding: '1.5vmin',
      color: 'white',
      letterSpacing: '0.01vmin',
      margin: 0,
      fontWeight: 500,
      fontSize: '1.8vmin'
    } as React.CSSProperties
  };
};

export default useStyles;
