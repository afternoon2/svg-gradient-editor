import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createRootReducer } from './reducers';

const initialState = {};

export const history = createBrowserHistory();

const middlewares = [
  applyMiddleware(thunk),
  applyMiddleware(routerMiddleware(history)),
];

let composed = middlewares;

if (process.env.NODE_ENV === 'development') {
  composed = [composeWithDevTools(...middlewares)]
} else {
  composed = [compose(...middlewares)];
}

export const store = createStore(
  createRootReducer(history),
  initialState,
  ...composed,
);
