import { ChangeEvent } from 'react';
import useInput from '../../hooks/use-input';

const ContactForm = () => {
  // using custom Hook for inputs

  // for name input
  // can't be empty
  // can include only chars, dashes and spaces
  // up to 100 chars
  const nameRegex = /^[a-zA-Z -]{1,100}$/g;

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value: any) => nameRegex.test(value.trim()));
  // useInput((value: any) => value.trim() !== '');

  // for email input
  // can't be empty
  // email format
  // up to 100 chars
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput((value: any) => emailRegex.test(value));
  // useInput((value: any) => value.includes('@'));

  // for subject
  const {
    value: enteredSubject,
    //isValid: enteredSubjectIsValid,
    //hasError: subjectInputHasError,
    valueChangeHandler: subjectChangeHandler,
    inputBlurHandler: subjectBlurHandler,
    reset: resetSubjectInput,
  } = useInput((value: any) => value.trim() !== '');

  // for message
  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput((value: any) => value.trim() !== '');

  // validating form
  let formIsValid = false;
  // if more inputs, simply add there names in if statement using &&
  // example if (enteredNameIsValid && enetedAgeIsValid && ...)
  if (enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid) {
    formIsValid = true;
  }

  // validation onSubmit
  const formSubmissionHandler = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    // logging form data
    const formData = { enteredName, enteredEmail, enteredSubject };
    console.log(formData);

    // resetting inputs
    resetNameInput();
    resetEmailInput();
    resetSubjectInput();
    resetMessageInput();
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
          pattern="[a-zA-Z \-]+"
          minLength={1}
          maxLength={100}
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
          maxLength={100}
        />
        {emailInputHasError && <p>please enter a valid email</p>}
      </div>

      <div>
        <label htmlFor="subject">Subject</label>
        <input
          value={enteredSubject}
          id="subject"
          type="text"
          onChange={subjectChangeHandler}
          onBlur={subjectBlurHandler}
        />
      </div>

      <div>
        <label htmlFor="message">Your message</label>
        <input
          value={enteredMessage}
          id="message"
          type="textarea"
          onChange={messageChangeHandler}
          onBlur={messageBlurHandler}
          required
        />
        {messageInputHasError && <p>please enter a valid email</p>}
      </div>

      <button disabled={!formIsValid}>Send</button>
    </form>
  );
};

export default ContactForm;
