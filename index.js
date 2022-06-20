/**
 * @format
 */

import {NativeModules} from 'react-native';
import KeyListener from './src/KeyListener';

const {RXNKeyListener} = NativeModules;
export default RXNKeyListener;
export {KeyListener};
