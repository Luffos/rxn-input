/**
 * @format
 */

import {NativeModules} from 'react-native';
import InputListener, {KeyEvent} from './src/InputListener';
import KeyCode from './src/KeyCode';
import {AndroidKeyCode, AndroidKeyCodeString} from './src/AndroidKeyCode';

const {RXNInputListener} = NativeModules;

export {
  RXNInputListener,
  KeyEvent,
  KeyCode,
  AndroidKeyCode,
  AndroidKeyCodeString,
};

export default InputListener;
