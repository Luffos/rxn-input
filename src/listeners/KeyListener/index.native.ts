import { NativeModules } from 'react-native';
import { EmitterSubscription, NativeEventEmitter } from 'react-native';
import { ErrorMessages } from '../../ErrorMessages';
import type { KeyListener as _KeyListener } from '.';

const eventEmitter = new NativeEventEmitter(NativeModules.RXNInput);

const KeyListener: typeof _KeyListener = {
  addListener: (event, callback) => {
    if (event.toLowerCase() === 'keydown' || event.toLowerCase() === 'keyup') {
      return eventEmitter.addListener(event.toLowerCase(), (e) => callback(e));
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

const KeyEvent = {};

export { KeyEvent, KeyListener };
