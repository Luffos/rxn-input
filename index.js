/**
 * @format
 */

import {NativeModules} from 'react-native';
import KeyListener, {KeyEvent} from './src/KeyListener';
import KeyCode from './src/KeyCode';
import {AndroidKeyCode, AndroidKeyCodeString} from './src/AndroidKeyCode';
import Input from './src/Input';

const {RXNInput} = NativeModules;

export * from './src/helpers';
export * from './src/hooks';

export {
  Input,
  RXNInput,
  KeyListener,
  KeyEvent,
  KeyCode,
  AndroidKeyCode,
  AndroidKeyCodeString,
};

export default Input;
