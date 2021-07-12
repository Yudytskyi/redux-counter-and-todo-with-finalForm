import COUNTER_ACTION_TYPES from './types';

export const increment = () => ({
  type: COUNTER_ACTION_TYPES.INCREMENT,
});

export const decrement = () => ({
  type: COUNTER_ACTION_TYPES.DECREMENT,
});

export const setStep = stepValue => ({
  type: COUNTER_ACTION_TYPES.SET_STEP,
  step: stepValue,
});
