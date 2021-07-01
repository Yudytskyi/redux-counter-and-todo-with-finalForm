import COUNTER_ACTION_TYPES from '../actions/counter/types';
const initialState = { value: 0, step: 1 };

const counterReducer = (state = initialState, { type, step }) => {
  switch (type) {
    case COUNTER_ACTION_TYPES.INCREMENT:
      return { ...state, value: state.value + state.step };
    case COUNTER_ACTION_TYPES.DECREMENT:
      return { ...state, value: state.value - state.step };
    case COUNTER_ACTION_TYPES.SET_STEP:
      return { ...state, step: step };
    default:
      return state;
  }
};

export default counterReducer;
