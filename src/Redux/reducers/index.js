import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import todoReducer from './todoReducer';
import formReducer from './formReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
  form: formReducer,
});

export default rootReducer;
