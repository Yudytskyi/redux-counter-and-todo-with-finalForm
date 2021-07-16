import React from 'react';
import styles from './styles.module.scss';

const HomePage = () => {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>HomePage</h1>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <a href={'/counter'}>Counter</a>
          </li>
          <li>
            <a href={'/todo'}>Todo Page</a>
          </li>
          <li>
            <a href={'/example'}>Final Form</a>
          </li>
          <li>
            <a href={'/wizard'}>Wizard Form</a>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default HomePage;
