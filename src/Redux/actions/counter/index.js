import COUNTER_ACTION_TYPES from './types';

export const createCounterIncrementAction = () => ({
  type: COUNTER_ACTION_TYPES.INCREMENT,
});

export const createCounterDecrementAction = () => ({
  type: COUNTER_ACTION_TYPES.DECREMENT,
});

export const createCounterSetStepAction = stepValue => ({
  type: COUNTER_ACTION_TYPES.SET_STEP,
  step: stepValue,
});
