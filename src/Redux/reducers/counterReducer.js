import produce from 'immer';
import COUNTER_ACTION_TYPES from '../actions/counter/types';
import createReducer from '../services/createReducer';

const initialState = { value: 0, step: 1 };

const handlers = {
  [COUNTER_ACTION_TYPES.INCREMENT]: produce(draftState => {
    draftState.value += draftState.step;
  }),

  [COUNTER_ACTION_TYPES.DECREMENT]: produce(draftState => {
    draftState.value -= draftState.step;
  }),

  [COUNTER_ACTION_TYPES.SET_STEP]: produce((draftState, action) => {
    const { step } = action;
    draftState.step = step;
  }),
};

const counterReducer = createReducer(initialState, handlers);

export default counterReducer;
