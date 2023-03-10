import React, { useState } from 'react';
import Form from './components/Form';
import FormSubmitted from './components/FormSubmitted';

const App = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedRating, setSelectedRating] = useState(null);

  const submitFormHandler = () => {
    selectedRating !== null && setFormSubmitted(true);
  };

  const selectRatingHandler = (newRating) => {
    if (selectedRating === newRating) {
      setSelectedRating(null);
    } else {
      setSelectedRating(newRating);
    }
  };

  return (
    <main>
      {!formSubmitted && (
        <Form
          submitForm={submitFormHandler}
          selectRating={selectRatingHandler}
          selectedRating={selectedRating}
        />
      )}
      {formSubmitted && <FormSubmitted selectedRating={selectedRating} />}
    </main>
  );
};

export default App;
