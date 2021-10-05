import { useState } from 'react';
import clsx from 'clsx';
import styles from './Counter.module.css';

function Counter({ what }) {
  const [value, setValue] = useState(0);

  function handleIncrement() {
    setValue(value + 1);
  }
  function handleDecrement() {
    setValue(value - 1);
  }

  return (
    <>
      <h1>Counter for {what}</h1>
      <output className={clsx({ [styles.negative]: value < 0, [styles.positive]: value > 0 })}>{value}</output>
      <p>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
      </p>
    </>
  );
}

export { Counter };
