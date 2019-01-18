import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

const initialState = {};

const middlewares = [
  applyMiddleware(thunk),
];

let composed = middlewares;

if (process.env.NODE_ENV === 'development') {
  composed = [composeWithDevTools(...middlewares)]
} else {
  composed = [compose(...middlewares)];
}

export const store = createStore(
  rootReducer,
  initialState,
  ...composed,
);
