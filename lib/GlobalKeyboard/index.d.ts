interface GlobalKeyBoardListener {}

interface iGlobalKeyboard {
  addListener: (
    event: 'keyup' | 'keydown',
    callback: (e: any) => void,
  ) => GlobalKeyBoardListener;
  removeListener: (listener: GlobalKeyBoardListener) => void;
  clearAllListeners: () => void;
}

const GlobalKeyboard: iGlobalKeyboard;

export default GlobalKeyboard;
