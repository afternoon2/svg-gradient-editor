import { combineReducers } from 'redux';
import { nav } from './nav/reducer';
import { list } from './list/reducer';

export const settings = combineReducers({
  nav,
  list,
});
