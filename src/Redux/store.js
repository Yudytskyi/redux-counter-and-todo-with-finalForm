import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleWare = createSagaMiddleware();
const rootMiddleware = applyMiddleware(sagaMiddleWare);

const store = createStore(rootReducer, composeWithDevTools(rootMiddleware));

sagaMiddleWare.run(rootSaga);

export default store;
