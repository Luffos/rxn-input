import {iGlobalKeyboard} from '.';
import {
  EmitterSubscription,
  NativeEventEmitter,
  NativeModules,
} from 'react-native';

const eventEmitter = new NativeEventEmitter(NativeModules.RXNKeyboard);

const GlobalKeyboard: iGlobalKeyboard = {
  addListener: (event, callback) => {
    return eventEmitter.addListener(event, e => callback(e));
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
