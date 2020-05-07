import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { dimensionsReducer } from 'redux/dimensions/dimensions.reducer';
import { calculateReducer } from 'redux/calculate/calculate.reducer';

/* -------------------------------------------------------------------------- */

const persistConfig = {
  storage,
  key: 'root',
  whitelist: [],
};

const reducer = combineReducers({
  dimensions: dimensionsReducer,
  calculate: calculateReducer,
});

export const rootReducer = persistReducer(persistConfig, reducer);
