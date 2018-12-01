import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

export const createRootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
});
