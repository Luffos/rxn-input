/**
 * @format
 */

import {NativeModules} from 'react-native';
import KeyListener, {KeyEvent} from './src/KeyListener';

const {RXNKeyListener} = NativeModules;

export {RXNKeyListener, KeyEvent};

export default KeyListener;
