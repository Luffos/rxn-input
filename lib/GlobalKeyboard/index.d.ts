interface GlobalKeyBoardListener {}

interface iGlobalKeyboard {
  addListener: (
    event: 'keypress' | 'keydown',
    callback: (e: any) => void,
  ) => GlobalKeyBoardListener;
  removeListener: (listener: GlobalKeyBoardListener) => void;
  clearAllListeners: () => void;
}

const GlobalKeyboard: iGlobalKeyboard;

export default GlobalKeyboard;
