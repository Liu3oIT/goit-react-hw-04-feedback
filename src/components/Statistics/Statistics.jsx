import React from 'react';
import { useState, useEffect } from 'react';
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
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        break;
    }
  };
  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [good, neutral, bad]);
  useEffect(() => {
    setPositiveFeedback(Math.round((good / total) * 100));
  }, [total, good]);
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
