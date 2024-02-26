import React, { useState } from 'react';
import Rating from 'react-rating-stars-component';
import './GiveReviews.css';

const GiveReviews = ({ onSubmit }) => {
  const [showForm, setShowForm] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0,
  });

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRatingChange = (rating) => {
    setFormData({
      ...formData,
      rating: rating,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (disableSubmit) {
      setShowWarning(true);
      return;
    }

    const submittedMessage = `${formData.name}: ${formData.review} (Rating: ${formData.rating})`;
    setSubmittedMessage(submittedMessage);
    setFormData({
      name: '',
      review: '',
      rating: 0,
    });

    setShowWarning(false);
    setDisableSubmit(true);

    // Pass the submitted message to the parent component
    // onSubmit(submittedMessage);
  };

  return (
    <div>
      <h2>Form with Message</h2>
      {!showForm ? (
        <button onClick={handleButtonClick}>Open Form</button>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Give Your Feedback</h2>
          {showWarning && <p className="warning">You have already submitted feedback.</p>}
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="review">Review:</label>
            <textarea name="review" value={formData.review} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="rating">Rating:</label>
            <Rating
              count={5}
              value={formData.rating}
              onChange={handleRatingChange}
              size={30}
              activeColor="#ffd700"
            />
          </div>
          <button type="submit" className={`submit-button ${disableSubmit ? 'disableSubmit' : ''}`}>
            Submit
          </button>
        </form>
      )}
      {submittedMessage && (
        <div>
          <h3>Submitted Message:</h3>
          <p>{submittedMessage}</p>
        </div>
      )}
    </div>
  );
};

export default GiveReviews;
