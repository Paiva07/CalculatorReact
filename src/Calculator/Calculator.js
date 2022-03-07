import React from 'react';
import styles from './Calculator.module.css';
import Display from './Display';
import Button from './Button';
import Teclado from './Teclado';

const Calculator = () => {
  const [display, setDisplay] = React.useState('');
  return (
    <div className={styles.calculator}>
      <Display display={display} setDisplay={setDisplay} />
      <Teclado display={display} setDisplay={setDisplay} />
    </div>
  );
};

export default Calculator;
