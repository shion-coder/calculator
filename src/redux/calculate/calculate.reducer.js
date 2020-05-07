import { createReducer } from 'redux/create-reducer';

import { CALCULATE } from './calculate.types';
import { calculate } from './calculate.utils';

// ----------------------------------------------------------------------------------------- //

const initialState = {
  total: null,
  next: null,
  operation: null,
};

const reducer = {
  [CALCULATE]: (state, payload) => ({ ...state, ...calculate(state, payload) }),
};

export const calculateReducer = createReducer(initialState, reducer);
