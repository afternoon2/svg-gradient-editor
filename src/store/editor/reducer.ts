import { combineReducers } from 'redux';
import { settings } from './settings/reducer';

export const editor = combineReducers({
  settings,
});
