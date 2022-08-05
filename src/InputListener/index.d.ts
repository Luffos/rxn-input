import type {AndroidKeyCodeString} from 'src/AndroidKeyCode';
import type KeyCode from 'src/KeyCode';

export interface InputListenerListener {}

export interface KeyEvent {
  keyCode: KeyCode | string;
  key: string;
  shiftKey: boolean;
  altKey: boolean;
  ctrlKey: boolean;
  metaKey: boolean;
  capsLock: boolean;
  numLock: boolean;
  scrollLock: boolean;
  device?:
    | {
        id: number;
        name: string;
        descriptor: string;
        isVirtual: boolean;
      }
    | undefined;
  original:
    | Partial<KeyboardEvent>
    | Partial<{
        KeyCode: AndroidKeyCode | number;
        keyCodeString: AndroidKeyCodeString | string;
        Action: number;
        Flags: number;
        UnicodeChar: number;
        DiplayLabel: number;
        RepeatCount: number;
      }>;
}
export interface iInputListener {
  addListener: (
    event: 'keyup' | 'keydown',
    callback: (e: KeyEvent) => void,
  ) => InputListenerListener;
  removeListener: (listener: InputListenerListener) => void;
  clearAllListeners: () => void;
}

const InputListener: iInputListener;

export default InputListener;
