import { useState } from 'react';

export function useNumberInput() {
  const [value, setValue] = useState(1);

  function handleDecrement() {
    if (value > 1) {
      setValue(value - 1);
    }
  }

  function handleIncrement() {
    if (value < 9) {
      setValue(value + 1);
    }
  }

  return { value, handleDecrement, handleIncrement };
}
