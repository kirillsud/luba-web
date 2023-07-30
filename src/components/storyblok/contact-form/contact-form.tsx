import { FormEvent, useCallback } from 'react';
import { environment } from '../../../remove/environments/environment';
import styles from './contact-form.module.css';

/* eslint-disable-next-line */
export interface ContactFormProps {}

function ContactForm() {
  const onSubmit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const values = {
      name: formData.get('name'),
      email: formData.get('email'),
      topic: formData.get('topic'),
      message: formData.get('message'),
      access_key: environment.web3formsAccessKey,
    };
    const json = JSON.stringify(values);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log('Success', res);
    }
  }, []);

  return (
    <form onSubmit={onSubmit} className={styles['form']}>
      <fieldset>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" required={true} />
      </fieldset>
      <fieldset>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" required={true} />
      </fieldset>
      <fieldset>
        <label htmlFor="topic">Topic:</label>
        <input type="text" name="topic" />
      </fieldset>
      <fieldset>
        <label htmlFor="message">Message:</label>
        <textarea name="message" required={true}></textarea>
      </fieldset>
      <button type="submit">Submit Form</button>
    </form>
  );
}

export default ContactForm;
