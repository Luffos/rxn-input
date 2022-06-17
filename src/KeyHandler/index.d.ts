export interface KeyHandlerListener {}

export interface KeyEvent {
  key: string;
}

export interface iKeyHandler {
  addListener: (
    event: 'keyup' | 'keydown',
    callback: (e: KeyEvent) => void,
  ) => KeyHandlerListener;
  removeListener: (listener: KeyHandlerListener) => void;
  clearAllListeners: () => void;
}

const KeyHandler: iKeyHandler;

export default KeyHandler;
