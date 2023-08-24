import { combineReducers } from '@reduxjs/toolkit';
import currencyListReducer from './currencies/currencySlice';

const rootReducer = combineReducers({
  currencyList: currencyListReducer,
});

export default rootReducer;
