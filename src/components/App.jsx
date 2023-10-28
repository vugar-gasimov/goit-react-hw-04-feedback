import React from 'react';

import { Statistics } from './Feedback-Widget/Statistics';
import { Notification } from './Feedback-Widget/Notification';
import { FeedbackOptions } from './Feedback-Widget/FeedbackOptions';
import { Section } from './Feedback-Widget/Section';
import { FeedbackContainer } from './AppStyled.Styled';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    showAppreciation: false,
  };

  handleLeaveFeedback = option => {
    this.setState(
      prevState => ({
        [option]: prevState[option] + 1,
        showAppreciation: true,
      }),
      () => {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        const positive = total > 0 ? Math.round((good / total) * 100) : 0;
        this.setState({ total, positive });
      }
    );
  };

  render() {
    const { total } = this.state;
    const options = ['good', 'neutral', 'bad'];

    return (
      <FeedbackContainer>
        <h1>Please leave feedback</h1>

        <Section title="Feedback Options">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <>
              <Notification
                message={'We appreciate your feedback 😊'}
                appreciation={this.state.showAppreciation}
              />
              <Statistics {...this.state} />
            </>
          ) : (
            <Notification message={'There is zero feedback 😔'} />
          )}
        </Section>
      </FeedbackContainer>
    );
  }
}
