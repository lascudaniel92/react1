import { useState } from 'react';
import clsx from 'clsx';
import styles from './Counter.module.css';

function Counter() {
  // let value = 0;
  const [value, setValue] = useState(0);

  function handleIncrement() {
    setValue(value + 1);
  }
  function handleDecrement() {
    setValue(value - 1);
  }

  // let styles = '';
  // if (value < 0) {
  //   styles = 'negative';
  // } else if (value > 0) {
  //   styles = 'positive';
  // }

  return (
    <>
      <h1>Counter</h1>
      {/* <output className={value < 0 ? 'negative' : value > 0 ? 'positive' : ''}>{value}</output> */}
      <output className={clsx({ [styles.negative]: value < 0, [styles.positive]: value > 0 })}>{value}</output>
      <p>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
      </p>
    </>
  );
}

export { Counter };
