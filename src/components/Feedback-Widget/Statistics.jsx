import React from 'react';
import {
  FeedbackContainer,
  StatisticsHeading,
  FeedbackText,
  FeedbackCount,
} from '../AppStyled.Styled';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const positive = total > 0 ? Math.round((good / total) * 100) : 0;

  return (
    <FeedbackContainer>
      <StatisticsHeading>Statistics</StatisticsHeading>
      <FeedbackText>
        Good: <FeedbackCount>{good}</FeedbackCount>
      </FeedbackText>
      <FeedbackText>
        Neutral: <FeedbackCount>{neutral}</FeedbackCount>
      </FeedbackText>
      <FeedbackText>
        Bad: <FeedbackCount>{bad}</FeedbackCount>
      </FeedbackText>
      <FeedbackText>
        Total: <FeedbackCount>{total}</FeedbackCount>
      </FeedbackText>
      <FeedbackText>
        Positive feedback:
        <FeedbackCount>{positive}%</FeedbackCount>
      </FeedbackText>
    </FeedbackContainer>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired, // Define the PropTypes for each prop
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
