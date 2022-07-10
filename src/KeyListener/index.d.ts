export interface KeyListenerListener {}

export interface KeyEvent {
  key: string;
  capslock: boolean;
  shiftKey: boolean;
  altKey: boolean;
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
