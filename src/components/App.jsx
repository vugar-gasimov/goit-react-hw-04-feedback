import React, { useState } from 'react';

import { Statistics } from './Feedback-Widget/Statistics';
import { Notification } from './Feedback-Widget/Notification';
import { FeedbackOptions } from './Feedback-Widget/FeedbackOptions';
import { Section } from './Feedback-Widget/Section';
import { FeedbackContainer } from './AppStyled.Styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [showAppreciation, setShowAppreciation] = useState(false);
  const options = ['Good', 'Neutral', 'Bad'];

  const handleLeaveFeedback = option => {
    switch (option) {
      case 'Good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'Neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'Bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
    setTotal(prevState => prevState + 1);
    setShowAppreciation(true);
  };

  return (
    <FeedbackContainer>
      <h1>Please leave feedback</h1>

      <Section title="Feedback Options">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <>
            <Notification
              message={'We appreciate your feedback 😊'}
              appreciation={showAppreciation}
            />
            <Statistics good={good} neutral={neutral} bad={bad} />
          </>
        ) : (
          <Notification message={'There is zero feedback 😔'} />
        )}
      </Section>
    </FeedbackContainer>
  );
};
