/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect} from 'react';
import {View, Text} from 'react-native';
import GlobalKeyboard from '../../';

const App = () => {
  const handleKeyPress = useCallback(e => {
    console.log(`Key ${e.keyCode} was pressed`);
  }, []);

  useEffect(() => {
    const myListener = GlobalKeyboard.addListener('keydown', handleKeyPress);

    return () => {
      GlobalKeyboard.removeListener(myListener);
    };
  }, []);

  return (
    <View>
      <Text>Testing</Text>
    </View>
  );
};

export default App;
