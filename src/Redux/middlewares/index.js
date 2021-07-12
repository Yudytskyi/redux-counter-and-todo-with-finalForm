import { applyMiddleware } from 'redux';
import { counterLogger } from './counterMiddlewares';
import { todoLogger } from './todoMiddlewares';

const rootMiddleware = applyMiddleware(counterLogger, todoLogger);

export default rootMiddleware;
