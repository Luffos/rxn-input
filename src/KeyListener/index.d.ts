import type KeyCode from 'src/KeyCode';

export interface KeyListenerListener {}

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
        KeyCode: number;
        keyCodeString: string;
        Action: number;
        Flags: number;
        UnicodeChar: number;
        DiplayLabel: number;
        RepeatCount: number;
      }>;
}
export interface iKeyListener {
  addListener: (
    event: 'keyup' | 'keydown',
    callback: (e: KeyEvent) => void,
  ) => KeyListenerListener;
  removeListener: (listener: KeyListenerListener) => void;
  clearAllListeners: () => void;
}

const KeyListener: iKeyListener;

export default KeyListener;
