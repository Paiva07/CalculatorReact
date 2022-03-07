import React from 'react';
import styles from './Display.module.css';

const Display = ({ display, setDisplay }) => {
  return <div className={styles.display}>{display}</div>;
};

export default Display;
