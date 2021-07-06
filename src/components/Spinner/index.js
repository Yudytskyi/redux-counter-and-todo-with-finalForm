import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import styles from './Spinner.module.scss';

const size =
  window.innerWidth < window.innerHeight
    ? window.innerWidth / 2
    : window.innerHeight / 2;

const Spinner = () => {
  return (
    <div className={styles.loaderContainer}>
      <ClipLoader css={styles.override} size={size} />
    </div>
  );
};

export default Spinner;
