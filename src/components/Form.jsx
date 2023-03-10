import React from 'react';
import iconStar from '../images/icon-star.svg';
import classnames from 'classnames';
import classes from './Form.module.css';

const Form = ({ submitForm, selectRating, selectedRating }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm();
  };

  const handleRatingClick = (rating) => {
    selectRating(rating);
  };

  return (
    <div className={classnames('card', classes['card--form'])}>
      <div className={classes['circle-star-container']}>
        <img src={iconStar} alt='star' className={classes['circle-star']} />
      </div>
      <h1 className='heading'>How did we do?</h1>
      <p className='paragraph'>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className={classes['rating-selection-box']}>
        {[1, 2, 3, 4, 5].map((number) => {
          const numberSelectedClass =
            selectedRating === number ? classes['selected'] : '';
          return (
            <button
              className={classnames(classes['circle'], numberSelectedClass)}
              key={number}
              onClick={() => handleRatingClick(number)}
            >
              {number}
            </button>
          );
        })}
      </div>

      <button className='btn' onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Form;
