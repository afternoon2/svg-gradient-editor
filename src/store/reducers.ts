import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { application } from './application/reducer';

export const createRootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  application,
});
