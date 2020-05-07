import { createSelector } from 'reselect';

/* -------------------------------------------------------------------------- */

const calculateSelector = state => state.calculate;

export const selectCalculateTotal = createSelector([calculateSelector], calculate => calculate.total);

export const selectCalculateNext = createSelector([calculateSelector], calculate => calculate.next);
