/**
 * @format
 */

import { NativeModules } from 'react-native';
import KeyCode from './src/KeyCode';
import { AndroidKeyCode, AndroidKeyCodeString } from './src/AndroidKeyCode';
import Input from './src/Input';

const { RXNInput } = NativeModules;

export * from './src/helpers';
export * from './src/hooks';
export * from './src/listeners';

export { Input, RXNInput, KeyCode, AndroidKeyCode, AndroidKeyCodeString };

export default Input;
