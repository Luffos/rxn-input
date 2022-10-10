/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useState} from 'react';
import {Text, StatusBar, View} from 'react-native';

//@ts-ignore
import {KeyListener, KeyEvent} from '../../../index';

const App = () => {
  return (
    <View
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#0b091f',
        padding: 5,
      }}>
      <StatusBar backgroundColor={'#0b091f'} barStyle="light-content" />
    </View>
  );
};

export default App;
