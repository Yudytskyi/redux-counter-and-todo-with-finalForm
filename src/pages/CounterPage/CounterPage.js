import React from 'react';
import styles from './styles.module.scss';

const CounterPage = props => {
  const { value, step, increment, decrement, setStep } = props;
  return (
    <main className={styles.page}>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <a href={'/'}>Home</a>
          </li>
        </ul>
      </nav>
      <article className={styles.section}>
        <h1 className={styles.title}>Counter from 1 to 100</h1>
        <h2>{value}</h2>
        <div className={styles.buttonsBlock}>
          <button
            disabled={value + step > 100 || value + step < 0}
            onClick={increment}
          >
            +
          </button>
          <button
            disabled={value - step < 0 || value - step > 100}
            onClick={decrement}
          >
            -
          </button>
          <input
            className={styles.inputNumber}
            type="number"
            value={step}
            onChange={({ target: { value: s } }) => setStep(Number(s))}
          />
        </div>
      </article>
    </main>
  );
};

export default CounterPage;
