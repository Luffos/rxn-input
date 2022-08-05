/**
 * @format
 */

import {NativeModules} from 'react-native';
import KeyListener, {KeyEvent} from './src/KeyListener';
import KeyCode from './src/KeyCode';
import {AndroidKeyCode, AndroidKeyCodeString} from './src/AndroidKeyCode';
import Input from './src/Input';

const {RXNInputListener} = NativeModules;

export {
  Input,
  RXNInputListener,
  KeyListener,
  KeyEvent,
  KeyCode,
  AndroidKeyCode,
  AndroidKeyCodeString,
};

export default Input;
