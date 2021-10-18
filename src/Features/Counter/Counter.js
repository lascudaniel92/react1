import { useState } from 'react';
import clsx from 'clsx';

import styles from './Counter.module.css';

function Counter({ what }) {
  //   let value = 0;
  const [value, setValue] = useState(0);

  function handleIncrement() {
    setValue(value + 1);
  }

  function handleDecrement() {
    setValue(value - 1);
  }

  //   let className = '';
  //   if (value < 0) {
  //     className = styles.negative;
  //   } else if (value > 0) {
  //     className = styles.positive;
  //   }

  return (
    <>
      <h1>Counter for {what}</h1>
      {/* <output className={value < 0 ? styles.negative : value > 0 ? styles.positive : ''}> */}
      <output
        className={clsx({
          [styles.negative]: value < 0,
          [styles.positive]: value > 0,
        })}
      >
        {value}
      </output>
      <p>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
      </p>
    </>
  );
}

// const test = 'Paul';
// export default test; // default export

export { Counter }; // named export
