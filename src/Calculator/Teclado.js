import React from 'react';
import Button from './Button';
import Display from './Display';
import styles from './Teclado.module.css';

const Teclado = ({ setDisplay, display }) => {
  const [dados, setDados] = React.useState('');
  const [opera, setOpera] = React.useState('');

  function opSoma() {
    if (dados !== '' && display !== '') {
      const total = +dados + +display;
      setDisplay(total);
      setDados('');
    } else {
      setDados(display);
      setDisplay('');
      setOpera('+');
    }
  }
  function opSub() {
    if (dados !== '' && display !== '') {
      const total = +dados - +display;
      setDisplay(total);
      setDados('');
    } else {
      setDados(display);
      setDisplay('');
      setOpera('-');
    }
  }
  function opMult() {
    if (dados !== '' && display !== '') {
      const total = +dados * +display;
      setDisplay(total);
      setDados('');
    } else {
      setDados(display);
      setDisplay('');
      setOpera('*');
    }
  }
  function opDiv() {
    if (dados !== '' && display !== '') {
      const total = +dados / +display;
      setDisplay(total);
      setDados('');
    } else {
      setDados(display);
      setDisplay('');
      setOpera('/');
    }
  }
  function resultado() {
    if (opera === '+') {
      const total = +dados + +display;
      setDisplay(total);
    } else if (opera === '-') {
      const total = +dados - +display;
      setDisplay(total);
    } else if (opera === '/') {
      const total = +dados / +display;
      setDisplay(total);
    } else {
      const total = +dados * +display;
      setDisplay(total);
    }
    setDados('');
  }

  return (
    <div className={styles.teclado}>
      <Button title="%" />
      <Button title="CE" onClick={() => setDisplay('')} />
      <Button title="C" onClick={() => setDisplay('')} />
      <Button title="Apagar" onClick={() => setDisplay(display.slice(0, -1))} />
      <Button title={7} onClick={() => setDisplay(display + 7)} />
      <Button title={8} onClick={() => setDisplay(display + 8)} />
      <Button title={9} onClick={() => setDisplay(display + 9)} />
      <Button title="/" onClick={opDiv} />
      <Button title={4} onClick={() => setDisplay(display + 4)} />
      <Button title={5} onClick={() => setDisplay(display + 5)} />
      <Button title={6} onClick={() => setDisplay(display + 6)} />
      <Button title="*" onClick={opMult} />
      <Button title={1} onClick={() => setDisplay(display + 1)} />
      <Button title={2} onClick={() => setDisplay(display + 2)} />
      <Button title={3} onClick={() => setDisplay(display + 3)} />
      <Button title="+" onClick={opSoma} />
      <Button />
      <Button title={0} onClick={() => setDisplay(display + 0)} />
      <Button title="=" onClick={resultado} />
      <Button title="-" onClick={opSub} />
    </div>
  );
};

export default Teclado;
