import { combineReducers } from 'redux';
import { application } from './application/reducer';
import { editor } from './editor/reducer';

export const rootReducer = combineReducers({
  application,
  editor,
});
