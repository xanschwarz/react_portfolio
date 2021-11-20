/*  -----------------------------------------------------------------------------------------------------------------------

A contact form with fields for a name, an email address, and a message.
Moving the cursor out of one of the form fields without entering text prompts a notification that this field is required.
Entering text into the email address field prompts a notification if the user entered an invalid email address.

-----------------------------------------------------------------------------------------------------------------------  */

import React, { useState } from 'react';
import { validateEmail } from '../../../utils/helpers';
import './Contact.css';

export default function Contact() {
  const [inputState, setInputState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errorState, setErrorState] = useState('');
  const { name, email, subject, message } = inputState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorState) {
      console.log('Form submitted', inputState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      if (!validateEmail(e.target.value)) {
        setErrorState('Please enter a valid email address');
      } else {
        setErrorState('');
      }
    } else {
      if (e.target.value === '') {
        setErrorState(`The ${e.target.name} field is required.`);
      } else {
        setErrorState('');
      }
    }
    if (!errorState) {
      setInputState({ ...inputState, [e.target.name]: e.target.value });
      console.log('From input', inputState);
    }
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label for="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="textInput"
            placeholder="Please enter your name here."
            onBlur={handleChange}
          ></input>

          <label for="email">Email Address</label>
          <input
            type="text"
            id="email"
            name="email"
            className="textInput"
            placeholder="Please enter your email address."
            onBlur={handleChange}
          ></input>

          <label for="subject">Email subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="textInput"
            placeholder="Please enter an email subject here."
            onBlur={handleChange}
          ></input>

          <label for="message">Email message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your email message here."
            style={{ height: '200px' }}
            onBlur={handleChange}
          ></textarea>
          {errorState && (
            <div>
              <p id="errorDisplay">{errorState}</p>
            </div>
          )}
          <input type="submit" value="Submit" id="submitBtn"></input>
        </form>
      </div>
    </div>
  );
}
