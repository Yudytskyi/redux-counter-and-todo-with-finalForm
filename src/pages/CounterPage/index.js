import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActionCreators from '../../Redux/actions/counter';
import styles from './styles.module.scss';

const CounterPage = () => {
  useEffect(() => {
    document.getElementById('logoLink').setAttribute('href', '/clock.png');
    document.getElementById('title').innerHTML = 'Counter';
  }, [null]);

  const { value, step } = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const { increment, decrement, setStep } = bindActionCreators(
    counterActionCreators,
    dispatch
  );

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
