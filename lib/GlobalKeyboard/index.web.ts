/* eslint-disable @typescript-eslint/no-unused-vars */
import {iGlobalKeyboard} from '.';
import {ErrorMessages} from '../ErrorMessages';

const GlobalKeyboard: iGlobalKeyboard = {
  addListener: (event, callback) => {
    if (event.toLowerCase() === 'keydown' || event.toLowerCase() === 'keyup') {
      return {};
    }

    throw Error(ErrorMessages.InvalidEvent);
  },
  removeListener: () => {},
  clearAllListeners: () => {},
};
export default GlobalKeyboard;
