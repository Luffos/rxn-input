export interface GlobalKeyBoardListener {}

export interface KeyEvent {
  key: string;
}

export interface iGlobalKeyboard {
  addListener: (
    event: 'keyup' | 'keydown',
    callback: (e: KeyEvent) => void,
  ) => GlobalKeyBoardListener;
  removeListener: (listener: GlobalKeyBoardListener) => void;
  clearAllListeners: () => void;
}

const GlobalKeyboard: iGlobalKeyboard;

export default GlobalKeyboard;
