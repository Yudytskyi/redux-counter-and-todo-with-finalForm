export const counterLogger = store => next => action => {
  console.log('will dispatch', action);
  const returnValue = next(action);
  console.log('state after dispatch', store.getState());
  return returnValue;
};
