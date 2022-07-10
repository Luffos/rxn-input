export interface KeyListenerListener {}

export interface KeyEvent {
  key: string;
  shiftKey: boolean;
  altKey: boolean;
  ctrlKey: boolean;
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
