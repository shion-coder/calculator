import { CALCULATE } from './calculate.types';

/* -------------------------------------------------------------------------- */

export const calculate = buttonName => ({
  type: CALCULATE,
  payload: buttonName,
});
