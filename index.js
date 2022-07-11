/**
 * @format
 */

import {NativeModules} from 'react-native';
import KeyListener, {KeyEvent} from './src/KeyListener';
import KeyCode from './src/KeyCode';
import {AndroidKeyCode, AndroidKeyCodeString} from './src/AndroidKeyCode';

const {RXNKeyListener} = NativeModules;

export {
  RXNKeyListener,
  KeyEvent,
  KeyCode,
  AndroidKeyCode,
  AndroidKeyCodeString,
};

export default KeyListener;
