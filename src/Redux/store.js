import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import rootMiddleware from './middlewares';

export const store = createStore(
  rootReducer,
  composeWithDevTools(rootMiddleware)
);
