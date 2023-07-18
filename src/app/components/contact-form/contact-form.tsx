import { ChangeEvent } from 'react';
import useInput from '../../hooks/use-input';

const ContactForm = () => {
  // using custom Hook for inputs
  // for name input
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value: any) => value.trim() !== '');

  // for email input
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value: any) => value.includes('@'));

  // validating form
  let formIsValid = false;
  // if more inputs, simply add there names in if statement using &&
  // example if (enteredNameIsValid && enetedAgeIsValid && ...)
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // console.log('form validity is: ' + formIsValid);


  // validation onSubmit
  const formSubmissionHandler = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    // name input
    resetNameInput();
    // email input
    resetEmailInput();
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          id="name"
          type="text"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && <p>name must not be empty</p>}
      </div>

      <div>
        <label htmlFor="email">Your Email</label>
        <input
          value={enteredEmail}
          id="email"
          type="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && <p>please enter a valid email</p>}
      </div>

      <button disabled={!formIsValid}>Submit</button>
    </form>
  );
};

export default ContactForm;
