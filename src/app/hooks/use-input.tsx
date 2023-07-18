import { useState, ChangeEvent } from 'react';

const useInput = (validateValue: Function) => {
  // states for input
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  // input validation
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  // validation on every keystroke
  // name input
  const valueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(event.target.value);
  };

  // validation onBlur (unfocus)
  // name input
  const inputBlurHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setIsTouched(true);
  };

  // reset function
  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  }

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError: hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  };
};

export default useInput;
