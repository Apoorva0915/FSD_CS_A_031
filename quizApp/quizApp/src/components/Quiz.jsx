import React, { useState } from 'react';
import data from '../../data';
import './Quiz.css'; // Import the CSS file for styling

const Quiz = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption === data[0].ans) {
      setFeedback('Correct Answer!');
    } else {
      setFeedback('Wrong Answer. Try Again!');
    }
  };

  return (
    <div className="quiz-container">
      <form className="quiz-form" onSubmit={handleSubmit}>
        <h1 className="quiz-question">
          <span>{data[0].id}</span>. {data[0].Question}
        </h1>
        <div className="quiz-options">
          <div className="quiz-option">
            <input
              type="radio"
              id="opt1"
              name="opt"
              onChange={handleOptionChange}
            />
            <label htmlFor="opt1">{data[0].opt1}</label>
          </div>
          <div className="quiz-option">
            <input
              type="radio"
              id="opt2"
              name="opt"
              onChange={handleOptionChange}
            />
            <label htmlFor="opt2">{data[0].opt2}</label>
          </div>
          <div className="quiz-option">
            <input
              type="radio"
              id="opt3"
              name="opt"
              onChange={handleOptionChange}
            />
            <label htmlFor="opt3">{data[0].opt3}</label>
          </div>
          <div className="quiz-option">
            <input
              type="radio"
              id="opt4"
              name="opt"
              onChange={handleOptionChange}
            />
            <label htmlFor="opt4">{data[0].opt4}</label>
          </div>
        </div>
        <button className="quiz-submit" type="submit">
          Submit
        </button>
      </form>
      {feedback && <p className={`quiz-feedback ${feedback === 'Correct Answer!' ? 'correct' : 'wrong'}`}>{feedback}</p>}
    </div>
  );
};

export default Quiz;
