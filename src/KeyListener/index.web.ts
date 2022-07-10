import {
  EmitterSubscription,
  NativeEventEmitter,
  NativeModules,
} from 'react-native';
import type {iKeyListener} from '.';
import {ErrorMessages} from '../ErrorMessages';

const eventEmitter = new NativeEventEmitter(NativeModules.RXNKeyListener);

window.addEventListener('keydown', e => {
  eventEmitter.emit('keydown', e);
});

window.addEventListener('keyup', e => {
  eventEmitter.emit('keyup', e);
});

const KeyListener: iKeyListener = {
  addListener: (event, callback) => {
    if (event.toLowerCase() === 'keydown' || event.toLowerCase() === 'keyup') {
      return eventEmitter.addListener(event.toLowerCase(), (e: KeyboardEvent) =>
        callback({
          key: e.key,
          shiftKey: e.shiftKey,
          altKey: e.altKey,
          ctrlKey: e.ctrlKey,
          capsLock: e.getModifierState('CapsLock'),
          numLock: e.getModifierState('NumLock'),
          scrollLock: e.getModifierState('ScrollLock'),
          device: undefined,
        }),
      );
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

export {KeyEvent, iKeyListener};
export default KeyListener;
