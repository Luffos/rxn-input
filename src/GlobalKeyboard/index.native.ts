import {NativeModules} from 'react-native';
import {EmitterSubscription, NativeEventEmitter} from 'react-native';
import type {iGlobalKeyboard} from '.';
import {ErrorMessages} from '../ErrorMessages';

const eventEmitter = new NativeEventEmitter(NativeModules.RXNKeyboard);

const GlobalKeyboard: iGlobalKeyboard = {
  addListener: (event, callback) => {
    if (event.toLowerCase() === 'keydown' || event.toLowerCase() === 'keyup') {
      return eventEmitter.addListener(event.toLowerCase(), e => callback(e));
    }

    throw Error(ErrorMessages.InvalidEvent);
  },
  removeListener: (listener: any) => {
    if (listener) {
      (listener as EmitterSubscription).remove();
    }
  },
  clearAllListeners: () => {
    eventEmitter.removeAllListeners('keyup');
    eventEmitter.removeAllListeners('keydown');
  },
};
export default GlobalKeyboard;