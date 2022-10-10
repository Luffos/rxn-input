/**
 * @format
 */

import { NativeModules } from 'react-native';
import KeyCode from './KeyCode';
import { AndroidKeyCode, AndroidKeyCodeString } from './AndroidKeyCode';
import Input from './Input';

const { RXNInput } = NativeModules;

export * from './helpers';
export * from './hooks';
export * from './listeners';

export { Input, RXNInput, KeyCode, AndroidKeyCode, AndroidKeyCodeString };

export default Input;
