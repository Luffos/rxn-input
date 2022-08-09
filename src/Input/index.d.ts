export interface iInputFunctions {
  isMouseButtonDown: (button: number) => boolean;
  isMouseButtonUp: (button: number) => boolean;
}

export interface iInputVariables {
  /**
   * Returns if touch inputs are avaible, which maybe supported by device but that's not in use at moment.
   *
   * Can change on desktop web browsers, when toggle mobile simulation tools.
   *
   * @hook useTouchAvaible
   * @event TouchListener.on('changeTouchAvaible')
   * @returns boolean
   */
  touchAvaible: boolean;
}

type iInput = iInputFunctions & iInputVariables;

const Input: iInput;

export default Input;
