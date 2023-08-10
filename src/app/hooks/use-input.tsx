import { useState, ChangeEvent } from 'react';

const useInput = (validateValue: Function) => {
  // states for input
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  // custom
  const [validityObjisValid, setValidityObjIsValid] = useState(false);

  // input validation
  const valueIsValid = validateValue(enteredValue);
  //const hasError = !valueIsValid && isTouched;
  // custom
  console.log('validityObjisValid: ' + validityObjisValid);
  const hasError = !validityObjisValid && isTouched;
  console.log('hasError: ' + hasError);


  // validation
  //let validity = {};
  //console.log(validity);
  // validation on every keystroke
  const valueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(event.target.value);
    // custom
    setValidityObjIsValid(event.target.validity.valid);
    console.log(event.target.validity.valid);
  };

  // validation onBlur (unfocus)
  const inputBlurHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setIsTouched(true);
  };

  // reset function
  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
    setValidityObjIsValid(false);
  }

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError: hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
