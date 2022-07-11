/**
 * @format
 */

import {NativeModules} from 'react-native';
import KeyListener, {KeyEvent} from './src/KeyListener';
import KeyCode from './src/KeyCode';

const {RXNKeyListener} = NativeModules;

export {RXNKeyListener, KeyEvent, KeyCode};

export default KeyListener;
