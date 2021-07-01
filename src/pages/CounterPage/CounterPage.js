import React from 'react';

const CounterPage = props => {
  const { value, step, increment, decrement, setStep } = props;
  return (
    <article>
      <a href={'/'}>Home</a>
      <h1>Counter</h1>
      <h2>{value}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <input
        type="number"
        value={step}
        onChange={({ target: { value: s } }) => setStep(Number(s))}
      />
    </article>
  );
};

export default CounterPage;
