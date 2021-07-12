export const todoLogger =
  ({ getState }) =>
  next =>
  action => {
    console.log('will dispatch', action);
    const returnValue = next(action);
    console.log('state after dispatch', getState());
    return returnValue;
  };
