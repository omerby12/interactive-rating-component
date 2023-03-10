import React from 'react';
import illustrationThankYou from '../images/illustration-thank-you.svg';
import classnames from 'classnames';
import classes from './FormSubmitted.module.css';

const FormSubmitted = ({ selectedRating }) => {
  return (
    <div className={classnames('card', classes['card--form-submitted'])}>
      <img src={illustrationThankYou} alt='Thank You' />
      <span>You selected {selectedRating} out of 5</span>
      <div>
        <h1 className='heading'>Thank you!</h1>
        <p className='paragraph'>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

export default FormSubmitted;
