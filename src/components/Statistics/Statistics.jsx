import React from 'react';
import { useState } from 'react';
import { Statistics } from 'components/Feedback/feedbackclient';
import { FeedbackOptions } from 'components/buttonsfeedback/buttons';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positiveFeedback, setPositiveFeedback] = useState(0);
  const [visible, setVisibel] = useState(false);
  const handleClick = feedbackType => {
    setVisibel(true);
    switch (feedbackType) {
      case 'good':
        setGood(prevState => prevState + 1);
          setTotal(prevState => prevState + 1);
          setPositiveFeedback(Math.round(((good + 1) / (total+ 1)) * 100));
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
          setTotal(prevState => prevState + 1);
          setPositiveFeedback(Math.round((good / (total + 1)) * 100));
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
          setTotal(prevState => prevState + 1);
          setPositiveFeedback(Math.round((good / (total + 1 )) * 100));
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <FeedbackOptions
        handleClick={handleClick}
        title={'Please leave feedback'}
      />
      {visible ? (
        <Statistics
          title={'Statistics'}
          onCountPositive={positiveFeedback}
          good={good}
          bad={bad}
          neutral={neutral}
          total={total}
        />
      ) : (
        <p>There is no feedback</p>
      )}
    </div>
  );
}
